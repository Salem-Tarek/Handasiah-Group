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
    },
    getCurrentPage(pageName, lang){
      if(lang === "En"){
        switch(pageName) {
          case 'About':
            return 'About Page';
          case 'Contact':
            return 'Contact Page';
          case 'PriceOrder':
            return 'PriceOrder Page';
          case 'Service':
            return `${this.$route.params.title} Page`;
          case 'ServiceOrder':
            return 'ServiceOrder Page';
          case 'SurveyOrder':
            return 'SurveyOrder Page';
          default:
            return 'Home Page';
        }
      }else {
        switch(pageName) {
          case 'About':
            return 'صفحة عننا';
          case 'Contact':
            return 'صفحة اتصل بنا';
          case 'PriceOrder':
            return 'صفحة طلب سعر';
          case 'Service':
          return `صفحة ${this.$route.params.title}`;
          case 'ServiceOrder':
            return 'صفحة طلب خدمة';
          case 'SurveyOrder':
            return 'صفحة طلب معاينة';
          default:
            return 'الصفحة الرئيسية';
        }
      }
    },
    async sendPageName(pageName){
      await axios.post('/frontend/guest', {page: pageName});
    }
  },
  watch: {
    getLang(newVal){
      this.sendPageName(this.getCurrentPage(this.$route.name, this.getLang))
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
    },
    $route: {
      handler(){
        this.sendPageName(this.getCurrentPage(this.$route.name, this.getLang))
        console.log(this.getCurrentPage(this.$route.name, this.getLang));
      },
      deep: true
    }
  },
  async mounted(){
    const res = await axios.get('/frontend/setting');
    if(res.status === 200){
      const favIcon = document.getElementById('favIconId');
      favIcon.href = res.data.data.Setting.favicon;
      // favIcon.href = 'https://unsplash.com/photos/9irw5scEtxo';
    }
    this.getSettingsData();
  },
  async created(){
    let currentLang = localStorage.getItem('currentLang') || '';
    
    if(!currentLang){
      const res = await axios.get('/frontend/getLanguage');
      currentLang = res.data.data.Language[0].toUpperCase() + res.data.data.Language.slice(1);
      localStorage.setItem('currentLang', currentLang)
    }
    this.toggleLang(currentLang);
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
