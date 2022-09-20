<template>
    <div class="home">
        <template v-if="getLang === 'En'">
            <SliderEn />
            <UnderSliderEn />
            <FeaturesEn />
            <ServicesEn />
            <VideoDemoEn @overlaytoggled="toggleDemoOverlay" />
        </template>
        <template v-else>
            <SliderAr />
            <UnderSliderAr />
            <FeaturesAr />
            <ServicesAr />
            <VideoDemoAr @overlaytoggled="toggleDemoOverlay" />
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

// English Components
import SliderEn from '../components/En/Home/SliderEn.vue'
import UnderSliderEn from '../components/En/Home/UnderSliderEn.vue'
import FeaturesEn from '../components/En/Home/FeaturesEn.vue'
import ServicesEn from '../components/En/Home/ServicesEn.vue'
import VideoDemoEn from '../components/En/Home/VideoDemoEn.vue'

// Arabic Components
import SliderAr from '../components/Ar/Home/SliderAr.vue'
import UnderSliderAr from '../components/Ar/Home/UnderSliderAr.vue'
import FeaturesAr from '../components/Ar/Home/FeaturesAr.vue'
import ServicesAr from '../components/Ar/Home/ServicesAr.vue'
import VideoDemoAr from '../components/Ar/Home/VideoDemoAr.vue'

export default {
    name: "HomeEn",
    components:{
        SliderEn,
        UnderSliderEn,
        FeaturesEn,
        ServicesEn,
        VideoDemoEn,

        SliderAr,
        UnderSliderAr,
        FeaturesAr,
        ServicesAr,
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