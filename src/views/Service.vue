<template>
    <NetworkSystemsEn v-if="getLang === 'En'" />
    <NetworkSystemsAr v-else />
</template>

<script>
import NetworkSystemsEn from '../components/En/Services/NetworkSystemsEn.vue'
import NetworkSystemsAr from '../components/Ar/Services/NetworkSystemsAr.vue'
import { mapGetters } from 'vuex'

export default {
    name: "Service",
    computed:{
        ...mapGetters(['getLang'])
    },
    components: { 
        NetworkSystemsEn,
        NetworkSystemsAr
    },
}
</script>

<style>

</style>
