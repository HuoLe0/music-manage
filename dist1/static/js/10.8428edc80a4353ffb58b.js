webpackJsonp([10],{J262:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("BO1k"),r=e.n(s),o=e("gyMJ"),i={data:function(){return{consumerCount:0,songCount:0,singerCount:0,songListCount:0,consumer:[],consumerSex:{columns:["性别","总数"],rows:[{"性别":"男","总数":0},{"性别":"女","总数":0}]},options:{color:["#87cefa","#ffc0cb"]},optionA:{color:["rgb(245, 133, 133)"]},songStyle:{columns:["风格","总数"],rows:[{"风格":"华语","总数":0},{"风格":"粤语","总数":0},{"风格":"欧美","总数":0},{"风格":"日韩","总数":0},{"风格":"BGM","总数":0},{"风格":"轻音乐","总数":0},{"风格":"乐器","总数":0},{"风格":"R&B","总数":0},{"风格":"影视","总数":0},{"风格":"流行","总数":0},{"风格":"浪漫","总数":0},{"风格":"伤感","总数":0},{"风格":"治愈","总数":0}]},singerSex:{columns:["性别","总数"],rows:[{"性别":"女","总数":0},{"性别":"男","总数":0},{"性别":"组合","总数":0},{"性别":"不明","总数":0}]},location:{columns:["地区","总数"],rows:[{"地区":"大陆","总数":0},{"地区":"港澳台","总数":0},{"地区":"日本","总数":0},{"地区":"韩国","总数":0},{"地区":"美国","总数":0},{"地区":"新加坡","总数":0},{"地区":"意大利","总数":0},{"地区":"马来西亚","总数":0},{"地区":"西班牙","总数":0}]}}},created:function(){},mounted:function(){this.getConsumer(),this.getSong(),this.getSinger(),this.getSongList()},methods:{getConsumer:function(){var t=this;Object(o.i)().then(function(n){t.consumer=n,t.consumerCount=n.length,t.consumerSex.rows[0]["总数"]=t.setSex(1,t.consumer),t.consumerSex.rows[1]["总数"]=t.setSex(0,t.consumer)})},setSex:function(t,n){var e=0,s=!0,o=!1,i=void 0;try{for(var a,c=r()(n);!(s=(a=c.next()).done);s=!0){t==a.value.sex&&e++}}catch(t){o=!0,i=t}finally{try{!s&&c.return&&c.return()}finally{if(o)throw i}}return e},getSong:function(){var t=this;Object(o.a)().then(function(n){t.songCount=n.length})},getSinger:function(){var t=this;Object(o.j)().then(function(n){t.singerCount=n.length,t.singerSex.rows[0]["总数"]=t.setSex(0,n),t.singerSex.rows[1]["总数"]=t.setSex(1,n),t.singerSex.rows[2]["总数"]=t.setSex(2,n),t.singerSex.rows[3]["总数"]=t.setSex(3,n);var e=!0,s=!1,o=void 0;try{for(var i,a=r()(n);!(e=(i=a.next()).done);e=!0){var c=i.value;t.getBylocation(c.location)}}catch(t){s=!0,o=t}finally{try{!e&&a.return&&a.return()}finally{if(s)throw o}}})},getSongList:function(){var t=this;Object(o.k)().then(function(n){t.songListCount=n.length;var e=!0,s=!1,o=void 0;try{for(var i,a=r()(n);!(e=(i=a.next()).done);e=!0){var c=i.value;t.getByStyle(c.style)}}catch(t){s=!0,o=t}finally{try{!e&&a.return&&a.return()}finally{if(s)throw o}}})},getByStyle:function(t){var n=!0,e=!1,s=void 0;try{for(var o,i=r()(this.songStyle.rows);!(n=(o=i.next()).done);n=!0){var a=o.value;t.includes(a["风格"])&&a["总数"]++}}catch(t){e=!0,s=t}finally{try{!n&&i.return&&i.return()}finally{if(e)throw s}}},getBylocation:function(t){var n=!0,e=!1,s=void 0;try{for(var o,i=r()(this.location.rows);!(n=(o=i.next()).done);n=!0){var a=o.value;t.includes(a["地区"])&&a["总数"]++}}catch(t){e=!0,s=t}finally{try{!n&&i.return&&i.return()}finally{if(e)throw s}}}}},a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("el-row",{staticClass:"mgb20",attrs:{gutter:20}},[e("el-col",{attrs:{span:6}},[e("el-card",[e("div",{staticClass:"grid-content"},[e("div",{staticClass:"grid-cont-center"},[e("div",{staticClass:"grid-num"},[t._v(t._s(t.consumerCount))]),t._v(" "),e("div",[t._v("用户总数")])])])])],1),t._v(" "),e("el-col",{attrs:{span:6}},[e("el-card",[e("div",{staticClass:"grid-content"},[e("div",{staticClass:"grid-cont-center"},[e("div",{staticClass:"grid-num"},[t._v(t._s(t.songCount))]),t._v(" "),e("div",[t._v("歌曲总数")])])])])],1),t._v(" "),e("el-col",{attrs:{span:6}},[e("el-card",[e("div",{staticClass:"grid-content"},[e("div",{staticClass:"grid-cont-center"},[e("div",{staticClass:"grid-num"},[t._v(t._s(t.singerCount))]),t._v(" "),e("div",[t._v("歌手数量")])])])])],1),t._v(" "),e("el-col",{attrs:{span:6}},[e("el-card",[e("div",{staticClass:"grid-content"},[e("div",{staticClass:"grid-cont-center"},[e("div",{staticClass:"grid-num"},[t._v(t._s(t.songListCount))]),t._v(" "),e("div",[t._v("歌单数量")])])])])],1)],1),t._v(" "),e("el-row",{staticClass:"mgb20",attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("h3",{staticClass:"mgb20"},[t._v("用户性别比例")]),t._v(" "),e("div",{staticStyle:{"background-color":"white"}},[e("ve-pie",{attrs:{data:t.consumerSex,theme:t.options}})],1)]),t._v(" "),e("el-col",{attrs:{span:12}},[e("h3",{staticClass:"mgb20"},[t._v("歌曲类型分布")]),t._v(" "),e("div",{staticStyle:{"background-color":"white"}},[e("ve-histogram",{attrs:{data:t.songStyle,theme:t.optionA}})],1)])],1),t._v(" "),e("el-row",{staticClass:"mgb20",attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("h3",{staticClass:"mgb20"},[t._v("歌手性别比例")]),t._v(" "),e("div",{staticStyle:{"background-color":"white"}},[e("ve-pie",{attrs:{data:t.singerSex}})],1)]),t._v(" "),e("el-col",{attrs:{span:12}},[e("h3",{staticClass:"mgb20"},[t._v("歌手地区分布")]),t._v(" "),e("div",{staticStyle:{"background-color":"white"}},[e("ve-histogram",{attrs:{data:t.location}})],1)]),t._v("A\n    ")],1)],1)},staticRenderFns:[]};var c=e("VU/8")(i,a,!1,function(t){e("dnx0")},"data-v-164dc288",null);n.default=c.exports},dnx0:function(t,n){}});
//# sourceMappingURL=10.8428edc80a4353ffb58b.js.map