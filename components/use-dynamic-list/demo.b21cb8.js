(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1333:function(n,s,a){n.exports={basic:a(1604)}},1604:function(n,s,a){n.exports={content:[["p","这是一个基础的动态表单。"]],meta:{order:0,title:"基本",filename:"components/use-dynamic-list/demo/basic.md",id:"components-use-dynamic-list-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Form<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useDynamicList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dantdv3\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Demo <span class="token operator">=</span> props <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> list<span class="token punctuation">,</span> remove<span class="token punctuation">,</span> getKey<span class="token punctuation">,</span> push <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDynamicList</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'David\'</span><span class="token punctuation">,</span> <span class="token string">\'Jack\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> getFieldDecorator<span class="token punctuation">,</span> validateFields <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">.</span>form<span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>result<span class="token punctuation">,</span> setResult<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> Row <span class="token operator">=</span> <span class="token punctuation">(</span>index<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">getKey</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span><span class="token function">getFieldDecorator</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`names[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">getKey</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        initialValue<span class="token punctuation">:</span> item<span class="token punctuation">,</span>\n        rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            required<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            message<span class="token punctuation">:</span> <span class="token string">\'required\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Please</span> <span class="token attr-name">enter</span> <span class="token attr-name">your</span> <span class="token attr-name">name"</span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token punctuation">{</span>list<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>minus-circle-o<span class="token punctuation">"</span></span>\n          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n            <span class="token function">remove</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span>\n        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>plus-circle-o<span class="token punctuation">"</span></span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n          <span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span><span class="token operator">></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ele<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">Row</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> ele<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>\n          <span class="token function">validateFields</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token function">setResult</span><span class="token punctuation">(</span>JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">(</span>val <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>names<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">!</span><span class="token operator">!</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span></span>\n          <span class="token attr-name">})</span>\n        <span class="token attr-name">}</span>\n      <span class="token punctuation">></span></span>\n        Submit\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>result<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> BasicDemoForm <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'basic-form\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicDemoForm</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Form<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useDynamicList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dantdv3\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token parameter">props</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> list<span class="token punctuation">,</span> remove<span class="token punctuation">,</span> getKey<span class="token punctuation">,</span> push <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDynamicList</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'David\'</span><span class="token punctuation">,</span> <span class="token string">\'Jack\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> getFieldDecorator<span class="token punctuation">,</span> validateFields <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">.</span>form<span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>result<span class="token punctuation">,</span> setResult<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">Row</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">getKey</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span><span class="token function">getFieldDecorator</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">names[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">getKey</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">initialValue</span><span class="token operator">:</span> item<span class="token punctuation">,</span>\n        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">\'required\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please enter your name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token punctuation">{</span>list<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>minus-circle-o<span class="token punctuation">"</span></span>\n          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token function">remove</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span>\n        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plus-circle-o<span class="token punctuation">"</span></span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">Row</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> ele<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">></span></span>\n      <span class="token operator">&lt;</span>Button\n        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        type<span class="token operator">=</span><span class="token string">"primary"</span>\n        onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n          <span class="token function">validateFields</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token function">setResult</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">(</span>val <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>names<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span><span class="token operator">!</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token operator">></span>\n        Submit\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>result<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> BasicDemoForm <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">\'basic-form\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BasicDemoForm</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){a(0),a(6);function n(s){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(s)}var s=function(s,a){if(!a&&s&&s.__esModule)return s;if(null===s||"object"!==n(s)&&"function"!=typeof s)return{default:s};var t=o(a);if(t&&t.has(s))return t.get(s);var p={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in s)if("default"!==e&&Object.prototype.hasOwnProperty.call(s,e)){var u=c?Object.getOwnPropertyDescriptor(s,e):null;u&&(u.get||u.set)?Object.defineProperty(p,e,u):p[e]=s[e]}p.default=s,t&&t.set(s,p);return p}(a(0)),t=a(124),p=a(1346);function o(n){if("function"!=typeof WeakMap)return null;var s=new WeakMap,a=new WeakMap;return(o=function(n){return n?a:s})(n)}function c(n,s){return function(n){if(Array.isArray(n))return n}(n)||function(n,s){var a=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=a){var t,p,o,c,e=[],u=!0,l=!1;try{if(o=(a=a.call(n)).next,0===s){if(Object(a)!==a)return;u=!1}else for(;!(u=(t=o.call(a)).done)&&(e.push(t.value),e.length!==s);u=!0);}catch(n){l=!0,p=n}finally{try{if(!u&&null!=a.return&&(c=a.return(),Object(c)!==c))return}finally{if(l)throw p}}return e}}(n,s)||function(n,s){if(!n)return;if("string"==typeof n)return e(n,s);var a=Object.prototype.toString.call(n).slice(8,-1);"Object"===a&&n.constructor&&(a=n.constructor.name);if("Map"===a||"Set"===a)return Array.from(n);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(n,s)}(n,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,s){(null==s||s>n.length)&&(s=n.length);for(var a=0,t=new Array(s);a<s;a++)t[a]=n[a];return t}var u=t.Form.create({name:"basic-form"})((function(n){var a=(0,p.useDynamicList)(["David","Jack"]),o=a.list,e=a.remove,u=a.getKey,l=a.push,i=n.form,k=i.getFieldDecorator,r=i.validateFields,m=c((0,s.useState)(""),2),g=m[0],f=m[1];return s.default.createElement(s.default.Fragment,null,s.default.createElement(t.Form,null,o.map((function(n,a){return function(n,a){return s.default.createElement(t.Form.Item,{key:u(n)},k("names[".concat(u(n),"]"),{initialValue:a,rules:[{required:!0,message:"required"}]})(s.default.createElement(t.Input,{style:{width:300},placeholder:"Please enter your name"})),o.length>1&&s.default.createElement(t.Icon,{type:"minus-circle-o",style:{marginLeft:8},onClick:function(){e(n)}}),s.default.createElement(t.Icon,{type:"plus-circle-o",style:{marginLeft:8},onClick:function(){l("")}}))}(a,n)}))),s.default.createElement(t.Button,{style:{marginTop:8},type:"primary",onClick:function(){return r((function(n,s){n||f(JSON.stringify((s||{}).names.filter((function(n){return!!n}))))}))}},"Submit"),s.default.createElement("div",null,g))}));return s.default.createElement(u,null)}}}}]);