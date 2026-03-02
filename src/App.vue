<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>


<template>
  <Header />
  <div class="container">
  <main>
    <RouterView/>
  </main>
  </div>
  <Footer />
</template>

<style scoped>
  .container{
    display: flex;
  }

  main {
    width: 1520px;    
    margin: auto;
    text-align: center;
    background-color: white;
  }
</style>



  <!-- <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p> -->
