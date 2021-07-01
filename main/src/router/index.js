import Vue from 'vue'
import Router from 'vue-router';

const login = () => import(/* webpackChunkName: "login" */ '@views/login');
const home = () => import(/* webpackChunkName: "home" */ '@views/home');

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            meta: {
                title: '登录'
            },
            component: login
        },
        {
            path: '/home',
            name: 'home',
            meta: {
                title: '首页'
            },
            component: home
        }
    ]

})

router.beforeEach((to, from, next) => {
    if(to.matched.length === 0) {
        next();
        return
    }
    next();
})

export default router;