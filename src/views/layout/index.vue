<script setup>
import LayoutNav from '@/views/layout/Components/LayoutNav.vue'
import LayoutHeader from '@/views/layout/Components/LayoutHeader.vue'
import LayoutFooter from '@/views/layout/Components/LayoutFooter.vue'
</script>
<template>
    <div>
        <layout-nav></layout-nav>
        <layout-header></layout-header>
        <router-view></router-view>
        <layout-footer></layout-footer>
    </div>
</template>
<style scoped>

</style>