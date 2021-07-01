import './public-path';
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./router";
import action from '@/share/action.js'
// import store from "./store";

Vue.use(VueRouter);
Vue.config.productionTip = false;
let instance = '', router

function render(props = {}) {
  const { container } = props;
  
  action.setActions(props);

  router = new VueRouter({
      mode: "history",
      base: window.__POWERED_BY_QIANKUN__ ? '/vueApp1' : '/',
      routes,
  });
  
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : "#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
