<script setup>
import  { onMounted, ref} from 'vue'
import { getBannerDataAPi} from '@/apis/banner'
const bannerData = ref([])
const getBannerData = async () => {
    const res = await getBannerDataAPi()
    bannerData.value = res.result
}
onMounted(() => {
  getBannerData()
})
</script>
<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerData" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>