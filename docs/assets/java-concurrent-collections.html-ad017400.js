const e=JSON.parse('{"key":"v-809beb1a","path":"/java/concurrent/java-concurrent-collections.html","title":"Java 常见并发容器总结","lang":"zh-CN","frontmatter":{"title":"Java 常见并发容器总结","category":["Java"],"tag":["Java并发"],"description":"JDK 提供的这些容器大部分在 java.util.concurrent 包中。 ConcurrentHashMap : 线程安全的 HashMap CopyOnWriteArrayList : 线程安全的 List，在读多写少的场合性能非常好，远远好于 Vector。 ConcurrentLinkedQueue : 高效的并发队列，使用链表实现。可以看做一个线程安全的 LinkedList，这是一个非阻塞队列。 BlockingQueue : 这是一个接口，JDK 内部通过链表、数组等方式实现了这个接口。表示阻塞队列，非常适合用于作为数据共享的通道。 ConcurrentSkipListMap : 跳表的实现。这是一个 Map，使用跳表的数据结构进行快速查找。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/concurrent/java-concurrent-collections.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"Java 常见并发容器总结"}],["meta",{"property":"og:description","content":"JDK 提供的这些容器大部分在 java.util.concurrent 包中。 ConcurrentHashMap : 线程安全的 HashMap CopyOnWriteArrayList : 线程安全的 List，在读多写少的场合性能非常好，远远好于 Vector。 ConcurrentLinkedQueue : 高效的并发队列，使用链表实现。可以看做一个线程安全的 LinkedList，这是一个非阻塞队列。 BlockingQueue : 这是一个接口，JDK 内部通过链表、数组等方式实现了这个接口。表示阻塞队列，非常适合用于作为数据共享的通道。 ConcurrentSkipListMap : 跳表的实现。这是一个 Map，使用跳表的数据结构进行快速查找。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-23T10:39:58.000Z"}],["meta",{"property":"article:tag","content":"Java并发"}],["meta",{"property":"article:modified_time","content":"2023-02-23T10:39:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 常见并发容器总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-23T10:39:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"ConcurrentHashMap","slug":"concurrenthashmap","link":"#concurrenthashmap","children":[]},{"level":2,"title":"CopyOnWriteArrayList","slug":"copyonwritearraylist","link":"#copyonwritearraylist","children":[{"level":3,"title":"CopyOnWriteArrayList 简介","slug":"copyonwritearraylist-简介","link":"#copyonwritearraylist-简介","children":[]},{"level":3,"title":"CopyOnWriteArrayList 是如何做到的？","slug":"copyonwritearraylist-是如何做到的","link":"#copyonwritearraylist-是如何做到的","children":[]},{"level":3,"title":"CopyOnWriteArrayList 读取和写入源码简单分析","slug":"copyonwritearraylist-读取和写入源码简单分析","link":"#copyonwritearraylist-读取和写入源码简单分析","children":[]}]},{"level":2,"title":"ConcurrentLinkedQueue","slug":"concurrentlinkedqueue","link":"#concurrentlinkedqueue","children":[]},{"level":2,"title":"BlockingQueue","slug":"blockingqueue","link":"#blockingqueue","children":[{"level":3,"title":"BlockingQueue 简介","slug":"blockingqueue-简介","link":"#blockingqueue-简介","children":[]},{"level":3,"title":"ArrayBlockingQueue","slug":"arrayblockingqueue","link":"#arrayblockingqueue","children":[]},{"level":3,"title":"LinkedBlockingQueue","slug":"linkedblockingqueue","link":"#linkedblockingqueue","children":[]},{"level":3,"title":"PriorityBlockingQueue","slug":"priorityblockingqueue","link":"#priorityblockingqueue","children":[]}]},{"level":2,"title":"ConcurrentSkipListMap","slug":"concurrentskiplistmap","link":"#concurrentskiplistmap","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1677148798000,"updatedTime":1677148798000,"contributors":[{"name":"xiaobai-myh123","email":"xiaobaix25@gamil.com","commits":1}]},"readingTime":{"minutes":10.06,"words":3019},"filePathRelative":"java/concurrent/java-concurrent-collections.md","localizedDate":"2023年2月23日","excerpt":"<p>JDK 提供的这些容器大部分在 <code>java.util.concurrent</code> 包中。</p>\\n<ul>\\n<li><strong><code>ConcurrentHashMap</code></strong> : 线程安全的 <code>HashMap</code></li>\\n<li><strong><code>CopyOnWriteArrayList</code></strong> : 线程安全的 <code>List</code>，在读多写少的场合性能非常好，远远好于 <code>Vector</code>。</li>\\n<li><strong><code>ConcurrentLinkedQueue</code></strong> : 高效的并发队列，使用链表实现。可以看做一个线程安全的 <code>LinkedList</code>，这是一个非阻塞队列。</li>\\n<li><strong><code>BlockingQueue</code></strong> : 这是一个接口，JDK 内部通过链表、数组等方式实现了这个接口。表示阻塞队列，非常适合用于作为数据共享的通道。</li>\\n<li><strong><code>ConcurrentSkipListMap</code></strong> : 跳表的实现。这是一个 Map，使用跳表的数据结构进行快速查找。</li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
