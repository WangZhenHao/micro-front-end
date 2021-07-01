<template>
    <div class="left-silder">
        <router-link
            :key="index"
            :to="item.url"
            class="url-item"
            v-for="(item, index) in list"
        >{{ item.name }}</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {
                    url: '/vueApp1/home',
                    name: 'vue-app1-home',
                },
                {
                    url: '/vueApp1/about',
                    name: 'vue-app1-about',
                },
                {
                    url: '/vueApp2/home',
                    name: 'vue-app2-home',
                },
                {
                    url: '/vueApp2/about',
                    name: 'vue-app2-about',
                },
            ],
        };
    },
    methods: {},
};
</script>
<style scoped>
.left-silder {
    background: red;
}
.url-item {
    display: block;
}
</style>