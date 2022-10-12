<template>
    <footer class="grey darken-4 pt-5">
        <v-container>
            <div class="upper-footer">
                <v-row class="align-center">
                    <v-col md="4" cols="12">
                        <v-img contain height="130px" width="130px" src="../../../assets/logo.png"></v-img>
                        <p class="grey--text subtitle-1 font-weight-bold text-justify">Elhandasiah Group was established to be one of the distinguished companies in the work of networks, security systems and contracting.</p>
                    </v-col>
                    <v-col md="4" cols="12" class="d-flex justify-md-center justify-start">
                        <v-list dense class="transparent">
                            <v-list-item class="px-0">
                                <v-list-item-title class="font-weight-bold white--text title">
                                    Discover
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item class="px-0 my-3">
                                <router-link class="grey--text text-decoration-none  subtitle-1" to="/">Home</router-link>
                            </v-list-item>
                            <v-list-item class="px-0 my-3">
                                <router-link class="grey--text text-decoration-none  subtitle-1" to="/about">About Us</router-link>
                            </v-list-item>
                            <!-- <v-list-item class="px-0 my-3">
                                <router-link class="grey--text text-decoration-none  subtitle-1" to="/shop">Shop</router-link>
                            </v-list-item> -->
                            <v-list-item class="px-0 my-3">
                                <router-link class="grey--text text-decoration-none  subtitle-1" to="/contact">Contact Us</router-link>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col md="4" cols="12">
                        <v-list dense class="contacts transparent pb-0">
                            <v-list-item-title class="font-weight-bold white--text title">
                                Contacts
                            </v-list-item-title>
                            <v-list-item class="align-center my-3 pl-0 grey--text">
                                <v-icon left color="white">mdi-home</v-icon>
                                <p class="mb-0">98 A – Faisal – Giza</p>
                            </v-list-item>
                            <v-list-item class="align-center my-3 pl-0 grey--text">
                                <v-icon left color="white">mdi-cellphone</v-icon>
                                <p class="mb-0"><a class="text-decoration-none grey--text" href="tel:0237408436">02-37408436</a> / <a class="text-decoration-none grey--text" href="tel:01552021453">01552021453</a></p>
                            </v-list-item>
                            <v-list-item class="align-center my-3 pl-0 grey--text">
                                <v-icon left color="white">mdi-email</v-icon>
                                <p class="mb-0"><a class="text-decoration-none grey--text" href="mailto:handasiahgroup@gmail.com">handasiahgroup@gmail.com</a></p>
                            </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
            </div>
            <div class="social-media d-flex justify-center">
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
                <p class="mb-0">&copy; Handasiah Group 2022 - All rights reserved.</p>
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