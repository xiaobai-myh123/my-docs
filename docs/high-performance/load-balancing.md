---
title: 负载均衡详解（付费）
category: 高性能
icon: "fuzaijunheng"
head:
  - - meta
    - name: keywords
      content: 客户端负载均衡,服务负载均衡,Nginx,负载均衡算法,七层负载均衡,DNS解析
  - - meta
    - name: description
      content: 负载均衡指的是将用户请求分摊到不同的服务器上处理，以提高系统整体的并发处理能力。负载均衡可以简单分为服务端负载均衡和客户端负载均衡 这两种。服务端负载均衡涉及到的知识点更多，工作中遇到的也比较多，因为，我会花更多时间来介绍。
---

**负载均衡** 相关的面试题为我的[知识星球](https://www.yuque.com/docs/share/8a30ffb5-83f3-40f9-baf9-38de68b906dc)（点击链接即可查看详细介绍以及加入方法）专属内容，已经整理到了[《Java 面试指北》](https://www.yuque.com/docs/share/f37fc804-bfe6-4b0d-b373-9c462188fec7)（点击链接即可查看详细介绍以及获取方法）中。

![](https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javamianshizhibei/sql-optimization.png)

[《Java 面试指北》](https://www.yuque.com/docs/share/f37fc804-bfe6-4b0d-b373-9c462188fec7) 的部分内容展示如下，你可以将其看作是 [JavaGuide](https://javaguide.cn/#/) 的补充完善，两者可以配合使用。

![](https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/xingqiu/image-20220304102536445.png)

[《Java 面试指北》](https://www.yuque.com/docs/share/f37fc804-bfe6-4b0d-b373-9c462188fec7)只是星球内部众多资料中的一个，星球还有很多其他优质资料比如[专属专栏](https://javaguide.cn/zhuanlan/)、Java 编程视频、PDF 资料。

![](https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/xingqiu/image-20220211231206733.png)

最近几年，市面上有越来越多的“技术大佬”开始办培训班/训练营，动辄成千上万的学费，却并没有什么干货，单纯的就是割韭菜。

为了帮助更多同学准备 Java 面试以及学习 Java ，我创建了一个纯粹的[知识星球](https://www.yuque.com/docs/share/8a30ffb5-83f3-40f9-baf9-38de68b906dc)。虽然收费只有培训班/训练营的百分之一，但是[知识星球](https://www.yuque.com/docs/share/8a30ffb5-83f3-40f9-baf9-38de68b906dc)里的内容质量更高，提供的服务也更全面。

欢迎准备 Java 面试以及学习 Java 的同学加入我的[知识星球](https://www.yuque.com/docs/share/8a30ffb5-83f3-40f9-baf9-38de68b906dc)，干货非常多，学习氛围非常好！收费虽然是白菜价，但星球里的内容或许比你参加上万的培训班质量还要高。

下面是星球提供的部分服务（点击下方图片即可获取知识星球的详细介绍）：

<div align="center">
  <a href="https://javaguide.cn/about-the-author/zhishixingqiu-two-years.html">
    <img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/xingqiu/xingqiufuwu.png" style="margin: 0 auto; " />
  </a>
</div>

我有自己的原则，不割韭菜，用心做内容，真心希望帮助到你！

如果你感兴趣的话，不妨花 3 分钟左右看看星球的详细介绍： [JavaGuide 知识星球详细介绍](https://www.yuque.com/docs/share/8a30ffb5-83f3-40f9-baf9-38de68b906dc)（文末有优惠券）。

<div align="center">
  <a href="https://javaguide.cn/about-the-author/zhishixingqiu-two-years.html">
    <img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/xingqiu/xingqiuyouhuijuanheyi.png" style="margin: 0 auto; " />
  </a>
</div>
