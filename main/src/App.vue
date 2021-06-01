<template>
    <div>
        <div class="wrap">
            <div class="hello">
                <h1>vue-app1工程</h1>
                <a href="/vueApp1/about">About页面</a>
                <br />
                <a href="/vueApp1/home">home页面</a>
            </div>
            <div class="hello">
                <h1>vue-app2工程</h1>
                <a href="/vueApp2/about">About页面</a>
                <br />
                <a href="/vueApp2/home">home页面</a>
            </div>
        </div>

        <div id="microContainter"></div>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
};
</script>

<style>
.wrap {
  display: flex;
}
.hello {
  margin-right: 40px;
  border-right: 1px solid #eee;
}
</style>
