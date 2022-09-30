<template>
    <v-container fluid class="py-7">
        <p class="headline main-text-color font-weight-medium">شركات تم العمل معها</p>
        <carousel dir="ltr" :autoplay="true" :nav="false" :responsive="{ 0:{items:1}, 600:{items:2}, 700: {items:3}, 1000:{items:4} }" :dots="false">
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
    name: "PartnersAr",
    components: { 
        carousel,
    },
}
</script>

<style>
.main-text-color {
    color: #0057a8 !important;
}
</style>