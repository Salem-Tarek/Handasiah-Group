<template>
    <v-container fluid class="py-7">
        <p class="headline main-title font-weight-medium mx-auto mb-5 white--text text-center py-3 px-5">Companies we have worked with</p>
        <carousel :autoplay="true" :nav="false" :responsive="{ 0:{items:1}, 500:{items:2}, 700: {items:3}, 1000:{items:4} }" :dots="false">
            <v-img contain height="200px" src="../../../assets/partners/dohler.jpeg"></v-img>
            <v-img contain height="200px" src="../../../assets/partners/fox.jpeg"></v-img>
            <v-img contain height="200px" src="../../../assets/partners/masr.jpeg"></v-img>
            <v-img contain height="200px" src="../../../assets/partners/nomix.jpeg"></v-img>
            <v-img contain height="200px" src="../../../assets/partners/steel.jpeg"></v-img>
            <v-img contain height="200px" src="../../../assets/partners/world.jpeg"></v-img>
        </carousel>
    </v-container>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    name: "PartnersEn",
    components: { 
        carousel,
    },
}
</script>

<style>
.main-title {
    background-color: #0057A8;
    border-radius: 50px;
    width: fit-content;
}
</style>