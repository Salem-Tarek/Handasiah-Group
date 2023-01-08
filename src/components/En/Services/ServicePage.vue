<template>
    <div class="networkSystemsEn">
        <v-overlay :value="overlay">
            <v-progress-circular
                :size="70"
                :width="7"
                color="blue"
                indeterminate
            ></v-progress-circular>
        </v-overlay>
        <v-container fluid style="direction: ltr">
            <carousel v-if="service.media" :autoplayTimeout="3000" :autoplay="true" :nav="false" :responsive="{ 0:{items:1} }">
                <v-img v-for="(img, index) in service.media" :key="`serviceImg-${index}`" height="calc(100vh - 126px)" :src="img.image"></v-img>
            </carousel>
        </v-container>
        <v-container>
            <h1 class="text-uppercase main-text-color mb-5">{{ service && service.title }}</h1>
            <p class="subtitle-1">{{ service && service.description }}</p>   
            <h3 class="mt-7 mb-3 main-text-color">{{ service && service.acceptTitle }}</h3>
            <p class="subtitle-1">{{ service && service.acceptDescription }}</p>    
        </v-container>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
    name: "NetworkSystemsEn",
    data(){
        return {
            overlay: false,
            service: {},
        }
    },
    components:{
        carousel,
    },
    computed:{
        ...mapGetters(['getLang']),
    },
    watch: {
        $route: {
            handler(){
                this.overlay = true;
                this.getServiceData();
            },
            deep: true,
            immediate: true,
        },
        getLang(){
            this.overlay = true;
            this.getServiceDataAfterToggleLang();
        }
    },
    methods: {
        async getServiceData(){
            const res = await axios.get(`/frontend/servicesPage/${this.$route.params.title}`, {
                headers: {
                    language: localStorage.getItem('currentLang').toLowerCase(),
                } 
            });
            if(res.status === 200){
                this.service = res.data.data;
                this.overlay = false;
            }
        },
        async getServiceDataAfterToggleLang(){
            this.overlay = true;
            const res = await axios.get('/frontend/setting', {
                headers: {
                    language: localStorage.getItem('currentLang').toLowerCase(),
                } 
            });
            let services = res.data.data.Services;

            if(res.status === 200){
                this.overlay = false;
            }

            localStorage.setItem('servicesTitles', JSON.stringify(services.map(service => service.title)))

            
            let currentServiceTitle = localStorage.getItem('servicesTitles') && JSON.parse(localStorage.getItem('servicesTitles'))[parseInt(localStorage.getItem('serivceId'))];
            this.$router.push(`/service-page/${currentServiceTitle}`)
        }
    },
    created(){
        this.getServiceData();
    },
}
</script>

<style>
.main-text-color {
    color: #0057a8 !important;
}
</style>