<script setup>
import DashboardIcon from '../icons/DashboardIcon.vue'
import CarbonProductIcon from '../icons/CarbonProductIcon.vue'
import PriceChangeIcon from '../icons/PriceChangeIcon.vue'

</script>
<template>
  <main class="w-[262px]">
    <RouterLink to="/" class="mt-10">
      <div class="d-flex justify-content-start align-items-center mt-7">
        <span class="font-semibold text-5xl">LOGO</span>
        <div class="mt-1">
          <span class="italic text-gray-400">version 0.12</span>
          <span class="versioning ml-2">Beta</span>
        </div>
      </div>

      <button id="toggle-navbar" onclick="toggleNavbar()">
      </button>
    </RouterLink>

    <RouterLink to="/dashboard" class="sidebar-item mt-14" onclick="toggleActive(this)">
      <DashboardIcon />
      <span>Dashboard</span>
    </RouterLink>

    <h5 class="font-bold text-lg mt-7">Product</h5>

    <RouterLink to="/product/harga" class="sidebar-item" onclick="toggleActive(this)">
      <DashboardIcon/>

      <span>Harga</span>
    </RouterLink>

    <RouterLink to="/product/kategori" class="sidebar-item" onclick="toggleActive(this)">
      <CarbonProductIcon />

      <span>Kategori</span>
    </RouterLink>

    <RouterLink to="/product/product-listing" class="sidebar-item" onclick="toggleActive(this)">
      <!-- <img src="./assets/img/global/dollar-sign.svg" alt=""> -->
      <PriceChangeIcon/>
      <span>Product Listing</span>
    </RouterLink>

    <h5 class="font-bold text-lg mt-7">Marketing</h5>

    <RouterLink to="/marketing/banner" class="sidebar-item" onclick="toggleActive(this)">
      <!-- <img src="./assets/img/global/box.svg" alt=""> -->
      <DashboardIcon />
      <span>Banner</span>
    </RouterLink>

    <RouterLink to="/marketing/promo-produk" class="sidebar-item" onclick="toggleActive(this)">
      <!-- <img src="./assets/img/global/home.svg" alt=""> -->
      <CarbonProductIcon />
      <span>Promo Produk</span>
    </RouterLink>

    <RouterLink to="/marketing/voucher" class="sidebar-item" onclick="toggleActive(this)">
      <!-- <img src="./assets/img/global/gift.svg" alt=""> -->
      <PriceChangeIcon />
      <span>Voucher</span>
    </RouterLink>

    <h5 class="font-bold text-lg mt-7">Toko</h5>
    <RouterLink to="/toko/zona" class="sidebar-item" onclick="toggleActive(this)">
      <DashboardIcon/>
      <span>Zona</span>
    </RouterLink>

    <RouterLink to="/toko/geofencing" class="sidebar-item" onclick="toggleActive(this)">
      

      <DashboardIcon/>

      <span>Geofencing</span>
    </RouterLink>
    <RouterLink to="/toko/akun-toko" class="sidebar-item" onclick="toggleActive(this)">
      
      <DashboardIcon/>
      <span>Akun Toko</span>
    </RouterLink>

    <RouterLink to="/toko/membership-toko" class="sidebar-item" onclick="toggleActive(this)">
      
      <PriceChangeIcon/>
      <span>Membership Toko</span>
    </RouterLink>

    <RouterLink to="/toko/stock" class="sidebar-item" onclick="toggleActive(this)">
      
      <CarbonProductIcon/>
      <span>Stock</span>
      <!-- NOTED: ADDING DROPDOWN MENU ITEM : BANNER, DISKON, PROMO -->
    </RouterLink>

    <RouterLink to="/toko/human-resource" class="sidebar-item" onclick="toggleActive(this)">
      
      <PriceChangeIcon/>
      <span>Human Resource</span>
    </RouterLink>

    <h5 class="font-bold text-lg mt-7">Driver</h5>
    <RouterLink to="/toko/driver" class="sidebar-item" onclick="toggleActive(this)">
      <DashboardIcon/>

      <span>Zona</span>
    </RouterLink>

    <RouterLink to="/toko/aktifitas-order" class="sidebar-item" onclick="toggleActive(this)">
      
      <CarbonProductIcon/>
      <span>Aktifitas Order</span>
    </RouterLink>
    
    <h5 class="font-bold text-lg mt-7">Pengguna</h5>
    <RouterLink to="/pengguna/akun-pengguna" class="sidebar-item" onclick="toggleActive(this)">
      <DashboardIcon />
      <span>Akun Pengguna</span>
    </RouterLink>

    <RouterLink to="/pengguna/membership-pengguna" class="sidebar-item" onclick="toggleActive(this)">
      <CarbonProductIcon />
      <span>Membership Pengguna</span>
    </RouterLink>

    <h5 class="font-bold text-lg mt-7">Customer Service</h5>
    <RouterLink to="/customer-service/komplain" class="sidebar-item" onclick="toggleActive(this)">
      <DashboardIcon />
      <span>Komplain</span>
    </RouterLink>

    <RouterLink to="/customer-service/aktifitas-order" class="sidebar-item" onclick="toggleActive(this)">
      <CarbonProductIcon />
      <span>Aktifitas Order</span>
    </RouterLink>
  </main>
</template>