const e=JSON.parse('{"key":"v-60dc87cc","path":"/database/mysql/mysql-index.html","title":"MySQL索引详解","lang":"zh-CN","frontmatter":{"title":"MySQL索引详解","category":["数据库"],"tag":["MySQL"],"description":"感谢WT-AHA对本文的完善，相关 PR：https://github.com/Snailclimb/JavaGuide/pull/1648 。 但凡经历过几场面试的小伙伴，应该都清楚，数据库索引这个知识点在面试中出现的频率高到离谱。 除了对于准备面试来说非常重要之外，善用索引对 SQL 的性能提升非常明显，是一个性价比较高的 SQL 优化手段。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/database/mysql/mysql-index.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"MySQL索引详解"}],["meta",{"property":"og:description","content":"感谢WT-AHA对本文的完善，相关 PR：https://github.com/Snailclimb/JavaGuide/pull/1648 。 但凡经历过几场面试的小伙伴，应该都清楚，数据库索引这个知识点在面试中出现的频率高到离谱。 除了对于准备面试来说非常重要之外，善用索引对 SQL 的性能提升非常明显，是一个性价比较高的 SQL 优化手段。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-23T10:39:58.000Z"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:modified_time","content":"2023-02-23T10:39:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL索引详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-23T10:39:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"索引介绍","slug":"索引介绍","link":"#索引介绍","children":[]},{"level":2,"title":"索引的优缺点","slug":"索引的优缺点","link":"#索引的优缺点","children":[]},{"level":2,"title":"索引的底层数据结构","slug":"索引的底层数据结构","link":"#索引的底层数据结构","children":[{"level":3,"title":"Hash 表","slug":"hash-表","link":"#hash-表","children":[]},{"level":3,"title":"B 树& B+树","slug":"b-树-b-树","link":"#b-树-b-树","children":[]}]},{"level":2,"title":"索引类型","slug":"索引类型","link":"#索引类型","children":[{"level":3,"title":"主键索引(Primary Key)","slug":"主键索引-primary-key","link":"#主键索引-primary-key","children":[]},{"level":3,"title":"二级索引(辅助索引)","slug":"二级索引-辅助索引","link":"#二级索引-辅助索引","children":[]}]},{"level":2,"title":"聚簇索引与非聚簇索引","slug":"聚簇索引与非聚簇索引","link":"#聚簇索引与非聚簇索引","children":[{"level":3,"title":"聚簇索引（聚集索引）","slug":"聚簇索引-聚集索引","link":"#聚簇索引-聚集索引","children":[]},{"level":3,"title":"非聚簇索引（非聚集索引）","slug":"非聚簇索引-非聚集索引","link":"#非聚簇索引-非聚集索引","children":[]}]},{"level":2,"title":"覆盖索引和联合索引","slug":"覆盖索引和联合索引","link":"#覆盖索引和联合索引","children":[{"level":3,"title":"覆盖索引","slug":"覆盖索引","link":"#覆盖索引","children":[]},{"level":3,"title":"联合索引","slug":"联合索引","link":"#联合索引","children":[]},{"level":3,"title":"最左前缀匹配原则","slug":"最左前缀匹配原则","link":"#最左前缀匹配原则","children":[]}]},{"level":2,"title":"索引下推","slug":"索引下推","link":"#索引下推","children":[]},{"level":2,"title":"正确使用索引的一些建议","slug":"正确使用索引的一些建议","link":"#正确使用索引的一些建议","children":[{"level":3,"title":"选择合适的字段创建索引","slug":"选择合适的字段创建索引","link":"#选择合适的字段创建索引","children":[]},{"level":3,"title":"被频繁更新的字段应该慎重建立索引","slug":"被频繁更新的字段应该慎重建立索引","link":"#被频繁更新的字段应该慎重建立索引","children":[]},{"level":3,"title":"尽可能的考虑建立联合索引而不是单列索引","slug":"尽可能的考虑建立联合索引而不是单列索引","link":"#尽可能的考虑建立联合索引而不是单列索引","children":[]},{"level":3,"title":"注意避免冗余索引","slug":"注意避免冗余索引","link":"#注意避免冗余索引","children":[]},{"level":3,"title":"考虑在字符串类型的字段上使用前缀索引代替普通索引","slug":"考虑在字符串类型的字段上使用前缀索引代替普通索引","link":"#考虑在字符串类型的字段上使用前缀索引代替普通索引","children":[]},{"level":3,"title":"避免索引失效","slug":"避免索引失效","link":"#避免索引失效","children":[]},{"level":3,"title":"删除长期未使用的索引","slug":"删除长期未使用的索引","link":"#删除长期未使用的索引","children":[]}]}],"git":{"createdTime":1677148798000,"updatedTime":1677148798000,"contributors":[{"name":"xiaobai-myh123","email":"xiaobaix25@gamil.com","commits":1}]},"readingTime":{"minutes":15.37,"words":4611},"filePathRelative":"database/mysql/mysql-index.md","localizedDate":"2023年2月23日","excerpt":"<blockquote>\\n<p>感谢<a href=\\"https://github.com/WT-AHA\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">WT-AHA</a>对本文的完善，相关 PR：https://github.com/Snailclimb/JavaGuide/pull/1648 。</p>\\n</blockquote>\\n<p>但凡经历过几场面试的小伙伴，应该都清楚，数据库索引这个知识点在面试中出现的频率高到离谱。</p>\\n<p>除了对于准备面试来说非常重要之外，善用索引对 SQL 的性能提升非常明显，是一个性价比较高的 SQL 优化手段。</p>","copyright":{},"autoDesc":true}');export{e as data};
