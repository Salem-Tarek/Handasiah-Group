<template>
    <ContactEn />
</template>

<script>
import { mapGetters } from 'vuex'
import ContactEn from '../components/En/Contact/ContactEn.vue'

export default {
    name: "Contact",
    components:{
        ContactEn,
    },
    computed:{
        ...mapGetters(['getLang']),
    },
}
</script>

<style>

</style>