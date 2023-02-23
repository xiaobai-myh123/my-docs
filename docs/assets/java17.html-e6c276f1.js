import{_ as l,W as i,X as r,Y as n,Z as s,$ as a,a0 as p,a1 as c,F as o}from"./framework-b5ed7090.js";const u={},k=n("p",null,"Java 17 在 2021 年 9 月 14 日正式发布，是一个长期支持（LTS）版本。",-1),d=n("p",null,"下面这张图是 Oracle 官方给出的 Oracle JDK 支持的时间线。可以看得到，Java",-1),v=n("p",null,"17 最多可以支持到 2029 年 9 月份。",-1),m=n("p",null,[n("img",{src:"https://img-blog.csdnimg.cn/4c1611fad59449edbbd6e233690e9fa7.png",alt:""})],-1),h=n("p",null,"Java 17 将是继 Java 8 以来最重要的长期支持（LTS）版本，是 Java 社区八年努力的成果。Spring 6.x 和 Spring Boot 3.x 最低支持的就是 Java 17。",-1),f=n("p",null,"这次更新共带来 14 个新特性：",-1),_={href:"https://openjdk.java.net/jeps/306",target:"_blank",rel:"noopener noreferrer"},j={href:"https://openjdk.java.net/jeps/356",target:"_blank",rel:"noopener noreferrer"},g={href:"https://openjdk.java.net/jeps/382",target:"_blank",rel:"noopener noreferrer"},b={href:"https://openjdk.java.net/jeps/391",target:"_blank",rel:"noopener noreferrer"},J={href:"https://openjdk.java.net/jeps/398",target:"_blank",rel:"noopener noreferrer"},P={href:"https://openjdk.java.net/jeps/403",target:"_blank",rel:"noopener noreferrer"},w={href:"https://openjdk.java.net/jeps/406",target:"_blank",rel:"noopener noreferrer"},y={href:"https://openjdk.java.net/jeps/407",target:"_blank",rel:"noopener noreferrer"},S={href:"https://openjdk.java.net/jeps/409",target:"_blank",rel:"noopener noreferrer"},q={href:"https://openjdk.java.net/jeps/410",target:"_blank",rel:"noopener noreferrer"},E={href:"https://openjdk.java.net/jeps/411",target:"_blank",rel:"noopener noreferrer"},I={href:"https://openjdk.java.net/jeps/412",target:"_blank",rel:"noopener noreferrer"},A={href:"https://openjdk.java.net/jeps/417",target:"_blank",rel:"noopener noreferrer"},x={href:"https://openjdk.java.net/jeps/415",target:"_blank",rel:"noopener noreferrer"},R=n("p",null,"这里只对 356、398、413、406、407、409、410、411、412、414 这几个我觉得比较重要的新特性进行详细介绍。",-1),O={href:"https://openjdk.java.net/projects/jdk/17/",target:"_blank",rel:"noopener noreferrer"},M=n("h2",{id:"jep-356-增强的伪随机数生成器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jep-356-增强的伪随机数生成器","aria-hidden":"true"},"#"),s(" JEP 356:增强的伪随机数生成器")],-1),N=n("p",null,[s("JDK 17 之前，我们可以借助 "),n("code",null,"Random"),s("、"),n("code",null,"ThreadLocalRandom"),s("和"),n("code",null,"SplittableRandom"),s("来生成随机数。不过，这 3 个类都各有缺陷，且缺少常见的伪随机算法支持。")],-1),T=n("p",null,"Java 17 为伪随机数生成器 （pseudorandom number generator，RPNG，又称为确定性随机位生成器）增加了新的接口类型和实现，使得开发者更容易在应用程序中互换使用各种 PRNG 算法。",-1),G={href:"https://ctf-wiki.org/crypto/streamcipher/prng/intro/",target:"_blank",rel:"noopener noreferrer"},D=c(`<p>使用示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">RandomGeneratorFactory</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">RandomGenerator</span><span class="token punctuation">&gt;</span></span> l128X256MixRandom <span class="token operator">=</span> <span class="token class-name">RandomGeneratorFactory</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;L128X256MixRandom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 使用时间戳作为随机数种子</span>
<span class="token class-name">RandomGenerator</span> randomGenerator <span class="token operator">=</span> l128X256MixRandom<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 生成随机数</span>
randomGenerator<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jep-398-弃用-applet-api-以进行删除" tabindex="-1"><a class="header-anchor" href="#jep-398-弃用-applet-api-以进行删除" aria-hidden="true">#</a> JEP 398:弃用 Applet API 以进行删除</h2><p>Applet API 用于编写在 Web 浏览器端运行的 Java 小程序，很多年前就已经被淘汰了，已经没有理由使用了。</p>`,4),F={href:"https://openjdk.java.net/jeps/289",target:"_blank",rel:"noopener noreferrer"},L=c(`<h2 id="jep-406-switch-的类型匹配-预览" tabindex="-1"><a class="header-anchor" href="#jep-406-switch-的类型匹配-预览" aria-hidden="true">#</a> JEP 406:switch 的类型匹配（预览）</h2><p>正如 <code>instanceof</code> 一样， <code>switch</code> 也紧跟着增加了类型匹配自动转换功能。</p><p><code>instanceof</code> 代码示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Old code</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>o<span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> use s <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>

<span class="token comment">// New code</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> use s <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>switch</code> 代码示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Old code</span>
<span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">formatter</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> formatted <span class="token operator">=</span> <span class="token string">&quot;unknown&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">Integer</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        formatted <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;int %d&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">Long</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        formatted <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;long %d&quot;</span><span class="token punctuation">,</span> l<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">Double</span> d<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        formatted <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;double %f&quot;</span><span class="token punctuation">,</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        formatted <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;String %s&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> formatted<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// New code</span>
<span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">formatterPatternSwitch</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">switch</span> <span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token class-name">Integer</span> i <span class="token operator">-&gt;</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;int %d&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token class-name">Long</span> l    <span class="token operator">-&gt;</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;long %d&quot;</span><span class="token punctuation">,</span> l<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token class-name">Double</span> d  <span class="token operator">-&gt;</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;double %f&quot;</span><span class="token punctuation">,</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token class-name">String</span> s  <span class="token operator">-&gt;</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;String %s&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span>        <span class="token operator">-&gt;</span> o<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 <code>null</code> 值的判断也进行了优化。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Old code</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">testFooBar</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;oops!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&quot;Foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bar&quot;</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Great&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span>           <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Ok&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// New code</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">testFooBar</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token keyword">null</span>         <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Oops&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&quot;Foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bar&quot;</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Great&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span>           <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Ok&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jep-407-删除远程方法调用激活机制" tabindex="-1"><a class="header-anchor" href="#jep-407-删除远程方法调用激活机制" aria-hidden="true">#</a> JEP 407:删除远程方法调用激活机制</h2><p>删除远程方法调用 (RMI) 激活机制，同时保留 RMI 的其余部分。RMI 激活机制已过时且不再使用。</p><h2 id="jep-409-密封类-转正" tabindex="-1"><a class="header-anchor" href="#jep-409-密封类-转正" aria-hidden="true">#</a> JEP 409：密封类（转正）</h2>`,11),V={href:"https://openjdk.java.net/jeps/360",target:"_blank",rel:"noopener noreferrer"},B={href:"https://openjdk.java.net/jeps/397",target:"_blank",rel:"noopener noreferrer"},C=n("h2",{id:"jep-410-删除实验性的-aot-和-jit-编译器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jep-410-删除实验性的-aot-和-jit-编译器","aria-hidden":"true"},"#"),s(" JEP 410:删除实验性的 AOT 和 JIT 编译器")],-1),K={href:"https://openjdk.java.net/jeps/295",target:"_blank",rel:"noopener noreferrer"},X=n("p",null,"Java 17，删除实验性的提前 (AOT) 和即时 (JIT) 编译器，因为该编译器自推出以来很少使用，维护它所需的工作量很大。保留实验性的 Java 级 JVM 编译器接口 (JVMCI)，以便开发人员可以继续使用外部构建的编译器版本进行 JIT 编译。",-1),U=n("h2",{id:"jep-411-弃用安全管理器以进行删除",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jep-411-弃用安全管理器以进行删除","aria-hidden":"true"},"#"),s(" JEP 411:弃用安全管理器以进行删除")],-1),W=n("p",null,"弃用安全管理器以便在将来的版本中删除。",-1),z={href:"https://openjdk.java.net/jeps/398",target:"_blank",rel:"noopener noreferrer"},H=n("h2",{id:"jep-412-外部函数和内存-api-孵化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jep-412-外部函数和内存-api-孵化","aria-hidden":"true"},"#"),s(" JEP 412:外部函数和内存 API（孵化）")],-1),Y=n("p",null,"Java 程序可以通过该 API 与 Java 运行时之外的代码和数据进行互操作。通过高效地调用外部函数（即 JVM 之外的代码）和安全地访问外部内存（即不受 JVM 管理的内存），该 API 使 Java 程序能够调用本机库并处理本机数据，而不会像 JNI 那样危险和脆弱。",-1),Z={href:"https://openjdk.java.net/jeps/412",target:"_blank",rel:"noopener noreferrer"},$={href:"https://openjdk.org/jeps/419",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://openjdk.org/jeps/424",target:"_blank",rel:"noopener noreferrer"},nn=n("h2",{id:"jep-414-向量-api-第二次孵化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jep-414-向量-api-第二次孵化","aria-hidden":"true"},"#"),s(" JEP 414:向量 API（第二次孵化）")],-1),sn={href:"https://openjdk.java.net/jeps/338",target:"_blank",rel:"noopener noreferrer"},an={href:"http://openjdk.java.net/jeps/11",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://openjdk.java.net/jeps/414",target:"_blank",rel:"noopener noreferrer"},en={href:"https://openjdk.java.net/jeps/417",target:"_blank",rel:"noopener noreferrer"},pn={href:"https://openjdk.java.net/jeps/426",target:"_blank",rel:"noopener noreferrer"},on=n("p",null,"该孵化器 API 提供了一个 API 的初始迭代以表达一些向量计算，这些计算在运行时可靠地编译为支持的 CPU 架构上的最佳向量硬件指令，从而获得优于同等标量计算的性能，充分利用单指令多数据（SIMD）技术（大多数现代 CPU 上都可以使用的一种指令）。尽管 HotSpot 支持自动向量化，但是可转换的标量操作集有限且易受代码更改的影响。该 API 将使开发人员能够轻松地用 Java 编写可移植的高性能向量算法。",-1);function cn(ln,rn){const t=o("ExternalLinkIcon"),e=o("RouterLink");return i(),r("div",null,[k,d,v,m,h,f,n("ul",null,[n("li",null,[n("a",_,[s("JEP 306:Restore Always-Strict Floating-Point Semantics（恢复始终严格的浮点语义）"),a(t)])]),n("li",null,[n("a",j,[s("JEP 356:Enhanced Pseudo-Random Number Generators（增强的伪随机数生成器）"),a(t)])]),n("li",null,[n("a",g,[s("JEP 382:New macOS Rendering Pipeline（新的 macOS 渲染管道）"),a(t)])]),n("li",null,[n("a",b,[s("JEP 391:macOS/AArch64 Port（支持 macOS AArch64）"),a(t)])]),n("li",null,[n("a",J,[s("JEP 398:Deprecate the Applet API for Removal（删除已弃用的 Applet API）"),a(t)])]),n("li",null,[n("a",P,[s("JEP 403:Strongly Encapsulate JDK Internals（更强大的封装 JDK 内部元素）"),a(t)])]),n("li",null,[n("a",w,[s("JEP 406:Pattern Matching for switch (switch 的类型匹配)"),a(t)]),s("（预览）")]),n("li",null,[n("a",y,[s("JEP 407:Remove RMI Activation（删除远程方法调用激活机制）"),a(t)])]),n("li",null,[n("a",S,[s("JEP 409:Sealed Classes（密封类）"),a(t)]),s("（转正）")]),n("li",null,[n("a",q,[s("JEP 410:Remove the Experimental AOT and JIT Compiler（删除实验性的 AOT 和 JIT 编译器）"),a(t)])]),n("li",null,[n("a",E,[s("JEP 411:Deprecate the Security Manager for Removal（弃用安全管理器以进行删除）"),a(t)])]),n("li",null,[n("a",I,[s("JEP 412:Foreign Function & Memory API (外部函数和内存 API)"),a(t)]),s("（孵化）")]),n("li",null,[n("a",A,[s("JEP 414:Vector（向量） API "),a(t)]),s("（第二次孵化）")]),n("li",null,[n("a",x,[s("JEP 415:Context-Specific Deserialization Filters"),a(t)])])]),R,n("p",null,[s("相关阅读："),n("a",O,[s("OpenJDK Java 17 文档"),a(t)]),s(" 。")]),M,N,T,n("blockquote",null,[n("p",null,[n("a",G,[s("RPNG"),a(t)]),s(" 用来生成接近于绝对随机数序列的数字序列。一般来说，PRNG 会依赖于一个初始值，也称为种子，来生成对应的伪随机数序列。只要种子确定了，PRNG 所生成的随机数就是完全确定的，因此其生成的随机数序列并不是真正随机的。")])]),D,n("p",null,[s("Applet API 在 Java 9 时被标记弃用（"),n("a",F,[s("JEP 289"),a(t)]),s("），但不是为了删除。")]),L,n("p",null,[s("密封类由 "),n("a",V,[s("JEP 360"),a(t)]),s(" 提出预览，集成到了 Java 15 中。在 JDK 16 中， 密封类得到了改进（更加严格的引用检查和密封类的继承关系），由 "),n("a",B,[s("JEP 397"),a(t)]),s(" 提出了再次预览。")]),n("p",null,[s("在 "),a(e,{to:"/java/new-features/java15.html"},{default:p(()=>[s("Java 15 新特性概览")]),_:1}),s(" 中，我有详细介绍到密封类，这里就不再做额外的介绍了。")]),C,n("p",null,[s("在 Java 9 的 "),n("a",K,[s("JEP 295"),a(t)]),s(" ,引入了实验性的提前 (AOT) 编译器，在启动虚拟机之前将 Java 类编译为本机代码。")]),X,U,W,n("p",null,[s("安全管理器可追溯到 Java 1.0，多年来，它一直不是保护客户端 Java 代码的主要方法，也很少用于保护服务器端代码。为了推动 Java 向前发展，Java 17 弃用安全管理器，以便与旧版 Applet API ( "),n("a",z,[s("JEP 398"),a(t)]),s(" ) 一起移除。")]),H,Y,n("p",null,[s("外部函数和内存 API 在 Java 17 中进行了第一轮孵化，由 "),n("a",Z,[s("JEP 412"),a(t)]),s(" 提出。第二轮孵化由"),n("a",$,[s(" JEP 419"),a(t)]),s(" 提出并集成到了 Java 18 中，预览由 "),n("a",Q,[s("JEP 424"),a(t)]),s(" 提出并集成到了 Java 19 中。")]),n("p",null,[s("在 "),a(e,{to:"/java/new-features/java19.html"},{default:p(()=>[s("Java 19 新特性概览")]),_:1}),s(" 中，我有详细介绍到外部函数和内存 API，这里就不再做额外的介绍了。")]),nn,n("p",null,[s("向量（Vector） API 最初由 "),n("a",sn,[s("JEP 338"),a(t)]),s(" 提出，并作为"),n("a",an,[s("孵化 API"),a(t)]),s("集成到 Java 16 中。第二轮孵化由 "),n("a",tn,[s("JEP 414"),a(t)]),s(" 提出并集成到 Java 17 中，第三轮孵化由 "),n("a",en,[s("JEP 417"),a(t)]),s(" 提出并集成到 Java 18 中，第四轮由 "),n("a",pn,[s("JEP 426"),a(t)]),s(" 提出并集成到了 Java 19 中。")]),on,n("p",null,[s("在 "),a(e,{to:"/java/new-features/java18.html"},{default:p(()=>[s("Java 18 新特性概览")]),_:1}),s(" 中，我有详细介绍到向量 API，这里就不再做额外的介绍了。")])])}const kn=l(u,[["render",cn],["__file","java17.html.vue"]]);export{kn as default};
