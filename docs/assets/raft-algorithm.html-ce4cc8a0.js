const e=JSON.parse('{"key":"v-8dc4bb1a","path":"/distributed-system/theorem_algorithm_protocol/raft-algorithm.html","title":"Raft 算法","lang":"zh-CN","frontmatter":{"title":"Raft 算法","category":["分布式"],"tag":["分布式协议&算法"],"description":"本文由 SnailClimb 和 Xieqijun 共同完成。 1 背景 当今的数据中心和应用程序在高度动态的环境中运行，为了应对高度动态的环境，它们通过额外的服务器进行横向扩展，并且根据需求进行扩展和收缩。同时，服务器和网络故障也很常见。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/distributed-system/theorem_algorithm_protocol/raft-algorithm.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"Raft 算法"}],["meta",{"property":"og:description","content":"本文由 SnailClimb 和 Xieqijun 共同完成。 1 背景 当今的数据中心和应用程序在高度动态的环境中运行，为了应对高度动态的环境，它们通过额外的服务器进行横向扩展，并且根据需求进行扩展和收缩。同时，服务器和网络故障也很常见。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"分布式协议&算法"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Raft 算法\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1 背景","slug":"_1-背景","link":"#_1-背景","children":[{"level":3,"title":"1.1 拜占庭将军","slug":"_1-1-拜占庭将军","link":"#_1-1-拜占庭将军","children":[]},{"level":3,"title":"1.2 共识算法","slug":"_1-2-共识算法","link":"#_1-2-共识算法","children":[]}]},{"level":2,"title":"2 基础","slug":"_2-基础","link":"#_2-基础","children":[{"level":3,"title":"2.1 节点类型","slug":"_2-1-节点类型","link":"#_2-1-节点类型","children":[]},{"level":3,"title":"2.2 任期","slug":"_2-2-任期","link":"#_2-2-任期","children":[]},{"level":3,"title":"2.3 日志","slug":"_2-3-日志","link":"#_2-3-日志","children":[]}]},{"level":2,"title":"3 领导人选举","slug":"_3-领导人选举","link":"#_3-领导人选举","children":[]},{"level":2,"title":"4 日志复制","slug":"_4-日志复制","link":"#_4-日志复制","children":[]},{"level":2,"title":"5 安全性","slug":"_5-安全性","link":"#_5-安全性","children":[{"level":3,"title":"5.1 选举限制","slug":"_5-1-选举限制","link":"#_5-1-选举限制","children":[]},{"level":3,"title":"5.2 节点崩溃","slug":"_5-2-节点崩溃","link":"#_5-2-节点崩溃","children":[]},{"level":3,"title":"5.3 时间与可用性","slug":"_5-3-时间与可用性","link":"#_5-3-时间与可用性","children":[]}]},{"level":2,"title":"6 参考","slug":"_6-参考","link":"#_6-参考","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":12.14,"words":3641},"filePathRelative":"distributed-system/theorem&algorithm&protocol/raft-algorithm.md","excerpt":"<blockquote>\\n<p>本文由 <a href=\\"https://github.com/Snailclimb\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">SnailClimb</a> 和 <a href=\\"https://github.com/jun0315\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Xieqijun</a> 共同完成。</p>\\n</blockquote>\\n<h2> 1 背景</h2>\\n<p>当今的数据中心和应用程序在高度动态的环境中运行，为了应对高度动态的环境，它们通过额外的服务器进行横向扩展，并且根据需求进行扩展和收缩。同时，服务器和网络故障也很常见。</p>","copyright":{},"autoDesc":true}');export{e as data};
