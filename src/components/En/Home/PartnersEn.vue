<template>
    <v-container fluid class="py-7">
        <p class="headline main-title font-weight-medium mx-auto mb-5 white--text text-center py-3 px-5">Companies we have worked with</p>
        <carousel :autoplay="true" :nav="false" :margin="20" :responsive="{ 0:{items:1}, 500:{items:3}, 700: {items:4}, 1000:{items:6} }" :dots="false">
            <v-img v-for="company in companies" :key="company.id" contain height="200px" :src="company.image"></v-img>
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
    props: {
        companies: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style>
.main-title {
    background-color: #0057A8;
    border-radius: 50px;
    width: fit-content;
}
</style>