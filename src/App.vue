<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import CookieConsent from './components/CookieConsent.vue';
</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
  <CookieConsent />
</template>
