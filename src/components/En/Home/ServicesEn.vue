<template>
    <div class="services py-5 my-3">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-card elevation="0">
                        <router-link to="/">
                            <v-img height="277px" contain src="../../../assets/services/service1.jpg"></v-img>
                        </router-link>
                        <v-card-title class="pa-0 mb-2"><h3 class="mt-5">Networks and Surveillance Systems</h3></v-card-title>
                        <v-card-text>
                            <p class="mb-0">The engineering company is distinguished by providing the best surveillance camera systems to secure the home or workplace and various network systems.</p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card elevation="0">
                        <router-link to="/">
                            <v-img height="275px" contain src="../../../assets/services/service2.jpg"></v-img>
                        </router-link>
                        <v-card-title class="pa-0 mb-2"><h3 class="mt-5">Alarm Systems</h3></v-card-title>
                        <v-card-text>
                            <p class="mb-0">The engineering company is distinguished by providing the best quick response alarm systems to secure the home and protect against theft.</p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card elevation="0">
                        <router-link to="/">
                            <v-img height="277px" contain src="../../../assets/services/service3.jpg"></v-img>
                        </router-link>
                        <v-card-title class="pa-0 mb-2"><h3 class="mt-5">Fire Fighting Systems</h3></v-card-title>
                        <v-card-text>
                            <p class="mb-0">The engineering company is distinguished by providing the best firefighting systems, and these devices are characterized by a quick response to eliminate the fire in the fastest time.</p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Services",
}
</script>

<style>
.v-card__title {
    word-break: normal !important;
}
.services .v-card .v-image__image {
    transition: 0.4s
}
.services .v-card:hover .v-image__image {
    transform: scale(1.2) !important;
}
</style>