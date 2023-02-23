import{_ as o,W as l,X as s,Y as e,Z as n,$ as r,a1 as a,F as i}from"./framework-b5ed7090.js";const p={},c=a("<p>冗余设计是保证系统和数据高可用的最常的手段。</p><p>对于服务来说，冗余的思想就是相同的服务部署多份，如果正在使用的服务突然挂掉的话，系统可以很快切换到备份服务上，大大减少系统的不可用时间，提高系统的可用性。</p><p>对于数据来说，冗余的思想就是相同的数据备份多份，这样就可以很简单地提高数据的安全性。</p><p>实际上，日常生活中就有非常多的冗余思想的应用。</p><p>拿我自己来说，我对于重要文件的保存方法就是冗余思想的应用。我日常所使用的重要文件都会同步一份在 Github 以及个人云盘上，这样就可以保证即使电脑硬盘损坏，我也可以通过 Github 或者个人云盘找回自己的重要文件。</p><p>高可用集群（High Availability Cluster，简称 HA Cluster）、同城灾备、异地灾备、同城多活和异地多活是冗余思想在高可用系统设计中最典型的应用。</p><ul><li><strong>高可用集群</strong> : 同一份服务部署两份或者多份，当正在使用的服务突然挂掉的话，可以切换到另外一台服务，从而保证服务的高可用。</li><li><strong>同城灾备</strong> ：一整个集群可以部署在同一个机房，而同城灾备中相同服务部署在同一个城市的不同机房中。并且，备用服务不处理请求。这样可以避免机房出现意外情况比如停电、火灾。</li><li><strong>异地灾备</strong> ：类似于同城灾备，不同的是，相同服务部署在异地（通常距离较远，甚至是在不同的城市或者国家）的不同机房中</li><li><strong>同城多活</strong> ：类似于同城灾备，但备用服务可以处理请求，这样可以充分利用系统资源，提高系统的并发。</li><li><strong>异地多活</strong> : 将服务部署在异地的不同机房中，并且，它们可以同时对外提供服务。</li></ul><p>高可用集群单纯是服务的冗余，并没有强调地域。同城灾备、异地灾备、同城多活和异地多活实现了地域上的冗余。</p><p>同城和异地的主要区别在于机房之间的距离。异地通常距离较远，甚至是在不同的城市或者国家。</p><p>和传统的灾备设计相比，同城多活和异地多活最明显的改变在于“多活”，即所有站点都是同时在对外提供服务的。异地多活是为了应对突发状况比如火灾、地震等自然或者人为灾害。</p><p>光做好冗余还不够，必须要配合上 <strong>故障转移</strong> 才可以！ 所谓故障转移，简单来说就是实现不可用服务快速且自动地切换到可用服务，整个过程不需要人为干涉。</p>",11),_={href:"https://www.yuque.com/docs/share/f37fc804-bfe6-4b0d-b373-9c462188fec7",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.yuque.com/docs/share/f37fc804-bfe6-4b0d-b373-9c462188fec7",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"异地多活架构实施起来非常难，需要考虑的因素非常多。本人不才，实际项目中并没有实践过异地多活架构，我对其了解还停留在书本知识。",-1),u=e("p",null,"如果你想要深入学习异地多活相关的知识，我这里推荐几篇我觉得还不错的文章：",-1),f={href:"https://mp.weixin.qq.com/s/T6mMDdtTfBuIiEowCpqu6Q",target:"_blank",rel:"noopener noreferrer"},g={href:"https://mp.weixin.qq.com/s/hMD-IS__4JE5_nQhYPYSTg",target:"_blank",rel:"noopener noreferrer"},m={href:"http://gk.link/a/10pKZ",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"不过，这些文章大多也都是在介绍概念知识。目前，网上还缺少真正介绍具体要如何去实践落地异地多活架构的资料。",-1);function x(k,v){const t=i("ExternalLinkIcon");return l(),s("div",null,[c,e("p",null,[n("举个例子：哨兵模式的 Redis 集群中，如果 Sentinel（哨兵） 检测到 master 节点出现故障的话， 它就会帮助我们实现故障转移，自动将某一台 slave 升级为 master，确保整个 Redis 系统的可用性。整个过程完全自动，不需要人工介入。我在"),e("a",_,[n("《Java 面试指北》"),r(t)]),n("的「技术面试题篇」中的数据库部分详细介绍了 Redis 集群相关的知识点&面试题，感兴趣的小伙伴可以看看。")]),e("p",null,[n("再举个例子：Nginx 可以结合 Keepalived 来实现高可用。如果 Nginx 主服务器宕机的话，Keepalived 可以自动进行故障转移，备用 Nginx 主服务器升级为主服务。并且，这个切换对外是透明的，因为使用的虚拟 IP，虚拟 IP 不会改变。我在"),e("a",d,[n("《Java 面试指北》"),r(t)]),n("的「技术面试题篇」中的「服务器」部分详细介绍了 Nginx 相关的知识点&面试题，感兴趣的小伙伴可以看看。")]),h,u,e("ul",null,[e("li",null,[e("a",f,[n("搞懂异地多活，看这篇就够了- 水滴与银弹 - 2021"),r(t)])]),e("li",null,[e("a",g,[n("四步构建异地多活"),r(t)])]),e("li",null,[e("a",m,[n("《从零开始学架构》— 28 | 业务高可用的保障：异地多活架构"),r(t)])])]),b])}const N=o(p,[["render",x],["__file","redundancy.html.vue"]]);export{N as default};
