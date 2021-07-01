<template>
    <div class="top-silder">
        顶部
        <button @click="logout">退出</button>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        logout() {
            this.$router.replace('/login')
        }
    }
}
</script>
<style scoped>
.top-silder {
    background: pink;
}
</style>