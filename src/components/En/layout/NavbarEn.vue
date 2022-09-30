<template>
    <nav class="en">
        <v-container class="py-1 px-0">
            <v-app-bar flat style="position: relative; z-index: 3">
                <div class="d-flex align-center justify-space-between" style="width: 100%">
                    <router-link to="/">
                        <v-img style="cursor: pointer" contain height="100px" width="100px" src="../../../assets/logo.png"></v-img>
                    </router-link>
                    <v-list class="d-none d-md-flex font-weight-bold">
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
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/women">Fire Alarm</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/women">Fire Fighting</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/women">Smart Home</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/women">Time Attendance Devices</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/women">Antitheft Alarm</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/women">Network Systems</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/women">Finishings</router-link>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-list-item>
                        <v-list-item class="mr-3 px-0 text-uppercase subtitle-2 font-weight-bold">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/women">Shop</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0 text-uppercase subtitle-2 font-weight-bold">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/women">Activities and Fields</router-link>
                        </v-list-item>
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
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/women">make a survey</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/women">Service (Repair)</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/women">Price offer</router-link>
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
                            <v-img v-if="getLang === 'Ar'" style="cursor: pointer" contain max-height="25px" width="50px" src="../../../assets/flags/america.svg" @click="toggleLang"></v-img>
                            <v-img v-else style="cursor: pointer" contain max-height="25px" width="50px" src="../../../assets/flags/egypt.svg" @click="toggleLang"></v-img>
                        </v-list-item>
                    </v-list>
                </div>
                <!-- window-close -->
                <v-app-bar-nav-icon @click="toggleShowDrawer" class="d-flex d-md-none">
                    <v-icon v-if="showDrawer">mdi-window-close</v-icon>
                </v-app-bar-nav-icon>
            </v-app-bar>
            <!-- Navbar Navigation Drawer -->
            <v-navigation-drawer width="262px" v-model="showDrawer" hide-overlay fixed stateless>
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
                                                <router-link class="font-weight-bold subtitle-2 text-decoration-none grey--text text--darken-4" to="/about">Fire Alarm</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-2 text-decoration-none grey--text text--darken-4" to="/about">Fire Fighting</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-2 text-decoration-none grey--text text--darken-4" to="/about">Smart Home</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-2 text-decoration-none grey--text text--darken-4" to="/about">Time Attendance Devices</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-2 text-decoration-none grey--text text--darken-4" to="/about">Antitheft Alarm</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-2 text-decoration-none grey--text text--darken-4" to="/about">Network Systems</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-2 text-decoration-none grey--text text--darken-4" to="/about">Finishings</router-link>
                                            </v-list-item>
                                        </v-list>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0 text-uppercase">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/women">Shop</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0 text-uppercase">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/women">Activities and Fields</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0">
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <v-expansion-panel-header class="pa-0 font-weight-bold text-uppercase">
                                        Orders
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-list class="py-0">
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="text-decoration-none font-weight-bold subtitle-2 grey--text text--darken-4" to="/about">make a survey</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="text-decoration-none font-weight-bold subtitle-2 grey--text text--darken-4" to="/about">Service (Repair)</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="text-decoration-none font-weight-bold subtitle-2 grey--text text--darken-4" to="/about">Price offer</router-link>
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
                            <v-img v-if="getLang === 'Ar'" style="cursor: pointer" contain max-height="25px" width="50px" src="../../../assets/flags/america.svg" @click="toggleLang"></v-img>
                            <v-img v-else style="cursor: pointer" contain max-height="25px" width="50px" src="../../../assets/flags/egypt.svg" @click="toggleLang"></v-img>
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
        }
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
            &:hover > a {
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