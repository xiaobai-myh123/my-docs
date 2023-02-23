const e=JSON.parse('{"key":"v-f1592240","path":"/distributed-system/distributed-process-coordination/zookeeper/zookeeper-intro.html","title":"ZooKeeper 相关概念总结(入门)","lang":"zh-CN","frontmatter":{"description":"ZooKeeper 相关概念总结(入门) 1. 前言 相信大家对 ZooKeeper 应该不算陌生。但是你真的了解 ZooKeeper 到底有啥用不？如果别人/面试官让你给他讲讲对于 ZooKeeper 的认识，你能回答到什么地步呢？ 拿我自己来说吧！我本人曾经使用 Dubbo 来做分布式项目的时候，使用了 ZooKeeper 作为注册中心。为了保证分布式系统能够同步访问某个资源，我还使用 ZooKeeper 做过分布式锁。另外，我在学习 Kafka 的时候，知道 Kafka 很多功能的实现依赖了 ZooKeeper。 前几天，总结项目经验的时候，我突然问自己 ZooKeeper 到底是个什么东西？想了半天，脑海中只是简单的能浮现出几句话：","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/distributed-system/distributed-process-coordination/zookeeper/zookeeper-intro.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"ZooKeeper 相关概念总结(入门)"}],["meta",{"property":"og:description","content":"ZooKeeper 相关概念总结(入门) 1. 前言 相信大家对 ZooKeeper 应该不算陌生。但是你真的了解 ZooKeeper 到底有啥用不？如果别人/面试官让你给他讲讲对于 ZooKeeper 的认识，你能回答到什么地步呢？ 拿我自己来说吧！我本人曾经使用 Dubbo 来做分布式项目的时候，使用了 ZooKeeper 作为注册中心。为了保证分布式系统能够同步访问某个资源，我还使用 ZooKeeper 做过分布式锁。另外，我在学习 Kafka 的时候，知道 Kafka 很多功能的实现依赖了 ZooKeeper。 前几天，总结项目经验的时候，我突然问自己 ZooKeeper 到底是个什么东西？想了半天，脑海中只是简单的能浮现出几句话："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://javaguide.cn/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"ZooKeeper 相关概念总结(入门)"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ZooKeeper 相关概念总结(入门)\\",\\"image\\":[\\"https://javaguide.cn/\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 前言","slug":"_1-前言","link":"#_1-前言","children":[]},{"level":2,"title":"2. ZooKeeper 介绍","slug":"_2-zookeeper-介绍","link":"#_2-zookeeper-介绍","children":[{"level":3,"title":"2.1. ZooKeeper 由来","slug":"_2-1-zookeeper-由来","link":"#_2-1-zookeeper-由来","children":[]},{"level":3,"title":"2.2. ZooKeeper 概览","slug":"_2-2-zookeeper-概览","link":"#_2-2-zookeeper-概览","children":[]},{"level":3,"title":"2.3. ZooKeeper 特点","slug":"_2-3-zookeeper-特点","link":"#_2-3-zookeeper-特点","children":[]},{"level":3,"title":"2.4. ZooKeeper 典型应用场景","slug":"_2-4-zookeeper-典型应用场景","link":"#_2-4-zookeeper-典型应用场景","children":[]},{"level":3,"title":"2.5. 有哪些著名的开源项目用到了 ZooKeeper?","slug":"_2-5-有哪些著名的开源项目用到了-zookeeper","link":"#_2-5-有哪些著名的开源项目用到了-zookeeper","children":[]}]},{"level":2,"title":"3. ZooKeeper 重要概念解读","slug":"_3-zookeeper-重要概念解读","link":"#_3-zookeeper-重要概念解读","children":[{"level":3,"title":"3.1. Data model（数据模型）","slug":"_3-1-data-model-数据模型","link":"#_3-1-data-model-数据模型","children":[]},{"level":3,"title":"3.2. znode（数据节点）","slug":"_3-2-znode-数据节点","link":"#_3-2-znode-数据节点","children":[]},{"level":3,"title":"3.3. 版本（version）","slug":"_3-3-版本-version","link":"#_3-3-版本-version","children":[]},{"level":3,"title":"3.4. ACL（权限控制）","slug":"_3-4-acl-权限控制","link":"#_3-4-acl-权限控制","children":[]},{"level":3,"title":"3.5. Watcher（事件监听器）","slug":"_3-5-watcher-事件监听器","link":"#_3-5-watcher-事件监听器","children":[]},{"level":3,"title":"3.6. 会话（Session）","slug":"_3-6-会话-session","link":"#_3-6-会话-session","children":[]}]},{"level":2,"title":"4. ZooKeeper 集群","slug":"_4-zookeeper-集群","link":"#_4-zookeeper-集群","children":[{"level":3,"title":"4.1. ZooKeeper 集群角色","slug":"_4-1-zookeeper-集群角色","link":"#_4-1-zookeeper-集群角色","children":[]},{"level":3,"title":"4.2. ZooKeeper 集群中的服务器状态","slug":"_4-2-zookeeper-集群中的服务器状态","link":"#_4-2-zookeeper-集群中的服务器状态","children":[]},{"level":3,"title":"4.3. ZooKeeper 集群为啥最好奇数台？","slug":"_4-3-zookeeper-集群为啥最好奇数台","link":"#_4-3-zookeeper-集群为啥最好奇数台","children":[]},{"level":3,"title":"4.4. ZooKeeper 选举的过半机制防止脑裂","slug":"_4-4-zookeeper-选举的过半机制防止脑裂","link":"#_4-4-zookeeper-选举的过半机制防止脑裂","children":[]}]},{"level":2,"title":"5. ZAB 协议和 Paxos 算法","slug":"_5-zab-协议和-paxos-算法","link":"#_5-zab-协议和-paxos-算法","children":[{"level":3,"title":"5.1. ZAB 协议介绍","slug":"_5-1-zab-协议介绍","link":"#_5-1-zab-协议介绍","children":[]},{"level":3,"title":"5.2. ZAB 协议两种基本的模式：崩溃恢复和消息广播","slug":"_5-2-zab-协议两种基本的模式-崩溃恢复和消息广播","link":"#_5-2-zab-协议两种基本的模式-崩溃恢复和消息广播","children":[]}]},{"level":2,"title":"6. 总结","slug":"_6-总结","link":"#_6-总结","children":[]},{"level":2,"title":"7. 参考","slug":"_7-参考","link":"#_7-参考","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":19.72,"words":5917},"filePathRelative":"distributed-system/distributed-process-coordination/zookeeper/zookeeper-intro.md","excerpt":"<h1> ZooKeeper 相关概念总结(入门)</h1>\\n<h2> 1. 前言</h2>\\n<p>相信大家对 ZooKeeper 应该不算陌生。但是你真的了解 ZooKeeper 到底有啥用不？如果别人/面试官让你给他讲讲对于 ZooKeeper 的认识，你能回答到什么地步呢？</p>\\n<p>拿我自己来说吧！我本人曾经使用 Dubbo 来做分布式项目的时候，使用了 ZooKeeper 作为注册中心。为了保证分布式系统能够同步访问某个资源，我还使用 ZooKeeper 做过分布式锁。另外，我在学习 Kafka 的时候，知道 Kafka 很多功能的实现依赖了 ZooKeeper。</p>\\n<p>前几天，总结项目经验的时候，我突然问自己 ZooKeeper 到底是个什么东西？想了半天，脑海中只是简单的能浮现出几句话：</p>","copyright":{},"autoDesc":true}');export{e as data};
