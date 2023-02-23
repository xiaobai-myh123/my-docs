const e=JSON.parse('{"key":"v-388aeee0","path":"/java/basis/proxy.html","title":"Java 代理模式详解","lang":"zh-CN","frontmatter":{"title":"Java 代理模式详解","category":["Java"],"tag":["Java基础"],"description":"1. 代理模式 代理模式是一种比较好理解的设计模式。简单来说就是 我们使用代理对象来代替对真实对象(real object)的访问，这样就可以在不修改原目标对象的前提下，提供额外的功能操作，扩展目标对象的功能。 代理模式的主要作用是扩展目标对象的功能，比如说在目标对象的某个方法执行前后你可以增加一些自定义的操作。 举个例子：新娘找来了自己的姨妈来代替自己处理新郎的提问，新娘收到的提问都是经过姨妈处理过滤之后的。姨妈在这里就可以看作是代理你的代理对象，代理的行为（方法）是接收和回复新郎的提问。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/basis/proxy.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"Java 代理模式详解"}],["meta",{"property":"og:description","content":"1. 代理模式 代理模式是一种比较好理解的设计模式。简单来说就是 我们使用代理对象来代替对真实对象(real object)的访问，这样就可以在不修改原目标对象的前提下，提供额外的功能操作，扩展目标对象的功能。 代理模式的主要作用是扩展目标对象的功能，比如说在目标对象的某个方法执行前后你可以增加一些自定义的操作。 举个例子：新娘找来了自己的姨妈来代替自己处理新郎的提问，新娘收到的提问都是经过姨妈处理过滤之后的。姨妈在这里就可以看作是代理你的代理对象，代理的行为（方法）是接收和回复新郎的提问。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Java基础"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 代理模式详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 代理模式","slug":"_1-代理模式","link":"#_1-代理模式","children":[]},{"level":2,"title":"2. 静态代理","slug":"_2-静态代理","link":"#_2-静态代理","children":[]},{"level":2,"title":"3. 动态代理","slug":"_3-动态代理","link":"#_3-动态代理","children":[{"level":3,"title":"3.1. JDK 动态代理机制","slug":"_3-1-jdk-动态代理机制","link":"#_3-1-jdk-动态代理机制","children":[]},{"level":3,"title":"3.2. CGLIB 动态代理机制","slug":"_3-2-cglib-动态代理机制","link":"#_3-2-cglib-动态代理机制","children":[]},{"level":3,"title":"3.3. JDK 动态代理和 CGLIB 动态代理对比","slug":"_3-3-jdk-动态代理和-cglib-动态代理对比","link":"#_3-3-jdk-动态代理和-cglib-动态代理对比","children":[]}]},{"level":2,"title":"4. 静态代理和动态代理的对比","slug":"_4-静态代理和动态代理的对比","link":"#_4-静态代理和动态代理的对比","children":[]},{"level":2,"title":"5. 总结","slug":"_5-总结","link":"#_5-总结","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":10.38,"words":3115},"filePathRelative":"java/basis/proxy.md","excerpt":"<h2> 1. 代理模式</h2>\\n<p>代理模式是一种比较好理解的设计模式。简单来说就是 <strong>我们使用代理对象来代替对真实对象(real object)的访问，这样就可以在不修改原目标对象的前提下，提供额外的功能操作，扩展目标对象的功能。</strong></p>\\n<p><strong>代理模式的主要作用是扩展目标对象的功能，比如说在目标对象的某个方法执行前后你可以增加一些自定义的操作。</strong></p>\\n<p>举个例子：新娘找来了自己的姨妈来代替自己处理新郎的提问，新娘收到的提问都是经过姨妈处理过滤之后的。姨妈在这里就可以看作是代理你的代理对象，代理的行为（方法）是接收和回复新郎的提问。</p>","copyright":{},"autoDesc":true}');export{e as data};
