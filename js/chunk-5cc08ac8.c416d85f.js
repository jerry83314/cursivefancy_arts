(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cc08ac8"],{1799:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.changePageEvent(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,o){return e("li",{key:o,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePageEvent(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.changePageEvent(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},c=[],r={props:["pages"],methods:{changePageEvent:function(t){this.$emit("changepage",t),console.log(t)}}},i=r,s=e("2877"),n=Object(s["a"])(i,o,c,!1,null,null,null);a["a"]=n.exports},"1fae":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"text-right mt-4"},[e("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.openModal("new")}}},[t._v("建立新的產品")])]),e("table",{staticClass:"table mt-4"},[t._m(0),e("tbody",t._l(t.products,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.category))]),e("td",[t._v(t._s(a.title))]),e("td",[t._v(t._s(a.origin_price))]),e("td",[t._v(t._s(a.price))]),e("td",[a.enabled?e("span",{staticClass:"text-primary"},[t._v("啟用")]):e("span",[t._v("未啟用")])]),e("td",[e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(e){return t.openModal("update",a)}}},[t._v("編輯")]),e("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(e){return t.openModal("delete",a)}}},[t._v("刪除")])])])])})),0)]),e("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(1),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[t._l(5,(function(a){return e("div",{key:a+"img",staticClass:"form-group"},[e("label",{attrs:{for:"img"+a}},[t._v("輸入圖片網址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.copyProduct.imageUrl[a-1],expression:"copyProduct.imageUrl[i - 1]"}],staticClass:"form-control",attrs:{id:"img"+a,type:"text",placeholder:"請輸入圖片連結"},domProps:{value:t.copyProduct.imageUrl[a-1]},on:{input:function(e){e.target.composing||t.$set(t.copyProduct.imageUrl,a-1,e.target.value)}}})])})),e("img",{staticClass:"img-fluid",attrs:{alt:"",src:t.copyProduct.imageUrl[0]}}),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"customFile"}},[t._v("或 上傳圖片")]),e("input",{staticClass:"form-control",attrs:{type:"file",id:"file"},on:{change:t.uploadFile}})])],2),e("div",{staticClass:"col-sm-8"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("標題")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.copyProduct.title,expression:"copyProduct.title"}],staticClass:"form-control",attrs:{id:"title",type:"text",placeholder:"請輸入標題"},domProps:{value:t.copyProduct.title},on:{input:function(a){a.target.composing||t.$set(t.copyProduct,"title",a.target.value)}}})]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"category"}},[t._v("分類")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.copyProduct.category,expression:"copyProduct.category"}],staticClass:"form-control",attrs:{id:"category",type:"text",placeholder:"請輸入分類"},domProps:{value:t.copyProduct.category},on:{input:function(a){a.target.composing||t.$set(t.copyProduct,"category",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"price"}},[t._v("單位")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.copyProduct.unit,expression:"copyProduct.unit"}],staticClass:"form-control",attrs:{id:"unit",type:"unit",placeholder:"請輸入單位"},domProps:{value:t.copyProduct.unit},on:{input:function(a){a.target.composing||t.$set(t.copyProduct,"unit",a.target.value)}}})])]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"origin_price"}},[t._v("原價")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.copyProduct.origin_price,expression:"copyProduct.origin_price"}],staticClass:"form-control",attrs:{id:"origin_price",type:"number",placeholder:"請輸入原價"},domProps:{value:t.copyProduct.origin_price},on:{input:function(a){a.target.composing||t.$set(t.copyProduct,"origin_price",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"price"}},[t._v("售價")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.copyProduct.price,expression:"copyProduct.price"}],staticClass:"form-control",attrs:{id:"price",type:"number",placeholder:"請輸入售價"},domProps:{value:t.copyProduct.price},on:{input:function(a){a.target.composing||t.$set(t.copyProduct,"price",a.target.value)}}})])]),e("hr"),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"description"}},[t._v("產品描述")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.copyProduct.description,expression:"copyProduct.description"}],staticClass:"form-control",attrs:{id:"description",type:"text",placeholder:"請輸入產品描述"},domProps:{value:t.copyProduct.description},on:{input:function(a){a.target.composing||t.$set(t.copyProduct,"description",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"content"}},[t._v("說明內容")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.copyProduct.content,expression:"copyProduct.content"}],staticClass:"form-control",attrs:{id:"description",type:"text",placeholder:"請輸入說明內容"},domProps:{value:t.copyProduct.content},on:{input:function(a){a.target.composing||t.$set(t.copyProduct,"content",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.copyProduct.enabled,expression:"copyProduct.enabled"}],staticClass:"form-check-input",attrs:{id:"is_enabled",type:"checkbox"},domProps:{checked:Array.isArray(t.copyProduct.enabled)?t._i(t.copyProduct.enabled,null)>-1:t.copyProduct.enabled},on:{change:function(a){var e=t.copyProduct.enabled,o=a.target,c=!!o.checked;if(Array.isArray(e)){var r=null,i=t._i(e,r);o.checked?i<0&&t.$set(t.copyProduct,"enabled",e.concat([r])):i>-1&&t.$set(t.copyProduct,"enabled",e.slice(0,i).concat(e.slice(i+1)))}else t.$set(t.copyProduct,"enabled",c)}}}),e("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(2),e("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),e("strong",{staticClass:"text-danger"},[t._v(t._s(t.copyProduct.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.delProduct}},[t._v("確認刪除")])])])])]),e("pagination",{attrs:{pages:t.pagination},on:{changepage:t.getProduct}})],1)},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"120"}},[t._v("分類")]),e("th",[t._v("產品名稱")]),e("th",{attrs:{width:"120"}},[t._v("原價")]),e("th",{attrs:{width:"120"}},[t._v("售價")]),e("th",{attrs:{width:"100"}},[t._v("是否啟用")]),e("th",{attrs:{width:"120"}},[t._v("編輯")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-dark text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("新增產品")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("刪除產品")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],r=(e("99af"),e("4160"),e("a434"),e("159b"),e("1799")),i={components:{pagination:r["a"]},props:["token"],data:function(){return{products:[],copyProduct:{imageUrl:[]},pagination:{},filePath:"",isLoading:!1}},created:function(){var t=this;t.getProduct()},methods:{openModal:function(t,a){var e=this;switch(t){case"new":e.copyProduct={imageUrl:[]},$("#productModal").modal("show");break;case"update":e.copyProduct=Object.assign({},a),$("#productModal").modal("show");break;case"delete":$("#delProductModal").modal("show"),e.copyProduct=Object.assign({},a);break}},getProduct:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this;a.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/admin/ec/products?page=").concat(t);a.axios.defaults.headers.common.Authorization="Bearer ".concat(a.token),a.axios.get(e).then((function(t){a.pagination=t.data.meta.pagination,a.products=t.data.data,a.isLoading=!1})).catch((function(t){console.log(t.response),a.isLoading=!1}))},updateProduct:function(){var t=this;if(t.isLoading=!0,t.copyProduct.id){t.products.forEach((function(a,e){a.id===t.copyProduct.id&&(t.products[e]=t.copyProduct)})),t.axios.defaults.headers.common.Authorization="Bearer ".concat(t.token);var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/admin/ec/product/").concat(t.copyProduct.id);t.axios.patch(a,t.copyProduct).then((function(a){console.log(a),t.isLoading=!1})).catch((function(a){console.log(a.response),t.isLoading=!1}))}else{t.copyProduct.id=(new Date).getTime(),t.axios.defaults.headers.common.Authorization="Bearer ".concat(t.token);var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/admin/ec/product");t.axios.post(e,t.copyProduct).then((function(a){t.products.push(t.copyProduct),t.copyProduct={imageUrl:[]},t.isLoading=!1,t.getProduct()})).catch((function(a){console.log(a.response),t.isLoading=!1}))}$("#productModal").modal("hide")},delProduct:function(){var t=this,a="";t.products.forEach((function(e,o){t.copyProduct.id===e.id&&(a=o)})),t.isLoading=!0,t.axios.defaults.headers.common.Authorization="Bearer ".concat(t.token);var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/admin/ec/product/").concat(t.copyProduct.id);t.axios.delete(e).then((function(a){console.log(a),t.isLoading=!1})).catch((function(a){console.log(a.response),t.isLoading=!1})),t.products.splice(a,1),t.copyProduct={imageUrl:[]},$("#delProductModal").modal("hide")},uploadFile:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/admin/storage"),e=document.querySelector("#file").files[0],o=new FormData;o.append("file",e),t.axios.defaults.headers.common.Authorization="Bearer ".concat(t.token),t.axios.post(a,o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(a){console.log(a),t.copyProduct.imageUrl.push(a.data.data.path)})).catch((function(t){console.log(t.response)}))}}},s=i,n=e("2877"),l=Object(n["a"])(s,o,c,!1,null,null,null);a["default"]=l.exports},"99af":function(t,a,e){"use strict";var o=e("23e7"),c=e("d039"),r=e("e8b5"),i=e("861d"),s=e("7b0b"),n=e("50c4"),l=e("8418"),d=e("65f0"),u=e("1dde"),p=e("b622"),m=e("2d00"),g=p("isConcatSpreadable"),v=9007199254740991,f="Maximum allowed index exceeded",h=m>=51||!c((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),b=u("concat"),y=function(t){if(!i(t))return!1;var a=t[g];return void 0!==a?!!a:r(t)},P=!h||!b;o({target:"Array",proto:!0,forced:P},{concat:function(t){var a,e,o,c,r,i=s(this),u=d(i,0),p=0;for(a=-1,o=arguments.length;a<o;a++)if(r=-1===a?i:arguments[a],y(r)){if(c=n(r.length),p+c>v)throw TypeError(f);for(e=0;e<c;e++,p++)e in r&&l(u,p,r[e])}else{if(p>=v)throw TypeError(f);l(u,p++,r)}return u.length=p,u}})}}]);
//# sourceMappingURL=chunk-5cc08ac8.c416d85f.js.map