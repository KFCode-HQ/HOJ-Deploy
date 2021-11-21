(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6dc06db0"],{"10fd":function(t,e,o){"use strict";o("4bf5")},4769:function(t,e,o){},"4bf5":function(t,e,o){},ec2a:function(t,e,o){"use strict";o("4769")},f375:function(t,e,o){"use strict";o.r(e),o("b0c0");var i=o("5530"),n=o("3228"),l=o("90b9"),a=o("7aa9"),s={name:"add-problem-from-public",props:["contestID"],data:function(){return{page:1,limit:10,total:0,loading:!1,problems:[],contest:{},keyword:""}},mounted:function(){var t=this;n.a.admin_getContest(this.contestID).then((function(e){t.contest=e.data.data,t.getPublicProblem()})).catch((function(){}))},methods:{getPublicProblem:function(t){var e=this;this.loading=!0,t={keyword:this.keyword,currentPage:t,limit:this.limit,problemType:this.contest.type,cid:this.contest.id},n.a.admin_getContestProblemList(t).then((function(t){e.loading=!1,e.total=t.data.data.problemList.total,e.problems=t.data.data.problemList.records})).catch((function(){e.loading=!1}))},handleAddProblem:function(t){var e=this;this.$prompt(this.$i18n.t("m.Enter_The_Problem_Display_ID_in_the_Contest"),"Tips").then((function(o){o=o.value,o={pid:t,cid:e.contestID,displayId:o},n.a.admin_addProblemFromPublic(o).then((function(t){e.$emit("on-change"),a.a.success(e.$i18n.t("m.Add_Successfully")),e.getPublicProblem(e.page)}),(function(){}))}),(function(){}))},filterByKeyword:function(){this.getPublicProblem(this.page)}}},r=(o("ec2a"),o("2877")),c=Object(r.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{"text-align":"center"}},[o("vxe-input",{staticStyle:{"margin-bottom":"10px"},attrs:{placeholder:t.$t("m.Enter_keyword"),type:"search",size:"medium"},on:{"search-click":t.filterByKeyword},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.filterByKeyword(e)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),o("vxe-table",{attrs:{data:t.problems,loading:t.loading,"auto-resize":"",stripe:"",align:"center"}},[o("vxe-table-column",{attrs:{title:"ID","min-width":"100",field:"problemId"}}),o("vxe-table-column",{attrs:{"min-width":"150",title:t.$t("m.Title"),field:"title"}}),o("vxe-table-column",{attrs:{title:t.$t("m.Option"),align:"center","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[o("el-tooltip",{attrs:{effect:"dark",content:t.$t("m.Add"),placement:"top"}},[o("el-button",{attrs:{icon:"el-icon-plus",size:"mini",type:"primary"},nativeOn:{click:function(e){return t.handleAddProblem(i.id)}}})],1)]}}])})],1),o("el-pagination",{staticClass:"page",attrs:{layout:"prev, pager, next","page-size":t.limit,"current-page":t.page,total:t.total},on:{"current-change":t.getPublicProblem}})],1)}),[],!1,null,"2e501cee",null).exports,m=o("9a36");s=o("5880"),s={name:"ProblemList",components:{ContestAddProblem:c},data:function(){return{problemListAuth:0,oj:"All",pageSize:10,total:0,problemList:[],contestProblemMap:{},keyword:"",loading:!1,currentPage:1,routeName:"",contestId:"",currentProblemID:"",currentRow:{},addProblemDialogVisible:!1,AddRemoteOJProblemDialogVisible:!1,addRemoteOJproblemLoading:!1,otherOJName:"HDU",otherOJProblemId:"",REMOTE_OJ:{},displayId:"",predefineColors:["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585"]}},mounted:function(){this.init()},computed:Object(i.a)(Object(i.a)({},Object(s.mapGetters)(["userInfo","isSuperAdmin","isProblemAdmin"])),{},{isContest:function(){return!("admin-problem-list"==this.routeName&&!this.contestId)}}),methods:{init:function(){this.routeName=this.$route.name,this.contestId=this.$route.params.contestId,this.getProblemList(this.currentPage),this.REMOTE_OJ=Object.assign({},m.i)},goEdit:function(t){"admin-problem-list"===this.routeName?this.$router.push({name:"admin-edit-problem",params:{problemId:t}}):"admin-contest-problem-list"===this.routeName&&this.$router.push({name:"admin-edit-contest-problem",params:{problemId:t,contestId:this.contestId}})},goCreateProblem:function(){"admin-problem-list"===this.routeName?this.$router.push({name:"admin-create-problem"}):"admin-contest-problem-list"===this.routeName&&this.$router.push({name:"admin-create-contest-problem",params:{contestId:this.contestId}})},currentChange:function(t){this.currentPage=t,this.getProblemList(t)},onPageSizeChange:function(t){this.pageSize=t,this.getProblemList(this.currentPage)},getProblemList:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,e={limit:this.pageSize,currentPage:e,keyword:this.keyword,cid:this.contestId,oj:this.oj},0!=this.problemListAuth&&(e.auth=this.problemListAuth),"admin-problem-list"===this.routeName?n.a.admin_getProblemList(e).then((function(e){t.loading=!1,t.total=e.data.data.total,t.problemList=e.data.data.records}),(function(e){t.loading=!1})):n.a.admin_getContestProblemList(e).then((function(e){t.loading=!1,t.total=e.data.data.problemList.total,t.problemList=e.data.data.problemList.records,t.contestProblemMap=e.data.data.contestProblemMap}),(function(e){t.loading=!1}))},changeProblemAuth:function(t){var e=this;n.a.admin_changeProblemPublic(t).then((function(t){a.a.success(e.$i18n.t("m.Update_Successfully"))}))},deleteProblem:function(t){var e=this;this.$confirm(this.$i18n.t("m.Delete_Problem_Tips"),"Tips",{type:"warning"}).then((function(){var o="admin-problem-list"===e.routeName?"admin_deleteProblem":"admin_deleteContestProblem";n.a[o](t,null).then((function(t){a.a.success(e.$i18n.t("m.Delete_successfully")),e.getProblemList(e.currentPage)})).catch((function(){}))}),(function(){}))},removeProblem:function(t){var e=this;this.$confirm(this.$i18n.t("m.Remove_Problem_Tips"),"Tips",{type:"warning"}).then((function(){n.a.admin_deleteContestProblem(t,e.contestId).then((function(t){a.a.success("success"),e.getProblemList(e.currentPage)})).catch((function(){}))}),(function(){}))},updateProblem:function(t){var e=this,o=Object.assign({},t);t="",t=this.contestId?(o.contest_id=this.contestId,"admin_editContestProblem"):"admin_editProblem";n.a[t](o).then((function(t){a.a.success(e.$i18n.t("m.Update_Successfully")),e.getProblemList(e.currentPage)})).catch((function(){}))},downloadTestCase:function(t){var e=this;l.a.downloadFile("/api/file/download-testcase?pid="+t).then((function(){e.$alert(e.$i18n.t("m.Download_Testcase_Success"),"Tips")}))},ProblemListChangeFilter:function(){this.currentChange(1)},filterByKeyword:function(){this.currentChange(1)},addRemoteOJProblem:function(){var t,e=this;this.otherOJProblemId?this.displayId||!this.contestId?(this.addRemoteOJproblemLoading=!0,t="",t=this.contestId?"admin_addContestRemoteOJProblem":"admin_addRemoteOJProblem",n.a[t](this.otherOJName,this.otherOJProblemId,this.contestId,this.displayId).then((function(t){e.addRemoteOJproblemLoading=!1,e.AddRemoteOJProblemDialogVisible=!1,a.a.success(e.$i18n.t("m.Add_Successfully")),e.currentChange(1)}),(function(t){e.addRemoteOJproblemLoading=!1}))):a.a.error(this.$i18n.t("m.The_Problem_Display_ID_in_the_Contest_is_required")):a.a.error(this.$i18n.t("m.Problem_ID_is_required"))},changeContestProblemColor:function(t,e){var o=this;n.a.admin_setContestProblemInfo({id:t,color:e}).then((function(t){a.a.success(o.$i18n.t("m.Update_Balloon_Color_Successfully"))}))}},watch:{$route:function(t,e){t.params.contestId==e.params.contestId&&t.name==e.name||this.init()}}},o("10fd"),s=Object(r.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[o("span",{staticClass:"panel-title home-title"},[t._v(t._s(t.contestId?t.$t("m.Contest_Problem_List"):t.$t("m.Problem_List")))]),o("div",{staticClass:"filter-row"},[o("span",[o("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:t.goCreateProblem}},[t._v(t._s(t.$t("m.Create"))+" ")])],1),t.contestId?o("span",[o("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(e){t.addProblemDialogVisible=!0}}},[t._v(t._s(t.$t("m.Add_From_Public_Problem"))+" ")])],1):t._e(),o("span",[o("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-plus"},on:{click:function(e){t.AddRemoteOJProblemDialogVisible=!0}}},[t._v(t._s(t.$t("m.Add_Rmote_OJ_Problem"))+" ")])],1),o("span",[o("vxe-input",{attrs:{placeholder:t.$t("m.Enter_keyword"),type:"search",size:"medium"},on:{"search-click":t.filterByKeyword},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.filterByKeyword(e)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),o("span",[o("el-select",{staticStyle:{width:"180px"},attrs:{size:"small"},on:{change:t.ProblemListChangeFilter},model:{value:t.oj,callback:function(e){t.oj=e},expression:"oj"}},[o("el-option",{attrs:{label:t.$t("m.All_Problem"),value:"All"}}),o("el-option",{attrs:{label:t.$t("m.My_OJ"),value:"Mine"}}),t._l(t.REMOTE_OJ,(function(t,e){return o("el-option",{key:e,attrs:{label:t.name,value:t.key}})}))],2)],1),t.contestId?t._e():o("span",[o("el-select",{staticStyle:{width:"180px"},attrs:{size:"small"},on:{change:t.ProblemListChangeFilter},model:{value:t.problemListAuth,callback:function(e){t.problemListAuth=e},expression:"problemListAuth"}},[o("el-option",{attrs:{label:t.$t("m.All_Problem"),value:0}}),o("el-option",{attrs:{label:t.$t("m.Public_Problem"),value:1}}),o("el-option",{attrs:{label:t.$t("m.Private_Problem"),value:2}}),o("el-option",{attrs:{label:t.$t("m.Contest_Problem"),value:3}})],1)],1)])]),o("vxe-table",{ref:"adminProblemList",attrs:{stripe:"","auto-resize":"",data:t.problemList,loading:t.loading,align:"center"}},[o("vxe-table-column",{attrs:{"min-width":"64",field:"id",title:"ID"}}),t.contestId?t._e():o("vxe-table-column",{attrs:{"min-width":"100",field:"problemId",title:t.$t("m.Display_ID")}}),t.contestId?t._e():o("vxe-table-column",{attrs:{field:"title","min-width":"150",title:t.$t("m.Title"),"show-overflow":""}}),t.isContest?o("vxe-table-column",{attrs:{"min-width":"150",title:t.$t("m.Original_Display"),align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return e=e.row,[t.contestId?o("p",[t._v(" "+t._s(t.$t("m.Display_ID"))+"："+t._s(e.problemId)+" ")]):t._e(),t.contestId?o("p",[t._v(t._s(t.$t("m.Title"))+"："+t._s(e.title))]):o("span",[t._v(t._s(e.problemId))])]}}],null,!1,219739643)}):t._e(),t.isContest?o("vxe-table-column",{attrs:{"min-width":"150",title:t.$t("m.Contest_Display"),align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[t.contestProblemMap[i.id]?o("p",[t._v(" "+t._s(t.$t("m.Display_ID"))+"："+t._s(t.contestProblemMap[i.id].displayId)+" ")]):t._e(),t.contestProblemMap[i.id]?o("p",[t._v(" "+t._s(t.$t("m.Title"))+"："+t._s(t.contestProblemMap[i.id].displayTitle)+" ")]):t._e(),t.contestProblemMap[i.id]?o("span",[t._v(" "+t._s(t.$t("m.Balloon_Color"))+"："),o("el-color-picker",{staticStyle:{"vertical-align":"middle"},attrs:{"show-alpha":"",predefine:t.predefineColors,size:"small"},on:{change:function(e){return t.changeContestProblemColor(t.contestProblemMap[i.id].id,t.contestProblemMap[i.id].color)}},model:{value:t.contestProblemMap[i.id].color,callback:function(e){t.$set(t.contestProblemMap[i.id],"color",e)},expression:"contestProblemMap[row.id].color"}})],1):o("span",[t._v(t._s(i.title))])]}}],null,!1,2258011976)}):t._e(),o("vxe-table-column",{attrs:{field:"author","min-width":"130",title:t.$t("m.Author"),"show-overflow":""}}),o("vxe-table-column",{attrs:{"min-width":"120",title:t.$t("m.Created_Time")},scopedSlots:t._u([{key:"default",fn:function(e){return e=e.row,[t._v(" "+t._s(t._f("localtime")(e.gmtCreate))+" ")]}}])}),o("vxe-table-column",{attrs:{"min-width":"96",field:"modifiedUser",title:t.$t("m.Modified_User"),"show-overflow":""}}),o("vxe-table-column",{attrs:{"min-width":"100",title:t.$t("m.Auth")},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[o("el-select",{attrs:{size:"small",disabled:!t.isSuperAdmin&&!t.isProblemAdmin&&!t.contestId},on:{change:function(e){return t.changeProblemAuth(i)}},model:{value:i.auth,callback:function(e){t.$set(i,"auth",e)},expression:"row.auth"}},[o("el-option",{attrs:{label:t.$t("m.Public_Problem"),value:1,disabled:!t.isSuperAdmin&&!t.isProblemAdmin}}),o("el-option",{attrs:{label:t.$t("m.Private_Problem"),value:2}}),o("el-option",{attrs:{label:t.$t("m.Contest_Problem"),value:3,disabled:!t.contestId}})],1)]}}])}),o("vxe-table-column",{attrs:{title:"Option","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[o("el-tooltip",{attrs:{effect:"dark",content:t.$t("m.Edit"),placement:"top"}},[o("el-button",{attrs:{icon:"el-icon-edit-outline",size:"mini",type:"primary"},nativeOn:{click:function(e){return t.goEdit(i.id)}}})],1),t.isSuperAdmin||t.isProblemAdmin?o("el-tooltip",{attrs:{effect:"dark",content:t.$t("m.Download_Testcase"),placement:"top"}},[o("el-button",{attrs:{icon:"el-icon-download",size:"mini",type:"success"},nativeOn:{click:function(e){return t.downloadTestCase(i.id)}}})],1):t._e(),t.contestId?o("el-tooltip",{attrs:{effect:"dark",content:t.$t("m.Remove"),placement:"top"}},[o("el-button",{attrs:{icon:"el-icon-close",size:"mini",type:"warning"},nativeOn:{click:function(e){return t.removeProblem(i.id)}}})],1):t._e(),t.isSuperAdmin||t.isProblemAdmin?o("el-tooltip",{attrs:{effect:"dark",content:t.$t("m.Delete"),placement:"top"}},[o("el-button",{attrs:{icon:"el-icon-delete-solid",size:"mini",type:"danger"},nativeOn:{click:function(e){return t.deleteProblem(i.id)}}})],1):t._e()]}}])})],1),o("div",{staticClass:"panel-options"},[o("el-pagination",{staticClass:"page",attrs:{layout:"prev, pager, next, sizes","page-size":t.pageSize,total:t.total,"page-sizes":[10,30,50,100]},on:{"current-change":t.currentChange,"size-change":t.onPageSizeChange}})],1)],1),t.contestId?o("el-dialog",{attrs:{title:t.$t("m.Add_Contest_Problem"),width:"90%",visible:t.addProblemDialogVisible},on:{"update:visible":function(e){t.addProblemDialogVisible=e},"close-on-click-modal":!1}},[o("ContestAddProblem",{attrs:{contestID:t.contestId},on:{"on-change":t.getProblemList}})],1):t._e(),o("el-dialog",{attrs:{title:t.$t("m.Add_Rmote_OJ_Problem"),width:"350px",visible:t.AddRemoteOJProblemDialogVisible},on:{"update:visible":function(e){t.AddRemoteOJProblemDialogVisible=e},"close-on-click-modal":!1}},[o("el-form",[o("el-form-item",{attrs:{label:t.$t("m.Remote_OJ")}},[o("el-select",{attrs:{size:"small"},model:{value:t.otherOJName,callback:function(e){t.otherOJName=e},expression:"otherOJName"}},t._l(t.REMOTE_OJ,(function(t,e){return o("el-option",{key:e,attrs:{label:t.name,value:t.key}})})),1)],1),o("el-form-item",{attrs:{label:t.$t("m.Problem_ID"),required:""}},[o("el-input",{attrs:{size:"small"},model:{value:t.otherOJProblemId,callback:function(e){t.otherOJProblemId=e},expression:"otherOJProblemId"}})],1),t.contestId?o("el-form-item",{attrs:{label:t.$t("m.Enter_The_Problem_Display_ID_in_the_Contest"),required:""}},[o("el-input",{attrs:{size:"small"},model:{value:t.displayId,callback:function(e){t.displayId=e},expression:"displayId"}})],1):t._e(),o("el-form-item",{staticStyle:{"text-align":"center"}},[o("el-button",{attrs:{type:"primary",icon:"el-icon-plus",loading:t.addRemoteOJproblemLoading},on:{click:t.addRemoteOJProblem}},[t._v(t._s(t.$t("m.Add"))+" ")])],1)],1)],1)],1)}),[],!1,null,"b61f54f0",null);e.default=s.exports}}]);