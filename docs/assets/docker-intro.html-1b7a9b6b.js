const e=JSON.parse('{"key":"v-eb853f10","path":"/tools/docker/docker-intro.html","title":"Docker 基本概念解读","lang":"zh-CN","frontmatter":{"title":"Docker 基本概念解读","category":["开发工具"],"tag":["Docker"],"description":"本文只是对 Docker 的概念做了较为详细的介绍，并不涉及一些像 Docker 环境的安装以及 Docker 的一些常见操作和命令。 一 认识容器 Docker 是世界领先的软件容器平台，所以想要搞懂 Docker 的概念我们必须先从容器开始说起。 1.1 什么是容器? 先来看看容器较为官方的解释 一句话概括容器：容器就是将软件打包成标准化单元，以用于开发、交付和部署。 容器镜像是轻量的、可执行的独立软件包 ，包含软件运行所需的所有内容：代码、运行时环境、系统工具、系统库和设置。 容器化软件适用于基于 Linux 和 Windows 的应用，在任何环境中都能够始终如一地运行。 容器赋予了软件独立性，使其免受外在环境差异（例如，开发和预演环境的差异）的影响，从而有助于减少团队间在相同基础设施上运行不同软件时的冲突。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/tools/docker/docker-intro.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"Docker 基本概念解读"}],["meta",{"property":"og:description","content":"本文只是对 Docker 的概念做了较为详细的介绍，并不涉及一些像 Docker 环境的安装以及 Docker 的一些常见操作和命令。 一 认识容器 Docker 是世界领先的软件容器平台，所以想要搞懂 Docker 的概念我们必须先从容器开始说起。 1.1 什么是容器? 先来看看容器较为官方的解释 一句话概括容器：容器就是将软件打包成标准化单元，以用于开发、交付和部署。 容器镜像是轻量的、可执行的独立软件包 ，包含软件运行所需的所有内容：代码、运行时环境、系统工具、系统库和设置。 容器化软件适用于基于 Linux 和 Windows 的应用，在任何环境中都能够始终如一地运行。 容器赋予了软件独立性，使其免受外在环境差异（例如，开发和预演环境的差异）的影响，从而有助于减少团队间在相同基础设施上运行不同软件时的冲突。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Docker"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker 基本概念解读\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一 认识容器","slug":"一-认识容器","link":"#一-认识容器","children":[{"level":3,"title":"1.1 什么是容器?","slug":"_1-1-什么是容器","link":"#_1-1-什么是容器","children":[]},{"level":3,"title":"1.2 图解物理机,虚拟机与容器","slug":"_1-2-图解物理机-虚拟机与容器","link":"#_1-2-图解物理机-虚拟机与容器","children":[]}]},{"level":2,"title":"二 再来谈谈 Docker 的一些概念","slug":"二-再来谈谈-docker-的一些概念","link":"#二-再来谈谈-docker-的一些概念","children":[{"level":3,"title":"2.1 什么是 Docker?","slug":"_2-1-什么是-docker","link":"#_2-1-什么是-docker","children":[]},{"level":3,"title":"2.2 Docker 思想","slug":"_2-2-docker-思想","link":"#_2-2-docker-思想","children":[]},{"level":3,"title":"2.3 Docker 容器的特点","slug":"_2-3-docker-容器的特点","link":"#_2-3-docker-容器的特点","children":[]},{"level":3,"title":"2.4 为什么要用 Docker ?","slug":"_2-4-为什么要用-docker","link":"#_2-4-为什么要用-docker","children":[]}]},{"level":2,"title":"三 容器 VS 虚拟机","slug":"三-容器-vs-虚拟机","link":"#三-容器-vs-虚拟机","children":[{"level":3,"title":"3.1 两者对比图","slug":"_3-1-两者对比图","link":"#_3-1-两者对比图","children":[]},{"level":3,"title":"3.2 容器与虚拟机总结","slug":"_3-2-容器与虚拟机总结","link":"#_3-2-容器与虚拟机总结","children":[]},{"level":3,"title":"3.3 容器与虚拟机两者是可以共存的","slug":"_3-3-容器与虚拟机两者是可以共存的","link":"#_3-3-容器与虚拟机两者是可以共存的","children":[]}]},{"level":2,"title":"四 Docker 基本概念","slug":"四-docker-基本概念","link":"#四-docker-基本概念","children":[{"level":3,"title":"4.1 镜像(Image):一个特殊的文件系统","slug":"_4-1-镜像-image-一个特殊的文件系统","link":"#_4-1-镜像-image-一个特殊的文件系统","children":[]},{"level":3,"title":"4.2 容器(Container):镜像运行时的实体","slug":"_4-2-容器-container-镜像运行时的实体","link":"#_4-2-容器-container-镜像运行时的实体","children":[]},{"level":3,"title":"4.3 仓库(Repository):集中存放镜像文件的地方","slug":"_4-3-仓库-repository-集中存放镜像文件的地方","link":"#_4-3-仓库-repository-集中存放镜像文件的地方","children":[]}]},{"level":2,"title":"五 常见命令","slug":"五-常见命令","link":"#五-常见命令","children":[{"level":3,"title":"5.1 基本命令","slug":"_5-1-基本命令","link":"#_5-1-基本命令","children":[]},{"level":3,"title":"5.2 拉取镜像","slug":"_5-2-拉取镜像","link":"#_5-2-拉取镜像","children":[]},{"level":3,"title":"5.3 删除镜像","slug":"_5-3-删除镜像","link":"#_5-3-删除镜像","children":[]}]},{"level":2,"title":"六 Build Ship and Run","slug":"六-build-ship-and-run","link":"#六-build-ship-and-run","children":[]},{"level":2,"title":"七 简单了解一下 Docker 底层原理","slug":"七-简单了解一下-docker-底层原理","link":"#七-简单了解一下-docker-底层原理","children":[{"level":3,"title":"7.1 虚拟化技术","slug":"_7-1-虚拟化技术","link":"#_7-1-虚拟化技术","children":[]},{"level":3,"title":"7.2 Docker 基于 LXC 虚拟容器技术","slug":"_7-2-docker-基于-lxc-虚拟容器技术","link":"#_7-2-docker-基于-lxc-虚拟容器技术","children":[]}]},{"level":2,"title":"八 总结","slug":"八-总结","link":"#八-总结","children":[]},{"level":2,"title":"九 推荐阅读","slug":"九-推荐阅读","link":"#九-推荐阅读","children":[]},{"level":2,"title":"十 参考","slug":"十-参考","link":"#十-参考","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":18.23,"words":5468},"filePathRelative":"tools/docker/docker-intro.md","excerpt":"<p><strong>本文只是对 Docker 的概念做了较为详细的介绍，并不涉及一些像 Docker 环境的安装以及 Docker 的一些常见操作和命令。</strong></p>\\n<h2> 一 认识容器</h2>\\n<p><strong>Docker 是世界领先的软件容器平台</strong>，所以想要搞懂 Docker 的概念我们必须先从容器开始说起。</p>\\n<h3> 1.1 什么是容器?</h3>\\n<h4> 先来看看容器较为官方的解释</h4>\\n<p><strong>一句话概括容器：容器就是将软件打包成标准化单元，以用于开发、交付和部署。</strong></p>\\n<ul>\\n<li><strong>容器镜像是轻量的、可执行的独立软件包</strong> ，包含软件运行所需的所有内容：代码、运行时环境、系统工具、系统库和设置。</li>\\n<li><strong>容器化软件适用于基于 Linux 和 Windows 的应用，在任何环境中都能够始终如一地运行。</strong></li>\\n<li><strong>容器赋予了软件独立性</strong>，使其免受外在环境差异（例如，开发和预演环境的差异）的影响，从而有助于减少团队间在相同基础设施上运行不同软件时的冲突。</li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
