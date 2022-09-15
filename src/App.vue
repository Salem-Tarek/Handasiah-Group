<template>
  <v-app>
    <NavbarEn v-if="lang === 'En'" />
    <NavbarAr v-else />
    <v-main>
      <router-view />
    </v-main>
    <FooterEn v-if="lang === 'En'" />
    <FooterAr v-else />
  </v-app>
</template>

<script>
// import NavbarAr from './components/Ar/layout/NavbarAr.vue'
import NavbarEn from './components/En/layout/NavbarEn.vue'
import FooterEn from './components/En/layout/FooterEn.vue'
import NavbarAr from './components/Ar/layout/NavbarAr.vue'
import FooterAr from './components/Ar/layout/FooterAr.vue'
export default {
  name: "App",
  components:{
    NavbarEn,
    NavbarAr,
    FooterEn,
    FooterAr,
  },
  data(){
    return {
      lang: "Ar"
    }
  }
};
</script>

<style>
/* body, html {
  font-family: 'Poppins', sans-serif !important;
} */
</style>
