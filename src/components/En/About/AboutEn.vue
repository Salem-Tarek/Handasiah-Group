<template>
    <div class="aboutEn">
        <div class="subheader d-flex align-end">
            <v-container fluid class="px-0" style="direction: ltr">
                <carousel :freeDrag="false" :pullDrag="false" :touchDrag="false" :mouseDrag="false" :autoplay="true" :nav="false" :responsive="{ 0:{items:1} }" :dots="false">
                    <v-img width="100%" height="300px" src="../../../assets/about/service1.jpg"></v-img>
                    <v-img width="100%" height="300px" src="../../../assets/about/service2.jpeg"></v-img>
                    <v-img width="100%" height="300px" src="../../../assets/about/service3.jpeg"></v-img>
                </carousel>
                <div class="header-content white--text text-center">
                    <p class="text-uppercase display-1 font-weight-bold">{{ getLang === 'En' ? 'About Us' : 'عننا' }}</p>
                    <p class="text-subtitle-2 text-sm-h6 font-weight-bold mb-0 mx-5 mx-md-auto"> {{ `"${aboutData.setting?.title}"` }}</p>
                </div>
            </v-container>
        </div>
        <v-container>
            <div class="certificates my-7">
                <p class="headline main-title font-weight-medium mx-auto mb-5 white--text text-center py-3 px-5">{{ getLang === 'En' ? 'Our Certificates' : 'شهــاداتـنــــا' }}</p>
                <div class="certificates-wrapper d-flex flex-wrap py-5 justify-center align-center">
                    <img v-for="img in aboutData.certificates" :src="img.image" :key="img.id">
                </div>
            </div>
            <div class="partners my-7">
                <p class="headline main-title font-weight-medium mx-auto mb-5 white--text text-center py-3 px-5">{{ getLang === 'En' ? 'Companies we have worked with' : 'شركات تم العمل معها' }}</p>
                <div class="partners-wrapper d-flex flex-wrap py-5 justify-center align-center">
                    <img v-for="img in aboutData.workedCompanies" :src="img.image" :key="img.id">
                </div>
            </div>
        </v-container>

    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import { mapGetters } from 'vuex'
export default {
    name: "About",
    components: { 
        carousel,
    },
    props: {
        aboutData: {
            type: Object,
            required: true
        }
    },
    computed: {
        ...mapGetters(['getLang']),
    }
}
</script>

<style lang="scss">
.main-text-color {
    color :#0057a8 !important;
}

.aboutEn .subheader {
    position: relative;
}

.aboutEn .about-section-1 {
    overflow: hidden;
}

.aboutEn .feat .v-icon {
    color:#0057a8;
    font-size: 50px !important;
}

.aboutEn .owl-stage {
    position:relative;
}

.aboutEn .owl-stage::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(0, 0, 0, 0.7);
    z-index: 1;
}

.aboutEn .header-content {
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 100%;
    p:last-child {
        max-width: 900px !important;
    }
}

.aboutEn .partners-wrapper, .aboutEn .certificates-wrapper {
    gap: 30px
}

.aboutEn .partners-wrapper img , .aboutEn .certificates-wrapper img {
    max-width: 280px;
    object-fit: contain;
}

.main-title {
    background-color: #0057A8;
    border-radius: 50px;
    width: fit-content;
}
</style>