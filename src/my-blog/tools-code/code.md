---
title:  工具代码
category: 软件安装
author: xiaobai
tag:
  - tools
date: 2023-03-29  
isOriginal: 转载
---
::: tip  工具代码
👉 日常博客文章，编写工具代码 
    有些代码总数忘记怎么写，然后用的比较多，所以就记录下来。
    
👉 作者：小白
:::
>
> 原文：https://blog.csdn.net/zhouqi1427/article/details/126061684
>


### 1. mybatis插件使用

```java
import com.baomidou.mybatisplus.core.toolkit.PluginUtils;
import com.baomidou.mybatisplus.extension.handlers.AbstractSqlParserHandler;
import org.apache.ibatis.executor.statement.StatementHandler;
import org.apache.ibatis.mapping.BoundSql;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.mapping.SqlCommandType;
import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.plugin.Intercepts;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Signature;
import org.apache.ibatis.reflection.MetaObject;
import org.apache.ibatis.reflection.SystemMetaObject;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.util.Properties;

@Intercepts({@Signature(
        type = StatementHandler.class,
        method = "prepare",
        args = {Connection.class, Integer.class}
)})
@Component
public class MyBatisPlusInterceptor extends AbstractSqlParserHandler implements Interceptor {

    @Override
    public Object intercept(Invocation invocation) throws Throwable {                        
        StatementHandler statementHandler = PluginUtils.realTarget(invocation.getTarget());
        MetaObject metaObject = SystemMetaObject.forObject(statementHandler);
        this.sqlParser(metaObject);
        MappedStatement mappedStatement = (MappedStatement) metaObject.getValue("delegate.mappedStatement");

        if(!SqlCommandType.SELECT.equals(mappedStatement.getSqlCommandType()) && !SqlCommandType.DELETE.equals(mappedStatement.getSqlCommandType())) {
            return invocation.proceed();
        }

        BoundSql boundSql = (BoundSql) metaObject.getValue("delegate.boundSql");
        // 执行的SQL语句
        String sql = boundSql.getSql();

        // 查询控制
        if(SqlCommandType.SELECT.equals(mappedStatement.getSqlCommandType())) {
            if(!sql.toUpperCase().contains("WHERE")) {
                throw new Exception("缺少查询条件");
            }
        }

        // 删除控制
        if(SqlCommandType.DELETE.equals(mappedStatement.getSqlCommandType())) {
            if(!sql.toUpperCase().contains("WHERE")) {
                throw new Exception("缺少删除条件");
            }
        }

        // SQL语句的参数
        Object parameterObject = boundSql.getParameterObject();

        // 重新设置SQL
//        metaObject.setValue("delegate.boundSql.sql", sql);

        return invocation.proceed();
    }

    /**
     * 生成拦截对象代理
     * @param target
     * @return
     */
    @Override
    public Object plugin(Object target) {
        return Interceptor.super.plugin(target);
    }

    @Override
    public void setProperties(Properties properties) {
        Interceptor.super.setProperties(properties);
    }
}
```

### 2.请求转发参数传递

```java
import cn.hutool.core.map.MapUtil;
import cn.hutool.core.util.StrUtil;
import com.alibaba.fastjson.JSON;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;
import org.yaml.snakeyaml.util.UriEncoder;

import javax.annotation.Resource;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

@Controller
@Slf4j
public class Controller {

    /**
     * 解析请求体中的请求路径
     *
     * @param request  请求体
     * @param property 转发服务器地址配置属性
     * @return 转发地址
     */
    private String getUrl(HttpServletRequest request, String property) {
        return getUrl(request, property, stringBuilder -> {
        });
    }

    /**
     * 解析请求体中的请求路径
     *
     * @param request  请求体
     * @param url      转发服务器地址配置属性
     * @param consumer 自定义拼接函数
     * @return 转发地址
     */
    private String getUrl(HttpServletRequest request, String url, Consumer<StringBuilder> consumer) {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(url);
        consumer.accept(stringBuilder);
        stringBuilder.append(UriEncoder.encode(request.getServletPath()));

        String sysToken = ContextUtil.getTokenFromRequest(request);

        Map<String, String> params = new HashMap<>();
        Map<String, String[]> pmap = request.getParameterMap();

        for (Map.Entry<String, String[]> entry : pmap.entrySet()) {
            if (entry.getValue().length > 0) {
                params.put(entry.getKey(), UriEncoder.encode(entry.getValue()[0]));
            }
        }

        if (!params.containsKey("token") || StrUtil.isBlank(params.get("token"))) {
            params.put("token", sysToken);
        }

        if (params.size() > 0) {
            String queryString = MapUtil.joinIgnoreNull(params, "&", "=");
            stringBuilder.append("?").append(queryString);
        }
        return stringBuilder.toString();
    }

    /**
     * 传入地址后就会进行post方式的重定向.
     *
     * @param url url
     * @throws IOException io异常
     */

    public void sendByPost(String url, HttpServletResponse response, Object parameter) throws IOException {

        String data = template.postForObject(url, parameter, String.class);

        response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
        PrintWriter out = response.getWriter();
        out.println(data);
        out.flush();
        out.close();
    }

    /**
     * 跨模块访问重定向跳转
     *
     * @param request
     * @param response
     * @param path
     * @throws IOException
     */
    private void redirect(HttpServletRequest request, HttpServletResponse response, String path) throws IOException {
        if (("http://" + request.getRemoteHost() + ":" + request.getLocalPort()).equals(path)) {
            return;
        }
        String url = getUrl(request, path);
        if ("get".equals(request.getMethod().toLowerCase())) {
            // get请求直接转发
            response.sendRedirect(url);
        } else {
            // post请求获取到请求参数，重新向目标路径发起请求，得到请求后将请求结果写入response返回给前端

            // 读取Body中的参数
            ServletInputStream in = null;
            Object parameter = null;
            try {
                in = request.getInputStream();
                InputStreamReader isr = new InputStreamReader(in, "UTF-8");
                BufferedReader br = new BufferedReader(isr);
                String data = "";
                String newLine = "";
                while ((newLine = br.readLine()) != null) {
                    data += newLine;
                }
                parameter = JSON.parse(data);
            } catch (Exception e) {
                log.error("请求转发地址：[" + request.getMethod() + "] " + url);
                log.error("请求转发异常，参数序列化失败。", e);
            } finally {
                if (null != in) {
                    in.close();
                }
            }
            // 转发请求
            try {
                sendByPost(url, response, parameter);
            } catch (IOException e) {
                log.error("请求转发地址：" + url, e);
                throw e;
            }
        }
    }

    public void test(HttpServletRequest request, HttpServletResponse response, @PathVariable String service) throws IOException {
        redirect(request, response, url);
    }
}
```

