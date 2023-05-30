(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1321:function(n,s,a){n.exports={basic:a(1597),withHeight:a(1598)}},1597:function(n,s,a){n.exports={content:[["p","空行可以不传参数直接使用。增加文字或者组件之间的上下间距"]],meta:{order:0,title:"基本",filename:"components/empty-line/demo/basic.md",id:"components-empty-line-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> EmptyLine <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dantdv3\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    第一行文字\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EmptyLine</span> <span class="token punctuation">/></span></span>\n    第二行文字\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> <span class="token punctuation">{</span> EmptyLine <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dantdv3\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    第一行文字\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EmptyLine</span></span> <span class="token punctuation">/></span></span>\n    第二行文字\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){var n=a(0),s=(a(6),a(1346));return n.createElement("div",null,"第一行文字",n.createElement(s.EmptyLine,null),"第二行文字")}}},1598:function(n,s,a){n.exports={content:[["p","自定义空行的高度"]],meta:{order:1,title:"自定义高度",filename:"components/empty-line/demo/withHeight.md",id:"components-empty-line-demo-withHeight"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> EmptyLine <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dantdv3\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    第一行文字\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EmptyLine</span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    第二行文字\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> <span class="token punctuation">{</span> EmptyLine <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dantdv3\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    第一行文字\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EmptyLine</span></span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    第二行文字\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){var n=a(0),s=(a(6),a(1346));return n.createElement("div",null,"第一行文字",n.createElement(s.EmptyLine,{height:50}),"第二行文字")}}}}]);