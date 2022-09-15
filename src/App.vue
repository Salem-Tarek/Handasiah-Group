<template>
  <v-app :style="{ direction : getLang === 'En' ? 'ltr' : 'rtl', fontFamily: getLang === 'En' ? 'Poppins, sans-serif' : 'Cairo, sans-serif'}">
    <v-snackbar color="#0057a8" class="font-weight-bold" top v-model="showSnackbar" :timeout="2000">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="showSnackbar = false"
        >
          {{ getLang === 'En' ? 'Close' : 'إغلاق' }}
        </v-btn>
      </template>
    </v-snackbar>
    <NavbarEn v-if="getLang === 'En'" />
    <NavbarAr v-else />
    <v-main>
      <router-view />
    </v-main>
    <FooterEn v-if="getLang === 'En'" />
    <FooterAr v-else />
  </v-app>
</template>

<script>
import NavbarEn from './components/En/layout/NavbarEn.vue'
import FooterEn from './components/En/layout/FooterEn.vue'
import NavbarAr from './components/Ar/layout/NavbarAr.vue'
import FooterAr from './components/Ar/layout/FooterAr.vue'
import { mapGetters } from 'vuex'

export default {
  name: "App",
  data(){
    return {
      showSnackbar: false,
      text: ""
    }
  },
  components:{
    NavbarEn,
    NavbarAr,
    FooterEn,
    FooterAr,
  },
  computed:{
    ...mapGetters(['getLang']),
  },
  watch: {
    getLang(newVal){
      console.log(newVal);
      if(newVal === "En"){
        this.text = "Language Changed to English";
      }else{
        this.text = "تم تغير اللغه إلى العربية";
      }
      this.showSnackbar = true;
    }
  }
};
</script>

<style>
.main-bg-color {
    background-color: #0057a8;
}
</style>
