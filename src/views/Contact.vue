<template>
    <ContactEn v-if="getLang === 'En'" />
    <ContactAr v-else />
</template>

<script>
import { mapGetters } from 'vuex'
import ContactEn from '../components/En/Contact/ContactEn.vue'
import ContactAr from '../components/Ar/Contact/ContactAr.vue'

export default {
    name: "Contact",
    components:{
        ContactEn,
        ContactAr,
    },
    computed:{
        ...mapGetters(['getLang']),
    },
}
</script>

<style>

</style>