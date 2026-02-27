<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>


<template>
  <Header />
  <main>
    <RouterView/>
  </main>
  <Footer />
</template>

<style scoped>
  main {
    max-width: 1520px;
    margin: auto;
  }
</style>



  <!-- <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p> -->
