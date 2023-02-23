const t=JSON.parse('{"key":"v-b1da5660","path":"/java/jvm/classloader.html","title":"类加载器详解","lang":"zh-CN","frontmatter":{"category":["Java"],"tag":["JVM"],"description":"类加载器详解 回顾一下类加载过程 类加载过程：加载-&gt;连接-&gt;初始化。连接过程又可分为三步：验证-&gt;准备-&gt;解析。 一个非数组类的加载阶段（加载阶段获取类的二进制字节流的动作）是可控性最强的阶段，这一步我们可以去自定义类加载器去控制字节流的获取方式（重写一个类加载器的 loadClass() 方法）。数组类型不通过类加载器创建，它由 Java 虚拟机直接创建。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/jvm/classloader.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"类加载器详解"}],["meta",{"property":"og:description","content":"类加载器详解 回顾一下类加载过程 类加载过程：加载-&gt;连接-&gt;初始化。连接过程又可分为三步：验证-&gt;准备-&gt;解析。 一个非数组类的加载阶段（加载阶段获取类的二进制字节流的动作）是可控性最强的阶段，这一步我们可以去自定义类加载器去控制字节流的获取方式（重写一个类加载器的 loadClass() 方法）。数组类型不通过类加载器创建，它由 Java 虚拟机直接创建。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"JVM"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类加载器详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"回顾一下类加载过程","slug":"回顾一下类加载过程","link":"#回顾一下类加载过程","children":[]},{"level":2,"title":"类加载器总结","slug":"类加载器总结","link":"#类加载器总结","children":[]},{"level":2,"title":"双亲委派模型","slug":"双亲委派模型","link":"#双亲委派模型","children":[{"level":3,"title":"双亲委派模型介绍","slug":"双亲委派模型介绍","link":"#双亲委派模型介绍","children":[]},{"level":3,"title":"双亲委派模型实现源码分析","slug":"双亲委派模型实现源码分析","link":"#双亲委派模型实现源码分析","children":[]},{"level":3,"title":"双亲委派模型的好处","slug":"双亲委派模型的好处","link":"#双亲委派模型的好处","children":[]},{"level":3,"title":"如果我们不想用双亲委派模型怎么办？","slug":"如果我们不想用双亲委派模型怎么办","link":"#如果我们不想用双亲委派模型怎么办","children":[]}]},{"level":2,"title":"自定义类加载器","slug":"自定义类加载器","link":"#自定义类加载器","children":[]},{"level":2,"title":"推荐阅读","slug":"推荐阅读","link":"#推荐阅读","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.75,"words":1424},"filePathRelative":"java/jvm/classloader.md","excerpt":"<h1> 类加载器详解</h1>\\n<h2> 回顾一下类加载过程</h2>\\n<p>类加载过程：<strong>加载-&gt;连接-&gt;初始化</strong>。连接过程又可分为三步：<strong>验证-&gt;准备-&gt;解析</strong>。</p>\\n<p><img src=\\"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/类加载过程.png\\" alt=\\"类加载过程\\"></p>\\n<p>一个非数组类的加载阶段（加载阶段获取类的二进制字节流的动作）是可控性最强的阶段，这一步我们可以去自定义类加载器去控制字节流的获取方式（重写一个类加载器的 <code>loadClass()</code> 方法）。数组类型不通过类加载器创建，它由 Java 虚拟机直接创建。</p>","copyright":{},"autoDesc":true}');export{t as data};
