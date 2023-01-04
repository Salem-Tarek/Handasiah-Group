<template>
    <div class="about">
        <AboutEn :aboutData="aboutData" v-if="getLang === 'En'" />
        <AboutAr :aboutData="aboutData" v-else />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AboutEn from '../components/En/About/AboutEn.vue'
import AboutAr from '../components/Ar/About/AboutAr.vue'
import axios from 'axios'

export default {
    name: "About",
    data(){
        return {
            aboutData: null,
        }
    },
    computed:{
        ...mapGetters(['getLang'])
    },
    components:{
        AboutEn,
        AboutAr,
    },
    methods:{
        async getAboutPageData(){
            const res = await axios.get('/frontend/aboutPage');
            console.log(res.data.data)
            if(res.status === 200){
                this.aboutData = res.data.data;
            }
        },
    },
    mounted(){
        this.getAboutPageData()
    }
}
</script>

<style>

</style>