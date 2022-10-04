<template>
    <div class="services py-5 my-3">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-card elevation="0">
                        <router-link to="/">
                            <v-img height="277px" contain src="../../../assets/services/service1.jpg"></v-img>
                        </router-link>
                        <v-card-title class="pa-0 mb-2"><h3 class="mt-5">أنظمة المراقبة و الشبكات</h3></v-card-title>
                        <v-card-text>
                            <p class="mb-0">تمتاز الشركة الهندسية بتقديم أفضل أنظمة لكاميرات المراقبة لتأمين المنزل أو أماكن العمل و أنظمة الشبكات المختلفة.</p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card elevation="0">
                        <router-link to="/">
                            <v-img height="276px" contain src="../../../assets/services/service2.jpg"></v-img>
                        </router-link>
                        <v-card-title class="pa-0 mb-2"><h3 class="mt-5">أنظمة الإنذار</h3></v-card-title>
                        <v-card-text>
                            <p class="mb-0">تمتاز الشركة الهندسية بتقديم أفضل أنظمة إنذار سريعة الإستجابة لتأمين المنزل و للحماية من السرقة.</p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card elevation="0">
                        <router-link to="/">
                            <v-img height="277px" contain src="../../../assets/services/service3.jpg"></v-img>
                        </router-link>
                        <v-card-title class="pa-0 mb-2"><h3 class="mt-5">أنظمة مكافحة الحرائق</h3></v-card-title>
                        <v-card-text>
                            <p class="mb-0">تمتاز الشركة الهندسية بتقديم أفضل أنظمة لمكافحة الحرائق و تتميز هذة الأجهزة بسرعة الإستجابة للقضاء على الحريق فى أسرع وقت.</p>
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