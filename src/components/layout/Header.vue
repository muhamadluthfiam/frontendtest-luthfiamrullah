<template>
  <header
    class="
      h-16
      2xl:w-[1658px]
      lg:w-[993px]
      mx-auto
      bg-white
      flex
      justify-between
      items-center
      p-12
      my-2
    "
  >
    <div class="flex items-center">
      <form
        action=""
        class="xl:w-[526px] xl:h-[35px] mr-5 px-3 flex items-center outline-1 outline"
      >
        <SearchIcon />
        <input
          type="search"
          class="
            appearance-none
            bg-grey-darker
            h-full
            w-full
            py-2
            px-2
            text-black
          "
          placeholder="Search..."
        />
      </form>
      <button class="bg-[#0095E8] text-white w-[100px] h-[43px] rounded-[8px]">
        Cari
      </button>
    </div>
    <UserInfo />
  </header>
</template>
<script setup>
import SearchIcon from '../icons/SearchIcon.vue'
import UserInfo from './UserInfo.vue'
</script>