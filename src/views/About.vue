<template>
    <div class="about">
        <AboutEn v-if="getLang === 'En'" />
        <AboutAr v-else />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AboutEn from '../components/En/About/AboutEn.vue'
import AboutAr from '../components/Ar/About/AboutAr.vue'

export default {
    name: "About",
    computed:{
        ...mapGetters(['getLang'])
    },
    components:{
        AboutEn,
        AboutAr,
    }
}
</script>

<style>

</style>