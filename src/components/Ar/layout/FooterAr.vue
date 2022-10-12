<template>
    <footer class="grey darken-4 pt-5">
        <v-container>
            <div class="upper-footer">
                <v-row class="align-center">
                    <v-col md="4" cols="12">
                        <v-img contain height="130px" width="130px" src="../../../assets/logo.png"></v-img>
                        <p class="grey--text subtitle-1 font-weight-bold text-justify" style="letter-spacing: 0 !important">تاسست الهندسية جروب لتكون واحدة من الشركات المتميزة فى اعمال الشبكات والانظمة الامنية والمقاولات
                        العامة وتعتبر الشركة من احدى الشركات التى ساهمت فى العديد من المشروعات القومية والخاصة.</p>
                    </v-col>
                    <v-col md="4" cols="12" class="d-flex justify-md-center justify-start">
                        <v-list dense class="transparent">
                            <v-list-item class="px-0">
                                <v-list-item-title class="font-weight-bold white--text title">
                                    إكتشف
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item class="px-0 my-3">
                                <router-link class="grey--text text-decoration-none" to="/">الرئيسية</router-link>
                            </v-list-item>
                            <v-list-item class="px-0 my-3">
                                <router-link class="grey--text text-decoration-none" to="/about">عننا</router-link>
                            </v-list-item>
                            <!-- <v-list-item class="px-0 my-3">
                                <router-link class="grey--text text-decoration-none" to="/shop">المتجر</router-link>
                            </v-list-item> -->
                            <v-list-item class="px-0 my-3">
                                <router-link class="grey--text text-decoration-none" to="/contact">إتصل بنا</router-link>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col md="4" cols="12">
                        <v-list dense class="contacts transparent pb-0">
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
            <div class="social-media d-flex justify-center" style="direction: ltr">
                <v-list class="d-flex align-center transparent">
                    <v-list-item class="px-2">
                        <v-btn fab small depressed>
                            <a class="text-decoration-none" target="_blank" href="https://www.facebook.com/">
                                <v-icon>mdi-facebook</v-icon>
                            </a>
                        </v-btn>
                    </v-list-item>
                    <v-list-item class="px-2">
                        <v-btn fab small depressed>
                            <a class="text-decoration-none" target="_blank" href="mailto:handasiahgroup@gmail.com">
                                <v-icon>mdi-email</v-icon>
                            </a>
                        </v-btn>
                    </v-list-item>
                    <v-list-item class="px-2">
                        <v-btn fab small depressed>
                            <a class="text-decoration-none" target="_blank" href="https://wa.me/201552021453">
                                <v-icon>mdi-whatsapp</v-icon>
                            </a>
                        </v-btn>
                    </v-list-item>
                    <v-list-item class="px-2">
                        <v-btn fab small depressed>
                            <a class="text-decoration-none" target="_blank" href="https://www.linkedin.com/feed/">
                                <v-icon>mdi-linkedin</v-icon>
                            </a>
                        </v-btn>
                    </v-list-item>
                </v-list>
            </div>
            <div class="copyRight text-center white--text mb-0 mt-3">
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
.contacts .v-list-item a {
    transition: 0.3s
}

.contacts .v-list-item i {
    color: #0057a8 !important;
}

.contacts .v-list-item a:hover {
    color: #FFF !important;
}

.social-media .v-list .v-list-item {
    .v-btn {
        transition: 0.3s;
        a {
            i {
                color: rgba(0, 0, 0, 0.87);
            }
        }
    }
    &:hover > .v-btn{
        background-color: #0057a8 !important;
        a, i {
            color: #FFF !important;
        }
    }
}
</style>