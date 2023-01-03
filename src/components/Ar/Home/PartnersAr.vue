<template>
    <v-container fluid class="py-7">
        <p class="headline main-title font-weight-medium mx-auto mb-5 white--text text-center py-3 px-5">شركات تم العمل معها</p>
        <carousel dir="ltr" :autoplay="true" :nav="false" :margin="20" :responsive="{ 0:{items:1}, 600:{items:3}, 700: {items:4}, 1000:{items:6} }" :dots="false">
            <v-img v-for="company in companies" :key="company.id" contain height="200px" :src="company.image"></v-img>
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