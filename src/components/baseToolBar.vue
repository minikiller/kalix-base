<!--
描述：table上方工具栏组件的二次封装
开发人：sunlf
开发日期：2017年8月17日
-->

<template lang="pug">
  div.kalix-base-tool-bar
    template(v-for="btn in defaultBtnList")
      el-button(v-if="btn.isShow" v-on:click="toggle(btn.id)" v-bind:type="btn.type||'primary'")
        i.iconfont(v-bind:class="btn.icon")
        | {{btn.title}}
</template>

<script type="text/ecmascript-6">
  import {ON_TOOLBAR_CLICK} from './event.toml'
  import {GlobalToolBarButtonList} from '../config/global.toml'
  import Util from '../common/util.js'

  export default {
    props: {
      toolbarBtnList: {
        type: Array
      }
    },
    data() {
      return {}
    },
    created() {
      this.initToolBtnList()
    },
    methods: {
      initToolBtnList() {
        let defaultToolBarBtnList = Util.getNewObject(GlobalToolBarButtonList)
        this.defaultBtnList = Util.concatArrayObject(this.toolbarBtnList, defaultToolBarBtnList)
      },
      toggle(btnId) {
        this.$emit(ON_TOOLBAR_CLICK, btnId)
      }
    }
  }
</script>
