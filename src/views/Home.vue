<template>
    <div class="home">
      <template>
        <SliderEn :sliders="slides" />
        <FeaturesEn :services="services" />
        <InfoEn :content="infoContent" />
        <PartnersEn :companies="workedCompanies" />
        <VideoDemoEn :videoData="videoData" @overlaytoggled="toggleDemoOverlay" />
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
  },
  computed:{
    ...mapGetters(['getLang'])
  },
  methods:{
    toggleDemoOverlay(val){
      this.$emit('overlaytoggled', val)
    },
    async getHomeData(){
      const res = await axios.get('/frontend/homePage', {
        headers: {
          language: localStorage.getItem('currentLang').toLowerCase(),
        }
      });
    
      let { slider, aboutSomeWords, mission, services, workedCompanies, video } = res.data.data;
      this.slides = slider;

      this.infoContent = {
        aboutSomeWords,
        mission
      }

      this.workedCompanies = workedCompanies;

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