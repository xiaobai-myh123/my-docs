// docs/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// docs/.vuepress/themeConfig.ts
import { hopeTheme } from "vuepress-theme-hope";

// docs/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbarConfig = navbar([
  { text: "\u9762\u8BD5\u6307\u5357", icon: "java", link: "/home.md" },
  { text: "\u5F00\u6E90\u9879\u76EE", icon: "github", link: "/open-source-project/" },
  { text: "\u6280\u672F\u4E66\u7C4D", icon: "book", link: "/books/" },
  { text: "\u6280\u672F\u6587\u7AE0", icon: "article", link: "/high-quality-technical-articles/" },
  {
    text: "\u7F51\u7AD9\u76F8\u5173",
    icon: "about",
    children: [
      { text: "\u5173\u4E8E\u4F5C\u8005", icon: "zuozhe", link: "/about-the-author/" },
      {
        text: "\u66F4\u65B0\u5386\u53F2",
        icon: "history",
        link: "/timeline/"
      },
      {
        text: "\u65E7\u7248\u5165\u53E3",
        icon: "java",
        link: "https://snailclimb.gitee.io/javaguide/#/"
      },
      { text: "RSS", icon: "rss", link: "https://javaguide.cn/feed.json" }
    ]
  }
]);

// docs/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";

// docs/.vuepress/sidebar/high-quality-technical-articles.ts
var highQualityTechnicalArticles = [
  {
    text: "\u6D4B\u8BD51",
    icon: "et-performance",
    prefix: "advanced-programmer/",
    collapsable: false,
    children: [
      "seven-tips-for-becoming-an-advanced-programmer",
      "20-bad-habits-of-bad-programmers"
    ]
  }
  // {
  //   text: "测试2",
  //   icon: "experience",
  //   prefix: "personal-experience/",
  //   collapsable: false,
  //   children: [
  //     "8-years-programmer-work-summary",
  //     "huawei-od-275-days",
  //   ],
  // },
  // {
  //   text: "测试3",
  //   icon: "code",
  //   prefix: "programmer/",
  //   collapsable: false,
  //   children: [
  //     "how-do-programmers-publish-a-technical-book",
  //     "efficient-book-publishing-and-practice-guide",
  //   ],
  // },
  // {
  //   text: "测试4",
  //   icon: "interview",
  //   prefix: "interview/",
  //   collapsable: false,
  //   children: [
  //     "the-experience-of-get-offer-from-over-20-big-companies",
  //     "the-experience-and-thinking-of-an-interview-experienced-by-an-older-programmer",
  //     "technical-preliminary-preparation",
  //     "screen-candidates-for-packaging",
  //     "summary-of-spring-recruitment",
  //     "my-personal-experience-in-2021",
  //     "how-to-examine-the-technical-ability-of-programmers-in-the-first-test-of-technology",
  //     "some-secrets-about-alibaba-interview",
  //   ],
  // },
  // {
  //   text: "测试5",
  //   icon: "work",
  //   prefix: "work/",
  //   collapsable: false,
  //   children: [
  //     "get-into-work-mode-quickly-when-you-join-a-company",
  //     "employee-performance",
  //   ],
  // },
];

// docs/.vuepress/sidebar/about-the-author.ts
var aboutTheAuthor = [
  {
    text: "\u4E2A\u4EBA\u7ECF\u5386",
    icon: "zuozhe",
    collapsable: false,
    children: [
      "internet-addiction-teenager",
      "my-college-life",
      "javaguide-100k-star",
      "feelings-after-one-month-of-induction-training",
      "feelings-of-half-a-year-from-graduation-to-entry"
    ]
  },
  {
    text: "\u6742\u8C08",
    icon: "chat",
    collapsable: false,
    children: [
      "my-article-was-stolen-and-made-into-video-and-it-became-popular",
      "dog-that-copies-other-people-essay",
      "zhishixingqiu-two-years"
    ]
  }
];

// docs/.vuepress/sidebar/books.ts
var books = [
  {
    text: "\u8BA1\u7B97\u673A\u57FA\u7840",
    link: "cs-basics",
    icon: "computer"
  },
  {
    text: "\u6570\u636E\u5E93",
    link: "database",
    icon: "database"
  },
  {
    text: "\u641C\u7D22\u5F15\u64CE",
    link: "search-engine",
    icon: "search"
  },
  {
    text: "Java",
    link: "java",
    icon: "java"
  },
  {
    text: "\u8F6F\u4EF6\u8D28\u91CF",
    link: "software-quality",
    icon: "highavailable"
  },
  {
    text: "\u5206\u5E03\u5F0F",
    link: "distributed-system",
    icon: "distributed-network"
  }
];

// docs/.vuepress/sidebar/open-source-project.ts
var openSourceProject = [
  {
    text: "\u6280\u672F\u6559\u7A0B",
    link: "tutorial",
    icon: "book"
  },
  {
    text: "\u5B9E\u6218\u9879\u76EE",
    link: "practical-project",
    icon: "project"
  },
  {
    text: "\u7CFB\u7EDF\u8BBE\u8BA1",
    link: "system-design",
    icon: "xitongsheji"
  },
  {
    text: "\u5DE5\u5177\u7C7B\u5E93",
    link: "tool-library",
    icon: "codelibrary-fill"
  },
  {
    text: "\u5F00\u53D1\u5DE5\u5177",
    link: "tools",
    icon: "tool"
  },
  {
    text: "\u673A\u5668\u5B66\u4E60",
    link: "machine-learning",
    icon: "a-MachineLearning"
  },
  {
    text: "\u5927\u6570\u636E",
    link: "big-data",
    icon: "big-data"
  }
];

// docs/.vuepress/sidebar.ts
var sidebarConfig = sidebar({
  // 应该把更精确的路径放置在前边
  "/open-source-project/": openSourceProject,
  "/books/": books,
  "/about-the-author/": aboutTheAuthor,
  "/high-quality-technical-articles/": highQualityTechnicalArticles,
  "/javaguide/": ["intro", "history", "contribution-guideline", "faq", "todo"],
  "/zhuanlan/": [
    "java-mian-shi-zhi-bei",
    "handwritten-rpc-framework",
    "source-code-reading"
  ],
  // 必须放在最后面
  "/": [
    {
      text: "\u9762\u8BD5\u51C6\u5907",
      icon: "interview",
      collapsible: true,
      prefix: "interview-preparation/",
      children: [
        "teach-you-how-to-prepare-for-the-interview-hand-in-hand",
        "project-experience-guide",
        "interview-experience",
        "self-test-of-common-interview-questions"
      ]
    },
    {
      text: "Java",
      icon: "java",
      collapsible: true,
      prefix: "java/",
      children: [
        {
          text: "\u57FA\u7840",
          prefix: "basis/",
          icon: "basic",
          children: [
            "java-basic-questions-01",
            "java-basic-questions-02",
            "java-basic-questions-03",
            {
              text: "\u91CD\u8981\u77E5\u8BC6\u70B9",
              icon: "star",
              collapsible: true,
              children: [
                "why-there-only-value-passing-in-java",
                "serialization",
                "generics-and-wildcards",
                "reflection",
                "proxy",
                "bigdecimal",
                "unsafe",
                "spi",
                "syntactic-sugar"
              ]
            }
          ]
        },
        {
          text: "\u96C6\u5408",
          prefix: "collection/",
          icon: "container",
          children: [
            "java-collection-questions-01",
            "java-collection-questions-02",
            "java-collection-precautions-for-use",
            {
              text: "\u6E90\u7801\u5206\u6790",
              icon: "star",
              collapsible: true,
              children: [
                "arraylist-source-code",
                "hashmap-source-code",
                "concurrent-hash-map-source-code"
              ]
            }
          ]
        },
        {
          text: "IO",
          prefix: "io/",
          icon: "code",
          children: ["io-basis", "io-design-patterns", "io-model"]
        },
        {
          text: "\u5E76\u53D1\u7F16\u7A0B",
          prefix: "concurrent/",
          icon: "et-performance",
          children: [
            "java-concurrent-questions-01",
            "java-concurrent-questions-02",
            "java-concurrent-questions-03",
            {
              text: "\u91CD\u8981\u77E5\u8BC6\u70B9",
              icon: "star",
              collapsible: true,
              children: [
                "jmm",
                "java-thread-pool-summary",
                "java-thread-pool-best-practices",
                "java-concurrent-collections",
                "aqs",
                "atomic-classes",
                "threadlocal",
                "completablefuture-intro"
              ]
            }
          ]
        },
        {
          text: "JVM",
          prefix: "jvm/",
          icon: "virtual_machine",
          collapsible: true,
          children: [
            "memory-area",
            "jvm-garbage-collection",
            "class-file-structure",
            "class-loading-process",
            "classloader",
            "jvm-parameters-intro",
            "jvm-intro",
            "jdk-monitoring-and-troubleshooting-tools"
          ]
        },
        {
          text: "\u65B0\u7279\u6027",
          prefix: "new-features/",
          icon: "featured",
          collapsible: true,
          children: [
            "java8-common-new-features",
            "java8-tutorial-translate",
            "java9",
            "java10",
            "java11",
            "java12-13",
            "java14",
            "java15",
            "java16",
            "java17",
            "java18",
            "java19"
          ]
        }
      ]
    },
    {
      text: "\u8BA1\u7B97\u673A\u57FA\u7840",
      icon: "computer",
      prefix: "cs-basics/",
      collapsible: true,
      children: [
        {
          text: "\u7F51\u7EDC",
          prefix: "network/",
          icon: "network",
          children: [
            "other-network-questions",
            "computer-network-xiexiren-summary",
            {
              text: "\u91CD\u8981\u77E5\u8BC6\u70B9",
              icon: "star",
              collapsible: true,
              children: [
                "osi&tcp-ip-model",
                "application-layer-protocol",
                "http&https",
                "http1.0&http1.1",
                "http-status-codes",
                "tcp-connection-and-disconnection",
                "tcp-reliability-guarantee",
                "arp"
              ]
            }
          ]
        },
        {
          text: "\u64CD\u4F5C\u7CFB\u7EDF",
          prefix: "operating-system/",
          icon: "caozuoxitong",
          children: [
            "operating-system-basic-questions-01",
            "linux-intro",
            "shell-intro"
          ]
        },
        {
          text: "\u6570\u636E\u7ED3\u6784",
          prefix: "data-structure/",
          icon: "people-network-full",
          collapsible: true,
          children: [
            "linear-data-structure",
            "graph",
            "heap",
            "tree",
            "red-black-tree",
            "bloom-filter"
          ]
        },
        {
          text: "\u7B97\u6CD5",
          prefix: "algorithms/",
          icon: "suanfaku",
          collapsible: true,
          children: [
            "string-algorithm-problems",
            "linkedlist-algorithm-problems",
            "the-sword-refers-to-offer",
            "10-classical-sorting-algorithms"
          ]
        }
      ]
    },
    {
      text: "\u6570\u636E\u5E93",
      icon: "database",
      prefix: "database/",
      collapsible: true,
      children: [
        {
          text: "\u57FA\u7840",
          icon: "basic",
          children: ["basis", "character-set"]
        },
        {
          text: "MySQL",
          prefix: "mysql/",
          icon: "mysql",
          children: [
            "mysql-questions-01",
            "mysql-high-performance-optimization-specification-recommendations",
            {
              text: "\u91CD\u8981\u77E5\u8BC6\u70B9",
              icon: "star",
              collapsible: true,
              children: [
                "mysql-index",
                "mysql-logs",
                "transaction-isolation-level",
                "innodb-implementation-of-mvcc",
                "how-sql-executed-in-mysql",
                "some-thoughts-on-database-storage-time",
                "index-invalidation-caused-by-implicit-conversion"
              ]
            }
          ]
        },
        {
          text: "Redis",
          prefix: "redis/",
          icon: "redis",
          children: [
            "cache-basics",
            "redis-questions-01",
            "redis-questions-02",
            {
              text: "\u91CD\u8981\u77E5\u8BC6\u70B9",
              icon: "star",
              collapsible: true,
              children: [
                "3-commonly-used-cache-read-and-write-strategies",
                "redis-data-structures-01",
                "redis-data-structures-02",
                "redis-memory-fragmentation",
                "redis-cluster"
              ]
            }
          ]
        }
      ]
    },
    {
      text: "\u5F00\u53D1\u5DE5\u5177",
      icon: "tool",
      prefix: "tools/",
      collapsible: true,
      children: [
        {
          text: "Git",
          icon: "git",
          prefix: "git/",
          children: ["git-intro", "github-tips"]
        },
        {
          text: "Docker",
          icon: "docker1",
          prefix: "docker/",
          children: ["docker-intro", "docker-in-action"]
        },
        {
          text: "IDEA",
          icon: "intellijidea",
          link: "https://gitee.com/SnailClimb/awesome-idea-tutorial"
        }
      ]
    },
    {
      text: "\u5E38\u7528\u6846\u67B6",
      prefix: "system-design/framework/",
      icon: "framework",
      collapsible: true,
      children: [
        {
          text: "Spring&Spring Boot",
          icon: "bxl-spring-boot",
          prefix: "spring/",
          children: [
            "spring-knowledge-and-questions-summary",
            "springboot-knowledge-and-questions-summary",
            "spring-common-annotations",
            {
              text: "\u91CD\u8981\u77E5\u8BC6\u70B9",
              icon: "star",
              collapsible: true,
              children: [
                "spring-transaction",
                "spring-design-patterns-summary",
                "spring-boot-auto-assembly-principles"
              ]
            }
          ]
        },
        "mybatis/mybatis-interview",
        "netty"
      ]
    },
    {
      text: "\u7CFB\u7EDF\u8BBE\u8BA1",
      icon: "xitongsheji",
      prefix: "system-design/",
      collapsible: true,
      children: [
        {
          text: "\u57FA\u7840",
          prefix: "basis/",
          icon: "basic",
          children: [
            "RESTfulAPI",
            "naming",
            "refactoring",
            {
              text: "\u5355\u5143\u6D4B\u8BD5\u6307\u5357",
              link: "unit-test"
            }
          ]
        },
        {
          text: "\u5B89\u5168",
          prefix: "security/",
          icon: "security-fill",
          children: [
            "basis-of-authority-certification",
            "jwt-intro",
            "advantages&disadvantages-of-jwt",
            "sso-intro",
            "design-of-authority-system",
            "sentive-words-filter",
            "data-desensitization"
          ]
        },
        "system-design-questions",
        "design-pattern",
        "schedule-task",
        "web-real-time-message-push"
      ]
    },
    {
      text: "\u5206\u5E03\u5F0F",
      icon: "distributed-network",
      prefix: "distributed-system/",
      collapsible: true,
      children: [
        {
          text: "\u7406\u8BBA&\u7B97\u6CD5&\u534F\u8BAE",
          icon: "suanfaku",
          prefix: "theorem&algorithm&protocol/",
          children: ["cap&base-theorem", "paxos-algorithm", "raft-algorithm"]
        },
        "api-gateway",
        "distributed-id",
        "distributed-lock",
        "distributed-transaction",
        "distributed-configuration-center",
        {
          text: "RPC\uFF08\u8FDC\u7A0B\u8C03\u7528\uFF09\u8BE6\u89E3",
          prefix: "rpc/",
          icon: "network",
          children: ["rpc-intro", "dubbo"]
        },
        {
          text: "ZooKeeper \u8BE6\u89E3",
          icon: "framework",
          prefix: "distributed-process-coordination/",
          children: [
            "zookeeper/zookeeper-intro",
            "zookeeper/zookeeper-plus",
            "zookeeper/zookeeper-in-action"
          ]
        }
      ]
    },
    {
      text: "\u9AD8\u6027\u80FD",
      icon: "et-performance",
      prefix: "high-performance/",
      collapsible: true,
      children: [
        "read-and-write-separation-and-library-subtable",
        "load-balancing",
        "cdn",
        "sql-optimization",
        {
          text: "\u6D88\u606F\u961F\u5217",
          prefix: "message-queue/",
          icon: "MQ",
          collapsible: true,
          children: [
            "message-queue",
            "kafka-questions-01",
            "rocketmq-intro",
            "rocketmq-questions",
            "rabbitmq-intro",
            "rabbitmq-questions"
          ]
        }
      ]
    },
    {
      text: "\u9AD8\u53EF\u7528",
      icon: "highavailable",
      prefix: "high-availability/",
      collapsible: true,
      children: [
        "high-availability-system-design",
        "redundancy",
        "limit-request",
        "fallback&circuit-breaker",
        "timeout-and-retry",
        "performance-test"
      ]
    }
  ]
});

// docs/.vuepress/themeConfig.ts
var themeConfig = hopeTheme({
  logo: "/logo.png",
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f"
  },
  hostname: "https://javaguide.cn/",
  author: {
    name: "Guide",
    url: "https://javaguide.cn/article/"
  },
  repo: "https://github.com/Snailclimb/JavaGuide",
  docsDir: "docs",
  iconAssets: "//at.alicdn.com/t/c/font_2922463_fi3mvhn3c1.css",
  navbar: navbarConfig,
  lastUpdated: true,
  contributors: true,
  editLink: true,
  sidebar: sidebarConfig,
  pageInfo: [
    "Author",
    "Category",
    "Tag",
    "Date",
    "Original",
    "Word",
    "ReadingTime"
  ],
  blog: {
    intro: "/about-the-author/",
    sidebarDisplay: "mobile",
    medias: {
      Zhihu: "https://www.zhihu.com/people/javaguide",
      Github: "https://github.com/Snailclimb",
      Gitee: "https://gitee.com/SnailClimb"
    }
  },
  footer: '<a href="https://beian.miit.gov.cn/" target="_blank">\u9102ICP\u59072020015769\u53F7-1</a>',
  displayFooter: true,
  plugins: {
    blog: true,
    copyright: true,
    mdEnhance: {
      codetabs: true,
      container: true,
      tasklist: true
    },
    feed: {
      json: true
    }
  }
});

// docs/.vuepress/config.ts
import { searchPlugin } from "@vuepress/plugin-search";
var config_default = defineUserConfig({
  dest: "./dist",
  theme: themeConfig,
  shouldPrefetch: false,
  title: "JavaGuide(Java\u9762\u8BD5+\u5B66\u4E60\u6307\u5357)",
  description: "\u300CJava\u5B66\u4E60\u6307\u5317+Java\u9762\u8BD5\u6307\u5357\u300D\u4E00\u4EFD\u6DB5\u76D6\u5927\u90E8\u5206 Java \u7A0B\u5E8F\u5458\u6240\u9700\u8981\u638C\u63E1\u7684\u6838\u5FC3\u77E5\u8BC6\u3002\u51C6\u5907 Java \u9762\u8BD5\uFF0C\u590D\u4E60 Java \u77E5\u8BC6\u70B9\uFF0C\u9996\u9009 JavaGuide\uFF01  ",
  head: [
    // meta
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "Guide" }],
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate"
      }
    ],
    ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
    ["meta", { "http-equiv": "Expires", content: "0" }],
    [
      "meta",
      {
        name: "keywords",
        content: "Java\u57FA\u7840, \u591A\u7EBF\u7A0B, JVM, \u865A\u62DF\u673A, \u6570\u636E\u5E93, MySQL, Spring, Redis, MyBatis, \u7CFB\u7EDF\u8BBE\u8BA1, \u5206\u5E03\u5F0F, RPC, \u9AD8\u53EF\u7528, \u9AD8\u5E76\u53D1"
      }
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    // 添加百度统计
    [
      "script",
      {},
      `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?5dd2e8c97962d57b7b8fea1737c01743";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "/iconfont/iconfont.css"
      }
    ]
  ],
  locales: {
    "/": {
      lang: "zh-CN"
    }
  },
  plugins: [
    searchPlugin({
      // https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html
      // 排除首页
      isSearchable: (page) => page.path !== "/",
      maxSuggestions: 10,
      hotKeys: ["s", "/"],
      // 用于在页面的搜索索引中添加额外字段
      getExtraFields: () => [],
      locales: {
        "/": {
          placeholder: "\u641C\u7D22"
        }
      }
    })
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL3RoZW1lQ29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL25hdmJhci50cyIsICJkb2NzLy52dWVwcmVzcy9zaWRlYmFyLnRzIiwgImRvY3MvLnZ1ZXByZXNzL3NpZGViYXIvaGlnaC1xdWFsaXR5LXRlY2huaWNhbC1hcnRpY2xlcy50cyIsICJkb2NzLy52dWVwcmVzcy9zaWRlYmFyL2Fib3V0LXRoZS1hdXRob3IudHMiLCAiZG9jcy8udnVlcHJlc3Mvc2lkZWJhci9ib29rcy50cyIsICJkb2NzLy52dWVwcmVzcy9zaWRlYmFyL29wZW4tc291cmNlLXByb2plY3QudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9EL2dpdGVlL2dpdGVlLXN0YXRpYy1wYWdlL215LWRvY3MvSmF2YUd1aWRlL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxEXFxcXGdpdGVlXFxcXGdpdGVlLXN0YXRpYy1wYWdlXFxcXG15LWRvY3NcXFxcSmF2YUd1aWRlXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovRC9naXRlZS9naXRlZS1zdGF0aWMtcGFnZS9teS1kb2NzL0phdmFHdWlkZS9kb2NzLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XHJcbmltcG9ydCB7IHRoZW1lQ29uZmlnIH0gZnJvbSBcIi4vdGhlbWVDb25maWdcIjtcclxuaW1wb3J0IHsgc2VhcmNoUGx1Z2luIH0gZnJvbSBcIkB2dWVwcmVzcy9wbHVnaW4tc2VhcmNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcclxuICBkZXN0OiBcIi4vZGlzdFwiLFxyXG4gIHRoZW1lOiB0aGVtZUNvbmZpZyxcclxuICBzaG91bGRQcmVmZXRjaDogZmFsc2UsXHJcbiAgdGl0bGU6IFwiSmF2YUd1aWRlKEphdmFcdTk3NjJcdThCRDUrXHU1QjY2XHU0RTYwXHU2MzA3XHU1MzU3KVwiLFxyXG4gIGRlc2NyaXB0aW9uOlxyXG4gICAgXCJcdTMwMENKYXZhXHU1QjY2XHU0RTYwXHU2MzA3XHU1MzE3K0phdmFcdTk3NjJcdThCRDVcdTYzMDdcdTUzNTdcdTMwMERcdTRFMDBcdTRFRkRcdTZEQjVcdTc2RDZcdTU5MjdcdTkwRThcdTUyMDYgSmF2YSBcdTdBMEJcdTVFOEZcdTU0NThcdTYyNDBcdTk3MDBcdTg5ODFcdTYzOENcdTYzRTFcdTc2ODRcdTY4MzhcdTVGQzNcdTc3RTVcdThCQzZcdTMwMDJcdTUxQzZcdTU5MDcgSmF2YSBcdTk3NjJcdThCRDVcdUZGMENcdTU5MERcdTRFNjAgSmF2YSBcdTc3RTVcdThCQzZcdTcwQjlcdUZGMENcdTk5OTZcdTkwMDkgSmF2YUd1aWRlXHVGRjAxICBcIixcclxuICBoZWFkOiBbXHJcbiAgICAvLyBtZXRhXHJcbiAgICBbXCJtZXRhXCIsIHsgbmFtZTogXCJyb2JvdHNcIiwgY29udGVudDogXCJhbGxcIiB9XSxcclxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcImF1dGhvclwiLCBjb250ZW50OiBcIkd1aWRlXCIgfV0sXHJcbiAgICBbXHJcbiAgICAgIFwibWV0YVwiLFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJodHRwLWVxdWl2XCI6IFwiQ2FjaGUtQ29udHJvbFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwibm8tY2FjaGUsIG5vLXN0b3JlLCBtdXN0LXJldmFsaWRhdGVcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBbXCJtZXRhXCIsIHsgXCJodHRwLWVxdWl2XCI6IFwiUHJhZ21hXCIsIGNvbnRlbnQ6IFwibm8tY2FjaGVcIiB9XSxcclxuICAgIFtcIm1ldGFcIiwgeyBcImh0dHAtZXF1aXZcIjogXCJFeHBpcmVzXCIsIGNvbnRlbnQ6IFwiMFwiIH1dLFxyXG4gICAgW1xyXG4gICAgICBcIm1ldGFcIixcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwia2V5d29yZHNcIixcclxuICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgXCJKYXZhXHU1N0ZBXHU3ODQwLCBcdTU5MUFcdTdFQkZcdTdBMEIsIEpWTSwgXHU4NjVBXHU2MkRGXHU2NzNBLCBcdTY1NzBcdTYzNkVcdTVFOTMsIE15U1FMLCBTcHJpbmcsIFJlZGlzLCBNeUJhdGlzLCBcdTdDRkJcdTdFREZcdThCQkVcdThCQTEsIFx1NTIwNlx1NUUwM1x1NUYwRiwgUlBDLCBcdTlBRDhcdTUzRUZcdTc1MjgsIFx1OUFEOFx1NUU3Nlx1NTNEMVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiwgY29udGVudDogXCJ5ZXNcIiB9XSxcclxuICAgIC8vIFx1NkRGQlx1NTJBMFx1NzY3RVx1NUVBNlx1N0VERlx1OEJBMVxyXG4gICAgW1xyXG4gICAgICBcInNjcmlwdFwiLFxyXG4gICAgICB7fSxcclxuICAgICAgYHZhciBfaG10ID0gX2htdCB8fCBbXTtcclxuICAgICAgICAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB2YXIgaG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgICAgaG0uc3JjID0gXCJodHRwczovL2htLmJhaWR1LmNvbS9obS5qcz81ZGQyZThjOTc5NjJkNTdiN2I4ZmVhMTczN2MwMTc0M1wiO1xyXG4gICAgICAgICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTsgXHJcbiAgICAgICAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGhtLCBzKTtcclxuICAgICAgICB9KSgpO2AsXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBcImxpbmtcIixcclxuICAgICAge1xyXG4gICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXHJcbiAgICAgICAgaHJlZjogXCIvaWNvbmZvbnQvaWNvbmZvbnQuY3NzXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIF0sXHJcbiAgbG9jYWxlczoge1xyXG4gICAgXCIvXCI6IHtcclxuICAgICAgbGFuZzogXCJ6aC1DTlwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHNlYXJjaFBsdWdpbih7XHJcbiAgICAgIC8vIGh0dHBzOi8vdjIudnVlcHJlc3MudnVlanMub3JnL3poL3JlZmVyZW5jZS9wbHVnaW4vc2VhcmNoLmh0bWxcclxuICAgICAgLy8gXHU2MzkyXHU5NjY0XHU5OTk2XHU5ODc1XHJcbiAgICAgIGlzU2VhcmNoYWJsZTogKHBhZ2UpID0+IHBhZ2UucGF0aCAhPT0gXCIvXCIsXHJcbiAgICAgIG1heFN1Z2dlc3Rpb25zOiAxMCxcclxuICAgICAgaG90S2V5czogW1wic1wiLCBcIi9cIl0sXHJcbiAgICAgIC8vIFx1NzUyOFx1NEU4RVx1NTcyOFx1OTg3NVx1OTc2Mlx1NzY4NFx1NjQxQ1x1N0QyMlx1N0QyMlx1NUYxNVx1NEUyRFx1NkRGQlx1NTJBMFx1OTg5RFx1NTkxNlx1NUI1N1x1NkJCNVxyXG4gICAgICBnZXRFeHRyYUZpZWxkczogKCkgPT4gW10sXHJcbiAgICAgIGxvY2FsZXM6IHtcclxuICAgICAgICBcIi9cIjoge1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXHU2NDFDXHU3RDIyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L0QvZ2l0ZWUvZ2l0ZWUtc3RhdGljLXBhZ2UvbXktZG9jcy9KYXZhR3VpZGUvZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERcXFxcZ2l0ZWVcXFxcZ2l0ZWUtc3RhdGljLXBhZ2VcXFxcbXktZG9jc1xcXFxKYXZhR3VpZGVcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcdGhlbWVDb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0QvZ2l0ZWUvZ2l0ZWUtc3RhdGljLXBhZ2UvbXktZG9jcy9KYXZhR3VpZGUvZG9jcy8udnVlcHJlc3MvdGhlbWVDb25maWcudHNcIjtpbXBvcnQge2hvcGVUaGVtZX0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuaW1wb3J0IHtuYXZiYXJDb25maWd9IGZyb20gXCIuL25hdmJhclwiO1xyXG5pbXBvcnQge3NpZGViYXJDb25maWd9IGZyb20gXCIuL3NpZGViYXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0aGVtZUNvbmZpZyA9IGhvcGVUaGVtZSh7XHJcbiAgICBsb2dvOiBcIi9sb2dvLnBuZ1wiLFxyXG4gICAgdGhlbWVDb2xvcjoge1xyXG4gICAgICAgIGJsdWU6IFwiIzIxOTZmM1wiLFxyXG4gICAgICAgIHJlZDogXCIjZjI2ZDZkXCIsXHJcbiAgICAgICAgZ3JlZW46IFwiIzNlYWY3Y1wiLFxyXG4gICAgICAgIG9yYW5nZTogXCIjZmI5YjVmXCIsXHJcbiAgICB9LFxyXG4gICAgaG9zdG5hbWU6IFwiaHR0cHM6Ly9qYXZhZ3VpZGUuY24vXCIsXHJcbiAgICBhdXRob3I6IHtcclxuICAgICAgICBuYW1lOiBcIkd1aWRlXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vamF2YWd1aWRlLmNuL2FydGljbGUvXCIsXHJcbiAgICB9LFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vU25haWxjbGltYi9KYXZhR3VpZGVcIixcclxuICAgIGRvY3NEaXI6IFwiZG9jc1wiLFxyXG4gICAgaWNvbkFzc2V0czogXCIvL2F0LmFsaWNkbi5jb20vdC9jL2ZvbnRfMjkyMjQ2M19maTNtdmhuM2MxLmNzc1wiLFxyXG4gICAgbmF2YmFyOiBuYXZiYXJDb25maWcsXHJcbiAgICBsYXN0VXBkYXRlZDp0cnVlLFxyXG4gICAgY29udHJpYnV0b3JzOnRydWUsXHJcbiAgICBlZGl0TGluazp0cnVlLFxyXG4gICAgc2lkZWJhcjogc2lkZWJhckNvbmZpZyxcclxuICAgIHBhZ2VJbmZvOiBbXHJcbiAgICAgICAgXCJBdXRob3JcIixcclxuICAgICAgICBcIkNhdGVnb3J5XCIsXHJcbiAgICAgICAgXCJUYWdcIixcclxuICAgICAgICBcIkRhdGVcIixcclxuICAgICAgICBcIk9yaWdpbmFsXCIsXHJcbiAgICAgICAgXCJXb3JkXCIsXHJcbiAgICAgICAgXCJSZWFkaW5nVGltZVwiLFxyXG4gICAgXSxcclxuICAgIGJsb2c6IHtcclxuICAgICAgICBpbnRybzogXCIvYWJvdXQtdGhlLWF1dGhvci9cIixcclxuICAgICAgICBzaWRlYmFyRGlzcGxheTogXCJtb2JpbGVcIixcclxuICAgICAgICBtZWRpYXM6IHtcclxuICAgICAgICAgICAgWmhpaHU6IFwiaHR0cHM6Ly93d3cuemhpaHUuY29tL3Blb3BsZS9qYXZhZ3VpZGVcIixcclxuICAgICAgICAgICAgR2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TbmFpbGNsaW1iXCIsXHJcbiAgICAgICAgICAgIEdpdGVlOiBcImh0dHBzOi8vZ2l0ZWUuY29tL1NuYWlsQ2xpbWJcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvb3RlcjpcclxuICAgICAgICAnPGEgaHJlZj1cImh0dHBzOi8vYmVpYW4ubWlpdC5nb3YuY24vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHU5MTAySUNQXHU1OTA3MjAyMDAxNTc2OVx1NTNGNy0xPC9hPicsXHJcbiAgICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxyXG4gICAgcGx1Z2luczoge1xyXG4gICAgICAgIGJsb2c6IHRydWUsXHJcbiAgICAgICAgY29weXJpZ2h0OiB0cnVlLFxyXG4gICAgICAgIG1kRW5oYW5jZToge1xyXG4gICAgICAgICAgICBjb2RldGFiczogdHJ1ZSxcclxuICAgICAgICAgICAgY29udGFpbmVyOiB0cnVlLFxyXG4gICAgICAgICAgICB0YXNrbGlzdDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZlZWQ6IHtcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovRC9naXRlZS9naXRlZS1zdGF0aWMtcGFnZS9teS1kb2NzL0phdmFHdWlkZS9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRFxcXFxnaXRlZVxcXFxnaXRlZS1zdGF0aWMtcGFnZVxcXFxteS1kb2NzXFxcXEphdmFHdWlkZVxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxuYXZiYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0QvZ2l0ZWUvZ2l0ZWUtc3RhdGljLXBhZ2UvbXktZG9jcy9KYXZhR3VpZGUvZG9jcy8udnVlcHJlc3MvbmF2YmFyLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBuYXZiYXJDb25maWcgPSBuYXZiYXIoW1xyXG4gIHsgdGV4dDogXCJcdTk3NjJcdThCRDVcdTYzMDdcdTUzNTdcIiwgaWNvbjogXCJqYXZhXCIsIGxpbms6IFwiL2hvbWUubWRcIiB9LFxyXG4gIHsgdGV4dDogXCJcdTVGMDBcdTZFOTBcdTk4NzlcdTc2RUVcIiwgaWNvbjogXCJnaXRodWJcIiwgbGluazogXCIvb3Blbi1zb3VyY2UtcHJvamVjdC9cIiB9LFxyXG4gIHsgdGV4dDogXCJcdTYyODBcdTY3MkZcdTRFNjZcdTdDNERcIiwgaWNvbjogXCJib29rXCIsIGxpbms6IFwiL2Jvb2tzL1wiIH0sXHJcbiAgeyB0ZXh0OiBcIlx1NjI4MFx1NjcyRlx1NjU4N1x1N0FFMFwiLCBpY29uOiBcImFydGljbGVcIiwgbGluazogXCIvaGlnaC1xdWFsaXR5LXRlY2huaWNhbC1hcnRpY2xlcy9cIiB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiXHU3RjUxXHU3QUQ5XHU3NkY4XHU1MTczXCIsXHJcbiAgICBpY29uOiBcImFib3V0XCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7IHRleHQ6IFwiXHU1MTczXHU0RThFXHU0RjVDXHU4MDA1XCIsIGljb246IFwienVvemhlXCIsIGxpbms6IFwiL2Fib3V0LXRoZS1hdXRob3IvXCIgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU2NkY0XHU2NUIwXHU1Mzg2XHU1M0YyXCIsXHJcbiAgICAgICAgaWNvbjogXCJoaXN0b3J5XCIsXHJcbiAgICAgICAgbGluazogXCIvdGltZWxpbmUvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NjVFN1x1NzI0OFx1NTE2NVx1NTNFM1wiLFxyXG4gICAgICAgIGljb246IFwiamF2YVwiLFxyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9zbmFpbGNsaW1iLmdpdGVlLmlvL2phdmFndWlkZS8jL1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHRleHQ6IFwiUlNTXCIsIGljb246IFwicnNzXCIsIGxpbms6IFwiaHR0cHM6Ly9qYXZhZ3VpZGUuY24vZmVlZC5qc29uXCIgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovRC9naXRlZS9naXRlZS1zdGF0aWMtcGFnZS9teS1kb2NzL0phdmFHdWlkZS9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRFxcXFxnaXRlZVxcXFxnaXRlZS1zdGF0aWMtcGFnZVxcXFxteS1kb2NzXFxcXEphdmFHdWlkZVxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9EL2dpdGVlL2dpdGVlLXN0YXRpYy1wYWdlL215LWRvY3MvSmF2YUd1aWRlL2RvY3MvLnZ1ZXByZXNzL3NpZGViYXIudHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuaW1wb3J0IHsgaGlnaFF1YWxpdHlUZWNobmljYWxBcnRpY2xlcyB9IGZyb20gXCIuL3NpZGViYXIvaGlnaC1xdWFsaXR5LXRlY2huaWNhbC1hcnRpY2xlc1wiO1xyXG5pbXBvcnQgeyBhYm91dFRoZUF1dGhvciB9IGZyb20gXCIuL3NpZGViYXIvYWJvdXQtdGhlLWF1dGhvclwiO1xyXG5pbXBvcnQgeyBib29rcyB9IGZyb20gXCIuL3NpZGViYXIvYm9va3NcIjtcclxuaW1wb3J0IHsgb3BlblNvdXJjZVByb2plY3QgfSBmcm9tIFwiLi9zaWRlYmFyL29wZW4tc291cmNlLXByb2plY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWRlYmFyQ29uZmlnID0gc2lkZWJhcih7XHJcbiAgLy8gXHU1RTk0XHU4QkU1XHU2MjhBXHU2NkY0XHU3Q0JFXHU3ODZFXHU3Njg0XHU4REVGXHU1Rjg0XHU2NTNFXHU3RjZFXHU1NzI4XHU1MjREXHU4RkI5XHJcbiAgXCIvb3Blbi1zb3VyY2UtcHJvamVjdC9cIjogb3BlblNvdXJjZVByb2plY3QsXHJcbiAgXCIvYm9va3MvXCI6IGJvb2tzLFxyXG4gIFwiL2Fib3V0LXRoZS1hdXRob3IvXCI6IGFib3V0VGhlQXV0aG9yLFxyXG4gIFwiL2hpZ2gtcXVhbGl0eS10ZWNobmljYWwtYXJ0aWNsZXMvXCI6IGhpZ2hRdWFsaXR5VGVjaG5pY2FsQXJ0aWNsZXMsXHJcbiAgXCIvamF2YWd1aWRlL1wiOiBbXCJpbnRyb1wiLCBcImhpc3RvcnlcIiwgXCJjb250cmlidXRpb24tZ3VpZGVsaW5lXCIsIFwiZmFxXCIsIFwidG9kb1wiXSxcclxuICBcIi96aHVhbmxhbi9cIjogW1xyXG4gICAgXCJqYXZhLW1pYW4tc2hpLXpoaS1iZWlcIixcclxuICAgIFwiaGFuZHdyaXR0ZW4tcnBjLWZyYW1ld29ya1wiLFxyXG4gICAgXCJzb3VyY2UtY29kZS1yZWFkaW5nXCIsXHJcbiAgXSxcclxuICAvLyBcdTVGQzVcdTk4N0JcdTY1M0VcdTU3MjhcdTY3MDBcdTU0MEVcdTk3NjJcclxuICBcIi9cIjogW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1OTc2Mlx1OEJENVx1NTFDNlx1NTkwN1wiLFxyXG4gICAgICBpY29uOiBcImludGVydmlld1wiLFxyXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgcHJlZml4OiBcImludGVydmlldy1wcmVwYXJhdGlvbi9cIixcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICBcInRlYWNoLXlvdS1ob3ctdG8tcHJlcGFyZS1mb3ItdGhlLWludGVydmlldy1oYW5kLWluLWhhbmRcIixcclxuICAgICAgICBcInByb2plY3QtZXhwZXJpZW5jZS1ndWlkZVwiLFxyXG4gICAgICAgIFwiaW50ZXJ2aWV3LWV4cGVyaWVuY2VcIixcclxuICAgICAgICBcInNlbGYtdGVzdC1vZi1jb21tb24taW50ZXJ2aWV3LXF1ZXN0aW9uc1wiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJKYXZhXCIsXHJcbiAgICAgIGljb246IFwiamF2YVwiLFxyXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgcHJlZml4OiBcImphdmEvXCIsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJcdTU3RkFcdTc4NDBcIixcclxuICAgICAgICAgIHByZWZpeDogXCJiYXNpcy9cIixcclxuICAgICAgICAgIGljb246IFwiYmFzaWNcIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiamF2YS1iYXNpYy1xdWVzdGlvbnMtMDFcIixcclxuICAgICAgICAgICAgXCJqYXZhLWJhc2ljLXF1ZXN0aW9ucy0wMlwiLFxyXG4gICAgICAgICAgICBcImphdmEtYmFzaWMtcXVlc3Rpb25zLTAzXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1OTFDRFx1ODk4MVx1NzdFNVx1OEJDNlx1NzBCOVwiLFxyXG4gICAgICAgICAgICAgIGljb246IFwic3RhclwiLFxyXG4gICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICBcIndoeS10aGVyZS1vbmx5LXZhbHVlLXBhc3NpbmctaW4tamF2YVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzZXJpYWxpemF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcImdlbmVyaWNzLWFuZC13aWxkY2FyZHNcIixcclxuICAgICAgICAgICAgICAgIFwicmVmbGVjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJwcm94eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJiaWdkZWNpbWFsXCIsXHJcbiAgICAgICAgICAgICAgICBcInVuc2FmZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzcGlcIixcclxuICAgICAgICAgICAgICAgIFwic3ludGFjdGljLXN1Z2FyXCIsXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1OTZDNlx1NTQwOFwiLFxyXG4gICAgICAgICAgcHJlZml4OiBcImNvbGxlY3Rpb24vXCIsXHJcbiAgICAgICAgICBpY29uOiBcImNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCJqYXZhLWNvbGxlY3Rpb24tcXVlc3Rpb25zLTAxXCIsXHJcbiAgICAgICAgICAgIFwiamF2YS1jb2xsZWN0aW9uLXF1ZXN0aW9ucy0wMlwiLFxyXG4gICAgICAgICAgICBcImphdmEtY29sbGVjdGlvbi1wcmVjYXV0aW9ucy1mb3ItdXNlXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1NkU5MFx1NzgwMVx1NTIwNlx1Njc5MFwiLFxyXG4gICAgICAgICAgICAgIGljb246IFwic3RhclwiLFxyXG4gICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICBcImFycmF5bGlzdC1zb3VyY2UtY29kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJoYXNobWFwLXNvdXJjZS1jb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbmN1cnJlbnQtaGFzaC1tYXAtc291cmNlLWNvZGVcIixcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIklPXCIsXHJcbiAgICAgICAgICBwcmVmaXg6IFwiaW8vXCIsXHJcbiAgICAgICAgICBpY29uOiBcImNvZGVcIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXCJpby1iYXNpc1wiLCBcImlvLWRlc2lnbi1wYXR0ZXJuc1wiLCBcImlvLW1vZGVsXCJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJcdTVFNzZcdTUzRDFcdTdGMTZcdTdBMEJcIixcclxuICAgICAgICAgIHByZWZpeDogXCJjb25jdXJyZW50L1wiLFxyXG4gICAgICAgICAgaWNvbjogXCJldC1wZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCJqYXZhLWNvbmN1cnJlbnQtcXVlc3Rpb25zLTAxXCIsXHJcbiAgICAgICAgICAgIFwiamF2YS1jb25jdXJyZW50LXF1ZXN0aW9ucy0wMlwiLFxyXG4gICAgICAgICAgICBcImphdmEtY29uY3VycmVudC1xdWVzdGlvbnMtMDNcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU5MUNEXHU4OTgxXHU3N0U1XHU4QkM2XHU3MEI5XCIsXHJcbiAgICAgICAgICAgICAgaWNvbjogXCJzdGFyXCIsXHJcbiAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIFwiam1tXCIsXHJcbiAgICAgICAgICAgICAgICBcImphdmEtdGhyZWFkLXBvb2wtc3VtbWFyeVwiLFxyXG4gICAgICAgICAgICAgICAgXCJqYXZhLXRocmVhZC1wb29sLWJlc3QtcHJhY3RpY2VzXCIsXHJcbiAgICAgICAgICAgICAgICBcImphdmEtY29uY3VycmVudC1jb2xsZWN0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJhcXNcIixcclxuICAgICAgICAgICAgICAgIFwiYXRvbWljLWNsYXNzZXNcIixcclxuICAgICAgICAgICAgICAgIFwidGhyZWFkbG9jYWxcIixcclxuICAgICAgICAgICAgICAgIFwiY29tcGxldGFibGVmdXR1cmUtaW50cm9cIixcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiSlZNXCIsXHJcbiAgICAgICAgICBwcmVmaXg6IFwianZtL1wiLFxyXG4gICAgICAgICAgaWNvbjogXCJ2aXJ0dWFsX21hY2hpbmVcIixcclxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCJtZW1vcnktYXJlYVwiLFxyXG4gICAgICAgICAgICBcImp2bS1nYXJiYWdlLWNvbGxlY3Rpb25cIixcclxuICAgICAgICAgICAgXCJjbGFzcy1maWxlLXN0cnVjdHVyZVwiLFxyXG4gICAgICAgICAgICBcImNsYXNzLWxvYWRpbmctcHJvY2Vzc1wiLFxyXG4gICAgICAgICAgICBcImNsYXNzbG9hZGVyXCIsXHJcbiAgICAgICAgICAgIFwianZtLXBhcmFtZXRlcnMtaW50cm9cIixcclxuICAgICAgICAgICAgXCJqdm0taW50cm9cIixcclxuICAgICAgICAgICAgXCJqZGstbW9uaXRvcmluZy1hbmQtdHJvdWJsZXNob290aW5nLXRvb2xzXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJcdTY1QjBcdTcyNzlcdTYwMjdcIixcclxuICAgICAgICAgIHByZWZpeDogXCJuZXctZmVhdHVyZXMvXCIsXHJcbiAgICAgICAgICBpY29uOiBcImZlYXR1cmVkXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiamF2YTgtY29tbW9uLW5ldy1mZWF0dXJlc1wiLFxyXG4gICAgICAgICAgICBcImphdmE4LXR1dG9yaWFsLXRyYW5zbGF0ZVwiLFxyXG4gICAgICAgICAgICBcImphdmE5XCIsXHJcbiAgICAgICAgICAgIFwiamF2YTEwXCIsXHJcbiAgICAgICAgICAgIFwiamF2YTExXCIsXHJcbiAgICAgICAgICAgIFwiamF2YTEyLTEzXCIsXHJcbiAgICAgICAgICAgIFwiamF2YTE0XCIsXHJcbiAgICAgICAgICAgIFwiamF2YTE1XCIsXHJcbiAgICAgICAgICAgIFwiamF2YTE2XCIsXHJcbiAgICAgICAgICAgIFwiamF2YTE3XCIsXHJcbiAgICAgICAgICAgIFwiamF2YTE4XCIsXHJcbiAgICAgICAgICAgIFwiamF2YTE5XCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1OEJBMVx1N0I5N1x1NjczQVx1NTdGQVx1Nzg0MFwiLFxyXG4gICAgICBpY29uOiBcImNvbXB1dGVyXCIsXHJcbiAgICAgIHByZWZpeDogXCJjcy1iYXNpY3MvXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiXHU3RjUxXHU3RURDXCIsXHJcbiAgICAgICAgICBwcmVmaXg6IFwibmV0d29yay9cIixcclxuICAgICAgICAgIGljb246IFwibmV0d29ya1wiLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCJvdGhlci1uZXR3b3JrLXF1ZXN0aW9uc1wiLFxyXG4gICAgICAgICAgICBcImNvbXB1dGVyLW5ldHdvcmsteGlleGlyZW4tc3VtbWFyeVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTkxQ0RcdTg5ODFcdTc3RTVcdThCQzZcdTcwQjlcIixcclxuICAgICAgICAgICAgICBpY29uOiBcInN0YXJcIixcclxuICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgXCJvc2kmdGNwLWlwLW1vZGVsXCIsXHJcbiAgICAgICAgICAgICAgICBcImFwcGxpY2F0aW9uLWxheWVyLXByb3RvY29sXCIsXHJcbiAgICAgICAgICAgICAgICBcImh0dHAmaHR0cHNcIixcclxuICAgICAgICAgICAgICAgIFwiaHR0cDEuMCZodHRwMS4xXCIsXHJcbiAgICAgICAgICAgICAgICBcImh0dHAtc3RhdHVzLWNvZGVzXCIsXHJcbiAgICAgICAgICAgICAgICBcInRjcC1jb25uZWN0aW9uLWFuZC1kaXNjb25uZWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcInRjcC1yZWxpYWJpbGl0eS1ndWFyYW50ZWVcIixcclxuICAgICAgICAgICAgICAgIFwiYXJwXCIsXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1NjRDRFx1NEY1Q1x1N0NGQlx1N0VERlwiLFxyXG4gICAgICAgICAgcHJlZml4OiBcIm9wZXJhdGluZy1zeXN0ZW0vXCIsXHJcbiAgICAgICAgICBpY29uOiBcImNhb3p1b3hpdG9uZ1wiLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCJvcGVyYXRpbmctc3lzdGVtLWJhc2ljLXF1ZXN0aW9ucy0wMVwiLFxyXG4gICAgICAgICAgICBcImxpbnV4LWludHJvXCIsXHJcbiAgICAgICAgICAgIFwic2hlbGwtaW50cm9cIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFwiLFxyXG4gICAgICAgICAgcHJlZml4OiBcImRhdGEtc3RydWN0dXJlL1wiLFxyXG4gICAgICAgICAgaWNvbjogXCJwZW9wbGUtbmV0d29yay1mdWxsXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwibGluZWFyLWRhdGEtc3RydWN0dXJlXCIsXHJcbiAgICAgICAgICAgIFwiZ3JhcGhcIixcclxuICAgICAgICAgICAgXCJoZWFwXCIsXHJcbiAgICAgICAgICAgIFwidHJlZVwiLFxyXG4gICAgICAgICAgICBcInJlZC1ibGFjay10cmVlXCIsXHJcbiAgICAgICAgICAgIFwiYmxvb20tZmlsdGVyXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJcdTdCOTdcdTZDRDVcIixcclxuICAgICAgICAgIHByZWZpeDogXCJhbGdvcml0aG1zL1wiLFxyXG4gICAgICAgICAgaWNvbjogXCJzdWFuZmFrdVwiLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcInN0cmluZy1hbGdvcml0aG0tcHJvYmxlbXNcIixcclxuICAgICAgICAgICAgXCJsaW5rZWRsaXN0LWFsZ29yaXRobS1wcm9ibGVtc1wiLFxyXG4gICAgICAgICAgICBcInRoZS1zd29yZC1yZWZlcnMtdG8tb2ZmZXJcIixcclxuICAgICAgICAgICAgXCIxMC1jbGFzc2ljYWwtc29ydGluZy1hbGdvcml0aG1zXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1NjU3MFx1NjM2RVx1NUU5M1wiLFxyXG4gICAgICBpY29uOiBcImRhdGFiYXNlXCIsXHJcbiAgICAgIHByZWZpeDogXCJkYXRhYmFzZS9cIixcclxuICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJcdTU3RkFcdTc4NDBcIixcclxuICAgICAgICAgIGljb246IFwiYmFzaWNcIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXCJiYXNpc1wiLCBcImNoYXJhY3Rlci1zZXRcIl0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIk15U1FMXCIsXHJcbiAgICAgICAgICBwcmVmaXg6IFwibXlzcWwvXCIsXHJcbiAgICAgICAgICBpY29uOiBcIm15c3FsXCIsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIm15c3FsLXF1ZXN0aW9ucy0wMVwiLFxyXG4gICAgICAgICAgICBcIm15c3FsLWhpZ2gtcGVyZm9ybWFuY2Utb3B0aW1pemF0aW9uLXNwZWNpZmljYXRpb24tcmVjb21tZW5kYXRpb25zXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1OTFDRFx1ODk4MVx1NzdFNVx1OEJDNlx1NzBCOVwiLFxyXG4gICAgICAgICAgICAgIGljb246IFwic3RhclwiLFxyXG4gICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICBcIm15c3FsLWluZGV4XCIsXHJcbiAgICAgICAgICAgICAgICBcIm15c3FsLWxvZ3NcIixcclxuICAgICAgICAgICAgICAgIFwidHJhbnNhY3Rpb24taXNvbGF0aW9uLWxldmVsXCIsXHJcbiAgICAgICAgICAgICAgICBcImlubm9kYi1pbXBsZW1lbnRhdGlvbi1vZi1tdmNjXCIsXHJcbiAgICAgICAgICAgICAgICBcImhvdy1zcWwtZXhlY3V0ZWQtaW4tbXlzcWxcIixcclxuICAgICAgICAgICAgICAgIFwic29tZS10aG91Z2h0cy1vbi1kYXRhYmFzZS1zdG9yYWdlLXRpbWVcIixcclxuICAgICAgICAgICAgICAgIFwiaW5kZXgtaW52YWxpZGF0aW9uLWNhdXNlZC1ieS1pbXBsaWNpdC1jb252ZXJzaW9uXCIsXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlJlZGlzXCIsXHJcbiAgICAgICAgICBwcmVmaXg6IFwicmVkaXMvXCIsXHJcbiAgICAgICAgICBpY29uOiBcInJlZGlzXCIsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcImNhY2hlLWJhc2ljc1wiLFxyXG4gICAgICAgICAgICBcInJlZGlzLXF1ZXN0aW9ucy0wMVwiLFxyXG4gICAgICAgICAgICBcInJlZGlzLXF1ZXN0aW9ucy0wMlwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTkxQ0RcdTg5ODFcdTc3RTVcdThCQzZcdTcwQjlcIixcclxuICAgICAgICAgICAgICBpY29uOiBcInN0YXJcIixcclxuICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgXCIzLWNvbW1vbmx5LXVzZWQtY2FjaGUtcmVhZC1hbmQtd3JpdGUtc3RyYXRlZ2llc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJyZWRpcy1kYXRhLXN0cnVjdHVyZXMtMDFcIixcclxuICAgICAgICAgICAgICAgIFwicmVkaXMtZGF0YS1zdHJ1Y3R1cmVzLTAyXCIsXHJcbiAgICAgICAgICAgICAgICBcInJlZGlzLW1lbW9yeS1mcmFnbWVudGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcInJlZGlzLWNsdXN0ZXJcIixcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTVGMDBcdTUzRDFcdTVERTVcdTUxNzdcIixcclxuICAgICAgaWNvbjogXCJ0b29sXCIsXHJcbiAgICAgIHByZWZpeDogXCJ0b29scy9cIixcclxuICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJHaXRcIixcclxuICAgICAgICAgIGljb246IFwiZ2l0XCIsXHJcbiAgICAgICAgICBwcmVmaXg6IFwiZ2l0L1wiLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcImdpdC1pbnRyb1wiLCBcImdpdGh1Yi10aXBzXCJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJEb2NrZXJcIixcclxuICAgICAgICAgIGljb246IFwiZG9ja2VyMVwiLFxyXG4gICAgICAgICAgcHJlZml4OiBcImRvY2tlci9cIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXCJkb2NrZXItaW50cm9cIiwgXCJkb2NrZXItaW4tYWN0aW9uXCJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJJREVBXCIsXHJcbiAgICAgICAgICBpY29uOiBcImludGVsbGlqaWRlYVwiLFxyXG4gICAgICAgICAgbGluazogXCJodHRwczovL2dpdGVlLmNvbS9TbmFpbENsaW1iL2F3ZXNvbWUtaWRlYS10dXRvcmlhbFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1NUUzOFx1NzUyOFx1Njg0Nlx1NjdCNlwiLFxyXG4gICAgICBwcmVmaXg6IFwic3lzdGVtLWRlc2lnbi9mcmFtZXdvcmsvXCIsXHJcbiAgICAgIGljb246IFwiZnJhbWV3b3JrXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiU3ByaW5nJlNwcmluZyBCb290XCIsXHJcbiAgICAgICAgICBpY29uOiBcImJ4bC1zcHJpbmctYm9vdFwiLFxyXG4gICAgICAgICAgcHJlZml4OiBcInNwcmluZy9cIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwic3ByaW5nLWtub3dsZWRnZS1hbmQtcXVlc3Rpb25zLXN1bW1hcnlcIixcclxuICAgICAgICAgICAgXCJzcHJpbmdib290LWtub3dsZWRnZS1hbmQtcXVlc3Rpb25zLXN1bW1hcnlcIixcclxuICAgICAgICAgICAgXCJzcHJpbmctY29tbW9uLWFubm90YXRpb25zXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlx1OTFDRFx1ODk4MVx1NzdFNVx1OEJDNlx1NzBCOVwiLFxyXG4gICAgICAgICAgICAgIGljb246IFwic3RhclwiLFxyXG4gICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICBcInNwcmluZy10cmFuc2FjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJzcHJpbmctZGVzaWduLXBhdHRlcm5zLXN1bW1hcnlcIixcclxuICAgICAgICAgICAgICAgIFwic3ByaW5nLWJvb3QtYXV0by1hc3NlbWJseS1wcmluY2lwbGVzXCIsXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm15YmF0aXMvbXliYXRpcy1pbnRlcnZpZXdcIixcclxuICAgICAgICBcIm5ldHR5XCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1N0NGQlx1N0VERlx1OEJCRVx1OEJBMVwiLFxyXG4gICAgICBpY29uOiBcInhpdG9uZ3NoZWppXCIsXHJcbiAgICAgIHByZWZpeDogXCJzeXN0ZW0tZGVzaWduL1wiLFxyXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1NTdGQVx1Nzg0MFwiLFxyXG4gICAgICAgICAgcHJlZml4OiBcImJhc2lzL1wiLFxyXG4gICAgICAgICAgaWNvbjogXCJiYXNpY1wiLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgXCJSRVNUZnVsQVBJXCIsXHJcbiAgICAgICAgICAgIFwibmFtaW5nXCIsXHJcbiAgICAgICAgICAgIFwicmVmYWN0b3JpbmdcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU1MzU1XHU1MTQzXHU2RDRCXHU4QkQ1XHU2MzA3XHU1MzU3XCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCJ1bml0LXRlc3RcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1NUI4OVx1NTE2OFwiLFxyXG4gICAgICAgICAgcHJlZml4OiBcInNlY3VyaXR5L1wiLFxyXG4gICAgICAgICAgaWNvbjogXCJzZWN1cml0eS1maWxsXCIsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcImJhc2lzLW9mLWF1dGhvcml0eS1jZXJ0aWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiand0LWludHJvXCIsXHJcbiAgICAgICAgICAgIFwiYWR2YW50YWdlcyZkaXNhZHZhbnRhZ2VzLW9mLWp3dFwiLFxyXG4gICAgICAgICAgICBcInNzby1pbnRyb1wiLFxyXG4gICAgICAgICAgICBcImRlc2lnbi1vZi1hdXRob3JpdHktc3lzdGVtXCIsXHJcbiAgICAgICAgICAgIFwic2VudGl2ZS13b3Jkcy1maWx0ZXJcIixcclxuICAgICAgICAgICAgXCJkYXRhLWRlc2Vuc2l0aXphdGlvblwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3lzdGVtLWRlc2lnbi1xdWVzdGlvbnNcIixcclxuICAgICAgICBcImRlc2lnbi1wYXR0ZXJuXCIsXHJcbiAgICAgICAgXCJzY2hlZHVsZS10YXNrXCIsXHJcbiAgICAgICAgXCJ3ZWItcmVhbC10aW1lLW1lc3NhZ2UtcHVzaFwiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTUyMDZcdTVFMDNcdTVGMEZcIixcclxuICAgICAgaWNvbjogXCJkaXN0cmlidXRlZC1uZXR3b3JrXCIsXHJcbiAgICAgIHByZWZpeDogXCJkaXN0cmlidXRlZC1zeXN0ZW0vXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiXHU3NDA2XHU4QkJBJlx1N0I5N1x1NkNENSZcdTUzNEZcdThCQUVcIixcclxuICAgICAgICAgIGljb246IFwic3VhbmZha3VcIixcclxuICAgICAgICAgIHByZWZpeDogXCJ0aGVvcmVtJmFsZ29yaXRobSZwcm90b2NvbC9cIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXCJjYXAmYmFzZS10aGVvcmVtXCIsIFwicGF4b3MtYWxnb3JpdGhtXCIsIFwicmFmdC1hbGdvcml0aG1cIl0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFwaS1nYXRld2F5XCIsXHJcbiAgICAgICAgXCJkaXN0cmlidXRlZC1pZFwiLFxyXG4gICAgICAgIFwiZGlzdHJpYnV0ZWQtbG9ja1wiLFxyXG4gICAgICAgIFwiZGlzdHJpYnV0ZWQtdHJhbnNhY3Rpb25cIixcclxuICAgICAgICBcImRpc3RyaWJ1dGVkLWNvbmZpZ3VyYXRpb24tY2VudGVyXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogXCJSUENcdUZGMDhcdThGRENcdTdBMEJcdThDMDNcdTc1MjhcdUZGMDlcdThCRTZcdTg5RTNcIixcclxuICAgICAgICAgIHByZWZpeDogXCJycGMvXCIsXHJcbiAgICAgICAgICBpY29uOiBcIm5ldHdvcmtcIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXCJycGMtaW50cm9cIiwgXCJkdWJib1wiXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiWm9vS2VlcGVyIFx1OEJFNlx1ODlFM1wiLFxyXG4gICAgICAgICAgaWNvbjogXCJmcmFtZXdvcmtcIixcclxuICAgICAgICAgIHByZWZpeDogXCJkaXN0cmlidXRlZC1wcm9jZXNzLWNvb3JkaW5hdGlvbi9cIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiem9va2VlcGVyL3pvb2tlZXBlci1pbnRyb1wiLFxyXG4gICAgICAgICAgICBcInpvb2tlZXBlci96b29rZWVwZXItcGx1c1wiLFxyXG4gICAgICAgICAgICBcInpvb2tlZXBlci96b29rZWVwZXItaW4tYWN0aW9uXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1OUFEOFx1NjAyN1x1ODBGRFwiLFxyXG4gICAgICBpY29uOiBcImV0LXBlcmZvcm1hbmNlXCIsXHJcbiAgICAgIHByZWZpeDogXCJoaWdoLXBlcmZvcm1hbmNlL1wiLFxyXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICBcInJlYWQtYW5kLXdyaXRlLXNlcGFyYXRpb24tYW5kLWxpYnJhcnktc3VidGFibGVcIixcclxuICAgICAgICBcImxvYWQtYmFsYW5jaW5nXCIsXHJcbiAgICAgICAgXCJjZG5cIixcclxuICAgICAgICBcInNxbC1vcHRpbWl6YXRpb25cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1NkQ4OFx1NjA2Rlx1OTYxRlx1NTIxN1wiLFxyXG4gICAgICAgICAgcHJlZml4OiBcIm1lc3NhZ2UtcXVldWUvXCIsXHJcbiAgICAgICAgICBpY29uOiBcIk1RXCIsXHJcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwibWVzc2FnZS1xdWV1ZVwiLFxyXG4gICAgICAgICAgICBcImthZmthLXF1ZXN0aW9ucy0wMVwiLFxyXG4gICAgICAgICAgICBcInJvY2tldG1xLWludHJvXCIsXHJcbiAgICAgICAgICAgIFwicm9ja2V0bXEtcXVlc3Rpb25zXCIsXHJcbiAgICAgICAgICAgIFwicmFiYml0bXEtaW50cm9cIixcclxuICAgICAgICAgICAgXCJyYWJiaXRtcS1xdWVzdGlvbnNcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU5QUQ4XHU1M0VGXHU3NTI4XCIsXHJcbiAgICAgIGljb246IFwiaGlnaGF2YWlsYWJsZVwiLFxyXG4gICAgICBwcmVmaXg6IFwiaGlnaC1hdmFpbGFiaWxpdHkvXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIFwiaGlnaC1hdmFpbGFiaWxpdHktc3lzdGVtLWRlc2lnblwiLFxyXG4gICAgICAgIFwicmVkdW5kYW5jeVwiLFxyXG4gICAgICAgIFwibGltaXQtcmVxdWVzdFwiLFxyXG4gICAgICAgIFwiZmFsbGJhY2smY2lyY3VpdC1icmVha2VyXCIsXHJcbiAgICAgICAgXCJ0aW1lb3V0LWFuZC1yZXRyeVwiLFxyXG4gICAgICAgIFwicGVyZm9ybWFuY2UtdGVzdFwiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9EL2dpdGVlL2dpdGVlLXN0YXRpYy1wYWdlL215LWRvY3MvSmF2YUd1aWRlL2RvY3MvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERcXFxcZ2l0ZWVcXFxcZ2l0ZWUtc3RhdGljLXBhZ2VcXFxcbXktZG9jc1xcXFxKYXZhR3VpZGVcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFxoaWdoLXF1YWxpdHktdGVjaG5pY2FsLWFydGljbGVzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9EL2dpdGVlL2dpdGVlLXN0YXRpYy1wYWdlL215LWRvY3MvSmF2YUd1aWRlL2RvY3MvLnZ1ZXByZXNzL3NpZGViYXIvaGlnaC1xdWFsaXR5LXRlY2huaWNhbC1hcnRpY2xlcy50c1wiO2V4cG9ydCBjb25zdCBoaWdoUXVhbGl0eVRlY2huaWNhbEFydGljbGVzID0gW1xyXG4gIHtcclxuICAgIHRleHQ6IFwiXHU2RDRCXHU4QkQ1MVwiLFxyXG4gICAgaWNvbjogXCJldC1wZXJmb3JtYW5jZVwiLFxyXG4gICAgcHJlZml4OiBcImFkdmFuY2VkLXByb2dyYW1tZXIvXCIsXHJcbiAgICBjb2xsYXBzYWJsZTogZmFsc2UsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICBcInNldmVuLXRpcHMtZm9yLWJlY29taW5nLWFuLWFkdmFuY2VkLXByb2dyYW1tZXJcIixcclxuICAgICAgXCIyMC1iYWQtaGFiaXRzLW9mLWJhZC1wcm9ncmFtbWVyc1wiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHRleHQ6IFwiXHU2RDRCXHU4QkQ1MlwiLFxyXG4gIC8vICAgaWNvbjogXCJleHBlcmllbmNlXCIsXHJcbiAgLy8gICBwcmVmaXg6IFwicGVyc29uYWwtZXhwZXJpZW5jZS9cIixcclxuICAvLyAgIGNvbGxhcHNhYmxlOiBmYWxzZSxcclxuICAvLyAgIGNoaWxkcmVuOiBbXHJcbiAgLy8gICAgIFwiOC15ZWFycy1wcm9ncmFtbWVyLXdvcmstc3VtbWFyeVwiLFxyXG4gIC8vICAgICBcImh1YXdlaS1vZC0yNzUtZGF5c1wiLFxyXG4gIC8vICAgXSxcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHRleHQ6IFwiXHU2RDRCXHU4QkQ1M1wiLFxyXG4gIC8vICAgaWNvbjogXCJjb2RlXCIsXHJcbiAgLy8gICBwcmVmaXg6IFwicHJvZ3JhbW1lci9cIixcclxuICAvLyAgIGNvbGxhcHNhYmxlOiBmYWxzZSxcclxuICAvLyAgIGNoaWxkcmVuOiBbXHJcbiAgLy8gICAgIFwiaG93LWRvLXByb2dyYW1tZXJzLXB1Ymxpc2gtYS10ZWNobmljYWwtYm9va1wiLFxyXG4gIC8vICAgICBcImVmZmljaWVudC1ib29rLXB1Ymxpc2hpbmctYW5kLXByYWN0aWNlLWd1aWRlXCIsXHJcbiAgLy8gICBdLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgdGV4dDogXCJcdTZENEJcdThCRDU0XCIsXHJcbiAgLy8gICBpY29uOiBcImludGVydmlld1wiLFxyXG4gIC8vICAgcHJlZml4OiBcImludGVydmlldy9cIixcclxuICAvLyAgIGNvbGxhcHNhYmxlOiBmYWxzZSxcclxuICAvLyAgIGNoaWxkcmVuOiBbXHJcbiAgLy8gICAgIFwidGhlLWV4cGVyaWVuY2Utb2YtZ2V0LW9mZmVyLWZyb20tb3Zlci0yMC1iaWctY29tcGFuaWVzXCIsXHJcbiAgLy8gICAgIFwidGhlLWV4cGVyaWVuY2UtYW5kLXRoaW5raW5nLW9mLWFuLWludGVydmlldy1leHBlcmllbmNlZC1ieS1hbi1vbGRlci1wcm9ncmFtbWVyXCIsXHJcbiAgLy8gICAgIFwidGVjaG5pY2FsLXByZWxpbWluYXJ5LXByZXBhcmF0aW9uXCIsXHJcbiAgLy8gICAgIFwic2NyZWVuLWNhbmRpZGF0ZXMtZm9yLXBhY2thZ2luZ1wiLFxyXG4gIC8vICAgICBcInN1bW1hcnktb2Ytc3ByaW5nLXJlY3J1aXRtZW50XCIsXHJcbiAgLy8gICAgIFwibXktcGVyc29uYWwtZXhwZXJpZW5jZS1pbi0yMDIxXCIsXHJcbiAgLy8gICAgIFwiaG93LXRvLWV4YW1pbmUtdGhlLXRlY2huaWNhbC1hYmlsaXR5LW9mLXByb2dyYW1tZXJzLWluLXRoZS1maXJzdC10ZXN0LW9mLXRlY2hub2xvZ3lcIixcclxuICAvLyAgICAgXCJzb21lLXNlY3JldHMtYWJvdXQtYWxpYmFiYS1pbnRlcnZpZXdcIixcclxuICAvLyAgIF0sXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICB0ZXh0OiBcIlx1NkQ0Qlx1OEJENTVcIixcclxuICAvLyAgIGljb246IFwid29ya1wiLFxyXG4gIC8vICAgcHJlZml4OiBcIndvcmsvXCIsXHJcbiAgLy8gICBjb2xsYXBzYWJsZTogZmFsc2UsXHJcbiAgLy8gICBjaGlsZHJlbjogW1xyXG4gIC8vICAgICBcImdldC1pbnRvLXdvcmstbW9kZS1xdWlja2x5LXdoZW4teW91LWpvaW4tYS1jb21wYW55XCIsXHJcbiAgLy8gICAgIFwiZW1wbG95ZWUtcGVyZm9ybWFuY2VcIixcclxuICAvLyAgIF0sXHJcbiAgLy8gfSxcclxuXTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9EL2dpdGVlL2dpdGVlLXN0YXRpYy1wYWdlL215LWRvY3MvSmF2YUd1aWRlL2RvY3MvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERcXFxcZ2l0ZWVcXFxcZ2l0ZWUtc3RhdGljLXBhZ2VcXFxcbXktZG9jc1xcXFxKYXZhR3VpZGVcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFxhYm91dC10aGUtYXV0aG9yLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9EL2dpdGVlL2dpdGVlLXN0YXRpYy1wYWdlL215LWRvY3MvSmF2YUd1aWRlL2RvY3MvLnZ1ZXByZXNzL3NpZGViYXIvYWJvdXQtdGhlLWF1dGhvci50c1wiO2V4cG9ydCBjb25zdCBhYm91dFRoZUF1dGhvciA9IFtcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1NEUyQVx1NEVCQVx1N0VDRlx1NTM4NlwiLFxyXG4gICAgaWNvbjogXCJ6dW96aGVcIixcclxuICAgIGNvbGxhcHNhYmxlOiBmYWxzZSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIFwiaW50ZXJuZXQtYWRkaWN0aW9uLXRlZW5hZ2VyXCIsXHJcbiAgICAgIFwibXktY29sbGVnZS1saWZlXCIsXHJcbiAgICAgIFwiamF2YWd1aWRlLTEwMGstc3RhclwiLFxyXG4gICAgICBcImZlZWxpbmdzLWFmdGVyLW9uZS1tb250aC1vZi1pbmR1Y3Rpb24tdHJhaW5pbmdcIixcclxuICAgICAgXCJmZWVsaW5ncy1vZi1oYWxmLWEteWVhci1mcm9tLWdyYWR1YXRpb24tdG8tZW50cnlcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1Njc0Mlx1OEMwOFwiLFxyXG4gICAgaWNvbjogXCJjaGF0XCIsXHJcbiAgICBjb2xsYXBzYWJsZTogZmFsc2UsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICBcIm15LWFydGljbGUtd2FzLXN0b2xlbi1hbmQtbWFkZS1pbnRvLXZpZGVvLWFuZC1pdC1iZWNhbWUtcG9wdWxhclwiLFxyXG4gICAgICBcImRvZy10aGF0LWNvcGllcy1vdGhlci1wZW9wbGUtZXNzYXlcIixcclxuICAgICAgXCJ6aGlzaGl4aW5ncWl1LXR3by15ZWFyc1wiLFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L0QvZ2l0ZWUvZ2l0ZWUtc3RhdGljLXBhZ2UvbXktZG9jcy9KYXZhR3VpZGUvZG9jcy8udnVlcHJlc3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRFxcXFxnaXRlZVxcXFxnaXRlZS1zdGF0aWMtcGFnZVxcXFxteS1kb2NzXFxcXEphdmFHdWlkZVxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyXFxcXGJvb2tzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9EL2dpdGVlL2dpdGVlLXN0YXRpYy1wYWdlL215LWRvY3MvSmF2YUd1aWRlL2RvY3MvLnZ1ZXByZXNzL3NpZGViYXIvYm9va3MudHNcIjtleHBvcnQgY29uc3QgYm9va3MgPSBbXHJcbiAge1xyXG4gICAgdGV4dDogXCJcdThCQTFcdTdCOTdcdTY3M0FcdTU3RkFcdTc4NDBcIixcclxuICAgIGxpbms6IFwiY3MtYmFzaWNzXCIsXHJcbiAgICBpY29uOiBcImNvbXB1dGVyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1NjU3MFx1NjM2RVx1NUU5M1wiLFxyXG4gICAgbGluazogXCJkYXRhYmFzZVwiLFxyXG4gICAgaWNvbjogXCJkYXRhYmFzZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJcdTY0MUNcdTdEMjJcdTVGMTVcdTY0Q0VcIixcclxuICAgIGxpbms6IFwic2VhcmNoLWVuZ2luZVwiLFxyXG4gICAgaWNvbjogXCJzZWFyY2hcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiSmF2YVwiLFxyXG4gICAgbGluazogXCJqYXZhXCIsXHJcbiAgICBpY29uOiBcImphdmFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiXHU4RjZGXHU0RUY2XHU4RDI4XHU5MUNGXCIsXHJcbiAgICBsaW5rOiBcInNvZnR3YXJlLXF1YWxpdHlcIixcclxuICAgIGljb246IFwiaGlnaGF2YWlsYWJsZVwiLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIHRleHQ6IFwiXHU1MjA2XHU1RTAzXHU1RjBGXCIsXHJcbiAgICBsaW5rOiBcImRpc3RyaWJ1dGVkLXN5c3RlbVwiLFxyXG4gICAgaWNvbjogXCJkaXN0cmlidXRlZC1uZXR3b3JrXCIsXHJcbiAgfSxcclxuXTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9EL2dpdGVlL2dpdGVlLXN0YXRpYy1wYWdlL215LWRvY3MvSmF2YUd1aWRlL2RvY3MvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERcXFxcZ2l0ZWVcXFxcZ2l0ZWUtc3RhdGljLXBhZ2VcXFxcbXktZG9jc1xcXFxKYXZhR3VpZGVcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFxvcGVuLXNvdXJjZS1wcm9qZWN0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9EL2dpdGVlL2dpdGVlLXN0YXRpYy1wYWdlL215LWRvY3MvSmF2YUd1aWRlL2RvY3MvLnZ1ZXByZXNzL3NpZGViYXIvb3Blbi1zb3VyY2UtcHJvamVjdC50c1wiO2V4cG9ydCBjb25zdCBvcGVuU291cmNlUHJvamVjdCA9IFtcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1NjI4MFx1NjcyRlx1NjU1OVx1N0EwQlwiLFxyXG4gICAgbGluazogXCJ0dXRvcmlhbFwiLFxyXG4gICAgaWNvbjogXCJib29rXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1NUI5RVx1NjIxOFx1OTg3OVx1NzZFRVwiLFxyXG4gICAgbGluazogXCJwcmFjdGljYWwtcHJvamVjdFwiLFxyXG4gICAgaWNvbjogXCJwcm9qZWN0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1N0NGQlx1N0VERlx1OEJCRVx1OEJBMVwiLFxyXG4gICAgbGluazogXCJzeXN0ZW0tZGVzaWduXCIsXHJcbiAgICBpY29uOiBcInhpdG9uZ3NoZWppXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1NURFNVx1NTE3N1x1N0M3Qlx1NUU5M1wiLFxyXG4gICAgbGluazogXCJ0b29sLWxpYnJhcnlcIixcclxuICAgIGljb246IFwiY29kZWxpYnJhcnktZmlsbFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJcdTVGMDBcdTUzRDFcdTVERTVcdTUxNzdcIixcclxuICAgIGxpbms6IFwidG9vbHNcIixcclxuICAgIGljb246IFwidG9vbFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJcdTY3M0FcdTU2NjhcdTVCNjZcdTRFNjBcIixcclxuICAgIGxpbms6IFwibWFjaGluZS1sZWFybmluZ1wiLFxyXG4gICAgaWNvbjogXCJhLU1hY2hpbmVMZWFybmluZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJcdTU5MjdcdTY1NzBcdTYzNkVcIixcclxuICAgIGxpbms6IFwiYmlnLWRhdGFcIixcclxuICAgIGljb246IFwiYmlnLWRhdGFcIixcclxuICB9LFxyXG5dO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdXLFNBQVMsd0JBQXdCOzs7QUNBdkIsU0FBUSxpQkFBZ0I7OztBQ0FsQyxTQUFTLGNBQWM7QUFFeFgsSUFBTSxlQUFlLE9BQU87QUFBQSxFQUNqQyxFQUFFLE1BQU0sNEJBQVEsTUFBTSxRQUFRLE1BQU0sV0FBVztBQUFBLEVBQy9DLEVBQUUsTUFBTSw0QkFBUSxNQUFNLFVBQVUsTUFBTSx3QkFBd0I7QUFBQSxFQUM5RCxFQUFFLE1BQU0sNEJBQVEsTUFBTSxRQUFRLE1BQU0sVUFBVTtBQUFBLEVBQzlDLEVBQUUsTUFBTSw0QkFBUSxNQUFNLFdBQVcsTUFBTSxvQ0FBb0M7QUFBQSxFQUMzRTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLE1BQ1IsRUFBRSxNQUFNLDRCQUFRLE1BQU0sVUFBVSxNQUFNLHFCQUFxQjtBQUFBLE1BQzNEO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQSxFQUFFLE1BQU0sT0FBTyxNQUFNLE9BQU8sTUFBTSxpQ0FBaUM7QUFBQSxJQUNyRTtBQUFBLEVBQ0Y7QUFDRixDQUFDOzs7QUN6QnlXLFNBQVMsZUFBZTs7O0FDQXdELElBQU0sK0JBQStCO0FBQUEsRUFDN2Q7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErQ0Y7OztBQ3pENFosSUFBTSxpQkFBaUI7QUFBQSxFQUNqYjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjs7O0FDdkJzWSxJQUFNLFFBQVE7QUFBQSxFQUNsWjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBRUE7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0Y7OztBQ2hDa2EsSUFBTSxvQkFBb0I7QUFBQSxFQUMxYjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRjs7O0FKOUJPLElBQU0sZ0JBQWdCLFFBQVE7QUFBQTtBQUFBLEVBRW5DLHlCQUF5QjtBQUFBLEVBQ3pCLFdBQVc7QUFBQSxFQUNYLHNCQUFzQjtBQUFBLEVBQ3RCLHFDQUFxQztBQUFBLEVBQ3JDLGVBQWUsQ0FBQyxTQUFTLFdBQVcsMEJBQTBCLE9BQU8sTUFBTTtBQUFBLEVBQzNFLGNBQWM7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBLEtBQUs7QUFBQSxJQUNIO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsY0FDTixhQUFhO0FBQUEsY0FDYixVQUFVO0FBQUEsZ0JBQ1I7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsY0FDTixhQUFhO0FBQUEsY0FDYixVQUFVO0FBQUEsZ0JBQ1I7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBRUE7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLE1BQU07QUFBQSxVQUNOLFVBQVUsQ0FBQyxZQUFZLHNCQUFzQixVQUFVO0FBQUEsUUFDekQ7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLGNBQ04sYUFBYTtBQUFBLGNBQ2IsVUFBVTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsY0FDTixhQUFhO0FBQUEsY0FDYixVQUFVO0FBQUEsZ0JBQ1I7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sVUFBVSxDQUFDLFNBQVMsZUFBZTtBQUFBLFFBQ3JDO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLGNBQ04sYUFBYTtBQUFBLGNBQ2IsVUFBVTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsY0FDTixhQUFhO0FBQUEsY0FDYixVQUFVO0FBQUEsZ0JBQ1I7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixVQUFVLENBQUMsYUFBYSxhQUFhO0FBQUEsUUFDdkM7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixVQUFVLENBQUMsZ0JBQWdCLGtCQUFrQjtBQUFBLFFBQy9DO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixVQUFVO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLGNBQ04sYUFBYTtBQUFBLGNBQ2IsVUFBVTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixVQUFVLENBQUMsb0JBQW9CLG1CQUFtQixnQkFBZ0I7QUFBQSxRQUNwRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sVUFBVSxDQUFDLGFBQWEsT0FBTztBQUFBLFFBQ2pDO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7OztBRi9iTSxJQUFNLGNBQWMsVUFBVTtBQUFBLEVBQ2pDLE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxFQUNaO0FBQUEsRUFDQSxVQUFVO0FBQUEsRUFDVixRQUFRO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsRUFDVDtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLEVBQ1osUUFBUTtBQUFBLEVBQ1IsYUFBWTtBQUFBLEVBQ1osY0FBYTtBQUFBLEVBQ2IsVUFBUztBQUFBLEVBQ1QsU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLElBQ047QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDRixPQUFPO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxJQUNoQixRQUFRO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsSUFDWDtBQUFBLEVBQ0o7QUFBQSxFQUNBLFFBQ0k7QUFBQSxFQUNKLGVBQWU7QUFBQSxFQUNmLFNBQVM7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxJQUNYLFdBQVc7QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxJQUNkO0FBQUEsSUFDQSxNQUFNO0FBQUEsTUFDRixNQUFNO0FBQUEsSUFDVjtBQUFBLEVBQ0o7QUFDSixDQUFDOzs7QUR4REQsU0FBUyxvQkFBb0I7QUFFN0IsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxnQkFBZ0I7QUFBQSxFQUNoQixPQUFPO0FBQUEsRUFDUCxhQUNFO0FBQUEsRUFDRixNQUFNO0FBQUE7QUFBQSxJQUVKLENBQUMsUUFBUSxFQUFFLE1BQU0sVUFBVSxTQUFTLE1BQU0sQ0FBQztBQUFBLElBQzNDLENBQUMsUUFBUSxFQUFFLE1BQU0sVUFBVSxTQUFTLFFBQVEsQ0FBQztBQUFBLElBQzdDO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLElBQ0EsQ0FBQyxRQUFRLEVBQUUsY0FBYyxVQUFVLFNBQVMsV0FBVyxDQUFDO0FBQUEsSUFDeEQsQ0FBQyxRQUFRLEVBQUUsY0FBYyxXQUFXLFNBQVMsSUFBSSxDQUFDO0FBQUEsSUFDbEQ7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sU0FDRTtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQUEsSUFDQSxDQUFDLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxTQUFTLE1BQU0sQ0FBQztBQUFBO0FBQUEsSUFFakU7QUFBQSxNQUNFO0FBQUEsTUFDQSxDQUFDO0FBQUEsTUFDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBT0Y7QUFBQSxJQUNBO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUNILE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsYUFBYTtBQUFBO0FBQUE7QUFBQSxNQUdYLGNBQWMsQ0FBQyxTQUFTLEtBQUssU0FBUztBQUFBLE1BQ3RDLGdCQUFnQjtBQUFBLE1BQ2hCLFNBQVMsQ0FBQyxLQUFLLEdBQUc7QUFBQTtBQUFBLE1BRWxCLGdCQUFnQixNQUFNLENBQUM7QUFBQSxNQUN2QixTQUFTO0FBQUEsUUFDUCxLQUFLO0FBQUEsVUFDSCxhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
