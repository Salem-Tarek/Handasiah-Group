<template>
    <div class="home">
        <template v-if="getLang === 'En'">
            <SliderEn :sliders="slides" />
            <FeaturesEn :services="services" />
            <InfoEn :content="infoContent" />
            <PartnersEn :companies="workedCompanies" />
            <VideoDemoEn :videoData="videoData" @overlaytoggled="toggleDemoOverlay" />
        </template>
        <template v-else>
            <SliderAr :sliders="slides" />
            <FeaturesAr :services="services" />
            <InfoAr :content="infoContent" />
            <PartnersAr :companies="workedCompanies" />
            <VideoDemoAr :videoData="videoData" @overlaytoggled="toggleDemoOverlay" />
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

// English Components
import SliderEn from '../components/En/Home/SliderEn.vue'
import FeaturesEn from '../components/En/Home/FeaturesEn.vue'
import InfoEn from '../components/En/Home/InfoEn.vue'
import PartnersEn from '../components/En/Home/PartnersEn.vue'
import VideoDemoEn from '../components/En/Home/VideoDemoEn.vue'


// Arabic Components
import SliderAr from '../components/Ar/Home/SliderAr.vue'
import FeaturesAr from '../components/Ar/Home/FeaturesAr.vue'
import InfoAr from '../components/Ar/Home/InfoAr.vue'
import PartnersAr from '../components/Ar/Home/PartnersAr.vue'
import VideoDemoAr from '../components/Ar/Home/VideoDemoAr.vue'

import axios from 'axios'

export default {
  name: "HomeEn",
  data(){
    return {
      slides: [],
      infoContent: {},
      services: [],
      workedCompanies: [],
      videoData: {},
    }
  },
  components:{
    SliderEn,
    FeaturesEn,
    InfoEn,
    PartnersEn,
    VideoDemoEn,

    SliderAr,
    FeaturesAr,
    InfoAr,
    PartnersAr,
    VideoDemoAr,
  },
  computed:{
    ...mapGetters(['getLang'])
  },
  methods:{
    toggleDemoOverlay(val){
      this.$emit('overlaytoggled', val)
    },
    async getHomeData(){
      const res = await axios.get('/frontend/homePage');
      console.log(res.data.data);
    
      let { slider, aboutSomeWords, mission, services, workedCompanies, video } = res.data.data;
      this.slides = slider;

      this.infoContent = {
        aboutSomeWords,
        mission
      }

      this.workedCompanies = workedCompanies;

      console.log(workedCompanies);

      this.services = services;

      this.videoData = video;
    }
  },
  watch: {
    getLang(){
      this.getHomeData();
    }
  },
  mounted(){
    this.getHomeData();
  }
}
</script>

<style>

</style>