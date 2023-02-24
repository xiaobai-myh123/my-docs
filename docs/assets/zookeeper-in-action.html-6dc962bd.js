const e=JSON.parse('{"key":"v-2fef832e","path":"/distributed-system/distributed-process-coordination/zookeeper/zookeeper-in-action.html","title":"ZooKeeper 实战","lang":"zh-CN","frontmatter":{"description":"ZooKeeper 实战 1. 前言 这篇文章简单给演示一下 ZooKeeper 常见命令的使用以及 ZooKeeper Java客户端 Curator 的基本使用。介绍到的内容都是最基本的操作，能满足日常工作的基本需要。 如果文章有任何需要改善和完善的地方，欢迎在评论区指出，共同进步！ 2. ZooKeeper 安装和使用 2.1. 使用Docker 安装 zookeeper a.使用 Docker 下载 ZooKeeper docker pull zookeeper:3.5.8","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/distributed-system/distributed-process-coordination/zookeeper/zookeeper-in-action.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"ZooKeeper 实战"}],["meta",{"property":"og:description","content":"ZooKeeper 实战 1. 前言 这篇文章简单给演示一下 ZooKeeper 常见命令的使用以及 ZooKeeper Java客户端 Curator 的基本使用。介绍到的内容都是最基本的操作，能满足日常工作的基本需要。 如果文章有任何需要改善和完善的地方，欢迎在评论区指出，共同进步！ 2. ZooKeeper 安装和使用 2.1. 使用Docker 安装 zookeeper a.使用 Docker 下载 ZooKeeper docker pull zookeeper:3.5.8"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://javaguide.cn/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-23T10:39:58.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"ZooKeeper 实战"}],["meta",{"property":"article:modified_time","content":"2023-02-23T10:39:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ZooKeeper 实战\\",\\"image\\":[\\"https://javaguide.cn/\\"],\\"dateModified\\":\\"2023-02-23T10:39:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 前言","slug":"_1-前言","link":"#_1-前言","children":[]},{"level":2,"title":"2. ZooKeeper 安装和使用","slug":"_2-zookeeper-安装和使用","link":"#_2-zookeeper-安装和使用","children":[{"level":3,"title":"2.1. 使用Docker 安装 zookeeper","slug":"_2-1-使用docker-安装-zookeeper","link":"#_2-1-使用docker-安装-zookeeper","children":[]},{"level":3,"title":"2.2. 连接 ZooKeeper 服务","slug":"_2-2-连接-zookeeper-服务","link":"#_2-2-连接-zookeeper-服务","children":[]},{"level":3,"title":"2.3. 常用命令演示","slug":"_2-3-常用命令演示","link":"#_2-3-常用命令演示","children":[]}]},{"level":2,"title":"3. ZooKeeper Java客户端 Curator简单使用","slug":"_3-zookeeper-java客户端-curator简单使用","link":"#_3-zookeeper-java客户端-curator简单使用","children":[{"level":3,"title":"3.1. 连接 ZooKeeper 客户端","slug":"_3-1-连接-zookeeper-客户端","link":"#_3-1-连接-zookeeper-客户端","children":[]},{"level":3,"title":"3.2. 数据节点的增删改查","slug":"_3-2-数据节点的增删改查","link":"#_3-2-数据节点的增删改查","children":[]}]}],"git":{"createdTime":1677148798000,"updatedTime":1677148798000,"contributors":[{"name":"xiaobai-myh123","email":"xiaobaix25@gamil.com","commits":1}]},"readingTime":{"minutes":5.83,"words":1749},"filePathRelative":"distributed-system/distributed-process-coordination/zookeeper/zookeeper-in-action.md","localizedDate":"2023年2月23日","excerpt":"<h1> ZooKeeper 实战</h1>\\n<h2> 1. 前言</h2>\\n<p>这篇文章简单给演示一下 ZooKeeper 常见命令的使用以及 ZooKeeper Java客户端 Curator 的基本使用。介绍到的内容都是最基本的操作，能满足日常工作的基本需要。</p>\\n<p>如果文章有任何需要改善和完善的地方，欢迎在评论区指出，共同进步！</p>\\n<h2> 2. ZooKeeper 安装和使用</h2>\\n<h3> 2.1. 使用Docker 安装 zookeeper</h3>\\n<p><strong>a.使用 Docker 下载 ZooKeeper</strong></p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">docker</span> pull zookeeper:3.5.8\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{e as data};
