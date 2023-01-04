<template>
    <div class="aboutEn">
        <div class="subheader d-flex align-end">
            <v-container fluid class="px-0">
                <carousel :freeDrag="false" :pullDrag="false" :touchDrag="false" :mouseDrag="false" :autoplay="true" :nav="false" :responsive="{ 0:{items:1} }" :dots="false">
                    <v-img width="100%" height="300px" src="../../../assets/about/service1.jpg"></v-img>
                    <v-img width="100%" height="300px" src="../../../assets/about/service2.jpeg"></v-img>
                    <v-img width="100%" height="300px" src="../../../assets/about/service3.jpeg"></v-img>
                </carousel>
                <div class="header-content white--text text-center">
                    <p class="text-uppercase display-1 font-weight-bold">About Us</p>
                    <p class="text-subtitle-2 text-sm-h6 font-weight-bold mb-0"> {{ `"${aboutData.setting.title}"` }}</p>
                </div>
            </v-container>
        </div>
        <v-container>
            <!-- <div class="about-section-1 py-12">
                <v-row class="align-center">
                    <v-col cols="12" md="6" class="mx-auto pa-6">
                        <v-img src="../../../assets/about_1.jpg" contain></v-img>
                    </v-col>
                    <v-col cols="12" md="6" class="mx-auto text-center px-6">
                        <h1 class="text-uppercase">"Home Security Experts"</h1>
                        <p class="subtitle-2 mb-0">
                            The engineering company is distinguished by its diversity in providing the fields of security systems with superiority in the performance of each system, through the multiplicity in the system of the specialized technical department for each system.
                        </p>
                    </v-col>
                </v-row>
            </div>
            <v-divider class="mb-5"></v-divider>
            <v-row class="my-5">
                <v-col cols="12" md="5">
                    <p class="mb-0 title font-weight-bold grey--text text--darken-3">Some words about us</p>
                    <p class="subtitle-2">One of the leading companies in the field of security systems and has carried out many projects with major companies in the private sector, the public sector, and government agencies and agencies with the highest efficiency and effectiveness.</p>
                    <p class="subtitle-2">The engineering company is distinguished in the speed of responding to sudden malfunctions through a technical work team at the highest level.. by receiving information about sudden malfunctions and moving to the customer within 24 hours to address those malfunctions.</p>
                    <p class="subtitle-2">The engineering company is distinguished by providing after-sales service, which is the period during the warranty through making periodic maintenance reports, good follow-up to the various systems, and activating annual maintenance contracts after the end of the warranty period to follow up the operation of the various systems.</p>

                    <p class="mb-0 title font-weight-bold grey--text text--darken-3">Mission</p>
                    <p class="subtitle-2">The engineering company is distinguished by its diversity in providing the fields of security systems with superiority in the performance of each system, through the multiplicity in the system of the specialized technical department for each system.</p>
                    <p class="subtitle-2">The engineering company is distinguished by the presence of a highly trained team during the installation and periodic maintenance works. This team is distinguished by the order and accuracy of the monthly periodic reports.</p>
                </v-col>
                <v-col cols="12" md="7">
                    <div class="feat d-flex align-start grey lighten-3 pa-5 my-5" style="border: 1px solid #333!important;">
                        <v-icon x-large left>mdi-check-circle-outline</v-icon>
                        <div class="content">
                            <p class="mb-0 title font-weight-bold">Professional Service</p>
                            <p class="subtitle-2 mb-0 grey--text text--darken-4">
                                The engineering company is distinguished by the presence of a highly trained team during the installation and periodic maintenance works. This team is distinguished by the order and accuracy of the monthly periodic reports.
                            </p>
                        </div>
                    </div>
                    <div class="feat d-flex align-start grey lighten-3 pa-5 my-5" style="border: 1px solid #333!important;">
                        <v-icon x-large left>mdi-check-circle-outline</v-icon>
                        <div class="content">
                            <p class="mb-0 title font-weight-bold">Affordable Prices</p>
                            <p class="subtitle-2 mb-0 grey--text text--darken-4">
                                The engineering company is distinguished by its great prices, excellent quality and support available 24 hours a day through a highly trained team to detect and repair malfunctions.
                            </p>
                        </div>
                    </div>
                    <div class="feat d-flex align-start grey lighten-3 pa-5 my-5" style="border: 1px solid #333!important;">
                        <v-icon x-large left>mdi-check-circle-outline</v-icon>
                        <div class="content">
                            <p class="mb-0 title font-weight-bold">Great Support</p>
                            <p class="subtitle-2 mb-0 grey--text text--darken-4">
                                The engineering company is distinguished in the speed of responding to sudden malfunctions through a technical work team at the highest level.. by receiving information about sudden malfunctions and moving to the customer within 24 hours to address those malfunctions.
                            </p>
                        </div>
                    </div>
                    <div class="feat d-flex align-start grey lighten-3 pa-5 my-5" style="border: 1px solid #333!important;">
                        <v-icon x-large left>mdi-check-circle-outline</v-icon>
                        <div class="content">
                            <p class="mb-0 title font-weight-bold">Service Warranty</p>
                            <p class="subtitle-2 mb-0 grey--text text--darken-4">
                                The engineering company is distinguished by providing after-sales service, which is the period during the warranty through making periodic maintenance reports, good follow-up to the various systems, and activating annual maintenance contracts after the end of the warranty period to follow up the operation of the various systems.
                            </p>
                        </div>
                    </div>
                </v-col>
            </v-row> -->
            <div class="certificates my-7">
                <p class="headline main-title font-weight-medium mx-auto mb-5 white--text text-center py-3 px-5">Our Certificates</p>
                <div class="certificates-wrapper d-flex flex-wrap py-5 justify-center align-center">
                    <img v-for="img in aboutData.certificates" :src="img.image" :key="img.id">
                </div>
            </div>
            <div class="partners my-7">
                <p class="headline main-title font-weight-medium mx-auto mb-5 white--text text-center py-3 px-5">Companies we have worked with</p>
                <div class="partners-wrapper d-flex flex-wrap py-5 justify-center align-center">
                    <img v-for="img in aboutData.workedCompanies" :src="img.image" :key="img.id">
                </div>
            </div>
        </v-container>

    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
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