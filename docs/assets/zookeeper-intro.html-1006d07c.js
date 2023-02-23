import{_ as s,W as t,X as p,Y as e,Z as r,$ as a,a1 as n,F as d}from"./framework-b5ed7090.js";const i="/assets/znode-structure-19119dbd.png",l="/assets/watche机制-f523bd89.png",h="/assets/zookeeper集群-6fdcc61e.png",c="/assets/zookeeper集群中的角色-ffff8ef5.png",g={},Z=n('<h1 id="zookeeper-相关概念总结-入门" tabindex="-1"><a class="header-anchor" href="#zookeeper-相关概念总结-入门" aria-hidden="true">#</a> ZooKeeper 相关概念总结(入门)</h1><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1. 前言</h2><p>相信大家对 ZooKeeper 应该不算陌生。但是你真的了解 ZooKeeper 到底有啥用不？如果别人/面试官让你给他讲讲对于 ZooKeeper 的认识，你能回答到什么地步呢？</p><p>拿我自己来说吧！我本人曾经使用 Dubbo 来做分布式项目的时候，使用了 ZooKeeper 作为注册中心。为了保证分布式系统能够同步访问某个资源，我还使用 ZooKeeper 做过分布式锁。另外，我在学习 Kafka 的时候，知道 Kafka 很多功能的实现依赖了 ZooKeeper。</p><p>前几天，总结项目经验的时候，我突然问自己 ZooKeeper 到底是个什么东西？想了半天，脑海中只是简单的能浮现出几句话：</p><ol><li>ZooKeeper 可以被用作注册中心、分布式锁；</li><li>ZooKeeper 是 Hadoop 生态系统的一员；</li><li>构建 ZooKeeper 集群的时候，使用的服务器最好是奇数台。</li></ol><p>由此可见，我对于 ZooKeeper 的理解仅仅是停留在了表面。</p><p>所以，通过本文，希望带大家稍微详细的了解一下 ZooKeeper 。如果没有学过 ZooKeeper ，那么本文将会是你进入 ZooKeeper 大门的垫脚砖。如果你已经接触过 ZooKeeper ，那么本文将带你回顾一下 ZooKeeper 的一些基础概念。</p><p>另外，本文不光会涉及到 ZooKeeper 的一些概念，后面的文章会介绍到 ZooKeeper 常见命令的使用以及使用 Apache Curator 作为 ZooKeeper 的客户端。</p><p><em>如果文章有任何需要改善和完善的地方，欢迎在评论区指出，共同进步！</em></p><h2 id="_2-zookeeper-介绍" tabindex="-1"><a class="header-anchor" href="#_2-zookeeper-介绍" aria-hidden="true">#</a> 2. ZooKeeper 介绍</h2><h3 id="_2-1-zookeeper-由来" tabindex="-1"><a class="header-anchor" href="#_2-1-zookeeper-由来" aria-hidden="true">#</a> 2.1. ZooKeeper 由来</h3><p>正式介绍 ZooKeeper 之前，我们先来看看 ZooKeeper 的由来，还挺有意思的。</p><p>下面这段内容摘自《从 Paxos 到 ZooKeeper 》第四章第一节，推荐大家阅读一下：</p><blockquote><p>ZooKeeper 最早起源于雅虎研究院的一个研究小组。在当时，研究人员发现，在雅虎内部很多大型系统基本都需要依赖一个类似的系统来进行分布式协调，但是这些系统往往都存在分布式单点问题。所以，雅虎的开发人员就试图开发一个通用的无单点问题的分布式协调框架，以便让开发人员将精力集中在处理业务逻辑上。</p><p>关于“ZooKeeper”这个项目的名字，其实也有一段趣闻。在立项初期，考虑到之前内部很多项目都是使用动物的名字来命名的（例如著名的 Pig 项目),雅虎的工程师希望给这个项目也取一个动物的名字。时任研究院的首席科学家 RaghuRamakrishnan 开玩笑地说：“在这样下去，我们这儿就变成动物园了！”此话一出，大家纷纷表示就叫动物园管理员吧一一一因为各个以动物命名的分布式组件放在一起，雅虎的整个分布式系统看上去就像一个大型的动物园了，而 ZooKeeper 正好要用来进行分布式环境的协调一一于是，ZooKeeper 的名字也就由此诞生了。</p></blockquote><h3 id="_2-2-zookeeper-概览" tabindex="-1"><a class="header-anchor" href="#_2-2-zookeeper-概览" aria-hidden="true">#</a> 2.2. ZooKeeper 概览</h3><p>ZooKeeper 是一个开源的<strong>分布式协调服务</strong>，它的设计目标是将那些复杂且容易出错的分布式一致性服务封装起来，构成一个高效可靠的原语集，并以一系列简单易用的接口提供给用户使用。</p><blockquote><p><strong>原语：</strong> 操作系统或计算机网络用语范畴。是由若干条指令组成的，用于完成一定功能的一个过程。具有不可分割性·即原语的执行必须是连续的，在执行过程中不允许被中断。</p></blockquote><p><strong>ZooKeeper 为我们提供了高可用、高性能、稳定的分布式数据一致性解决方案，通常被用于实现诸如数据发布/订阅、负载均衡、命名服务、分布式协调/通知、集群管理、Master 选举、分布式锁和分布式队列等功能。</strong></p><p>另外，<strong>ZooKeeper 将数据保存在内存中，性能是非常棒的。 在“读”多于“写”的应用程序中尤其地高性能，因为“写”会导致所有的服务器间同步状态。（“读”多于“写”是协调服务的典型场景）。</strong></p><h3 id="_2-3-zookeeper-特点" tabindex="-1"><a class="header-anchor" href="#_2-3-zookeeper-特点" aria-hidden="true">#</a> 2.3. ZooKeeper 特点</h3><ul><li><strong>顺序一致性：</strong> 从同一客户端发起的事务请求，最终将会严格地按照顺序被应用到 ZooKeeper 中去。</li><li><strong>原子性：</strong> 所有事务请求的处理结果在整个集群中所有机器上的应用情况是一致的，也就是说，要么整个集群中所有的机器都成功应用了某一个事务，要么都没有应用。</li><li><strong>单一系统映像 ：</strong> 无论客户端连到哪一个 ZooKeeper 服务器上，其看到的服务端数据模型都是一致的。</li><li><strong>可靠性：</strong> 一旦一次更改请求被应用，更改的结果就会被持久化，直到被下一次更改覆盖。</li></ul><h3 id="_2-4-zookeeper-典型应用场景" tabindex="-1"><a class="header-anchor" href="#_2-4-zookeeper-典型应用场景" aria-hidden="true">#</a> 2.4. ZooKeeper 典型应用场景</h3><p>ZooKeeper 概览中，我们介绍到使用其通常被用于实现诸如数据发布/订阅、负载均衡、命名服务、分布式协调/通知、集群管理、Master 选举、分布式锁和分布式队列等功能。</p><p>下面选 3 个典型的应用场景来专门说说：</p><ol><li><strong>分布式锁</strong> ： 通过创建唯一节点获得分布式锁，当获得锁的一方执行完相关代码或者是挂掉之后就释放锁。</li><li><strong>命名服务</strong> ：可以通过 ZooKeeper 的顺序节点生成全局唯一 ID</li><li><strong>数据发布/订阅</strong> ：通过 <strong>Watcher 机制</strong> 可以很方便地实现数据发布/订阅。当你将数据发布到 ZooKeeper 被监听的节点上，其他机器可通过监听 ZooKeeper 上节点的变化来实现配置的动态更新。</li></ol><p>实际上，这些功能的实现基本都得益于 ZooKeeper 可以保存数据的功能，但是 ZooKeeper 不适合保存大量数据，这一点需要注意。</p><h3 id="_2-5-有哪些著名的开源项目用到了-zookeeper" tabindex="-1"><a class="header-anchor" href="#_2-5-有哪些著名的开源项目用到了-zookeeper" aria-hidden="true">#</a> 2.5. 有哪些著名的开源项目用到了 ZooKeeper?</h3><ol><li><strong>Kafka</strong> : ZooKeeper 主要为 Kafka 提供 Broker 和 Topic 的注册以及多个 Partition 的负载均衡等功能。</li><li><strong>Hbase</strong> : ZooKeeper 为 Hbase 提供确保整个集群只有一个 Master 以及保存和提供 regionserver 状态信息（是否在线）等功能。</li><li><strong>Hadoop</strong> : ZooKeeper 为 Namenode 提供高可用支持。</li></ol><h2 id="_3-zookeeper-重要概念解读" tabindex="-1"><a class="header-anchor" href="#_3-zookeeper-重要概念解读" aria-hidden="true">#</a> 3. ZooKeeper 重要概念解读</h2><p><em>破音：拿出小本本，下面的内容非常重要哦！</em></p><h3 id="_3-1-data-model-数据模型" tabindex="-1"><a class="header-anchor" href="#_3-1-data-model-数据模型" aria-hidden="true">#</a> 3.1. Data model（数据模型）</h3><p>ZooKeeper 数据模型采用层次化的多叉树形结构，每个节点上都可以存储数据，这些数据可以是数字、字符串或者是二级制序列。并且。每个节点还可以拥有 N 个子节点，最上层是根节点以“/”来代表。每个数据节点在 ZooKeeper 中被称为 <strong>znode</strong>，它是 ZooKeeper 中数据的最小单元。并且，每个 znode 都一个唯一的路径标识。</p><p>强调一句：<strong>ZooKeeper 主要是用来协调服务的，而不是用来存储业务数据的，所以不要放比较大的数据在 znode 上，ZooKeeper 给出的上限是每个结点的数据大小最大是 1M。</strong></p><p>从下图可以更直观地看出：ZooKeeper 节点路径标识方式和 Unix 文件系统路径非常相似，都是由一系列使用斜杠&quot;/&quot;进行分割的路径表示，开发人员可以向这个节点中写入数据，也可以在节点下面创建子节点。这些操作我们后面都会介绍到。</p><p><img src="'+i+`" alt="ZooKeeper 数据模型"></p><h3 id="_3-2-znode-数据节点" tabindex="-1"><a class="header-anchor" href="#_3-2-znode-数据节点" aria-hidden="true">#</a> 3.2. znode（数据节点）</h3><p>介绍了 ZooKeeper 树形数据模型之后，我们知道每个数据节点在 ZooKeeper 中被称为 <strong>znode</strong>，它是 ZooKeeper 中数据的最小单元。你要存放的数据就放在上面，是你使用 ZooKeeper 过程中经常需要接触到的一个概念。</p><h4 id="_3-2-1-znode-4-种类型" tabindex="-1"><a class="header-anchor" href="#_3-2-1-znode-4-种类型" aria-hidden="true">#</a> 3.2.1. znode 4 种类型</h4><p>我们通常是将 znode 分为 4 大类：</p><ul><li><strong>持久（PERSISTENT）节点</strong> ：一旦创建就一直存在即使 ZooKeeper 集群宕机，直到将其删除。</li><li><strong>临时（EPHEMERAL）节点</strong> ：临时节点的生命周期是与 <strong>客户端会话（session）</strong> 绑定的，<strong>会话消失则节点消失</strong> 。并且，<strong>临时节点只能做叶子节点</strong> ，不能创建子节点。</li><li><strong>持久顺序（PERSISTENT_SEQUENTIAL）节点</strong> ：除了具有持久（PERSISTENT）节点的特性之外， 子节点的名称还具有顺序性。比如 <code>/node1/app0000000001</code> 、<code>/node1/app0000000002</code> 。</li><li><strong>临时顺序（EPHEMERAL_SEQUENTIAL）节点</strong> ：除了具备临时（EPHEMERAL）节点的特性之外，子节点的名称还具有顺序性。</li></ul><h4 id="_3-2-2-znode-数据结构" tabindex="-1"><a class="header-anchor" href="#_3-2-2-znode-数据结构" aria-hidden="true">#</a> 3.2.2. znode 数据结构</h4><p>每个 znode 由 2 部分组成:</p><ul><li><strong>stat</strong> ：状态信息</li><li><strong>data</strong> ： 节点存放的数据的具体内容</li></ul><p>如下所示，我通过 get 命令来获取 根目录下的 dubbo 节点的内容。（get 命令在下面会介绍到）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: <span class="token number">127.0</span>.0.1:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">6</span><span class="token punctuation">]</span> get /dubbo
<span class="token comment"># 该数据节点关联的数据内容为空</span>
null
<span class="token comment"># 下面是该数据节点的一些状态信息，其实就是 Stat 对象的格式化输出</span>
cZxid <span class="token operator">=</span> 0x2
ctime <span class="token operator">=</span> Tue Nov <span class="token number">27</span> <span class="token number">11</span>:05:34 CST <span class="token number">2018</span>
mZxid <span class="token operator">=</span> 0x2
mtime <span class="token operator">=</span> Tue Nov <span class="token number">27</span> <span class="token number">11</span>:05:34 CST <span class="token number">2018</span>
pZxid <span class="token operator">=</span> 0x3
cversion <span class="token operator">=</span> <span class="token number">1</span>
dataVersion <span class="token operator">=</span> <span class="token number">0</span>
aclVersion <span class="token operator">=</span> <span class="token number">0</span>
ephemeralOwner <span class="token operator">=</span> 0x0
dataLength <span class="token operator">=</span> <span class="token number">0</span>
numChildren <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Stat 类中包含了一个数据节点的所有状态信息的字段，包括事务 ID-cZxid、节点创建时间-ctime 和子节点个数-numChildren 等等。</p><p>下面我们来看一下每个 znode 状态信息究竟代表的是什么吧！（下面的内容来源于《从 Paxos 到 ZooKeeper 分布式一致性原理与实践》，因为 Guide 确实也不是特别清楚，要学会参考资料的嘛！ ） ：</p><table><thead><tr><th>znode 状态信息</th><th>解释</th></tr></thead><tbody><tr><td>cZxid</td><td>create ZXID，即该数据节点被创建时的事务 id</td></tr><tr><td>ctime</td><td>create time，即该节点的创建时间</td></tr><tr><td>mZxid</td><td>modified ZXID，即该节点最终一次更新时的事务 id</td></tr><tr><td>mtime</td><td>modified time，即该节点最后一次的更新时间</td></tr><tr><td>pZxid</td><td>该节点的子节点列表最后一次修改时的事务 id，只有子节点列表变更才会更新 pZxid，子节点内容变更不会更新</td></tr><tr><td>cversion</td><td>子节点版本号，当前节点的子节点每次变化时值增加 1</td></tr><tr><td>dataVersion</td><td>数据节点内容版本号，节点创建时为 0，每更新一次节点内容(不管内容有无变化)该版本号的值增加 1</td></tr><tr><td>aclVersion</td><td>节点的 ACL 版本号，表示该节点 ACL 信息变更次数</td></tr><tr><td>ephemeralOwner</td><td>创建该临时节点的会话的 sessionId；如果当前节点为持久节点，则 ephemeralOwner=0</td></tr><tr><td>dataLength</td><td>数据节点内容长度</td></tr><tr><td>numChildren</td><td>当前节点的子节点个数</td></tr></tbody></table><h3 id="_3-3-版本-version" tabindex="-1"><a class="header-anchor" href="#_3-3-版本-version" aria-hidden="true">#</a> 3.3. 版本（version）</h3><p>在前面我们已经提到，对应于每个 znode，ZooKeeper 都会为其维护一个叫作 <strong>Stat</strong> 的数据结构，Stat 中记录了这个 znode 的三个相关的版本：</p><ul><li><strong>dataVersion</strong> ：当前 znode 节点的版本号</li><li><strong>cversion</strong> ： 当前 znode 子节点的版本</li><li><strong>aclVersion</strong> ： 当前 znode 的 ACL 的版本。</li></ul><h3 id="_3-4-acl-权限控制" tabindex="-1"><a class="header-anchor" href="#_3-4-acl-权限控制" aria-hidden="true">#</a> 3.4. ACL（权限控制）</h3><p>ZooKeeper 采用 ACL（AccessControlLists）策略来进行权限控制，类似于 UNIX 文件系统的权限控制。</p><p>对于 znode 操作的权限，ZooKeeper 提供了以下 5 种：</p><ul><li><strong>CREATE</strong> : 能创建子节点</li><li><strong>READ</strong> ：能获取节点数据和列出其子节点</li><li><strong>WRITE</strong> : 能设置/更新节点数据</li><li><strong>DELETE</strong> : 能删除子节点</li><li><strong>ADMIN</strong> : 能设置节点 ACL 的权限</li></ul><p>其中尤其需要注意的是，<strong>CREATE</strong> 和 <strong>DELETE</strong> 这两种权限都是针对 <strong>子节点</strong> 的权限控制。</p><p>对于身份认证，提供了以下几种方式：</p><ul><li><strong>world</strong> ： 默认方式，所有用户都可无条件访问。</li><li><strong>auth</strong> :不使用任何 id，代表任何已认证的用户。</li><li><strong>digest</strong> :用户名:密码认证方式： <em>username:password</em> 。</li><li><strong>ip</strong> : 对指定 ip 进行限制。</li></ul><h3 id="_3-5-watcher-事件监听器" tabindex="-1"><a class="header-anchor" href="#_3-5-watcher-事件监听器" aria-hidden="true">#</a> 3.5. Watcher（事件监听器）</h3><p>Watcher（事件监听器），是 ZooKeeper 中的一个很重要的特性。ZooKeeper 允许用户在指定节点上注册一些 Watcher，并且在一些特定事件触发的时候，ZooKeeper 服务端会将事件通知到感兴趣的客户端上去，该机制是 ZooKeeper 实现分布式协调服务的重要特性。</p><p><img src="`+l+'" alt="watcher机制"></p><p><em>破音：非常有用的一个特性，都拿出小本本记好了，后面用到 ZooKeeper 基本离不开 Watcher（事件监听器）机制。</em></p><h3 id="_3-6-会话-session" tabindex="-1"><a class="header-anchor" href="#_3-6-会话-session" aria-hidden="true">#</a> 3.6. 会话（Session）</h3><p>Session 可以看作是 ZooKeeper 服务器与客户端的之间的一个 TCP 长连接，通过这个连接，客户端能够通过心跳检测与服务器保持有效的会话，也能够向 ZooKeeper 服务器发送请求并接受响应，同时还能够通过该连接接收来自服务器的 Watcher 事件通知。</p><p>Session 有一个属性叫做：<code>sessionTimeout</code> ，<code>sessionTimeout</code> 代表会话的超时时间。当由于服务器压力太大、网络故障或是客户端主动断开连接等各种原因导致客户端连接断开时，只要在<code>sessionTimeout</code>规定的时间内能够重新连接上集群中任意一台服务器，那么之前创建的会话仍然有效。</p><p>另外，在为客户端创建会话之前，服务端首先会为每个客户端都分配一个 <code>sessionID</code>。由于 <code>sessionID</code>是 ZooKeeper 会话的一个重要标识，许多与会话相关的运行机制都是基于这个 <code>sessionID</code> 的，因此，无论是哪台服务器为客户端分配的 <code>sessionID</code>，都务必保证全局唯一。</p><h2 id="_4-zookeeper-集群" tabindex="-1"><a class="header-anchor" href="#_4-zookeeper-集群" aria-hidden="true">#</a> 4. ZooKeeper 集群</h2><p>为了保证高可用，最好是以集群形态来部署 ZooKeeper，这样只要集群中大部分机器是可用的（能够容忍一定的机器故障），那么 ZooKeeper 本身仍然是可用的。通常 3 台服务器就可以构成一个 ZooKeeper 集群了。ZooKeeper 官方提供的架构图就是一个 ZooKeeper 集群整体对外提供服务。</p><p><img src="'+h+'" alt=""></p><p>上图中每一个 Server 代表一个安装 ZooKeeper 服务的服务器。组成 ZooKeeper 服务的服务器都会在内存中维护当前的服务器状态，并且每台服务器之间都互相保持着通信。集群间通过 ZAB 协议（ZooKeeper Atomic Broadcast）来保持数据的一致性。</p><p><strong>最典型集群模式： Master/Slave 模式（主备模式）</strong>。在这种模式中，通常 Master 服务器作为主服务器提供写服务，其他的 Slave 服务器从服务器通过异步复制的方式获取 Master 服务器最新的数据提供读服务。</p><h3 id="_4-1-zookeeper-集群角色" tabindex="-1"><a class="header-anchor" href="#_4-1-zookeeper-集群角色" aria-hidden="true">#</a> 4.1. ZooKeeper 集群角色</h3><p>但是，在 ZooKeeper 中没有选择传统的 Master/Slave 概念，而是引入了 Leader、Follower 和 Observer 三种角色。如下图所示</p><p><img src="'+c+'" alt=""></p><p>ZooKeeper 集群中的所有机器通过一个 <strong>Leader 选举过程</strong> 来选定一台称为 “<strong>Leader</strong>” 的机器，Leader 既可以为客户端提供写服务又能提供读服务。除了 Leader 外，<strong>Follower</strong> 和 <strong>Observer</strong> 都只能提供读服务。Follower 和 Observer 唯一的区别在于 Observer 机器不参与 Leader 的选举过程，也不参与写操作的“过半写成功”策略，因此 Observer 机器可以在不影响写性能的情况下提升集群的读性能。</p><table><thead><tr><th>角色</th><th>说明</th></tr></thead><tbody><tr><td>Leader</td><td>为客户端提供读和写的服务，负责投票的发起和决议，更新系统状态。</td></tr><tr><td>Follower</td><td>为客户端提供读服务，如果是写服务则转发给 Leader。参与选举过程中的投票。</td></tr><tr><td>Observer</td><td>为客户端提供读服务，如果是写服务则转发给 Leader。不参与选举过程中的投票，也不参与“过半写成功”策略。在不影响写性能的情况下提升集群的读性能。此角色于 ZooKeeper3.3 系列新增的角色。</td></tr></tbody></table><p>当 Leader 服务器出现网络中断、崩溃退出与重启等异常情况时，就会进入 Leader 选举过程，这个过程会选举产生新的 Leader 服务器。</p><p>这个过程大致是这样的：</p><ol><li><strong>Leader election（选举阶段）</strong>：节点在一开始都处于选举阶段，只要有一个节点得到超半数节点的票数，它就可以当选准 leader。</li><li><strong>Discovery（发现阶段）</strong> ：在这个阶段，followers 跟准 leader 进行通信，同步 followers 最近接收的事务提议。</li><li><strong>Synchronization（同步阶段）</strong> :同步阶段主要是利用 leader 前一阶段获得的最新提议历史，同步集群中所有的副本。同步完成之后 准 leader 才会成为真正的 leader。</li><li><strong>Broadcast（广播阶段）</strong> :到了这个阶段，ZooKeeper 集群才能正式对外提供事务服务，并且 leader 可以进行消息广播。同时如果有新的节点加入，还需要对新节点进行同步。</li></ol><h3 id="_4-2-zookeeper-集群中的服务器状态" tabindex="-1"><a class="header-anchor" href="#_4-2-zookeeper-集群中的服务器状态" aria-hidden="true">#</a> 4.2. ZooKeeper 集群中的服务器状态</h3><ul><li><strong>LOOKING</strong> ：寻找 Leader。</li><li><strong>LEADING</strong> ：Leader 状态，对应的节点为 Leader。</li><li><strong>FOLLOWING</strong> ：Follower 状态，对应的节点为 Follower。</li><li><strong>OBSERVING</strong> ：Observer 状态，对应节点为 Observer，该节点不参与 Leader 选举。</li></ul><h3 id="_4-3-zookeeper-集群为啥最好奇数台" tabindex="-1"><a class="header-anchor" href="#_4-3-zookeeper-集群为啥最好奇数台" aria-hidden="true">#</a> 4.3. ZooKeeper 集群为啥最好奇数台？</h3><p>ZooKeeper 集群在宕掉几个 ZooKeeper 服务器之后，如果剩下的 ZooKeeper 服务器个数大于宕掉的个数的话整个 ZooKeeper 才依然可用。假如我们的集群中有 n 台 ZooKeeper 服务器，那么也就是剩下的服务数必须大于 n/2。先说一下结论，2n 和 2n-1 的容忍度是一样的，都是 n-1，大家可以先自己仔细想一想，这应该是一个很简单的数学问题了。</p><p>比如假如我们有 3 台，那么最大允许宕掉 1 台 ZooKeeper 服务器，如果我们有 4 台的的时候也同样只允许宕掉 1 台。 假如我们有 5 台，那么最大允许宕掉 2 台 ZooKeeper 服务器，如果我们有 6 台的的时候也同样只允许宕掉 2 台。</p><p>综上，何必增加那一个不必要的 ZooKeeper 呢？</p><h3 id="_4-4-zookeeper-选举的过半机制防止脑裂" tabindex="-1"><a class="header-anchor" href="#_4-4-zookeeper-选举的过半机制防止脑裂" aria-hidden="true">#</a> 4.4. ZooKeeper 选举的过半机制防止脑裂</h3><p><strong>何为集群脑裂？</strong></p><p>对于一个集群，通常多台机器会部署在不同机房，来提高这个集群的可用性。保证可用性的同时，会发生一种机房间网络线路故障，导致机房间网络不通，而集群被割裂成几个小集群。这时候子集群各自选主导致“脑裂”的情况。</p><p>举例说明：比如现在有一个由 6 台服务器所组成的一个集群，部署在了 2 个机房，每个机房 3 台。正常情况下只有 1 个 leader，但是当两个机房中间网络断开的时候，每个机房的 3 台服务器都会认为另一个机房的 3 台服务器下线，而选出自己的 leader 并对外提供服务。若没有过半机制，当网络恢复的时候会发现有 2 个 leader。仿佛是 1 个大脑（leader）分散成了 2 个大脑，这就发生了脑裂现象。脑裂期间 2 个大脑都可能对外提供了服务，这将会带来数据一致性等问题。</p><p><strong>过半机制是如何防止脑裂现象产生的？</strong></p><p>ZooKeeper 的过半机制导致不可能产生 2 个 leader，因为少于等于一半是不可能产生 leader 的，这就使得不论机房的机器如何分配都不可能发生脑裂。</p><h2 id="_5-zab-协议和-paxos-算法" tabindex="-1"><a class="header-anchor" href="#_5-zab-协议和-paxos-算法" aria-hidden="true">#</a> 5. ZAB 协议和 Paxos 算法</h2><p>Paxos 算法应该可以说是 ZooKeeper 的灵魂了。但是，ZooKeeper 并没有完全采用 Paxos 算法 ，而是使用 ZAB 协议作为其保证数据一致性的核心算法。另外，在 ZooKeeper 的官方文档中也指出，ZAB 协议并不像 Paxos 算法那样，是一种通用的分布式一致性算法，它是一种特别为 Zookeeper 设计的崩溃可恢复的原子消息广播算法。</p><h3 id="_5-1-zab-协议介绍" tabindex="-1"><a class="header-anchor" href="#_5-1-zab-协议介绍" aria-hidden="true">#</a> 5.1. ZAB 协议介绍</h3><p>ZAB（ZooKeeper Atomic Broadcast 原子广播） 协议是为分布式协调服务 ZooKeeper 专门设计的一种支持崩溃恢复的原子广播协议。 在 ZooKeeper 中，主要依赖 ZAB 协议来实现分布式数据一致性，基于该协议，ZooKeeper 实现了一种主备模式的系统架构来保持集群中各个副本之间的数据一致性。</p><h3 id="_5-2-zab-协议两种基本的模式-崩溃恢复和消息广播" tabindex="-1"><a class="header-anchor" href="#_5-2-zab-协议两种基本的模式-崩溃恢复和消息广播" aria-hidden="true">#</a> 5.2. ZAB 协议两种基本的模式：崩溃恢复和消息广播</h3><p>ZAB 协议包括两种基本的模式，分别是</p><ul><li><strong>崩溃恢复</strong> ：当整个服务框架在启动过程中，或是当 Leader 服务器出现网络中断、崩溃退出与重启等异常情况时，ZAB 协议就会进入恢复模式并选举产生新的 Leader 服务器。当选举产生了新的 Leader 服务器，同时集群中已经有过半的机器与该 Leader 服务器完成了状态同步之后，ZAB 协议就会退出恢复模式。其中，<strong>所谓的状态同步是指数据同步，用来保证集群中存在过半的机器能够和 Leader 服务器的数据状态保持一致</strong>。</li><li><strong>消息广播</strong> ：<strong>当集群中已经有过半的 Follower 服务器完成了和 Leader 服务器的状态同步，那么整个服务框架就可以进入消息广播模式了。</strong> 当一台同样遵守 ZAB 协议的服务器启动后加入到集群中时，如果此时集群中已经存在一个 Leader 服务器在负责进行消息广播，那么新加入的服务器就会自觉地进入数据恢复模式：找到 Leader 所在的服务器，并与其进行数据同步，然后一起参与到消息广播流程中去。</li></ul><p>关于 <strong>ZAB 协议&amp;Paxos 算法</strong> 需要讲和理解的东西太多了，具体可以看下面这两篇文章：</p>',100),K={href:"http://codemacro.com/2014/10/15/explain-poxos/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://dbaplus.cn/news-141-1875-1.html",target:"_blank",rel:"noopener noreferrer"},b=n('<h2 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结" aria-hidden="true">#</a> 6. 总结</h2><ol><li>ZooKeeper 本身就是一个分布式程序（只要半数以上节点存活，ZooKeeper 就能正常服务）。</li><li>为了保证高可用，最好是以集群形态来部署 ZooKeeper，这样只要集群中大部分机器是可用的（能够容忍一定的机器故障），那么 ZooKeeper 本身仍然是可用的。</li><li>ZooKeeper 将数据保存在内存中，这也就保证了 高吞吐量和低延迟（但是内存限制了能够存储的容量不太大，此限制也是保持 znode 中存储的数据量较小的进一步原因）。</li><li>ZooKeeper 是高性能的。 在“读”多于“写”的应用程序中尤其地明显，因为“写”会导致所有的服务器间同步状态。（“读”多于“写”是协调服务的典型场景。）</li><li>ZooKeeper 有临时节点的概念。 当创建临时节点的客户端会话一直保持活动，瞬时节点就一直存在。而当会话终结时，瞬时节点被删除。持久节点是指一旦这个 znode 被创建了，除非主动进行 znode 的移除操作，否则这个 znode 将一直保存在 ZooKeeper 上。</li><li>ZooKeeper 底层其实只提供了两个功能：① 管理（存储、读取）用户程序提交的数据；② 为用户程序提供数据节点监听服务。</li></ol><h2 id="_7-参考" tabindex="-1"><a class="header-anchor" href="#_7-参考" aria-hidden="true">#</a> 7. 参考</h2><ol><li>《从 Paxos 到 ZooKeeper 分布式一致性原理与实践》</li></ol>',4);function m(_,k){const o=d("ExternalLinkIcon");return t(),p("div",null,[Z,e("ul",null,[e("li",null,[e("a",K,[r("图解 Paxos 一致性协议"),a(o)])]),e("li",null,[e("a",u,[r("Zookeeper ZAB 协议分析"),a(o)])])]),b])}const x=s(g,[["render",m],["__file","zookeeper-intro.html.vue"]]);export{x as default};
