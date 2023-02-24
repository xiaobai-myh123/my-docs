const a=JSON.parse('{"key":"v-921f223a","path":"/java/basis/bigdecimal.html","title":"BigDecimal 详解","lang":"zh-CN","frontmatter":{"title":"BigDecimal 详解","category":["Java"],"tag":["Java基础"],"description":"《阿里巴巴 Java 开发手册》中提到：“为了避免精度丢失，可以使用 BigDecimal 来进行浮点数的运算”。 浮点数的运算竟然还会有精度丢失的风险吗？确实会！ 示例代码： float a = 2.0f - 1.9f; float b = 1.8f - 1.7f; System.out.println(a);// 0.100000024 System.out.println(b);// 0.099999905 System.out.println(a == b);// false","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/basis/bigdecimal.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"BigDecimal 详解"}],["meta",{"property":"og:description","content":"《阿里巴巴 Java 开发手册》中提到：“为了避免精度丢失，可以使用 BigDecimal 来进行浮点数的运算”。 浮点数的运算竟然还会有精度丢失的风险吗？确实会！ 示例代码： float a = 2.0f - 1.9f; float b = 1.8f - 1.7f; System.out.println(a);// 0.100000024 System.out.println(b);// 0.099999905 System.out.println(a == b);// false"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-23T10:39:58.000Z"}],["meta",{"property":"article:tag","content":"Java基础"}],["meta",{"property":"article:modified_time","content":"2023-02-23T10:39:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"BigDecimal 详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-23T10:39:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"BigDecimal 介绍","slug":"bigdecimal-介绍","link":"#bigdecimal-介绍","children":[]},{"level":2,"title":"BigDecimal 常见方法","slug":"bigdecimal-常见方法","link":"#bigdecimal-常见方法","children":[{"level":3,"title":"创建","slug":"创建","link":"#创建","children":[]},{"level":3,"title":"加减乘除","slug":"加减乘除","link":"#加减乘除","children":[]},{"level":3,"title":"大小比较","slug":"大小比较","link":"#大小比较","children":[]},{"level":3,"title":"保留几位小数","slug":"保留几位小数","link":"#保留几位小数","children":[]}]},{"level":2,"title":"BigDecimal 等值比较问题","slug":"bigdecimal-等值比较问题","link":"#bigdecimal-等值比较问题","children":[]},{"level":2,"title":"BigDecimal 工具类分享","slug":"bigdecimal-工具类分享","link":"#bigdecimal-工具类分享","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1677148798000,"updatedTime":1677148798000,"contributors":[{"name":"xiaobai-myh123","email":"xiaobaix25@gamil.com","commits":1}]},"readingTime":{"minutes":7.14,"words":2143},"filePathRelative":"java/basis/bigdecimal.md","localizedDate":"2023年2月23日","excerpt":"<p>《阿里巴巴 Java 开发手册》中提到：“为了避免精度丢失，可以使用 <code>BigDecimal</code> 来进行浮点数的运算”。</p>\\n<p>浮点数的运算竟然还会有精度丢失的风险吗？确实会！</p>\\n<p>示例代码：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">float</span> a <span class=\\"token operator\\">=</span> <span class=\\"token number\\">2.0f</span> <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1.9f</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">float</span> b <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1.8f</span> <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1.7f</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// 0.100000024</span>\\n<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>b<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// 0.099999905</span>\\n<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>a <span class=\\"token operator\\">==</span> b<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// false</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{a as data};
