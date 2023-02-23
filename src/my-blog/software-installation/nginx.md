---
title:  Centos7.9安装Nginx
category: 软件安装
author: xiaobai
tag:
  - nginx
date: 2023-02-07  
isOriginal: 转载
---
::: tip  安装基础软件
👉 日常博客文章，编写关于dokcer相关内容，csdn copy来的

👉 作者：小白
:::

>
> 原文：https://blog.csdn.net/zhouqi1427/article/details/126061684
>
## 一、安装Nginx运行所需要的插件。

1、 安装gcc。gcc是Linux下的编译器，它可以编译C、C++、Ada、Object C和Java等语言。

```shell script
yum -y install gcc
```

2、安装pcre。pcre是一个perl库，Nginx的HTTP模块使用pcre来解析正则表达式。

```shell script
yum install -y pcre pcre-devel
```

3、安装zlib。zlib是一个文件压缩和解压缩的库，Nginx使用zlib对HTTP数据包进行gzip压缩和解压。
```shell script
yum install -y zlib zlib-devel
```

## 二、 下载Nginx安装包。

```shell script
wget http://nginx.org/download/nginx-1.17.10.tar.gz
```
## 三、解压Nginx安装包。

```shell script
tar -zxvf nginx-1.17.10.tar.gz
```
## 四、编译安装Nginx。

```shell script
cd nginx-1.17.10
./configure
make && make install
```
## 五、启动Nginx。

```shell script
cd /usr/local/nginx/
sbin/nginx
```

## 六、测试Nginx启动。在浏览器地址栏输入ECS服务器的弹性公网IP，例如123.123.123.123，出现如下界面表示安装启动成功。
![](https://img-blog.csdnimg.cn/a6ec0dc478044768965271857beca765.png)



