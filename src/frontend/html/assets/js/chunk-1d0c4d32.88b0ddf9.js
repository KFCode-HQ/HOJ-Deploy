(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1d0c4d32"],{"1f99":function(e,t,r){},"6ebf":function(e,t,r){"use strict";r("1f99")},ac13:function(e,t,r){"use strict";r.r(t);var n=r("ade3"),o=r("c884"),i=(r("f9d4"),r("4ba6"),r("db91"),r("8c06"),r("31c5"),r("697e"),r("cbc8"),r("aedd"),r("8d70"),r("8c33"),r("8f0a"),r("05dd"),r("10b2"),r("f6b6"),r("9b74"),r("832b"),{name:"CodeMirror",data:function(){var e;return{currentValue:"",options:(e={mode:"text/x-csrc",lineNumbers:!0,lineWrapping:!1,theme:"solarized",tabSize:4,line:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],indentUnit:4,styleActiveLine:!0,autofocus:!1,matchBrackets:!0},Object(n.a)(e,"styleActiveLine",!0),Object(n.a)(e,"autoCloseBrackets",!0),Object(n.a)(e,"autoCloseTags",!0),e)}},components:{codemirror:o.codemirror},props:{value:{type:String,default:"C"},mode:{type:String,default:"text/x-csrc"}},mounted:function(){this.currentValue=this.value,this.$refs.editor.editor.setOption("mode",this.mode),this.$refs.editor.editor.on("inputRead",(function(e,t){/\w|\./g.test(t.text[0])&&"complete"!==t.origin&&e.showHint({hint:o.CodeMirror.hint.anyword,completeSingle:!1,range:1e3})}))},watch:{value:function(e){this.currentValue!==e&&(this.currentValue=e)},currentValue:function(e,t){e!==t&&(this.$emit("change",e),this.$emit("input",e))},mode:function(e){this.$refs.editor.editor.setOption("mode",e)}}});r("6ebf"),r=r("2877"),i=Object(r.a)(i,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("codemirror",{ref:"editor",attrs:{options:e.options},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}})}),[],!1,null,null,null);t.default=i.exports}}]);