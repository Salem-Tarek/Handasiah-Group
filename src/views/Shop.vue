<template>
    <ShopEn v-if="getLang === 'En'"/>
    <ShopAr v-else/>
</template>

<script>
import { mapGetters } from 'vuex'
import ShopEn from '../components/En/Shop/ShopEn.vue'
import ShopAr from '../components/Ar/Shop/ShopAr.vue'
export default {
    name: "Shop",
    components:{
        ShopEn,
        ShopAr
    },
    computed:{
        ...mapGetters(['getLang'])
    },
}
</script>

<style>

</style>