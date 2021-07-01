import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tabList: [{
            name: 'wzh'
        }]
    },
    mutations: {
        addTabList(state, info) {
            state.tabList.push(info);
        }
    }
})