<template>
  <main>
    <div class="flex">
      <div class="w-[50px] h-[50px] bg-[#EAECF3] my-4 rounded-full content-center">
        <h5 class="text-center my-[15px] text-xl text-[#5E6278]">DC</h5>
      </div>
      <RouterLink
        to="#"
        class="text-black flex my-5 h-full bg-grey-darkest px-4"
      >
      <div>
        <p class="text-[#171C32] font-medium">Dane Cooper</p>
        <p class="text-[12px] text-[#7E8299]">Super admin</p>
      </div>
      <div class="my-2">
        <ArrowIcon />
      </div>
      </RouterLink>
    </div>
  </main>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import ArrowIcon from '../icons/ArrowIcon.vue'

</script>
