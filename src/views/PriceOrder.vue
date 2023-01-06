<template>
    <div class="priceOrder">
        <PriceOrderEn />
    </div>
</template>

<script>
import PriceOrderEn from '../components/En/Orders/PriceOrderEn.vue'
import { mapGetters } from 'vuex'

export default {
    name: "PriceOrder",
    computed:{
        ...mapGetters(['getLang'])
    },
    components:{
        PriceOrderEn,
    }
}
</script>

<style>

</style>