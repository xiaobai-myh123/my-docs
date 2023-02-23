import{_ as o,W as s,X as d,Y as t,Z as e,$ as a,a0 as l,a1 as n,F as i}from"./framework-b5ed7090.js";const c={},p={href:"https://www.jianshu.com/p/fa41fb80d2b8",target:"_blank",rel:"noopener noreferrer"},u=t("h2",{id:"何谓单元测试",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#何谓单元测试","aria-hidden":"true"},"#"),e(" 何谓单元测试？")],-1),b=t("p",null,"维基百科是这样介绍单元测试的：",-1),f=t("blockquote",null,[t("p",null,"在计算机编程中，单元测试（Unit Testing）是针对程序模块（软件设计的最小单位）进行的正确性检验测试工作。"),t("p",null,[e("程序单元是应用的 "),t("strong",null,"最小可测试部件"),e(" 。在过程化编程中，一个单元就是单个程序、函数、过程等；对于面向对象编程，最小单元就是方法，包括基类（超类）、抽象类、或者派生类（子类）中的方法。")])],-1),_=t("p",null,"由于每个单元有独立的逻辑，在做单元测试时，为了隔离外部依赖，确保这些依赖不影响验证逻辑，我们经常会用到 Fake、Stub 与 Mock 。",-1),g={href:"https://zhuanlan.zhihu.com/p/26942686",target:"_blank",rel:"noopener noreferrer"},k=t("h2",{id:"为什么需要单元测试",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#为什么需要单元测试","aria-hidden":"true"},"#"),e(" 为什么需要单元测试？")],-1),m=t("h3",{id:"为重构保驾护航",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#为重构保驾护航","aria-hidden":"true"},"#"),e(" 为重构保驾护航")],-1),D=n('<blockquote><p>单元测试可以为重构提供信心，降低重构的成本。我们要像重视生产代码那样，重视单元测试。</p></blockquote><p>每个开发者都会经历重构，重构后把代码改坏了的情况并不少见，很可能你只是修改了一个很简单的方法就导致系统出现了一个比较严重的错误。</p><p>如果有了单元测试的话，就不会存在这个隐患了。写完一个类，把单元测试写了，确保这个类逻辑正确；写第二个类，单元测试.....写 100 个类，道理一样，每个类做到第一点“保证逻辑正确性”，100 个类拼在一起肯定不出问题。你大可以放心一边重构，一边运行 APP；而不是整体重构完，提心跳胆地 run。</p><h3 id="提高代码质量" tabindex="-1"><a class="header-anchor" href="#提高代码质量" aria-hidden="true">#</a> 提高代码质量</h3><p>由于每个单元有独立的逻辑，做单元测试时需要隔离外部依赖，确保这些依赖不影响验证逻辑。因为要把各种依赖分离，单元测试会促进工程进行组件拆分，整理工程依赖关系，更大程度减少代码耦合。这样写出来的代码，更好维护，更好扩展，从而提高代码质量。</p><h3 id="减少-bug" tabindex="-1"><a class="header-anchor" href="#减少-bug" aria-hidden="true">#</a> 减少 bug</h3><p>一个机器，由各种细小的零件组成，如果其中某件零件坏了，机器运行故障。必须保证每个零件都按设计图要求的规格，机器才能正常运行。</p><p>一个可单元测试的工程，会把业务、功能分割成规模更小、有独立的逻辑部件，称为单元。单元测试的目标，就是保证各个单元的逻辑正确性。单元测试保障工程各个“零件”按“规格”（需求）执行，从而保证整个“机器”（项目）运行正确，最大限度减少 bug。</p><h3 id="快速定位-bug" tabindex="-1"><a class="header-anchor" href="#快速定位-bug" aria-hidden="true">#</a> 快速定位 bug</h3><p>如果程序有 bug，我们运行一次全部单元测试，找到不通过的测试，可以很快地定位对应的执行代码。修复代码后，运行对应的单元测试；如还不通过，继续修改，运行测试.....直到<strong>测试通过</strong>。</p><h3 id="持续集成依赖单元测试" tabindex="-1"><a class="header-anchor" href="#持续集成依赖单元测试" aria-hidden="true">#</a> 持续集成依赖单元测试</h3><p>持续集成需要依赖单元测试，当持续集成服务自动构建新代码之后，会自动运行单元测试来发现代码错误。</p><h2 id="谁逼你写单元测试" tabindex="-1"><a class="header-anchor" href="#谁逼你写单元测试" aria-hidden="true">#</a> 谁逼你写单元测试？</h2><h3 id="领导要求" tabindex="-1"><a class="header-anchor" href="#领导要求" aria-hidden="true">#</a> 领导要求</h3><p>有些经验丰富的领导，或多或少都会要求团队写单元测试。对于有一定工作经验的队友，这要求挺合理；对于经验尚浅的、毕业生，恐怕要死要活了，连代码都写不好，还要写单元测试，are you kidding me？</p><p>培训新人单元测试用法，是一项艰巨的任务。新人代码风格未形成，也不知道单元测试多重要，强制单元测试会让他们感到困惑，没办法按自己思路写代码。</p><h3 id="大牛都写单元测试" tabindex="-1"><a class="header-anchor" href="#大牛都写单元测试" aria-hidden="true">#</a> 大牛都写单元测试</h3>',17),x={href:"https://link.jianshu.com?t=https://github.com/square/retrofit/tree/master/retrofit/src/test/java/retrofit2",target:"_blank",rel:"noopener noreferrer"},T={href:"https://link.jianshu.com?t=https://github.com/square/okhttp/tree/master/okhttp-tests/src/test/java/okhttp3",target:"_blank",rel:"noopener noreferrer"},q={href:"https://link.jianshu.com?t=https://github.com/JakeWharton/butterknife/tree/master/butterknife-compiler/src/test/java/butterknife",target:"_blank",rel:"noopener noreferrer"},v=n('<p>很多读者都有这种想法，一开始满腔热血。当真要对自己项目单元测试时，便困难重重，很大原因是项目对单元测试不友好。最后只能对一些不痛不痒的工具类做单元测试，久而久之，当初美好愿望也不了了之。</p><h3 id="保住面子" tabindex="-1"><a class="header-anchor" href="#保住面子" aria-hidden="true">#</a> 保住面子</h3><p>都是有些许年经验的老鸟，还天天被测试同学追 bug，好意思么？花多一点时间写单元测试，确保没低级 bug，还能彰显大牛风范，何乐而不为？</p><h3 id="心虚" tabindex="-1"><a class="header-anchor" href="#心虚" aria-hidden="true">#</a> 心虚</h3><p>笔者也是个不太相信自己代码的人，总觉得哪里会突然冒出莫名其妙的 bug，也怕别人不小心改了自己的代码（被害妄想症），新版本上线提心跳胆......花点时间写单元测试，有事没事跑一下测试，确保原逻辑没问题，至少能睡安稳一点。</p><h2 id="tdd-测试驱动开发" tabindex="-1"><a class="header-anchor" href="#tdd-测试驱动开发" aria-hidden="true">#</a> TDD 测试驱动开发</h2><h3 id="何谓-tdd" tabindex="-1"><a class="header-anchor" href="#何谓-tdd" aria-hidden="true">#</a> 何谓 TDD？</h3><p>TDD 即 Test-Driven Development（ 测试驱动开发），这是敏捷开发的一项核心实践和技术，也是一种设计方法论。</p><p>TDD 原理是开发功能代码之前，先编写测试用例代码，然后针对测试用例编写功能代码，使其能够通过。</p><p>TDD 的节奏：“红 - 绿 - 重构”。</p><p><img src="https://static001.geekbang.org/resource/image/09/7f/090e1fc6aff08b4aa66376f776c2337f.png" alt=""></p><p>由于 TDD 对开发人员要求非常高，跟传统开发思维不一样，因此实施起来相当困难。</p><p>TDD 在很多人眼中是不实用的，一来他们并不理解测试“驱动”开发的含义，但更重要的是，他们很少会做任务分解。而任务分解是做好 TDD 的关键点。只有把任务分解到可以测试的地步，才能够有针对性地写测试。</p><h3 id="tdd-优缺点分析" tabindex="-1"><a class="header-anchor" href="#tdd-优缺点分析" aria-hidden="true">#</a> TDD 优缺点分析</h3><p>测试驱动开发有好处也有坏处。因为每个测试用例都是根据需求来的，或者说把一个大需求分解成若干小需求编写测试用例，所以测试用例写出来后，开发者写的执行代码，必须满足测试用例。如果测试不通过，则修改执行代码，直到测试用例通过。</p><p><strong>优点</strong> ：</p><ol><li>帮你整理需求，梳理思路；</li><li>帮你设计出更合理的接口（空想的话很容易设计出屎）；</li><li>减小代码出现 bug 的概率；</li><li>提高开发效率（前提是正确且熟练使用 TDD）。</li></ol><p><strong>缺点</strong> ：</p><ol><li>能用好 TDD 的人非常少，看似简单，实则门槛很高；</li><li>投入开发资源（时间和精力）通常会更多；</li><li>由于测试用例在未进行代码设计前写；很有可能限制开发者对代码整体设计；</li><li>可能引起开发人员不满情绪，我觉得这点很严重，毕竟不是人人都喜欢单元测试，尽管单元测试会带给我们相当多的好处。</li></ol>',19),j={href:"https://zhuanlan.zhihu.com/p/24997923",target:"_blank",rel:"noopener noreferrer"},w=n('<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>单元测试确实会带给你相当多的好处，但不是立刻体验出来。正如买重疾保险，交了很多保费，没病没痛，十几年甚至几十年都用不上，最好就是一辈子用不上理赔，身体健康最重要。单元测试也一样，写了可以买个放心，对代码的一种保障，有 bug 尽快测出来，没 bug 就最好，总不能说“写那么多单元测试，结果测不出 bug，浪费时间”吧？</p><p>以下是个人对单元测试一些建议：</p><blockquote><ul><li>越重要的代码，越要写单元测试；</li><li>代码做不到单元测试，多思考如何改进，而不是放弃；</li><li>边写业务代码，边写单元测试，而不是完成整个新功能后再写；</li><li>多思考如何改进、简化测试代码。</li><li>测试代码需要随着生产代码的演进而重构或者修改，如果测试不能保持整洁，只会越来越难修改。</li></ul></blockquote><p>作为一名经验丰富的程序员，写单元测试更多的是<strong>对自己的代码负责</strong>。有测试用例的代码，别人更容易看懂，以后别人接手你的代码时，也可能放心做改动。</p><p><strong>多敲代码实践，多跟有单元测试经验的工程师交流</strong>，你会发现写单元测试获得的收益会更多。</p>',6);function z(F,L){const r=i("ExternalLinkIcon"),h=i("RouterLink");return s(),d("div",null,[t("blockquote",null,[t("p",null,[e("本文重构完善自"),t("a",p,[e("谈谈为什么写单元测试 - 键盘男 - 2016"),a(r)]),e("这篇文章。")])]),u,b,f,_,t("p",null,[e("关于 Fake、Mock 与 Stub 这几个概念的解读，可以看看这篇文章："),t("a",g,[e("测试中 Fakes、Mocks 以及 Stubs 概念明晰 - 王下邀月熊 - 2018"),a(r)]),e(" 。")]),k,m,t("p",null,[e("我在"),a(h,{to:"/system-design/basis/refactoring.html"},{default:l(()=>[e("重构")]),_:1}),e("这篇文章中这样写到：")]),D,t("p",null,[e("国外很多家喻户晓的开源项目，都有大量单元测试。例如，"),t("a",x,[e("retrofit"),a(r)]),e("、"),t("a",T,[e("okhttp"),a(r)]),e("、"),t("a",q,[e("butterknife"),a(r)]),e(".... 国外大牛都写单元测试，我们也写吧！")]),v,t("p",null,[e("相关阅读："),t("a",j,[e("如何用正确的姿势打开 TDD？ - 陈天 - 2017"),a(r)]),e(" 。")]),w])}const S=o(c,[["render",z],["__file","unit-test.html.vue"]]);export{S as default};
