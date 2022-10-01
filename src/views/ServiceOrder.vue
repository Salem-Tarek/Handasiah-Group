<template>
    <div class="serviceOrder">
        <ServiceOrderEn v-if="getLang === 'En'" />
        <ServiceOrderAr v-else />
    </div>
</template>

<script>
import ServiceOrderEn from '../components/En/Orders/ServiceOrderEn.vue'
import ServiceOrderAr from '../components/Ar/Orders/ServiceOrderAr.vue'
import { mapGetters } from 'vuex'

export default {
    name: "ServiceOrder",
    computed:{
        ...mapGetters(['getLang'])
    },
    components:{
        ServiceOrderEn,
        ServiceOrderAr,
    }
}
</script>

<style>

</style>