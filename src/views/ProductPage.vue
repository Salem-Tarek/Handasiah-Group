<template>
    <ProductPageEn v-if="getLang === 'En'" />
    <ProductPageAr v-else/>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductPageEn from '../components/En/ProductPage/ProductPageEn.vue'
import ProductPageAr from '../components/Ar/ProductPage/ProductPageAr.vue'
export default {
    name: "ProductPage",
    components:{
        ProductPageEn,
        ProductPageAr,
    },
    computed:{
        ...mapGetters(['getLang'])
    },
}
</script>

<style>

</style>