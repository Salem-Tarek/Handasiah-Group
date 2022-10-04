<template>
    <div class="features py-5">
        <v-container>
            <v-row>
                <v-col md="6" cols="12" class="d-flex justify-center align-center">
                    <v-icon x-large left class="main-text-color">mdi-shield-sun-outline</v-icon>
                    <div class="d-flex justify-center flex-column">
                        <p class="mb-0 title font-weight-bold">Full Protection</p>
                        <p class="mb-0">
                            The engineering company is distinguished by its diversity in providing the fields of security systems with superiority in the performance of each system, through the multiplicity in the system of the specialized technical department for each system.
                        </p>
                    </div>
                </v-col>
                <v-col md="6" cols="12" class="d-flex justify-center align-center">
                    <v-icon x-large left class="main-text-color">mdi-clock-outline</v-icon>
                    <div class="d-flex justify-center flex-column">
                        <p class="mb-0 title font-weight-bold">Online 24 hours</p>
                        <p class="mb-0">
                            The engineering company is available 24 hours a day by receiving your calls and moving to the customer within 24 hours to address the malfunctions.
                        </p>
                    </div>
                </v-col>
                <v-col md="6" cols="12" class="d-flex justify-center align-center">
                    <v-icon x-large left class="main-text-color">mdi-video</v-icon>
                    <div class="d-flex justify-center flex-column">
                        <p class="mb-0 title font-weight-bold">Surveillance Cameras</p>
                        <p class="mb-0">
                            The engineering company is distinguished by providing the best surveillance camera systems to secure the home or workplace, and you can also follow these cameras from where you are via the mobile.
                        </p>
                    </div>
                </v-col>
                <v-col md="6" cols="12" class="d-flex justify-center align-center">
                    <v-icon x-large left class="main-text-color">mdi-check</v-icon>
                    <div class="d-flex justify-center flex-column">
                        <p class="mb-0 title font-weight-bold">Warranty</p>
                        <p class="mb-0">
                            The engineering company is distinguished by providing after-sales service, which is the period during the warranty through making periodic maintenance reports, good follow-up to the various systems, and activating annual maintenance contracts after the end of the warranty period to follow up the operation of the various systems.
                        </p>
                    </div>
                </v-col>
                <v-col md="6" cols="12" class="d-flex justify-center align-center">
                    <v-icon x-large left class="main-text-color">mdi-cog</v-icon>
                    <div class="d-flex justify-center flex-column">
                        <p class="mb-0 title font-weight-bold">Tecnical Support</p>
                        <p class="mb-0">
                            The engineering company is characterized by the speed of sudden breakdowns through a technical team at the highest level.
                        </p>
                    </div>
                </v-col>
                <v-col md="6" cols="12" class="d-flex justify-center align-center">
                    <v-icon x-large left class="main-text-color">mdi-certificate</v-icon>
                    <div class="d-flex justify-center flex-column">
                        <p class="mb-0 title font-weight-bold">Certifications</p>
                        <p class="mb-0">
                            The engineering company has obtained many certificates in the field of surveillance cameras, network systems, firefighting devices and alarms.
                        </p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Features",
}
</script>

<style lang="scss">
.features {
    .col {
        i {
            font-size: 60px !important;
        }
    }
}
.main-text-color {
    color: #0057a8 !important;
}
</style>