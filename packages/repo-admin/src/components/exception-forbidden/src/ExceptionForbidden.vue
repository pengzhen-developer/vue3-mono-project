<template>
  <div class="flex flex-col justify-center page-container">
    <div class="text-center">
      <img src="./assets/images/403.svg" alt="" />
    </div>
    <div class="text-center">
      <h1 class="text-base text-gray-500 mb-8">抱歉，你无权访问该页面</h1>
      <div type="info" @click="goHome">回到首页</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goHome() {
  router.push('/')
}
</script>
