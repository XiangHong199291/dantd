(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1324:function(t,e){t.exports={content:["section",["h2","何时使用"],["p","需要一个数据查询组件时使用，组件会自己管理状态并返回查询的数据。"]],meta:{category:"组件",type:"数据录入",cols:1,title:"QueryForm",subtitle:"查询表单",filename:"components/query-form/index.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","BasicFormItems"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","columns"],["td","表单列的配置描述，具体项见下表（必填）"],["td","ColumnProps"],["td","[]"]],["tr",["td","searchText"],["td","搜索按钮的文案"],["td","string"],["td","React.ReactNode"],["td","查询"]],["tr",["td","resetText"],["td","重置按钮的文案"],["td","string"],["td","React.ReactNode"],["td","重置"]],["tr",["td","mode"],["td",["code","FormItem"]," 的展示模式，",["code","full"],"是占满整行，左对齐； ",["code","align"]," 会根据标题右对齐"],["td",["code","['full', 'align']"]],["td",["code","'full'"]]],["tr",["td","showOptionBtns"],["td","是否展示右下角的「查询」「重置」按钮，以及「展开」「收起」"],["td","boolean"],["td","true"]],["tr",["td","showCollapseButton"],["td","是否展示右下角的「展开」「收起」"],["td","boolean"],["td","true"]],["tr",["td","onChange"],["td","表单的值改变时触发的回调"],["td","Function(values, form)"],["td","-"]],["tr",["td","onSearch"],["td","点击查询按钮的回调"],["td","Function(values, form)"],["td","-"]],["tr",["td","onReset"],["td","点击重置按钮的回调"],["td","Function(form)"],["td","-"]],["tr",["td","getFormInstance"],["td","只用来获取Form实例的回调"],["td","Function(form)"],["td","-"]],["tr",["td","defaultCollapse"],["td","是否默认「展开」"],["td","boolean"],["td","true"]],["tr",["td","colConfig"],["td","Col 布局配置"],["td",["code","{lg:number;md:number;xxl:number;xl:number;sm:number;xs:number}"]],["td","{xs:24,sm:24,md:12,lg:12,xl:8,xxl:6,}"]],["tr",["td","antConfig"],["td","使用 ",["code","Antd ConfigProvider"]," 进行的全局配置，需要通过这个属性传进来"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/config-provider/index.tsx"},"ConfigProviderProps"]],["td","-"]]]],["h3","Columns"],["p","表单列的配置描述，目前支持 ",["code","['input', 'select', 'custom']"]," 这三种。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","type"],["td","动态表单组件的类型，内置 ",["code","input"],", ",["code","select"],"；也可以自定义"],["td",["code","['input', 'select', 'custom']"]],["td","-"]],["tr",["td","title"],["td","标题"],["td","string"],["td","-"]],["tr",["td","dataIndex"],["td","form表单的唯一标识，不可以重复"],["td","string"],["td","-"]],["tr",["td","placeholder"],["td","占位文案，默认会根据 ",["code","title"]," 自动生成"],["td","string"],["td","-"]],["tr",["td","required"],["td","是否对参数进行必填校验"],["td","boolean"],["td","true"]],["tr",["td","initialValue"],["td","表单的初始化值"],["td","any"],["td","-"]],["tr",["td","formItemLayout"],["td","表单的Layout"],["td",["code","{labelCol:{xs:{span:number},sm:{span:number},md:{span:number},lg:{span:number},xl:{span:number},xxl:{span:number}},wrapperCol:{xs:{span:number},sm:{span:number},md:{span:number},lg:{span:number},xl:{span:number},xxl:{span:number}}}"]],["td",["code","{labelCol:{xs:{span:5},sm:{span:5},md:{span:7},lg:{span:7},xl:{span:8},xxl:{span:8},},wrapperCol:{xs:{span:19},sm:{span:19},md:{span:17},lg:{span:17},xl:{span:16},xxl:{span:16},},}"]]],["tr",["td","rules"],["td","自定义表单项的校验规则"],["td",["code","object[]"]],["td","-"]],["tr",["td","size"],["td","表单项的 ",["code","size"]," 属性"],["td",["code","large"]," ","|"," ",["code","default"]," ","|"," ",["code","small"]],["td",["code","default"]]],["tr",["td","componentProps"],["td",["code",'type="input|select"']," 时，可以通过该属性 ant 组件的Props"],["td","any"],["td","-"]],["tr",["td","component"],["td",["code",'type="custom"']," 时，可以通过该属性传递 ",["code","React.ReactNode"]],["td","React.ReactNode"],["td","-"]],["tr",["td","selectMode"],["td",["code",'type="select"']," 时的 ",["code","mode"]," 属性"],["td",["code","default"]," ","|"," ",["code","multiple"]],["td",["code","default"]]],["tr",["td","options"],["td",["code",'type="select"']," 时，通过该属性设置下拉选项"],["td","{title: string;value: string;}[]"],["td","[]"]]]]]}}}]);