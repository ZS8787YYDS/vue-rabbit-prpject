// 入口组件
<script setup>
import HomeBanner from "./Components/HomeBanner.vue";
import HomeCategory from "./Components/HomeCategory.vue";
import HomeFreshVue from "./Components/HomeFresh.vue";
import HomeProductListVue from "./Components/HomeProductList.vue";
import HomeRecommendVue from "./Components/HomeRecommend.vue";
</script>
<template>
    <div>
        <Home-category></Home-category>
        <Home-banner></Home-banner>
    </div>
    <HomeFreshVue></HomeFreshVue>
    <HomeRecommendVue></HomeRecommendVue>
    <HomeProductListVue></HomeProductListVue>
</template>
<style scoped>

</style>