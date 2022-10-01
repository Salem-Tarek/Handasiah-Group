<template>
    <div class="priceOrder">
        <PriceOrderEn v-if="getLang === 'En'" />
        <PriceOrderAr v-else />
    </div>
</template>

<script>
import PriceOrderEn from '../components/En/Orders/PriceOrderEn.vue'
import PriceOrderAr from '../components/Ar/Orders/PriceOrderAr.vue'
import { mapGetters } from 'vuex'

export default {
    name: "PriceOrder",
    computed:{
        ...mapGetters(['getLang'])
    },
    components:{
        PriceOrderEn,
        PriceOrderAr,
    }
}
</script>

<style>

</style>