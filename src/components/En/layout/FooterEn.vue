<template>
    <footer class="grey darken-4 pt-5">
        <v-container>
            <div class="upper-footer">
                <v-row class="align-center">
                    <v-col md="4" cols="12">
                        <v-img contain height="130px" width="130px" src="../../../assets/logo.png"></v-img>
                        <p class="grey--text subtitle-1 font-weight-bold text-justify">{{ contactData.description }}</p>
                    </v-col>
                    <v-col md="4" cols="12" class="d-flex justify-md-center justify-start">
                        <v-list dense class="transparent">
                            <v-list-item class="px-0">
                                <v-list-item-title class="font-weight-bold white--text title">
                                    {{ getLang === 'En' ? 'Discover' : 'إكتشف' }}
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item class="px-0 my-3">
                                <router-link class="grey--text text-decoration-none  subtitle-1" to="/">{{ getLang === 'En' ? 'Home' : 'الرئيسية' }}</router-link>
                            </v-list-item>
                            <v-list-item class="px-0 my-3">
                                <router-link class="grey--text text-decoration-none  subtitle-1" to="/about">{{ getLang === 'En' ? 'About Us' : 'عننا' }}</router-link>
                            </v-list-item>
                            <!-- <v-list-item class="px-0 my-3">
                                <router-link class="grey--text text-decoration-none  subtitle-1" to="/shop">Shop</router-link>
                            </v-list-item> -->
                            <v-list-item class="px-0 my-3">
                                <router-link class="grey--text text-decoration-none  subtitle-1" to="/contact">{{ getLang === 'En' ? 'Contact Us' : 'اتصل بنا' }}</router-link>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col md="4" cols="12">
                        <v-list dense class="contacts transparent pb-0">
                            <v-list-item-title class="font-weight-bold white--text title">
                                {{ getLang === 'En' ? 'Contacts' : 'وسائل التواصل' }}
                            </v-list-item-title>
                            <v-list-item class="align-center my-3 pl-0 grey--text">
                                <v-icon left color="white">mdi-home</v-icon>
                                <p class="mb-0">{{  getLang === 'En' ? contactData.addressEn : contactData.addressAr }}</p>
                            </v-list-item>
                            <v-list-item class="align-center my-3 pl-0 grey--text">
                                <v-icon left color="white">mdi-cellphone</v-icon>
                                <p class="mb-0"><a class="text-decoration-none grey--text" :href="`tel:02${contactData.mobile2}`">02-{{ contactData.mobile2 }}</a> / <a class="text-decoration-none grey--text" :href="`tel:${contactData.mobile1}`">{{ contactData.mobile1 }}</a></p>
                            </v-list-item>
                            <v-list-item class="align-center my-3 pl-0 grey--text">
                                <v-icon left color="white">mdi-email</v-icon>
                                <p class="mb-0"><a class="text-decoration-none grey--text" :href="`mailto:${contactData.gmail}`">{{ contactData.gmail }}</a></p>
                            </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
            </div>
            <div class="social-media d-flex justify-center">
                <v-list class="d-flex align-center transparent">
                    <v-list-item class="px-2">
                        <v-btn fab small depressed>
                            <a class="text-decoration-none" target="_blank" :href="contactData.facebook">
                                <v-icon>mdi-facebook</v-icon>
                            </a>
                        </v-btn>
                    </v-list-item>
                    <v-list-item class="px-2">
                        <v-btn fab small depressed>
                            <a class="text-decoration-none" target="_blank" :href="`mailto:${contactData.gmail}`">
                                <v-icon>mdi-email</v-icon>
                            </a>
                        </v-btn>
                    </v-list-item>
                    <v-list-item class="px-2">
                        <v-btn fab small depressed>
                            <a class="text-decoration-none" target="_blank" :href="`https://wa.me/2${contactData.whatsapp}`">
                                <v-icon>mdi-whatsapp</v-icon>
                            </a>
                        </v-btn>
                    </v-list-item>
                    <v-list-item class="px-2">
                        <v-btn fab small depressed>
                            <a class="text-decoration-none" target="_blank" :href="contactData.linkedIn">
                                <v-icon>mdi-linkedin</v-icon>
                            </a>
                        </v-btn>
                    </v-list-item>
                </v-list>
            </div>
            <div class="copyRight text-center white--text mb-0 mt-3">
                <p class="mb-0">&copy; {{  getLang === 'En' ? `Handasiah Group ${currentYear} - All rights reserved.` : `الهندسية جروب ${currentYear} حقوق الطبع محفوظة` }}</p>
            </div>
        </v-container>
    </footer>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: "Footer",
    props: {
        contactData: {
            type: Object,
            required: true,
        }
    },
    computed: {
        ...mapGetters(['getLang']),
        currentYear(){
            return new Date().getFullYear()
        }
    },
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