webpackJsonp([8],{"2PkT":function(t,e){},tj2P:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("BO1k"),a=i.n(r),n=i("gyMJ"),o={mixins:[i("msXN").a],data:function(){return{centerDialogVisible:!1,editVisible:!1,delVisible:!1,registerForm:{name:"",sex:"",birth:"",location:"",introduction:""},form:{id:"",name:"",sex:"",birth:"",location:"",introduction:""},tableData:[],tempData:[],select_word:"",pageSize:5,currentPage:1,idx:-1,multipleSelection:[]}},computed:{data:function(){return this.tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)}},watch:{select_word:function(){if(""==this.select_word)this.tableData=this.tempData;else{this.tableData=[];var t=!0,e=!1,i=void 0;try{for(var r,n=a()(this.tempData);!(t=(r=n.next()).done);t=!0){var o=r.value;o.name.includes(this.select_word)&&this.tableData.push(o)}}catch(t){e=!0,i=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw i}}}}},created:function(){this.getData()},methods:{handleCurrentChange:function(t){this.currentPage=t},getData:function(){var t=this;this.tempData=[],this.tableData=[],Object(n.j)().then(function(e){t.tempData=e,t.tableData=e,t.currentPage=1})},addSinger:function(){var t=this,e=this.registerForm.birth,i=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),r=new URLSearchParams;r.append("name",this.registerForm.name),r.append("sex",this.registerForm.sex),r.append("pic","/img/singerPic/hhh.jpg"),r.append("birth",i),r.append("location",this.registerForm.location),r.append("introduction",this.registerForm.introduction),Object(n.s)(r).then(function(e){1==e.code?(t.getData(),t.notify("添加成功","success")):t.notify("添加失败","error")}).catch(function(t){console.log(t)}),this.centerDialogVisible=!1},handleEdit:function(t){this.editVisible=!0,this.form={id:t.id,name:t.name,sex:t.sex,birth:t.birth,location:t.location,introduction:t.introduction}},editSave:function(){var t=this,e=new Date(this.form.birth),i=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),r=new URLSearchParams;r.append("id",this.form.id),r.append("name",this.form.name),r.append("sex",this.form.sex),r.append("birth",i),r.append("location",this.form.location),r.append("introduction",this.form.introduction),Object(n.y)(r).then(function(e){1==e.code?(t.getData(),t.notify("修改成功","success")):t.notify("修改失败","error")}).catch(function(t){console.log(t)}),this.editVisible=!1},uploadUrl:function(t){return this.$store.state.HOST+"/singer/updateSingerPic?id="+t},deleteRow:function(){var t=this;Object(n.d)(this.idx).then(function(e){e?(t.getData(),t.notify("删除成功","success")):t.notify("删除失败","error")}).catch(function(t){console.log(t)}),this.delVisible=!1},songEdit:function(t,e){this.$router.push({path:"/Song",query:{id:t,name:e}})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table"},[i("div",{staticClass:"container"},[i("div",{staticClass:"handle-box"},[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.delAll}},[t._v("批量删除")]),t._v(" "),i("el-input",{staticClass:"handle-input",attrs:{size:"mini",placeholder:"请输入歌手名"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.centerDialogVisible=!0}}},[t._v("添加歌手")])],1)]),t._v(" "),i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{size:"mini",border:"",height:"680px",data:t.data},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"40"}}),t._v(" "),i("el-table-column",{attrs:{label:"歌手图片",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"singer-img"},[i("img",{staticStyle:{width:"100%"},attrs:{src:t.getUrl(e.row.pic)}})]),t._v(" "),i("el-upload",{attrs:{action:t.uploadUrl(e.row.id),"before-upload":t.beforeAvatorUpload,"on-success":t.handleAvatorSuccess}},[i("el-button",{attrs:{size:"mini"}},[t._v("更新图片")])],1)]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"name",label:"歌手",width:"120",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{label:"性别",width:"50",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(t.changeSex(e.row.sex))+"\n            ")]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"生日",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(t.attachBirth(e.row.birth))+"\n            ")]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"location",label:"地区",width:"100",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{label:"简介"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("p",{staticStyle:{height:"100px",overflow:"scroll"}},[t._v(t._s(e.row.introduction))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"歌曲管理",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){return t.songEdit(e.row.id,e.row.name)}}},[t._v("歌曲管理")])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){return t.handleEdit(e.row)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.handleDelete(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),i("div",{staticClass:"pagination"},[i("el-pagination",{attrs:{background:"",layout:"total,prev,pager,next","current-page":t.currentPage,"page-size":t.pageSize,total:t.tableData.length},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),i("el-dialog",{attrs:{title:"添加歌手",visible:t.centerDialogVisible,width:"400px",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[i("el-form",{ref:"registerForm",attrs:{model:t.registerForm,"label-width":"80px"}},[i("el-form-item",{attrs:{prop:"name",label:"歌手名",size:"mini"}},[i("el-input",{attrs:{placeholder:"歌手名"},model:{value:t.registerForm.name,callback:function(e){t.$set(t.registerForm,"name",e)},expression:"registerForm.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"性别",size:"mini"}},[i("el-radio-group",{model:{value:t.registerForm.sex,callback:function(e){t.$set(t.registerForm,"sex",e)},expression:"registerForm.sex"}},[i("el-radio",{attrs:{label:0}},[t._v("女")]),t._v(" "),i("el-radio",{attrs:{label:1}},[t._v("男")]),t._v(" "),i("el-radio",{attrs:{label:2}},[t._v("组合")]),t._v(" "),i("el-radio",{attrs:{label:3}},[t._v("不明")])],1)],1),t._v(" "),i("el-form-item",{attrs:{prop:"birth",label:"生日",size:"mini"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.registerForm.birth,callback:function(e){t.$set(t.registerForm,"birth",e)},expression:"registerForm.birth"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"location",label:"地区",size:"mini"}},[i("el-input",{attrs:{placeholder:"地区"},model:{value:t.registerForm.location,callback:function(e){t.$set(t.registerForm,"location",e)},expression:"registerForm.location"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"introduction",label:"简介",size:"mini"}},[i("el-input",{attrs:{placeholder:"简介",type:"textarea"},model:{value:t.registerForm.introduction,callback:function(e){t.$set(t.registerForm,"introduction",e)},expression:"registerForm.introduction"}})],1)],1),t._v(" "),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini"},on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{size:"mini"},on:{click:t.addSinger}},[t._v("确定")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"修改歌手",visible:t.editVisible,width:"400px",center:""},on:{"update:visible":function(e){t.editVisible=e}}},[i("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[i("el-form-item",{attrs:{prop:"name",label:"歌手名",size:"mini"}},[i("el-input",{attrs:{placeholder:"歌手名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"性别",size:"mini"}},[i("el-radio-group",{model:{value:t.form.sex,callback:function(e){t.$set(t.form,"sex",e)},expression:"form.sex"}},[i("el-radio",{attrs:{label:0}},[t._v("女")]),t._v(" "),i("el-radio",{attrs:{label:1}},[t._v("男")]),t._v(" "),i("el-radio",{attrs:{label:2}},[t._v("组合")]),t._v(" "),i("el-radio",{attrs:{label:3}},[t._v("不明")])],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"生日",size:"mini"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.birth,callback:function(e){t.$set(t.form,"birth",e)},expression:"form.birth"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"location",label:"地区",size:"mini"}},[i("el-input",{attrs:{placeholder:"地区"},model:{value:t.form.location,callback:function(e){t.$set(t.form,"location",e)},expression:"form.location"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"introduction",label:"简介",size:"mini"}},[i("el-input",{attrs:{placeholder:"简介",type:"textarea"},model:{value:t.form.introduction,callback:function(e){t.$set(t.form,"introduction",e)},expression:"form.introduction"}})],1)],1),t._v(" "),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini"},on:{click:function(e){t.editVisible=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{size:"mini"},on:{click:t.editSave}},[t._v("确定")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"删除歌手",visible:t.delVisible,width:"300px",center:""},on:{"update:visible":function(e){t.delVisible=e}}},[i("div",{attrs:{align:"center"}},[t._v("删除不可恢复，是否确定删除？")]),t._v(" "),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini"},on:{click:function(e){t.delVisible=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{size:"mini"},on:{click:t.deleteRow}},[t._v("确定")])],1)])],1)},staticRenderFns:[]};var s=i("VU/8")(o,l,!1,function(t){i("2PkT")},"data-v-46249cce",null);e.default=s.exports}});
//# sourceMappingURL=8.f7fffeb6e3c1b0a548c9.js.map