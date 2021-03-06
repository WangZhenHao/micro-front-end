import { registerMicroApps, start } from 'qiankun';
import render from './vueRender';
import store from '@/store'

render();

const container = '#microContainter';
const loader = loading => render({ loading });

registerMicroApps([
    {
        name: 'vue-app1',
        entry: '//localhost:7100',
        container,
        loader,
        activeRule: '/vueApp1',
        props: {
          store
        }
    },
    {
        name: 'vue-app2',
        entry: '//localhost:7200',
        container,
        activeRule: '/vueApp2',
        props: {
          store
        }
    }
], {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  })

start();