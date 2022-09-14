<template>
    <div class="home">
        <Slider />
        <UnderSlider />
        <v-container>
            <Features />
            <Services />
        </v-container>
        <VideoDemo />
    </div>
</template>

<script>
import Slider from '../components/En/Home/Slider.vue'
import UnderSlider from '../components/En/Home/UnderSlider.vue'
import Features from '../components/En/Home/Features.vue'
import Services from '../components/En/Home/Services.vue'
import VideoDemo from '../components/En/Home/VideoDemo.vue'
export default {
    name: "HomeEn",
    components:{
        Slider,
        UnderSlider,
        Features,
        Services,
        VideoDemo
    }
}
</script>

<style>

</style>