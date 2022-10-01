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
    <NavbarEn v-if="getLang === 'En'" />
    <NavbarAr v-else />
    <v-main>
      <router-view @overlaytoggled="toggleDemoOverlay" />
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
      text: "",
      overlayShowed: false
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
  methods:{
    toggleDemoOverlay(val){
      this.overlayShowed= val;
    }
  },
  watch: {
    getLang(newVal){
      if(newVal === "En"){
        this.text = "Language Changed to English";
        this.$vuetify.rtl = false;
      }else{
        this.text = "تم تغير اللغه إلى العربية";
        this.$vuetify.rtl = true;
      }
      this.showSnackbar = true;
    }
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

// .v-snack {
  
// }

.overlayShowed {
  height: 100vh;
  overflow: hidden;
}
</style>
