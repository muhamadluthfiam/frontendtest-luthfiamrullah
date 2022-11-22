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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          class="h-18 w-18 text-black fill-current"
        >
          <path
            class="heroicon-ui"
            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
          />
        </svg>
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
    <div class="">
      <a
        href="#"
        class="text-black flex items-center h-full bg-grey-darkest px-4"
      >
        Account
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          class="h-6 w-6 text-grey-darker fill-current ml-1"
        >
          <path
            class="heroicon-ui"
            d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
          />
        </svg>
      </a>
      <div
        class="hidden group-hover:block absolute pin-r top-full w-48 bg-black"
      >
        <a
          href="#"
          class="
            block
            text-left
            py-3
            px-3
            text-black
            hover:text-blue-dark
            text-xs
          "
        >
          My Account
        </a>
        <a
          href="#"
          class="
            block
            text-left
            py-3
            px-3
            text-black
            hover:text-blue-dark
            text-xs
          "
        >
          Edit Account
        </a>
        <a
          href="#"
          class="
            block
            text-left
            py-3
            px-3
            text-black
            hover:text-blue-dark
            text-xs
          "
        >
          Logout
        </a>
      </div>
    </div>
  </header>
</template>