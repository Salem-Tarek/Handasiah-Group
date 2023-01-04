<template>
    <nav class="en grey lighten-4">
        <v-container class="py-1 px-0">
            <v-app-bar flat style="position: relative; z-index: 3">
                <div class="d-flex align-center justify-space-between" style="width: 100%">
                    <router-link to="/">
                        <v-img style="cursor: pointer" contain height="100px" width="100px" src="../../../assets/logo.png"></v-img>
                    </router-link>
                    <v-list class="d-none d-md-flex font-weight-bold grey lighten-4">
                        <v-list-item class="mx-3 px-0 text-uppercase subtitle-2 font-weight-bold">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/">Home</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0 text-uppercase subtitle-2 font-weight-bold" id="servicesEn">
                            <v-menu transition="slide-y-transition" bottom offset-y open-on-hover min-width="240px" attach="#servicesEn">
                                <template v-slot:activator="{ on, attrs }">
                                    <span v-bind="attrs" v-on="on" class="d-flex align-center justify-space-between">
                                        <span>Services</span>
                                        <v-icon right>mdi-chevron-down</v-icon>
                                    </span>
                                </template>
                                <v-list class="font-weight-bold">
                                    <v-list-item v-for="(service, index) in services" :key="index">
                                        <router-link class="text-decoration-none grey--text text--darken-4" :to="`/${service.title}`">{{ service.title }}</router-link>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-list-item>
                        <!-- <v-list-item class="mr-3 px-0 text-uppercase subtitle-2 font-weight-bold">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/shop">Shop</router-link>
                        </v-list-item> -->
                        <v-list-item class="mx-3 px-0 text-uppercase subtitle-2 font-weight-bold" id="ordersEn">
                            <v-menu transition="slide-y-transition" bottom offset-y open-on-hover min-width="160px" attach="#ordersEn">
                                <template v-slot:activator="{ on, attrs }">
                                    <span v-bind="attrs" v-on="on" class="d-flex align-center justify-space-between">
                                        <span>Orders</span>
                                        <v-icon right>mdi-chevron-down</v-icon>
                                    </span>
                                </template>
                                <v-list class="font-weight-bold">
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/survey-order">make a survey</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/service-order">Service (Repair)</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/price-order">Price offer</router-link>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-list-item>
                        <v-list-item class="mr-3 px-0 text-uppercase subtitle-2 font-weight-bold">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/about">About Us</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0 text-uppercase subtitle-2 font-weight-bold">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/contact">Contact Us</router-link>
                        </v-list-item>
                        <v-list-item class="px-0" style="max-width: fit-content">
                            <v-btn class="px-0 text-uppercase" small dark v-if="getLang === 'En'" depressed @click="toggleLang('Ar')">
                                <h1 class="mb-0">Ar</h1>
                            </v-btn>
                            <v-btn class="px-0 text-uppercase" small dark v-else depressed @click="toggleLang('En')">
                                <h1 class="mb-0">En</h1>
                            </v-btn>
                        </v-list-item>
                    </v-list>
                </div>
                <!-- window-close -->
                <v-app-bar-nav-icon @click="toggleShowDrawer" class="d-flex d-md-none">
                    <v-icon v-if="showDrawer">mdi-window-close</v-icon>
                </v-app-bar-nav-icon>
            </v-app-bar>
            <!-- Navbar Navigation Drawer -->
            <v-navigation-drawer width="265px" v-model="showDrawer" hide-overlay fixed>
                <router-link to="/" class="d-flex justify-center">
                    <v-img class="d-flex justify-center" style="cursor: pointer" contain height="100px" width="100px" src="../../../assets/logo.png"></v-img>
                </router-link>
                <v-list nav dense class="pa-0 font-weight-bold">
                    <v-list-item-group>
                        <v-list-item class="mx-3 px-0 text-uppercase">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/">Home</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0">
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <v-expansion-panel-header class="pa-0 font-weight-bold text-uppercase">
                                        Services
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-list class="py-0">
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-2 text-decoration-none grey--text text--darken-4" to="/service-page">Surveillance Systems</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-2 text-decoration-none grey--text text--darken-4" to="/service-page">Fire Alarm</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-2 text-decoration-none grey--text text--darken-4" to="/service-page">Fire Fighting</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-2 text-decoration-none grey--text text--darken-4" to="/service-page">Smart Home</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-2 text-decoration-none grey--text text--darken-4" to="/service-page">Time Attendance Devices</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-2 text-decoration-none grey--text text--darken-4" to="/service-page">Antitheft Alarm</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-2 text-decoration-none grey--text text--darken-4" to="/service-page">Network Systems</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-2 text-decoration-none grey--text text--darken-4" to="/service-page">Centrals Systems</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-2 text-decoration-none grey--text text--darken-4" to="/service-page">Air Conditioning Systems</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-2 text-decoration-none grey--text text--darken-4" to="/service-page">Finishings</router-link>
                                            </v-list-item>
                                        </v-list>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-list-item>
                        <!-- <v-list-item class="mx-3 px-0 text-uppercase">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/shop">Shop</router-link>
                        </v-list-item> -->
                        <v-list-item class="mx-3 px-0">
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <v-expansion-panel-header class="pa-0 font-weight-bold text-uppercase">
                                        Orders
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-list class="py-0">
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="text-decoration-none font-weight-bold subtitle-2 grey--text text--darken-4" to="/survey-order">make a survey</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="text-decoration-none font-weight-bold subtitle-2 grey--text text--darken-4" to="/service-order">Service (Repair)</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="text-decoration-none font-weight-bold subtitle-2 grey--text text--darken-4" to="/price-order">Price offer</router-link>
                                            </v-list-item>
                                        </v-list>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0 text-uppercase">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/about">About Us</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0 text-uppercase">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/contact">Contact Us</router-link>
                        </v-list-item>
                        <v-list-item style="max-width: fit-content">
                            <v-btn class="px-0 text-uppercase" small dark v-if="getLang === 'En'" depressed @click="toggleLang('Ar')">
                                <h1 class="mb-0">Ar</h1>
                            </v-btn>
                            <v-btn class="px-0 text-uppercase" small dark v-else depressed @click="toggleLang('En')">
                                <h1 class="mb-0">En</h1>
                            </v-btn>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
        </v-container>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "Navbar",
    props: {
        services: {
            type: Array,
            required: true,
        }
    },
    data(){
        return {
            showDrawer: false
        }
    },
    computed:{
        ...mapGetters(['getLang'])
    },
    methods:{
        ...mapActions(['toggleLang']),
        toggleShowDrawer(){
            this.showDrawer = !this.showDrawer; 
        },
    },
}
</script>

<style lang="scss">
nav.en {
    font-family: 'Poppins', sans-serif !important;
    a {
        transition: 0.5s !important;
    }
    .v-list {
        .v-list-item{
            min-width: fit-content !important;
            &:hover > a, .router-link-exact-active {
                color: #0057a8 !important;
            }
            .v-expansion-panel {
                .v-expansion-panel-header {
                    font-size: 16px;
                }
                &::before {
                    box-shadow: none;
                }
                .v-expansion-panel-content__wrap {
                    padding: 0;
                }
            }
        }
    }
}
</style>