<template>
    <div>
        登录页面
        <button @click="login">登录</button>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        login() {
            this.$router.replace('/vueApp1/home')
        }
    }
}
</script>