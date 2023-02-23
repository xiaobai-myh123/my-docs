import{_ as c,W as i,X as l,Y as a,Z as n,$ as e,a0 as u,a1 as s,F as t}from"./framework-b5ed7090.js";const r="/assets/连接ZooKeeper服务-d35718b3.png",d="/assets/curator-1108d06e.png",k={},v=s(`<h1 id="zookeeper-实战" tabindex="-1"><a class="header-anchor" href="#zookeeper-实战" aria-hidden="true">#</a> ZooKeeper 实战</h1><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1. 前言</h2><p>这篇文章简单给演示一下 ZooKeeper 常见命令的使用以及 ZooKeeper Java客户端 Curator 的基本使用。介绍到的内容都是最基本的操作，能满足日常工作的基本需要。</p><p>如果文章有任何需要改善和完善的地方，欢迎在评论区指出，共同进步！</p><h2 id="_2-zookeeper-安装和使用" tabindex="-1"><a class="header-anchor" href="#_2-zookeeper-安装和使用" aria-hidden="true">#</a> 2. ZooKeeper 安装和使用</h2><h3 id="_2-1-使用docker-安装-zookeeper" tabindex="-1"><a class="header-anchor" href="#_2-1-使用docker-安装-zookeeper" aria-hidden="true">#</a> 2.1. 使用Docker 安装 zookeeper</h3><p><strong>a.使用 Docker 下载 ZooKeeper</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull zookeeper:3.5.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>b.运行 ZooKeeper</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> zookeeper <span class="token parameter variable">-p</span> <span class="token number">2181</span>:2181 zookeeper:3.5.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-连接-zookeeper-服务" tabindex="-1"><a class="header-anchor" href="#_2-2-连接-zookeeper-服务" aria-hidden="true">#</a> 2.2. 连接 ZooKeeper 服务</h3><p><strong>a.进入ZooKeeper容器中</strong></p><p>先使用 <code>docker ps</code> 查看 ZooKeeper 的 ContainerID，然后使用 <code>docker exec -it ContainerID /bin/bash</code> 命令进入容器中。</p><p><strong>b.先进入 bin 目录,然后通过 <code>./zkCli.sh -server 127.0.0.1:2181</code>命令连接ZooKeeper 服务</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@eaf70fc620cb:/apache-zookeeper-3.5.8-bin<span class="token comment"># cd bin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你看到控制台成功打印出如下信息的话，说明你已经成功连接 ZooKeeper 服务。</p><p><img src="`+r+`" alt=""></p><h3 id="_2-3-常用命令演示" tabindex="-1"><a class="header-anchor" href="#_2-3-常用命令演示" aria-hidden="true">#</a> 2.3. 常用命令演示</h3><h4 id="_2-3-1-查看常用命令-help-命令" tabindex="-1"><a class="header-anchor" href="#_2-3-1-查看常用命令-help-命令" aria-hidden="true">#</a> 2.3.1. 查看常用命令(help 命令)</h4><p>通过 <code>help</code> 命令查看 ZooKeeper 常用命令</p><h4 id="_2-3-2-创建节点-create-命令" tabindex="-1"><a class="header-anchor" href="#_2-3-2-创建节点-create-命令" aria-hidden="true">#</a> 2.3.2. 创建节点(create 命令)</h4><p>通过 <code>create</code> 命令在根目录创建了 node1 节点，与它关联的字符串是&quot;node1&quot;</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: <span class="token number">127.0</span>.0.1:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">34</span><span class="token punctuation">]</span> create /node1 “node1”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过 <code>create</code> 命令在根目录创建了 node1 节点，与它关联的内容是数字 123</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: <span class="token number">127.0</span>.0.1:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">]</span> create /node1/node1.1 <span class="token number">123</span>
Created /node1/node1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-3-更新节点数据内容-set-命令" tabindex="-1"><a class="header-anchor" href="#_2-3-3-更新节点数据内容-set-命令" aria-hidden="true">#</a> 2.3.3. 更新节点数据内容(set 命令)</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: <span class="token number">127.0</span>.0.1:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">11</span><span class="token punctuation">]</span> <span class="token builtin class-name">set</span> /node1 <span class="token string">&quot;set node1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-3-4-获取节点的数据-get-命令" tabindex="-1"><a class="header-anchor" href="#_2-3-4-获取节点的数据-get-命令" aria-hidden="true">#</a> 2.3.4. 获取节点的数据(get 命令)</h4><p><code>get</code> 命令可以获取指定节点的数据内容和节点的状态,可以看出我们通过 <code>set</code> 命令已经将节点数据内容改为 &quot;set node1&quot;。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> node1
cZxid <span class="token operator">=</span> 0x47
ctime <span class="token operator">=</span> Sun Jan <span class="token number">20</span> <span class="token number">10</span>:22:59 CST <span class="token number">2019</span>
mZxid <span class="token operator">=</span> 0x4b
mtime <span class="token operator">=</span> Sun Jan <span class="token number">20</span> <span class="token number">10</span>:41:10 CST <span class="token number">2019</span>
pZxid <span class="token operator">=</span> 0x4a
cversion <span class="token operator">=</span> <span class="token number">1</span>
dataVersion <span class="token operator">=</span> <span class="token number">1</span>
aclVersion <span class="token operator">=</span> <span class="token number">0</span>
ephemeralOwner <span class="token operator">=</span> 0x0
dataLength <span class="token operator">=</span> <span class="token number">9</span>
numChildren <span class="token operator">=</span> <span class="token number">1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-5-查看某个目录下的子节点-ls-命令" tabindex="-1"><a class="header-anchor" href="#_2-3-5-查看某个目录下的子节点-ls-命令" aria-hidden="true">#</a> 2.3.5. 查看某个目录下的子节点(ls 命令)</h4><p>通过 <code>ls</code> 命令查看根目录下的节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: <span class="token number">127.0</span>.0.1:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">37</span><span class="token punctuation">]</span> <span class="token function">ls</span> /
<span class="token punctuation">[</span>dubbo, ZooKeeper, node1<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>ls</code> 命令查看 node1 目录下的节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: <span class="token number">127.0</span>.0.1:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token function">ls</span> /node1
<span class="token punctuation">[</span>node1.1<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>ZooKeeper 中的 ls 命令和 linux 命令中的 ls 类似， 这个命令将列出绝对路径 path 下的所有子节点信息（列出 1 级，并不递归）</p><h4 id="_2-3-6-查看节点状态-stat-命令" tabindex="-1"><a class="header-anchor" href="#_2-3-6-查看节点状态-stat-命令" aria-hidden="true">#</a> 2.3.6. 查看节点状态(stat 命令)</h4><p>通过 <code>stat</code> 命令查看节点状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: <span class="token number">127.0</span>.0.1:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">10</span><span class="token punctuation">]</span> <span class="token function">stat</span> /node1
cZxid <span class="token operator">=</span> 0x47
ctime <span class="token operator">=</span> Sun Jan <span class="token number">20</span> <span class="token number">10</span>:22:59 CST <span class="token number">2019</span>
mZxid <span class="token operator">=</span> 0x47
mtime <span class="token operator">=</span> Sun Jan <span class="token number">20</span> <span class="token number">10</span>:22:59 CST <span class="token number">2019</span>
pZxid <span class="token operator">=</span> 0x4a
cversion <span class="token operator">=</span> <span class="token number">1</span>
dataVersion <span class="token operator">=</span> <span class="token number">0</span>
aclVersion <span class="token operator">=</span> <span class="token number">0</span>
ephemeralOwner <span class="token operator">=</span> 0x0
dataLength <span class="token operator">=</span> <span class="token number">11</span>
numChildren <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),m={href:"https://javaguide.cn/distributed-system/distributed-process-coordination/zookeeper/zookeeper-intro.html",target:"_blank",rel:"noopener noreferrer"},b=s(`<h4 id="_2-3-7-查看节点信息和状态-ls2-命令" tabindex="-1"><a class="header-anchor" href="#_2-3-7-查看节点信息和状态-ls2-命令" aria-hidden="true">#</a> 2.3.7. 查看节点信息和状态(ls2 命令)</h4><p><code>ls2</code> 命令更像是 <code>ls</code> 命令和 <code>stat</code> 命令的结合。 <code>ls2</code> 命令返回的信息包括 2 部分：</p><ol><li>子节点列表</li><li>当前节点的 stat 信息。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: <span class="token number">127.0</span>.0.1:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">7</span><span class="token punctuation">]</span> ls2 /node1
<span class="token punctuation">[</span>node1.1<span class="token punctuation">]</span>
cZxid <span class="token operator">=</span> 0x47
ctime <span class="token operator">=</span> Sun Jan <span class="token number">20</span> <span class="token number">10</span>:22:59 CST <span class="token number">2019</span>
mZxid <span class="token operator">=</span> 0x47
mtime <span class="token operator">=</span> Sun Jan <span class="token number">20</span> <span class="token number">10</span>:22:59 CST <span class="token number">2019</span>
pZxid <span class="token operator">=</span> 0x4a
cversion <span class="token operator">=</span> <span class="token number">1</span>
dataVersion <span class="token operator">=</span> <span class="token number">0</span>
aclVersion <span class="token operator">=</span> <span class="token number">0</span>
ephemeralOwner <span class="token operator">=</span> 0x0
dataLength <span class="token operator">=</span> <span class="token number">11</span>
numChildren <span class="token operator">=</span> <span class="token number">1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-8-删除节点-delete-命令" tabindex="-1"><a class="header-anchor" href="#_2-3-8-删除节点-delete-命令" aria-hidden="true">#</a> 2.3.8. 删除节点(delete 命令)</h4><p>这个命令很简单，但是需要注意的一点是如果你要删除某一个节点，那么这个节点必须无子节点才行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: <span class="token number">127.0</span>.0.1:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">3</span><span class="token punctuation">]</span> delete /node1/node1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在后面我会介绍到 Java 客户端 API 的使用以及开源 ZooKeeper 客户端 ZkClient 和 Curator 的使用。</p><h2 id="_3-zookeeper-java客户端-curator简单使用" tabindex="-1"><a class="header-anchor" href="#_3-zookeeper-java客户端-curator简单使用" aria-hidden="true">#</a> 3. ZooKeeper Java客户端 Curator简单使用</h2><p>Curator 是Netflix公司开源的一套 ZooKeeper Java客户端框架，相比于 Zookeeper 自带的客户端 zookeeper 来说，Curator 的封装更加完善，各种 API 都可以比较方便地使用。</p><p><img src="`+d+`" alt=""></p><p>下面我们就来简单地演示一下 Curator 的使用吧！</p><p>Curator4.0+版本对ZooKeeper 3.5.x支持比较好。开始之前，请先将下面的依赖添加进你的项目。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.curator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>curator-framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.curator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>curator-recipes<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-连接-zookeeper-客户端" tabindex="-1"><a class="header-anchor" href="#_3-1-连接-zookeeper-客户端" aria-hidden="true">#</a> 3.1. 连接 ZooKeeper 客户端</h3><p>通过 <code>CuratorFrameworkFactory</code> 创建 <code>CuratorFramework</code> 对象，然后再调用 <code>CuratorFramework</code> 对象的 <code>start()</code> 方法即可！</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">BASE_SLEEP_TIME</span> <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">MAX_RETRIES</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">// Retry strategy. Retry 3 times, and will increase the sleep time between retries.</span>
<span class="token class-name">RetryPolicy</span> retryPolicy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExponentialBackoffRetry</span><span class="token punctuation">(</span><span class="token constant">BASE_SLEEP_TIME</span><span class="token punctuation">,</span> <span class="token constant">MAX_RETRIES</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">CuratorFramework</span> zkClient <span class="token operator">=</span> <span class="token class-name">CuratorFrameworkFactory</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// the server to connect to (can be a server list)</span>
    <span class="token punctuation">.</span><span class="token function">connectString</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1:2181&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">retryPolicy</span><span class="token punctuation">(</span>retryPolicy<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
zkClient<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于一些基本参数的说明：</p><ul><li><code>baseSleepTimeMs</code>：重试之间等待的初始时间</li><li><code>maxRetries</code> ：最大重试次数</li><li><code>connectString</code> ：要连接的服务器列表</li><li><code>retryPolicy</code> ：重试策略</li></ul><h3 id="_3-2-数据节点的增删改查" tabindex="-1"><a class="header-anchor" href="#_3-2-数据节点的增删改查" aria-hidden="true">#</a> 3.2. 数据节点的增删改查</h3><h4 id="_3-2-1-创建节点" tabindex="-1"><a class="header-anchor" href="#_3-2-1-创建节点" aria-hidden="true">#</a> 3.2.1. 创建节点</h4>`,21),h=s(`<ul><li><strong>持久（PERSISTENT）节点</strong> ：一旦创建就一直存在即使 ZooKeeper 集群宕机，直到将其删除。</li><li><strong>临时（EPHEMERAL）节点</strong> ：临时节点的生命周期是与 <strong>客户端会话（session）</strong> 绑定的，<strong>会话消失则节点消失</strong> 。并且，临时节点 <strong>只能做叶子节点</strong> ，不能创建子节点。</li><li><strong>持久顺序（PERSISTENT_SEQUENTIAL）节点</strong> ：除了具有持久（PERSISTENT）节点的特性之外， 子节点的名称还具有顺序性。比如 <code>/node1/app0000000001</code> 、<code>/node1/app0000000002</code> 。</li><li><strong>临时顺序（EPHEMERAL_SEQUENTIAL）节点</strong> ：除了具备临时（EPHEMERAL）节点的特性之外，子节点的名称还具有顺序性。</li></ul><p>你在使用的ZooKeeper 的时候，会发现 <code>CreateMode</code> 类中实际有 7种 znode 类型 ，但是用的最多的还是上面介绍的 4 种。</p><p><strong>a.创建持久化节点</strong></p><p>你可以通过下面两种方式创建持久化的节点。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//注意:下面的代码会报错，下文说了具体原因</span>
zkClient<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forPath</span><span class="token punctuation">(</span><span class="token string">&quot;/node1/00001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
zkClient<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withMode</span><span class="token punctuation">(</span><span class="token class-name">CreateMode</span><span class="token punctuation">.</span><span class="token constant">PERSISTENT</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forPath</span><span class="token punctuation">(</span><span class="token string">&quot;/node1/00002&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，你运行上面的代码会报错，这是因为的父节点<code>node1</code>还未创建。</p><p>你可以先创建父节点 <code>node1</code> ，然后再执行上面的代码就不会报错了。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>zkClient<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forPath</span><span class="token punctuation">(</span><span class="token string">&quot;/node1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更推荐的方式是通过下面这行代码， <strong><code>creatingParentsIfNeeded()</code> 可以保证父节点不存在的时候自动创建父节点，这是非常有用的。</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>zkClient<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">creatingParentsIfNeeded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withMode</span><span class="token punctuation">(</span><span class="token class-name">CreateMode</span><span class="token punctuation">.</span><span class="token constant">PERSISTENT</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forPath</span><span class="token punctuation">(</span><span class="token string">&quot;/node1/00001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>b.创建临时节点</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>zkClient<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">creatingParentsIfNeeded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withMode</span><span class="token punctuation">(</span><span class="token class-name">CreateMode</span><span class="token punctuation">.</span><span class="token constant">EPHEMERAL</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forPath</span><span class="token punctuation">(</span><span class="token string">&quot;/node1/00001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>c.创建节点并指定数据内容</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>zkClient<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">creatingParentsIfNeeded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withMode</span><span class="token punctuation">(</span><span class="token class-name">CreateMode</span><span class="token punctuation">.</span><span class="token constant">EPHEMERAL</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forPath</span><span class="token punctuation">(</span><span class="token string">&quot;/node1/00001&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;java&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
zkClient<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forPath</span><span class="token punctuation">(</span><span class="token string">&quot;/node1/00001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取节点的数据内容，获取到的是 byte数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>d.检测节点是否创建成功</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>zkClient<span class="token punctuation">.</span><span class="token function">checkExists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forPath</span><span class="token punctuation">(</span><span class="token string">&quot;/node1/00001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//不为null的话，说明节点创建成功</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-2-2-删除节点" tabindex="-1"><a class="header-anchor" href="#_3-2-2-删除节点" aria-hidden="true">#</a> 3.2.2. 删除节点</h4><p><strong>a.删除一个子节点</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>zkClient<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forPath</span><span class="token punctuation">(</span><span class="token string">&quot;/node1/00001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>b.删除一个节点以及其下的所有子节点</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>zkClient<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">deletingChildrenIfNeeded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forPath</span><span class="token punctuation">(</span><span class="token string">&quot;/node1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-2-3-获取-更新节点数据内容" tabindex="-1"><a class="header-anchor" href="#_3-2-3-获取-更新节点数据内容" aria-hidden="true">#</a> 3.2.3. 获取/更新节点数据内容</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>zkClient<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">creatingParentsIfNeeded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withMode</span><span class="token punctuation">(</span><span class="token class-name">CreateMode</span><span class="token punctuation">.</span><span class="token constant">EPHEMERAL</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forPath</span><span class="token punctuation">(</span><span class="token string">&quot;/node1/00001&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;java&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
zkClient<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forPath</span><span class="token punctuation">(</span><span class="token string">&quot;/node1/00001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取节点的数据内容</span>
zkClient<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forPath</span><span class="token punctuation">(</span><span class="token string">&quot;/node1/00001&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;c++&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//更新节点数据内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-4-获取某个节点的所有子节点路径" tabindex="-1"><a class="header-anchor" href="#_3-2-4-获取某个节点的所有子节点路径" aria-hidden="true">#</a> 3.2.4. 获取某个节点的所有子节点路径</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> childrenPaths <span class="token operator">=</span> zkClient<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forPath</span><span class="token punctuation">(</span><span class="token string">&quot;/node1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,25);function g(f,x){const p=t("ExternalLinkIcon"),o=t("RouterLink");return i(),l("div",null,[v,a("p",null,[n("上面显示的一些信息比如 cversion、aclVersion、numChildren 等等，我在上面 “"),a("a",m,[n("ZooKeeper 相关概念总结(入门)"),e(p)]),n("” 这篇文章中已经介绍到。")]),b,a("p",null,[n("我们在 "),e(o,{to:"/distributed-system/distributed-process-coordination/zookeeper/zookeeper-intro.html"},{default:u(()=>[n("ZooKeeper常见概念解读")]),_:1}),n(" 中介绍到，我们通常是将 znode 分为 4 大类：")]),h])}const C=c(k,[["render",g],["__file","zookeeper-in-action.html.vue"]]);export{C as default};
