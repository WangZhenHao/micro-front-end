import Vue from 'vue'
import App from '../App.vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

let app = null;

function VueRender() {
  return new Vue({
    store,
    router,
    render: h => h(App),
  }).$mount('#subapp-container')
}

export default function render() {
  if(!app) {
    app = VueRender();
  } 
}

