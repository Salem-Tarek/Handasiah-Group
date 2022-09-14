<template>
    <nav>
        <v-container class="py-3 px-0">
            <v-app-bar flat>
                <div class="d-flex align-center justify-space-between" style="width: 100%">
                    <router-link to="/">
                        <v-img contain height="100px" width="100px" src="../../assets/logo.png"></v-img>
                    </router-link>
                    <v-list class="d-none d-md-flex font-weight-bold">
                        <v-list-item class="mx-3 px-0 text-uppercase">
                            <router-link to="/">Home</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0 text-uppercase">
                            <router-link to="/women">Services</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0 text-uppercase">
                            <router-link to="/about">AboutUs</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0 text-uppercase">
                            <router-link to="/men">Shop</router-link>
                        </v-list-item>
                        <v-list-item class="mx-3 px-0 text-uppercase">
                            <router-link to="/contact">Contact Us</router-link>
                        </v-list-item>
                    </v-list>
                </div>
                <v-app-bar-nav-icon @click="toggleShowDrawer" class="d-flex d-md-none"></v-app-bar-nav-icon>
            </v-app-bar>
            <!-- Navbar Navigation Drawer -->
            <v-navigation-drawer v-model="showDrawer" hide-overlay fixed stateless>
                <div class="text-center display-1 my-3 font-weight-bold">Mi<span class="text-uppercase">s</span>to</div>
                <v-list nav dense class="font-weight-bold">
                    <v-list-item-group
                    >
                        <v-list-item>
                            <router-link to="/">Home</router-link>
                        </v-list-item>
                        <v-list-item>
                            <router-link to="/women">Services</router-link>
                        </v-list-item>
                        <v-list-item>
                            <router-link to="/about">AboutUs</router-link>
                        </v-list-item>
                        <v-list-item>
                            <router-link to="/men">Shop</router-link>
                        </v-list-item>
                        <v-list-item>
                            <router-link to="/contact">Contact Us</router-link>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
        </v-container>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data(){
        return {
            showDrawer: false
        }
    },
    methods:{
        toggleShowDrawer(){
            this.showDrawer = !this.showDrawer; 
        }
    }
}
</script>

<style lang="scss">
nav .v-list .v-list-item {
    a {
        color:#121212 !important;
        text-decoration: none;
        transition: 0.5s;
    }
    &:hover > a {
        color: #0057a8 !important;
    }
}


.v-list-item {
    min-width: fit-content !important;
}
</style>