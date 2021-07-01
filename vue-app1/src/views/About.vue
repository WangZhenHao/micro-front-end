<template>
  <div class="about" @click="changeList">
    vue-app1 - about {{ tabList }}
  </div>
</template>
<script>
import action from '@/share/action'

export default {
    data() {
      return {
        tabList: []
      }
    },
    mounted() {
        action.onGlobalStateChange((state, prev) => {
            debugger
            // this.tabList = state.tabList;
        })
    },
    methods: {
      changeList() {
        // this.store.commit('addTabList', { name: 'xm' })
        this.tabList.push({ name: 'xm' })
        console.log(action)
        action.setGlobalState({
          tabList: this.tabList
        })
      }
    }
}
</script>
