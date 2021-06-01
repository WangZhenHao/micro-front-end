import Vue from 'vue'
import App from '../App.vue'

Vue.config.productionTip = false

let app = null;

function VueRender() {
  return new Vue({
    render: h => h(App),
  }).$mount('#subapp-container')
}

export default function render() {
  if(!app) {
    app = VueRender();
  } 
}

