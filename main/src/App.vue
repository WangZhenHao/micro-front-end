<template>
    <div>
        <div v-if="$route.name">
            <router-view></router-view>
        </div>
        <div v-if="!$route.name">
            <top-silder></top-silder>
            <div class="flex-box">
                <left-silder></left-silder>
                <div id="microContainter"></div>
            </div>
        </div>
        <div @click="change">
             {{ tabList }}
        </div>
       
    </div>
</template>

<script>
import leftSilder from '@views/home/compoents/leftSilder.vue'
import topSilder from '@views/home/compoents/topSilder.vue'
import action from '@/share'

export default {
    name: 'App',
    components: {
        leftSilder,
        topSilder
    },
    data() {
        return {
            tabList: []
        }
    },
    mounted() {
        action.onGlobalStateChange((state, prev) => {
            debugger
            this.tabList = state.tabList;
        })
    },
    methods: {
        change() {
            // this.$store.commit('addTabList', { name: '1111' })
            this.tabList.push({ name: 'xm' })
            action.setGlobalState({
                tabList: this.tabList
            })
        }
    }
};
</script>

<style>
.flex-box {
    display: flex;
}
</style>
