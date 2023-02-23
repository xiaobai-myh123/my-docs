import{_ as c,W as l,X as i,Y as n,Z as a,$ as s,a0 as r,a1 as p,F as t}from"./framework-b5ed7090.js";const u={},d=n("p",null,"Java 18 在 2022 年 3 月 22 日正式发布，非长期支持版本。",-1),k=n("p",null,"Java 18 带来了 9 个新特性：",-1),v={href:"https://openjdk.java.net/jeps/400",target:"_blank",rel:"noopener noreferrer"},h={href:"https://openjdk.java.net/jeps/408",target:"_blank",rel:"noopener noreferrer"},b={href:"https://openjdk.java.net/jeps/413",target:"_blank",rel:"noopener noreferrer"},m={href:"https://openjdk.java.net/jeps/416",target:"_blank",rel:"noopener noreferrer"},f={href:"https://openjdk.java.net/jeps/417",target:"_blank",rel:"noopener noreferrer"},j={href:"https://openjdk.java.net/jeps/418",target:"_blank",rel:"noopener noreferrer"},_={href:"https://openjdk.java.net/jeps/419",target:"_blank",rel:"noopener noreferrer"},g={href:"https://openjdk.java.net/jeps/420",target:"_blank",rel:"noopener noreferrer"},J={href:"https://openjdk.java.net/jeps/421",target:"_blank",rel:"noopener noreferrer"},P=n("p",null,"Java 17 中包含 14 个特性，Java 16 中包含 17 个特性，Java 15 中包含 14 个特性，Java 14 中包含 16 个特性。相比于前面发布的版本来说，Java 18 的新特性少了很多。",-1),E=n("p",null,"这里只对 400、408、413、416、417、418、419 这几个我觉得比较重要的新特性进行详细介绍。",-1),w=n("p",null,"相关阅读：",-1),I={href:"https://openjdk.java.net/projects/jdk/18/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://mp.weixin.qq.com/s/PocFKR9z9u7-YCZHsrA5kQ",target:"_blank",rel:"noopener noreferrer"},A=p(`<h2 id="jep-400-默认字符集为-utf-8" tabindex="-1"><a class="header-anchor" href="#jep-400-默认字符集为-utf-8" aria-hidden="true">#</a> JEP 400:默认字符集为 UTF-8</h2><p>JDK 终于将 UTF-8 设置为默认字符集。</p><p>在 Java 17 及更早版本中，默认字符集是在 Java 虚拟机运行时才确定的，取决于不同的操作系统、区域设置等因素，因此存在潜在的风险。就比如说你在 Mac 上运行正常的一段打印文字到控制台的 Java 程序到了 Windows 上就会出现乱码，如果你不手动更改字符集的话。</p><h2 id="jep-408-简易的-web-服务器" tabindex="-1"><a class="header-anchor" href="#jep-408-简易的-web-服务器" aria-hidden="true">#</a> JEP 408:简易的 Web 服务器</h2><p>Java 18 之后，你可以使用 <code>jwebserver</code> 命令启动一个简易的静态 Web 服务器。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ jwebserver
Binding to loopback by default. For all interfaces use <span class="token string">&quot;-b 0.0.0.0&quot;</span> or <span class="token string">&quot;-b ::&quot;</span><span class="token builtin class-name">.</span>
Serving /cwd and subdirectories on <span class="token number">127.0</span>.0.1 port <span class="token number">8000</span>
URL: http://127.0.0.1:8000/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个服务器不支持 CGI 和 Servlet，只限于静态文件。</p><h2 id="jep-413-优化-java-api-文档中的代码片段" tabindex="-1"><a class="header-anchor" href="#jep-413-优化-java-api-文档中的代码片段" aria-hidden="true">#</a> JEP 413:优化 Java API 文档中的代码片段</h2><p>在 Java 18 之前，如果我们想要在 Javadoc 中引入代码片段可以使用 <code>&lt;pre&gt;{@code ...}&lt;/pre&gt;</code> 。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>pre<span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token annotation punctuation">@code</span>
    lines of source code
<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>pre<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;pre&gt;{@code ...}&lt;/pre&gt;</code> 这种方式生成的效果比较一般。</p><p>在 Java 18 之后，可以通过 <code>@snippet</code> 标签来做这件事情。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * The following code shows how to use <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">Optional</span><span class="token punctuation">.</span>isPresent</span></span><span class="token punctuation">}</span>:
 * <span class="token punctuation">{</span><span class="token keyword">@snippet</span> :
 * if (v.isPresent()) <span class="token punctuation">{</span>
 *     System.out.println(&quot;v: &quot; + v.get());
 * <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@snippet</code> 这种方式生成的效果更好且使用起来更方便一些。</p><h2 id="jep-416-使用方法句柄重新实现反射核心" tabindex="-1"><a class="header-anchor" href="#jep-416-使用方法句柄重新实现反射核心" aria-hidden="true">#</a> JEP 416:使用方法句柄重新实现反射核心</h2><p>Java 18 改进了 <code>java.lang.reflect.Method</code>、<code>Constructor</code> 的实现逻辑，使之性能更好，速度更快。这项改动不会改动相关 API ，这意味着开发中不需要改动反射相关代码，就可以体验到性能更好反射。</p><p>OpenJDK 官方给出了新老实现的反射性能基准测试结果。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/java/new-features/JEP416Benchmark.png" alt="新老实现的反射性能基准测试结果"></p><h2 id="jep-417-向量-api-第三次孵化" tabindex="-1"><a class="header-anchor" href="#jep-417-向量-api-第三次孵化" aria-hidden="true">#</a> JEP 417: 向量 API（第三次孵化）</h2>`,19),S={href:"https://openjdk.java.net/jeps/338",target:"_blank",rel:"noopener noreferrer"},x={href:"http://openjdk.java.net/jeps/11",target:"_blank",rel:"noopener noreferrer"},F={href:"https://openjdk.java.net/jeps/414",target:"_blank",rel:"noopener noreferrer"},C={href:"https://openjdk.java.net/jeps/417",target:"_blank",rel:"noopener noreferrer"},V={href:"https://openjdk.java.net/jeps/426",target:"_blank",rel:"noopener noreferrer"},R=p(`<p>向量计算由对向量的一系列操作组成。向量 API 用来表达向量计算，该计算可以在运行时可靠地编译为支持的 CPU 架构上的最佳向量指令，从而实现优于等效标量计算的性能。</p><p>向量 API 的目标是为用户提供简洁易用且与平台无关的表达范围广泛的向量计算。</p><p>这是对数组元素的简单标量计算：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">scalarComputation</span><span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">float</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b<span class="token punctuation">,</span> <span class="token keyword">float</span><span class="token punctuation">[</span><span class="token punctuation">]</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        c<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token operator">-</span><span class="token number">1.0f</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是使用 Vector API 进行的等效向量计算：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">VectorSpecies</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Float</span><span class="token punctuation">&gt;</span></span> <span class="token constant">SPECIES</span> <span class="token operator">=</span> <span class="token class-name">FloatVector</span><span class="token punctuation">.</span><span class="token constant">SPECIES_PREFERRED</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">vectorComputation</span><span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">float</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b<span class="token punctuation">,</span> <span class="token keyword">float</span><span class="token punctuation">[</span><span class="token punctuation">]</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> upperBound <span class="token operator">=</span> <span class="token constant">SPECIES</span><span class="token punctuation">.</span><span class="token function">loopBound</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> upperBound<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token constant">SPECIES</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// FloatVector va, vb, vc;</span>
        <span class="token keyword">var</span> va <span class="token operator">=</span> <span class="token class-name">FloatVector</span><span class="token punctuation">.</span><span class="token function">fromArray</span><span class="token punctuation">(</span><span class="token constant">SPECIES</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> vb <span class="token operator">=</span> <span class="token class-name">FloatVector</span><span class="token punctuation">.</span><span class="token function">fromArray</span><span class="token punctuation">(</span><span class="token constant">SPECIES</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> vc <span class="token operator">=</span> va<span class="token punctuation">.</span><span class="token function">mul</span><span class="token punctuation">(</span>va<span class="token punctuation">)</span>
                   <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>vb<span class="token punctuation">.</span><span class="token function">mul</span><span class="token punctuation">(</span>vb<span class="token punctuation">)</span><span class="token punctuation">)</span>
                   <span class="token punctuation">.</span><span class="token function">neg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        vc<span class="token punctuation">.</span><span class="token function">intoArray</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        c<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token operator">-</span><span class="token number">1.0f</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 JDK 18 中，向量 API 的性能得到了进一步的优化。</p><h2 id="jep-418-互联网地址解析-spi" tabindex="-1"><a class="header-anchor" href="#jep-418-互联网地址解析-spi" aria-hidden="true">#</a> JEP 418:互联网地址解析 SPI</h2><p>Java 18 定义了一个全新的 SPI（service-provider interface），用于主要名称和地址的解析，以便 <code>java.net.InetAddress</code> 可以使用平台之外的第三方解析器。</p><h2 id="jep-419-foreign-function-memory-api-第二次孵化" tabindex="-1"><a class="header-anchor" href="#jep-419-foreign-function-memory-api-第二次孵化" aria-hidden="true">#</a> JEP 419:Foreign Function &amp; Memory API（第二次孵化）</h2><p>Java 程序可以通过该 API 与 Java 运行时之外的代码和数据进行互操作。通过高效地调用外部函数（即 JVM 之外的代码）和安全地访问外部内存（即不受 JVM 管理的内存），该 API 使 Java 程序能够调用本机库并处理本机数据，而不会像 JNI 那样危险和脆弱。</p>`,11),D={href:"https://openjdk.java.net/jeps/412",target:"_blank",rel:"noopener noreferrer"},q={href:"https://openjdk.org/jeps/419",target:"_blank",rel:"noopener noreferrer"},B={href:"https://openjdk.org/jeps/424",target:"_blank",rel:"noopener noreferrer"};function M(T,U){const e=t("ExternalLinkIcon"),o=t("RouterLink");return l(),i("div",null,[d,k,n("ul",null,[n("li",null,[n("a",v,[a("JEP 400:UTF-8 by Default（默认字符集为 UTF-8）"),s(e)])]),n("li",null,[n("a",h,[a("JEP 408:Simple Web Server（简易的 Web 服务器）"),s(e)])]),n("li",null,[n("a",b,[a("JEP 413:Code Snippets in Java API Documentation（Java API 文档中的代码片段）"),s(e)])]),n("li",null,[n("a",m,[a("JEP 416:Reimplement Core Reflection with Method Handles（使用方法句柄重新实现反射核心）"),s(e)])]),n("li",null,[n("a",f,[a("JEP 417:Vector（向量） API "),s(e)]),a("（第三次孵化）")]),n("li",null,[n("a",j,[a("JEP 418:Internet-Address Resolution（互联网地址解析）SPI"),s(e)])]),n("li",null,[n("a",_,[a("JEP 419:Foreign Function & Memory API（外部函数和内存 API）"),s(e)]),a("（第二次孵化）")]),n("li",null,[n("a",g,[a("JEP 420:Pattern Matching for switch（switch 模式匹配）"),s(e)]),a("（第二次预览）")]),n("li",null,[n("a",J,[a("JEP 421:Deprecate Finalization for Removal"),s(e)])])]),P,E,w,n("ul",null,[n("li",null,[n("a",I,[a("OpenJDK Java 18 文档"),s(e)])]),n("li",null,[n("a",y,[a("IntelliJ IDEA | Java 18 功能支持"),s(e)])])]),A,n("p",null,[a("向量（Vector） API 最初由 "),n("a",S,[a("JEP 338"),s(e)]),a(" 提出，并作为"),n("a",x,[a("孵化 API"),s(e)]),a("集成到 Java 16 中。第二轮孵化由 "),n("a",F,[a("JEP 414"),s(e)]),a(" 提出并集成到 Java 17 中，第三轮孵化由 "),n("a",C,[a("JEP 417"),s(e)]),a(" 提出并集成到 Java 18 中，第四轮由 "),n("a",V,[a("JEP 426"),s(e)]),a(" 提出并集成到了 Java 19 中。")]),R,n("p",null,[a("外部函数和内存 API 在 Java 17 中进行了第一轮孵化，由 "),n("a",D,[a("JEP 412"),s(e)]),a(" 提出。第二轮孵化由"),n("a",q,[a(" JEP 419"),s(e)]),a(" 提出并集成到了 Java 18 中，预览由 "),n("a",B,[a("JEP 424"),s(e)]),a(" 提出并集成到了 Java 19 中。")]),n("p",null,[a("在 "),s(o,{to:"/java/new-features/java19.html"},{default:r(()=>[a("Java 19 新特性概览")]),_:1}),a(" 中，我有详细介绍到外部函数和内存 API，这里就不再做额外的介绍了。")])])}const K=c(u,[["render",M],["__file","java18.html.vue"]]);export{K as default};
