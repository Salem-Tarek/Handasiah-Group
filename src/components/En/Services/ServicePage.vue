<template>
    <div class="networkSystemsEn">
        <v-container fluid>
            <carousel :autoplayTimeout="3000" :autoplay="true" :nav="false" :responsive="{ 0:{items:1} }">
                <v-img height="calc(100vh - 126px)" src="../../../assets/network/slider2.jpeg"></v-img>
                <v-img height="calc(100vh - 126px)" src="../../../assets/network/slider1.jpeg"></v-img>
                <v-img height="calc(100vh - 126px)" src="../../../assets/network/slider3.jpeg"></v-img>
                <v-img height="calc(100vh - 126px)" src="../../../assets/network/slider4.jpeg"></v-img>
            </carousel>
        </v-container>
        <v-container>
            <h1 class="text-uppercase main-text-color mb-5">Network Systems</h1>
            <p class="subtitle-1">One of the leading companies in the field of security systems and has carried out many projects with major companies in the private sector, the public sector, and government agencies and agencies with the highest efficiency and effectiveness.</p>    
            <p class="subtitle-1">The engineering company is distinguished in the speed of responding to sudden malfunctions through a technical work team at the highest level.. by receiving information about sudden malfunctions and moving to the customer within 24 hours to address those malfunctions.</p>    
            <h3 class="mt-7 mb-3 main-text-color">Company Privileges</h3>
            <p class="subtitle-1">The engineering company is distinguished in the speed of responding to sudden malfunctions through a technical work team at the highest level.. by receiving information about sudden malfunctions and moving to the customer within 24 hours to address those malfunctions.</p>    
        </v-container>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    name: "NetworkSystemsEn",
    components:{
        carousel,
    }
}
</script>

<style>
.main-text-color {
    color: #0057a8 !important;
}
</style>