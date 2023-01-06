<template>
    <div class="about">
        <AboutEn :aboutData="aboutData" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AboutEn from '../components/En/About/AboutEn.vue'
import axios from 'axios'

export default {
    name: "About",
    data(){
        return {
            aboutData: {},
        }
    },
    computed:{
        ...mapGetters(['getLang'])
    },
    components:{
        AboutEn,
    },
    methods:{
        async getAboutPageData(){
            const res = await axios.get('/frontend/aboutPage', {
                headers: {
                  language: localStorage.getItem('currentLang').toLowerCase(),
                }
            });
            if(res.status === 200){
                this.aboutData = res.data.data;
            }
        },
    },
    watch: {
        getLang(){
            this.getAboutPageData();
        }
    },
    mounted(){
        this.getAboutPageData()
    }
}
</script>

<style>

</style>