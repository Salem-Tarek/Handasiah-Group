<template>
    <div class="services py-5 my-3">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-card elevation="0">
                        <router-link to="/">
                            <v-img contain src="../../../assets/services/service1.jpg"></v-img>
                        </router-link>
                        <v-card-title class="pa-0 pl-4 mb-2"><h3 class="mt-5">تركيب الأسلاك</h3></v-card-title>
                        <v-card-text>
                            <p class="mb-0">لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا .</p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card elevation="0">
                        <router-link to="/">
                            <v-img contain src="../../../assets/services/service2.jpg"></v-img>
                        </router-link>
                        <v-card-title class="pa-0 pl-4 mb-2"><h3 class="mt-5">خطة أمان</h3></v-card-title>
                        <v-card-text>
                            <p class="mb-0">لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا .</p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card elevation="0">
                        <router-link to="/">
                            <v-img contain src="../../../assets/services/service3.jpg"></v-img>
                        </router-link>
                        <v-card-title class="pa-0 pl-4 mb-2"><h3 class="mt-5">فحص أمني</h3></v-card-title>
                        <v-card-text>
                            <p class="mb-0">لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا .</p>
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
.services .v-card .v-card__title {
    letter-spacing: 0;
}

.services .v-card .v-image__image {
    transition: 0.4s
}
.services .v-card:hover .v-image__image {
    transform: scale(1.2) !important;
}
</style>