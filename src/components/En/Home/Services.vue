<template>
    <div class="services py-5 my-3">
        <v-row>
            <v-col cols="12" md="4">
                <v-card elevation="0">
                    <router-link to="/">
                        <v-img contain src="../../../assets/services/service1.jpg"></v-img>
                    </router-link>
                    <v-card-title class="pa-0 pl-4 mb-2"><h3 class="mt-5">Wiring installation</h3></v-card-title>
                    <v-card-text>
                        <p class="mb-0">Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus.</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card elevation="0">
                    <router-link to="/">
                        <v-img contain src="../../../assets/services/service2.jpg"></v-img>
                    </router-link>
                    <v-card-title class="pa-0 pl-4 mb-2"><h3 class="mt-5">Security Plan</h3></v-card-title>
                    <v-card-text>
                        <p class="mb-0">Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus.</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card elevation="0">
                    <router-link to="/">
                        <v-img contain src="../../../assets/services/service3.jpg"></v-img>
                    </router-link>
                    <v-card-title class="pa-0 pl-4 mb-2"><h3 class="mt-5">Security Check</h3></v-card-title>
                    <v-card-text>
                        <p class="mb-0">Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus.</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Services",
}
</script>

<style>
.services .v-card .v-image__image {
    transition: 0.4s
}
.services .v-card:hover .v-image__image {
    transform: scale(1.2) !important;
}
</style>