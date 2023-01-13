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
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/">{{ getLang === 'En' ? 'Home' : 'الرئيسية' }}</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0 text-uppercase subtitle-2 font-weight-bold" id="servicesEn">
                            <v-menu transition="slide-y-transition" bottom offset-y open-on-hover min-width="240px" attach="#servicesEn">
                                <template v-slot:activator="{ on, attrs }">
                                    <span v-bind="attrs" v-on="on" class="d-flex align-center justify-space-between">
                                        <span>{{ getLang === 'En' ? 'Services' : 'الخدمات' }}</span>
                                        <v-icon right>mdi-chevron-down</v-icon>
                                    </span>
                                </template>
                                <v-list class="font-weight-bold">
                                    <v-list-item v-for="(service, index) in services" :key="index">
                                        <v-btn @click="navigateToServicePage(service.title, index)" block class="text-decoration-none grey--text text--darken-4 justify-start font-weight-bold" text>{{ service.title }}</v-btn>
                                        <!-- <router-link class="text-decoration-none grey--text text--darken-4" :to="`/service-page/${service.title}`">{{ service.title }}</router-link> -->
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-list-item>
                        <!-- <v-list-item class="mr-3 px-0 text-uppercase subtitle-2 font-weight-bold">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/shop">Shop</router-link>
                        </v-list-item> -->
                        <v-list-item class="mx-3 px-0 text-uppercase subtitle-2 font-weight-bold" :id="getLang === 'En' ? 'ordersEn' : 'ordersAr'">
                            <v-menu transition="slide-y-transition" bottom offset-y open-on-hover min-width="160px" :attach="getLang === 'En' ? '#ordersEn' : '#ordersAr'">
                                <template v-slot:activator="{ on, attrs }">
                                    <span v-bind="attrs" v-on="on" class="d-flex align-center justify-space-between">
                                        <span>{{ getLang === 'En' ? 'Orders' : 'الطلبات'}}</span>
                                        <v-icon right>mdi-chevron-down</v-icon>
                                    </span>
                                </template>
                                <v-list class="font-weight-bold">
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/survey-order">{{ getLang === 'En' ? 'make a survey' : 'إجراء معاينة'}}</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/service-order">{{ getLang === 'En' ? 'Service (Repair)' : 'خدمة (صيانة)'}}</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/price-order">{{ getLang === 'En' ? 'Price offer' : 'طلب سعر'}}</router-link>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-list-item>
                        <v-list-item :class="['px-0 text-uppercase subtitle-2 font-weight-bold', getLang === 'En' ? 'mr-3' : 'ml-3']">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/about">{{getLang === 'En' ? 'About Us' : 'عننا'}}</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0 text-uppercase subtitle-2 font-weight-bold">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/contact">{{getLang === 'En' ? 'Contact Us' : 'تواصل معنا'}}</router-link>
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
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/">{{ getLang === 'En' ? 'Home' : 'الرئيسية' }}</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0">
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <v-expansion-panel-header class="pa-0 font-weight-bold text-uppercase">
                                        {{ getLang === 'En' ? 'Services' : 'الخدمات' }}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-list class="py-0">
                                            <v-list-item v-for="(service, index) in services" :key="index" class="mx-3 px-0 text-uppercase">
                                                <v-btn @click="navigateToServicePage(service.title, index)" block class="justify-start font-weight-bold subtitle-2 text-decoration-none grey--text text--darken-4" text>{{ service.title }}</v-btn>
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
                                        {{ getLang === 'En' ? 'Orders' : 'الطلبات'}}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-list class="py-0">
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="text-decoration-none font-weight-bold subtitle-2 grey--text text--darken-4" to="/survey-order">{{ getLang === 'En' ? 'make a survey' : 'إجراء معاينة'}}</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="text-decoration-none font-weight-bold subtitle-2 grey--text text--darken-4" to="/service-order">{{ getLang === 'En' ? 'Service (Repair)' : 'خدمة (صيانة)'}}</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="text-decoration-none font-weight-bold subtitle-2 grey--text text--darken-4" to="/price-order">{{ getLang === 'En' ? 'Price offer' : 'طلب سعر'}}</router-link>
                                            </v-list-item>
                                        </v-list>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0 text-uppercase">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/about">{{getLang === 'En' ? 'About Us' : 'عننا'}}</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0 text-uppercase">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/contact">{{getLang === 'En' ? 'Contact Us' : 'تواصل معنا'}}</router-link>
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
        navigateToServicePage(title, index){
            localStorage.setItem('serivceId', JSON.stringify(index));
            this.$router.push({ name: 'Service', params: {title: title} })
        }
    },
    watch: {
        getLang(){
            this.showDrawer = false;
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
            .btn:hover > .btn, .router-link-exact-active {
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