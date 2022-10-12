<template>
    <v-container fluid class="py-7">
        <p class="headline main-title font-weight-medium mx-auto mb-5 white--text text-center py-3 px-5">Companies we have worked with</p>
        <carousel :autoplay="true" :nav="false" :responsive="{ 0:{items:1}, 500:{items:2}, 700: {items:3}, 1000:{items:4} }" :dots="false">
            <v-img contain height="200px" src="../../../assets/partners/AL AZHAR university.jpg"></v-img>
            <v-img contain height="200px" src="../../../assets/partners/dentons.png"></v-img>
            <v-img contain height="200px" src="../../../assets/partners/اكاديمية البحث العلمى.jpg"></v-img>
            <v-img contain height="200px" src="../../../assets/partners/الشركة المصرية لنفل الدم.jpg"></v-img>
            <v-img contain height="200px" src="../../../assets/partners/الشركة المصريه الفرعونيه للتنميه السياحية.jpg"></v-img>
            <v-img contain height="200px" src="../../../assets/partners/المجمـــــوعة المتحــــدة لوســــاطة التـــــأمين.png"></v-img>
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