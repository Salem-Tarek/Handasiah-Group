<template>
    <nav class="ar grey lighten-4">
        <v-container class="py-1 px-0">
            <v-app-bar flat style="position: relative; z-index: 3">
                <div class="d-flex align-center justify-space-between" style="width: 100%">
                    <router-link to="/">
                        <v-img contain height="100px" width="100px" src="../../../assets/logo.png"></v-img>
                    </router-link>
                    <v-list class="d-none d-md-flex grey lighten-4">
                        <v-list-item class="mx-3 px-0">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/">الرئيسية</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0" id="servicesAr">
                            <v-menu transition="slide-y-transition" bottom offset-y open-on-hover min-width="150px" attach="#servicesAr">
                                <template v-slot:activator="{ on, attrs }">
                                    <span v-bind="attrs" v-on="on" class="d-flex align-center justify-space-between">
                                        <span class="text-decoration-none grey--text text--darken-4">الخدمات</span>
                                        <v-icon left>mdi-chevron-down</v-icon>
                                    </span>
                                </template>
                                <v-list class="font-weight-bold">
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/service-page">أنظمة المراقبة</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/service-page">إنذار حريق</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/service-page">مكافحة حريق</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/service-page">منزل الذكي</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/service-page">ساعات حضور</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/service-page">إنذار سرقة</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/service-page">أنظمة شبكات</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/service-page">أنظمة السنترالات</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/service-page">أنظمة التكييفات</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/service-page">تشطيبات</router-link>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-list-item>
                        <!-- <v-list-item class="ml-3 px-0">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/shop">المتجر</router-link>
                        </v-list-item> -->
                        <v-list-item class="mx-3 px-0" id="ordersAr">
                            <v-menu transition="slide-y-transition" bottom offset-y open-on-hover min-width="130px" attach="#ordersAr">
                                <template v-slot:activator="{ on, attrs }">
                                    <span v-bind="attrs" v-on="on" class="d-flex align-center justify-space-between">
                                        <span class="text-decoration-none grey--text text--darken-4">الطلبات</span>
                                        <v-icon left>mdi-chevron-down</v-icon>
                                    </span>
                                </template>
                                <v-list class="font-weight-bold">
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/survey-order">إجراء معاينة</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/service-order">خدمة (صيانة)</router-link>
                                    </v-list-item>
                                    <v-list-item>
                                        <router-link class="text-decoration-none grey--text text--darken-4" to="/price-order">عرض سعر</router-link>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-list-item>
                        <v-list-item class="ml-3 px-0">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/about">عننا</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0">
                            <router-link class="text-decoration-none grey--text text--darken-4" to="/contact">إتصل بنا</router-link>
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
                <v-app-bar-nav-icon @click="toggleShowDrawer" class="d-flex d-md-none">
                    <v-icon v-if="showDrawer">mdi-window-close</v-icon>
                </v-app-bar-nav-icon>
            </v-app-bar>
            <!-- Navbar Navigation Drawer -->
            <v-navigation-drawer width="250px" v-model="showDrawer" hide-overlay fixed right>
                <router-link to="/" class="d-flex justify-center">
                    <v-img class="d-flex justify-center" style="cursor: pointer" contain height="100px" width="100px" src="../../../assets/logo.png"></v-img>
                </router-link>
                <v-list nav dense class="font-weight-bold">
                    <v-list-item-group
                    >
                        <v-list-item class="mx-3 px-0">
                            <router-link class="title text-decoration-none grey--text text--darken-4" to="/">الرئيسية</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0">
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <v-expansion-panel-header class="pa-0 title text-decoration-none grey--text text--darken-4 justify-space-between">
                                        الخدمات
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-list class="py-0">
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-1 text-decoration-none grey--text text--darken-4" to="/service-page">أنظمة المراقبة</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-1 text-decoration-none grey--text text--darken-4" to="/service-page">إنذار حريق</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-1 text-decoration-none grey--text text--darken-4" to="/service-page">مكافحة حريق</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-1 text-decoration-none grey--text text--darken-4" to="/service-page">منزل الذكي</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-1 text-decoration-none grey--text text--darken-4" to="/service-page">ساعات حضور</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-1 text-decoration-none grey--text text--darken-4" to="/service-page">إنذار سرقة</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-1 text-decoration-none grey--text text--darken-4" to="/service-page">أنظمة شبكات</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-1 text-decoration-none grey--text text--darken-4" to="/service-page">أنظمة السنترالات</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-1 text-decoration-none grey--text text--darken-4" to="/service-page">أنظمة التكييفات</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-1 text-decoration-none grey--text text--darken-4" to="/service-page">تشطيبات سرقة</router-link>
                                            </v-list-item>
                                        </v-list>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-list-item>
                        <!-- <v-list-item class="mx-3 px-0">
                            <router-link class="title text-decoration-none grey--text text--darken-4" to="/shop">المتجر</router-link>
                        </v-list-item> -->
                        <v-list-item class="mx-3 px-0">
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <v-expansion-panel-header class="pa-0 title text-decoration-none grey--text text--darken-4 justify-space-between">
                                        الطلبات
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-list class="py-0">
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-1 text-decoration-none grey--text text--darken-4" to="/survey-order">إجراء معاينة</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-1 text-decoration-none grey--text text--darken-4" to="/service-order">خدمة (صيانة)</router-link>
                                            </v-list-item>
                                            <v-list-item class="mx-3 px-0 text-uppercase">
                                                <router-link class="font-weight-bold subtitle-1 text-decoration-none grey--text text--darken-4" to="/price-order">عرض سعر</router-link>
                                            </v-list-item>
                                        </v-list>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0">
                            <router-link class="title text-decoration-none grey--text text--darken-4" to="/about">عننا</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0">
                            <router-link class="title text-decoration-none grey--text text--darken-4" to="/contact">إتصل بنا</router-link>
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
nav.ar {
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
                    .v-expansion-panel-header__icon {
                        margin-left: 0 !important;
                    }
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