(function(){"use strict";var t={5672:function(t,o,e){var n=e(6369),r=function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"root"}},[o("div",{staticClass:"todo-container"},[o("div",{staticClass:"todo-wrap"},[o("MyHeader",{on:{addTodo:t.addTodo}}),o("MyList",{attrs:{todos:t.todos}}),o("MyFooter",{attrs:{todos:t.todos,checkAllTodo:t.checkAllTodo,clearAllTodo:t.clearAllTodo}})],1)])])},s=[],l=(e(541),function(){var t=this,o=t._self._c;return o("div",{staticClass:"todo-header"},[o("input",{attrs:{type:"text",placeholder:"やることを入力して、enterキーで確認"},on:{keyup:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.add.apply(null,arguments)}}})])}),d=[],i=e(691),a={name:"MyHeader",methods:{add(t){if(!t.target.value)return;const o={id:(0,i.x0)(),title:t.target.value,done:!1};this.$emit("addTodo",o),t.target.value=""}}},c=a,u=e(1001),h=(0,u.Z)(c,l,d,!1,null,"6c6c6bfd",null),f=h.exports,p=function(){var t=this,o=t._self._c;return o("ul",{staticClass:"todo-main"},t._l(t.todos,(function(t){return o("MyItem",{key:t.id,attrs:{todo:t}})})),1)},v=[],b=function(){var t=this,o=t._self._c;return o("li",[o("label",[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{change:function(o){return t.handleCheck(t.todo.id)}}}),o("span",[t._v(t._s(t.todo.title))])]),o("button",{staticClass:"btn btn-danger",on:{click:function(o){return t.handleDelete(t.todo.id)}}},[t._v("削除")])])},m=[],y={name:"MyItem",props:["todo"],methods:{handleCheck(t){this.$bus.$emit("checkTodo",t)},handleDelete(t){confirm("削除しますか")&&this.$bus.$emit("deleteTodo",t)}}},k=y,T=(0,u.Z)(k,b,m,!1,null,"222206a2",null),g=T.exports,_={name:"MyList",components:{MyItem:g},props:["todos"]},A=_,x=(0,u.Z)(A,p,v,!1,null,"00cfdd14",null),$=x.exports,w=function(){var t=this,o=t._self._c;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],staticClass:"todo-footer"},[o("label",[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.isAll},on:{change:t.checkAll}})]),o("span",[o("span",[t._v("完成数"+t._s(t.doneTotal))]),t._v(" / 全部"+t._s(t.total)+" ")]),o("button",{staticClass:"btn btn-danger",on:{click:t.clearAll}},[t._v(" 完成したことをクリア ")])])},O=[],C={name:"MyFooter",props:["todos","checkAllTodo","clearAllTodo"],computed:{isAll:{get(){return this.doneTotal===this.total&&this.total>0}},total:{get(){return this.todos.length}},doneTotal:{get(){let t=0;return this.todos.forEach((o=>{o.done&&t++})),t}}},methods:{checkAll(t){this.checkAllTodo(t.target.checked)},clearAll(){confirm("削除しますか")&&this.clearAllTodo()}}},M=C,Z=(0,u.Z)(M,w,O,!1,null,null,null),P=Z.exports,j={name:"App",components:{MyHeader:f,MyList:$,MyFooter:P},methods:{addTodo(t){this.todos.unshift(t)},checkTodo(t){this.todos.forEach((o=>{o.id===t&&(o.done=!o.done)}))},deleteTodo(t){this.todos=this.todos.filter((o=>o.id!==t))},checkAllTodo(t){this.todos.forEach((o=>{o.done=t}))},clearAllTodo(){this.todos=this.todos.filter((t=>!t.done))}},data(){return{todos:JSON.parse(localStorage.getItem("todos"))||[]}},watch:{todos:{deep:!0,handler(t){localStorage.setItem("todos",JSON.stringify(t))}}},mounted(){this.$bus.$on("checkTodo",this.checkTodo),this.$bus.$on("deleteTodo",this.deleteTodo)},beforeDestroy(){this.$bus.$off("checkTodo"),this.$bus.$off("deleteTodo")}},E=j,I=(0,u.Z)(E,r,s,!1,null,null,null),F=I.exports;n.ZP.config.productionTip=!1,new n.ZP({render:t=>t(F),beforeCreate(){n.ZP.prototype.$bus=this}}).$mount("#app")}},o={};function e(n){var r=o[n];if(void 0!==r)return r.exports;var s=o[n]={exports:{}};return t[n](s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(o,n,r,s){if(!n){var l=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],s=t[c][2];for(var d=!0,i=0;i<n.length;i++)(!1&s||l>=s)&&Object.keys(e.O).every((function(t){return e.O[t](n[i])}))?n.splice(i--,1):(d=!1,s<l&&(l=s));if(d){t.splice(c--,1);var a=r();void 0!==a&&(o=a)}}return o}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[n,r,s]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var r,s,l=n[0],d=n[1],i=n[2],a=0;if(l.some((function(o){return 0!==t[o]}))){for(r in d)e.o(d,r)&&(e.m[r]=d[r]);if(i)var c=i(e)}for(o&&o(n);a<l.length;a++)s=l[a],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(c)},n=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(5672)}));n=e.O(n)})();
//# sourceMappingURL=app.43c8dbdf.js.map