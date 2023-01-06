<template>
    <ServicePage  />
    <!-- <NetworkSystemsAr v-else /> -->
</template>

<script>
import ServicePage from '../components/En/Services/ServicePage.vue'
// import NetworkSystemsAr from '../components/Ar/Services/NetworkSystemsAr.vue'
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
    name: "Service",
    computed:{
        ...mapGetters(['getLang'])
    },
    components: { 
        ServicePage,
        // NetworkSystemsAr
    },
    methods: {
        async getServiceData(){
            const res = await axios.get('/dashboard/servicesPage', {
                headers: {
                    language: localStorage.getItem('currentLang').toLowerCase(),
                }   
            });
            console.log(res);
        }
    },
    mounted(){
        // this.getServiceData();
    }
}
</script>

<style>

</style>
