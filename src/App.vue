<template>
  <div id="main">
    <!-- Sidebar -->
    <div class="relative h-full min-h-screen">
      <Sidebar />
    </div>

    <!-- Content -->
    <div class="h-full">
      <div class="text-center text-grey-darkest ml-[182px]">
        <!-- Navbar -->
        <!-- w-[1658px] -->
        <Header />
        <!-- content -->
        <main>
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "./components/layout/Sidebar.vue";
import Header from "./components/layout/Header.vue"
</script>

