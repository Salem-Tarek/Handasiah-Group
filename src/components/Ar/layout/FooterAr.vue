<template>
    <footer class="grey darken-4 pt-5">
        <v-container>
            <div class="upper-footer">
                <v-row class="align-center">
                    <v-col md="4" cols="12">
                        <v-img contain height="130px" width="130px" src="../../../assets/logo.png"></v-img>
                        <p class="grey--text">
                            لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

أكسير سيتاشن يللأمكو لابورأس نيسي يت .
                        </p>
                    </v-col>
                    <v-col md="4" cols="12" class="d-flex justify-md-center justify-start">
                        <v-list dense class="transparent">
                            <v-list-item>
                                <v-list-item-title class="font-weight-bold white--text title">
                                    إكتشف
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <router-link class="grey--text text-decoration-none title" to="/">عننا</router-link>
                            </v-list-item>
                            <v-list-item>
                                <router-link class="grey--text text-decoration-none title" to="/">الأسعار</router-link>
                            </v-list-item>
                            <v-list-item>
                                <router-link class="grey--text text-decoration-none title" to="/">إتصل بنا</router-link>
                            </v-list-item>
                            <v-list-item>
                                <router-link class="grey--text text-decoration-none title" to="/">المتجر</router-link>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col md="4" cols="12">
                        <v-list class="contacts transparent">
                            <v-list-item-title class="font-weight-bold white--text title">
                                جهات الاتصال
                            </v-list-item-title>
                            <v-list-item class="align-center my-3 pr-0 grey--text">
                                <v-icon right color="white">mdi-home</v-icon>
                                <p class="mb-0">98 أ - فيصل - الجيزة</p>
                            </v-list-item>
                            <v-list-item class="align-center my-3 pr-0 grey--text">
                                <v-icon right color="white">mdi-cellphone</v-icon>
                                <p class="mb-0"><a class="text-decoration-none grey--text" href="tel:0237408436">02-37408436</a> / <a class="text-decoration-none grey--text" href="tel:01552021453">01552021453</a></p>
                            </v-list-item>
                            <v-list-item class="align-center my-3 pr-0 grey--text">
                                <v-icon right color="white">mdi-email</v-icon>
                                <p class="mb-0"><a class="text-decoration-none grey--text" href="mailto:handasiahgroup@gmail.com">handasiahgroup@gmail.com</a></p>
                            </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
            </div>
            <div class="social-media d-flex justify-center">
                <v-list class="d-flex align-center transparent">
                    <v-list-item class="px-2">
                        <v-btn fab small depressed to="/">
                            <v-icon>mdi-facebook</v-icon>
                        </v-btn>
                    </v-list-item>
                    <v-list-item class="px-2">
                        <v-btn fab small depressed to="/">
                            <v-icon>mdi-twitter</v-icon>
                        </v-btn>
                    </v-list-item>
                    <v-list-item class="px-2">
                        <v-btn fab small depressed to="/">
                            <v-icon>mdi-google</v-icon>
                        </v-btn>
                    </v-list-item>
                    <v-list-item class="px-2">
                        <v-btn fab small depressed to="/">
                            <v-icon>mdi-vimeo</v-icon>
                        </v-btn>
                    </v-list-item>
                </v-list>
            </div>
            <div class="copyRight text-center white--text font-weight-bold mb-0 mt-3">
                <p class="mb-0">&copy; الهندسية جروب 2022 - جميع الحقوق محفوظة.</p>
            </div>
        </v-container>
    </footer>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style lang="scss">
footer {
    font-family: 'Cairo', sans-serif !important;
}
.contacts .v-list-item a {
    transition: 0.3s
}

.contacts .v-list-item i {
    color: #0057a8 !important;
}

.contacts .v-list-item a:hover {
    color: #FFF !important;
}

.v-list .v-list-item {
    a {
        transition: 0.3s;
    }
    & > a:hover {
        color: #FFF !important;
    }
}

.social-media .v-list-item a {
    transition:0.3s;
}
.social-media .v-list-item:hover a {
    background-color: #0057a8 !important;
    color: #FFF;
}
</style>