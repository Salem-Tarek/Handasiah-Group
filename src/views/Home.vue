<template>
    <div class="home">
        <template v-if="getLang === 'En'">
            <SliderEn />
            <FeaturesEn />
            <InfoEn />
            <PartnersEn />
            <VideoDemoEn @overlaytoggled="toggleDemoOverlay" />
        </template>
        <template v-else>
            <SliderAr />
            <FeaturesAr />
            <InfoAr />
            <PartnersAr />
            <VideoDemoAr @overlaytoggled="toggleDemoOverlay" />
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

// English Components
import SliderEn from '../components/En/Home/SliderEn.vue'
import FeaturesEn from '../components/En/Home/FeaturesEn.vue'
import InfoEn from '../components/En/Home/InfoEn.vue'
import PartnersEn from '../components/En/Home/PartnersEn.vue'
import VideoDemoEn from '../components/En/Home/VideoDemoEn.vue'


// Arabic Components
import SliderAr from '../components/Ar/Home/SliderAr.vue'
import FeaturesAr from '../components/Ar/Home/FeaturesAr.vue'
import InfoAr from '../components/Ar/Home/InfoAr.vue'
import PartnersAr from '../components/Ar/Home/PartnersAr.vue'
import VideoDemoAr from '../components/Ar/Home/VideoDemoAr.vue'

export default {
    name: "HomeEn",
    components:{
        SliderEn,
        FeaturesEn,
        InfoEn,
        PartnersEn,
        VideoDemoEn,

        SliderAr,
        FeaturesAr,
        InfoAr,
        PartnersAr,
        VideoDemoAr,
    },
    computed:{
        ...mapGetters(['getLang'])
    },
    methods:{
        toggleDemoOverlay(val){
            this.$emit('overlaytoggled', val)
        }
    }
}
</script>

<style>

</style>