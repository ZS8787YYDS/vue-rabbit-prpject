<script setup>
import { onMounted } from 'vue';
import LayoutNav from '@/views/layout/Components/LayoutNav.vue'
import LayoutHeader from '@/views/layout/Components/LayoutHeader.vue'
import LayoutFooter from '@/views/layout/Components/LayoutFooter.vue'
import LayoutFixed from './Components/LayoutFixed.vue';
import { useCategoryStore } from '@/stores/Category';
const categoryStore = useCategoryStore()
onMounted(() => {
    const { getCategory } = categoryStore
    getCategory()
})
</script>
<template>
    <div>
        <layout-fixed></layout-fixed>
        <layout-nav></layout-nav>
        <layout-header></layout-header>
        <router-view></router-view>
        <layout-footer></layout-footer>
    </div>
</template>
<style scoped>

</style>