const t=JSON.parse('{"key":"v-a00f03b0","path":"/cs-basics/network/http1.0_http1.1.html","title":"HTTP 1.0 vs HTTP 1.1（应用层）","lang":"zh-CN","frontmatter":{"title":"HTTP 1.0 vs HTTP 1.1（应用层）","category":["计算机基础"],"tag":["计算机网络"],"description":"这篇文章会从下面几个维度来对比 HTTP 1.0 和 HTTP 1.1： 响应状态码 缓存处理 连接方式 Host头处理 带宽优化 响应状态码 HTTP/1.0仅定义了16种状态码。HTTP/1.1中新加入了大量的状态码，光是错误响应状态码就新增了24种。比如说，100 (Continue)——在请求大资源前的预热请求，206 (Partial Content)——范围请求的标识码，409 (Conflict)——请求与当前资源的规定冲突，410 (Gone)——资源已被永久转移，而且没有任何已知的转发地址。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/cs-basics/network/http1.0_http1.1.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"HTTP 1.0 vs HTTP 1.1（应用层）"}],["meta",{"property":"og:description","content":"这篇文章会从下面几个维度来对比 HTTP 1.0 和 HTTP 1.1： 响应状态码 缓存处理 连接方式 Host头处理 带宽优化 响应状态码 HTTP/1.0仅定义了16种状态码。HTTP/1.1中新加入了大量的状态码，光是错误响应状态码就新增了24种。比如说，100 (Continue)——在请求大资源前的预热请求，206 (Partial Content)——范围请求的标识码，409 (Conflict)——请求与当前资源的规定冲突，410 (Gone)——资源已被永久转移，而且没有任何已知的转发地址。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://javaguide.cn/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"HTTP 1.0 vs HTTP 1.1（应用层）"}],["meta",{"property":"article:tag","content":"计算机网络"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTP 1.0 vs HTTP 1.1（应用层）\\",\\"image\\":[\\"https://javaguide.cn/\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"响应状态码","slug":"响应状态码","link":"#响应状态码","children":[]},{"level":2,"title":"缓存处理","slug":"缓存处理","link":"#缓存处理","children":[{"level":3,"title":"HTTP/1.0","slug":"http-1-0","link":"#http-1-0","children":[]},{"level":3,"title":"HTTP/1.1","slug":"http-1-1","link":"#http-1-1","children":[]}]},{"level":2,"title":"连接方式","slug":"连接方式","link":"#连接方式","children":[]},{"level":2,"title":"Host头处理","slug":"host头处理","link":"#host头处理","children":[]},{"level":2,"title":"带宽优化","slug":"带宽优化","link":"#带宽优化","children":[{"level":3,"title":"范围请求","slug":"范围请求","link":"#范围请求","children":[]},{"level":3,"title":"状态码100","slug":"状态码100","link":"#状态码100","children":[]},{"level":3,"title":"压缩","slug":"压缩","link":"#压缩","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":7.39,"words":2217},"filePathRelative":"cs-basics/network/http1.0&http1.1.md","excerpt":"<p>这篇文章会从下面几个维度来对比 HTTP 1.0 和 HTTP 1.1：</p>\\n<ul>\\n<li>响应状态码</li>\\n<li>缓存处理</li>\\n<li>连接方式</li>\\n<li>Host头处理</li>\\n<li>带宽优化</li>\\n</ul>\\n<h2> 响应状态码</h2>\\n<p>HTTP/1.0仅定义了16种状态码。HTTP/1.1中新加入了大量的状态码，光是错误响应状态码就新增了24种。比如说，<code>100 (Continue)</code>——在请求大资源前的预热请求，<code>206 (Partial Content)</code>——范围请求的标识码，<code>409 (Conflict)</code>——请求与当前资源的规定冲突，<code>410 (Gone)</code>——资源已被永久转移，而且没有任何已知的转发地址。</p>","copyright":{},"autoDesc":true}');export{t as data};
