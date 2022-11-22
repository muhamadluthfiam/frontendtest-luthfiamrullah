<template>
  <main class="mx-10">
    <div class="flex justify-start">
      <button
        class="
          rounded-[6px]
          w-[132px]
          h-[33px]
          text-white
          bg-[#50CD89]
          mt-5
          float-left
        "
      >
        Tambah Outlet
      </button>
    </div>
    <div class="flex flex-wrap mt-5 ">
      <CardDiagram />
      <Card />
      <Card />
      <!-- <Card /> -->
    </div>
    <div class="col-12 lg:mt-5">
      <div class="table">
        <div class="d-flex justify-content-between align-items-center"></div>
      </div>
    </div>
  </main>
</template>
<script setup>
import Card from '../components/akuntoko/Card.vue'
import CardDiagram from '../components/akuntoko/CardDiagram.vue'
</script>