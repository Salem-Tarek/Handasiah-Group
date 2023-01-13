<template>
    <ProductPageEn />
    <!-- <ProductPageAr v-else/> -->
</template>

<script>
import { mapGetters } from 'vuex'
import ProductPageEn from '../components/En/ProductPage/ProductPageEn.vue'
export default {
    name: "ProductPage",
    components:{
        ProductPageEn,
    },
    computed:{
        ...mapGetters(['getLang'])
    },
}
</script>

<style>

</style>