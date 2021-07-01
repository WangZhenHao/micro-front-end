<template>
    <div>
        <top-silder></top-silder>
        <div class="flex-box">
            <left-silder></left-silder>
            <div id="microContainter"></div>
        </div>
    </div>
</template>
<script>
import leftSilder from './compoents/leftSilder.vue'
import topSilder from './compoents/topSilder.vue'

export default {
    components: {
        leftSilder,
        topSilder
    }
}
</script>
<style scoped>

</style>