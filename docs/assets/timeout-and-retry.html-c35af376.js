const t=JSON.parse('{"key":"v-426ba955","path":"/high-availability/timeout-and-retry.html","title":"超时&重试详解","lang":"zh-CN","frontmatter":{"title":"超时&重试详解","category":["高可用"],"description":"由于网络问题、系统或者服务内部的 Bug、服务器宕机、操作系统崩溃等问题的不确定性，我们的系统或者服务永远不可能保证时刻都是可用的状态。 为了最大限度的减小系统或者服务出现故障之后带来的影响，我们需要用到的 超时（Timeout） 和 重试（Retry） 机制。 想要把超时和重试机制讲清楚其实很简单，因为它俩本身就不是什么高深的概念。 虽然超时和重试机制的思想很简单，但是它俩是真的非常实用。你平时接触到的绝大部分涉及到远程调用的系统或者服务都会应用超时和重试机制。尤其是对于微服务系统来说，正确设置超时和重试非常重要。单体服务通常只涉及数据库、缓存、第三方 API、中间件等的网络调用，而微服务系统内部各个服务之间还存在着网络调用。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/high-availability/timeout-and-retry.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"超时&重试详解"}],["meta",{"property":"og:description","content":"由于网络问题、系统或者服务内部的 Bug、服务器宕机、操作系统崩溃等问题的不确定性，我们的系统或者服务永远不可能保证时刻都是可用的状态。 为了最大限度的减小系统或者服务出现故障之后带来的影响，我们需要用到的 超时（Timeout） 和 重试（Retry） 机制。 想要把超时和重试机制讲清楚其实很简单，因为它俩本身就不是什么高深的概念。 虽然超时和重试机制的思想很简单，但是它俩是真的非常实用。你平时接触到的绝大部分涉及到远程调用的系统或者服务都会应用超时和重试机制。尤其是对于微服务系统来说，正确设置超时和重试非常重要。单体服务通常只涉及数据库、缓存、第三方 API、中间件等的网络调用，而微服务系统内部各个服务之间还存在着网络调用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"超时&重试详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"超时机制","slug":"超时机制","link":"#超时机制","children":[{"level":3,"title":"什么是超时机制？","slug":"什么是超时机制","link":"#什么是超时机制","children":[]},{"level":3,"title":"超时时间应该如何设置？","slug":"超时时间应该如何设置","link":"#超时时间应该如何设置","children":[]}]},{"level":2,"title":"重试机制","slug":"重试机制","link":"#重试机制","children":[{"level":3,"title":"什么是重试机制？","slug":"什么是重试机制","link":"#什么是重试机制","children":[]},{"level":3,"title":"重试的次数如何设置？","slug":"重试的次数如何设置","link":"#重试的次数如何设置","children":[]},{"level":3,"title":"重试幂等","slug":"重试幂等","link":"#重试幂等","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.61,"words":1683},"filePathRelative":"high-availability/timeout-and-retry.md","excerpt":"<p>由于网络问题、系统或者服务内部的 Bug、服务器宕机、操作系统崩溃等问题的不确定性，我们的系统或者服务永远不可能保证时刻都是可用的状态。</p>\\n<p>为了最大限度的减小系统或者服务出现故障之后带来的影响，我们需要用到的 <strong>超时（Timeout）</strong> 和 <strong>重试（Retry）</strong> 机制。</p>\\n<p>想要把超时和重试机制讲清楚其实很简单，因为它俩本身就不是什么高深的概念。</p>\\n<p>虽然超时和重试机制的思想很简单，但是它俩是真的非常实用。你平时接触到的绝大部分涉及到远程调用的系统或者服务都会应用超时和重试机制。尤其是对于微服务系统来说，正确设置超时和重试非常重要。单体服务通常只涉及数据库、缓存、第三方 API、中间件等的网络调用，而微服务系统内部各个服务之间还存在着网络调用。</p>","copyright":{},"autoDesc":true}');export{t as data};
