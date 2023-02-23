const t=JSON.parse('{"key":"v-3dcfcf4e","path":"/java/jvm/jdk-monitoring-and-troubleshooting-tools.html","title":"JDK 监控和故障处理工具总结","lang":"zh-CN","frontmatter":{"category":["Java"],"tag":["JVM"],"description":"JDK 监控和故障处理工具总结 JDK 命令行工具 这些命令在 JDK 安装目录下的 bin 目录下： jps (JVM Process Status）: 类似 UNIX 的 ps 命令。用于查看所有 Java 进程的启动类、传入参数和 Java 虚拟机参数等信息； jstat（JVM Statistics Monitoring Tool）: 用于收集 HotSpot 虚拟机各方面的运行数据; jinfo (Configuration Info for Java) : Configuration Info for Java,显示虚拟机配置信息; jmap (Memory Map for Java) : 生成堆转储快照; jhat (JVM Heap Dump Browser) : 用于分析 heapdump 文件，它会建立一个 HTTP/HTML 服务器，让用户可以在浏览器上查看分析结果; jstack (Stack Trace for Java) : 生成虚拟机当前时刻的线程快照，线程快照就是当前虚拟机内每一条线程正在执行的方法堆栈的集合。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/jvm/jdk-monitoring-and-troubleshooting-tools.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"JDK 监控和故障处理工具总结"}],["meta",{"property":"og:description","content":"JDK 监控和故障处理工具总结 JDK 命令行工具 这些命令在 JDK 安装目录下的 bin 目录下： jps (JVM Process Status）: 类似 UNIX 的 ps 命令。用于查看所有 Java 进程的启动类、传入参数和 Java 虚拟机参数等信息； jstat（JVM Statistics Monitoring Tool）: 用于收集 HotSpot 虚拟机各方面的运行数据; jinfo (Configuration Info for Java) : Configuration Info for Java,显示虚拟机配置信息; jmap (Memory Map for Java) : 生成堆转储快照; jhat (JVM Heap Dump Browser) : 用于分析 heapdump 文件，它会建立一个 HTTP/HTML 服务器，让用户可以在浏览器上查看分析结果; jstack (Stack Trace for Java) : 生成虚拟机当前时刻的线程快照，线程快照就是当前虚拟机内每一条线程正在执行的方法堆栈的集合。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://javaguide.cn/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"JDK 监控和故障处理工具总结"}],["meta",{"property":"article:tag","content":"JVM"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JDK 监控和故障处理工具总结\\",\\"image\\":[\\"https://javaguide.cn/\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"JDK 命令行工具","slug":"jdk-命令行工具","link":"#jdk-命令行工具","children":[{"level":3,"title":"jps:查看所有 Java 进程","slug":"jps-查看所有-java-进程","link":"#jps-查看所有-java-进程","children":[]},{"level":3,"title":"jstat: 监视虚拟机各种运行状态信息","slug":"jstat-监视虚拟机各种运行状态信息","link":"#jstat-监视虚拟机各种运行状态信息","children":[]},{"level":3,"title":"jinfo: 实时地查看和调整虚拟机各项参数","slug":"jinfo-实时地查看和调整虚拟机各项参数","link":"#jinfo-实时地查看和调整虚拟机各项参数","children":[]},{"level":3,"title":"jmap:生成堆转储快照","slug":"jmap-生成堆转储快照","link":"#jmap-生成堆转储快照","children":[]},{"level":3,"title":"jhat: 分析 heapdump 文件","slug":"jhat-分析-heapdump-文件","link":"#jhat-分析-heapdump-文件","children":[]},{"level":3,"title":"jstack :生成虚拟机当前时刻的线程快照","slug":"jstack-生成虚拟机当前时刻的线程快照","link":"#jstack-生成虚拟机当前时刻的线程快照","children":[]}]},{"level":2,"title":"JDK 可视化分析工具","slug":"jdk-可视化分析工具","link":"#jdk-可视化分析工具","children":[{"level":3,"title":"JConsole:Java 监视与管理控制台","slug":"jconsole-java-监视与管理控制台","link":"#jconsole-java-监视与管理控制台","children":[]},{"level":3,"title":"Visual VM:多合一故障处理工具","slug":"visual-vm-多合一故障处理工具","link":"#visual-vm-多合一故障处理工具","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":9.95,"words":2985},"filePathRelative":"java/jvm/jdk-monitoring-and-troubleshooting-tools.md","excerpt":"<h1> JDK 监控和故障处理工具总结</h1>\\n<h2> JDK 命令行工具</h2>\\n<p>这些命令在 JDK 安装目录下的 bin 目录下：</p>\\n<ul>\\n<li><strong><code>jps</code></strong> (JVM Process Status）: 类似 UNIX 的 <code>ps</code> 命令。用于查看所有 Java 进程的启动类、传入参数和 Java 虚拟机参数等信息；</li>\\n<li><strong><code>jstat</code></strong>（JVM Statistics Monitoring Tool）:  用于收集 HotSpot 虚拟机各方面的运行数据;</li>\\n<li><strong><code>jinfo</code></strong> (Configuration Info for Java) : Configuration Info for Java,显示虚拟机配置信息;</li>\\n<li><strong><code>jmap</code></strong> (Memory Map for Java) : 生成堆转储快照;</li>\\n<li><strong><code>jhat</code></strong> (JVM Heap Dump Browser) : 用于分析 heapdump 文件，它会建立一个 HTTP/HTML 服务器，让用户可以在浏览器上查看分析结果;</li>\\n<li><strong><code>jstack</code></strong> (Stack Trace for Java) : 生成虚拟机当前时刻的线程快照，线程快照就是当前虚拟机内每一条线程正在执行的方法堆栈的集合。</li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
