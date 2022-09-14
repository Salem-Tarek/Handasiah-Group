<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/En/Navbar.vue'
import Footer from './components/En/Footer.vue'
export default {
  name: "App",
  components:{
    Navbar,
    Footer
  }
};
</script>

<style>
body, html {
  font-family: 'Poppins', sans-serif;
}
</style>
