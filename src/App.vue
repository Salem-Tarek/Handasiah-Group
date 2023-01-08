<template>
  <v-app :dir="getLang === 'En' ? 'ltr' : 'rtl'" :class="{ 'overlayShowed' : overlayShowed}">
    <!-- <v-container> -->
      <v-snackbar max-width="260px" color="#0057a8" top v-model="showSnackbar" :timeout="2000">
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
    <!-- </v-container> -->
    <NavbarEn :services="services" />
    <!-- <NavbarAr /> -->
    <v-main>
      <router-view @overlaytoggled="toggleDemoOverlay" />
    </v-main>
    <FooterEn :contactData="settings" />
    <!-- <FooterAr /> -->
    <!-- <ChatEn /> -->
  </v-app>
</template>

<script>
import NavbarEn from './components/En/layout/NavbarEn.vue'
import FooterEn from './components/En/layout/FooterEn.vue'
// import NavbarAr from './components/Ar/layout/NavbarAr.vue'
// import FooterAr from './components/Ar/layout/FooterAr.vue'
// import ChatEn from './components/En/layout/ChatEn.vue'
import axios from 'axios'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: "App",
  data(){
    return {
      showSnackbar: false,
      text: "",
      overlayShowed: false,
      settings: {},
      services: [],
    }
  },
  components:{
    NavbarEn,
    // NavbarAr,
    FooterEn,
    // FooterAr,
    // ChatEn,
  },
  computed:{
    ...mapGetters(['getLang']),
  },
  methods:{
    ...mapActions(['toggleLang']),
    toggleDemoOverlay(val){
      this.overlayShowed= val;
    },
    async getSettingsData(){
      const res = await axios.get('/frontend/setting', {
        headers: {
          language: localStorage.getItem('currentLang').toLowerCase(),
        } 
      });
      this.settings = res.data.data.Setting;
      this.services = res.data.data.Services;
      localStorage.setItem('servicesTitles', JSON.stringify(this.services.map(service => service.title)))
    }
  },
  watch: {
    getLang(newVal){
      localStorage.setItem('currentLang', newVal)
      this.toggleLang(newVal);
      this.getSettingsData();
      if(newVal === "En"){
        this.text = "Language Changed to English";
        this.$vuetify.rtl = false;
      }else{
        this.text = "تم تغير اللغه إلى العربية";
        this.$vuetify.rtl = true;
      }
      this.showSnackbar = true;
    }
  },
  async mounted(){
    this.getSettingsData();
    let currentLang = '';
    if(localStorage.getItem('currentLang')){
      currentLang = localStorage.getItem('currentLang');
    }else{
      const res = await axios.get('/frontend/getLanguage');
      currentLang = res.data.data.Language[0].toUpperCase() + res.data.data.Language.slice(1);
      localStorage.setItem('currentLang', currentLang)
    }
    this.toggleLang(currentLang)
  }
};
</script>

<style lang="scss">
.v-application {
  &[dir="ltr"] {
    p, [class*="text-"], [class*="display-1"], [class*="subtitle-1"], [class*="subtitle-2"], [class*="title"] {
      font-family: "Poppins", sans-serif !important;
    }
    font-family: "Poppins", sans-serif !important;
  }
  &[dir="rtl"] {
    p, [class*="text-"], [class*="display-1"], [class*="subtitle-1"], [class*="subtitle-2"], [class*="title"] {
      font-family: "Cairo", sans-serif !important;
    }
    font-family: "Cairo", sans-serif !important;
  }
}

.main-bg-color {
  background-color: #0057a8;
}

.overlayShowed {
  height: 100vh;
  overflow: hidden;
}
</style>
