<template>
    <div class="products my-5">
        <v-container>
            <h1 class="text-center main-text-color text-uppercase mb-5">Products</h1>
            <v-row>
                <v-col cols="12">
                    <ProductsFilterEn />
                </v-col>
                <v-col v-for="i in products" :key="i" cols="12" sm="6" md="4" lg="3">
                    <router-link class="text-decoration-none" to="product-page">
                            <v-card class="mx-auto d-flex flex-column" elevation="0" max-width="374" min-height="400px">
                                <v-img
                                style="border: 1px solid #333"
                                height="250"
                                src="../../../assets/prod-1.jpg"
                                contain
                                alt="Product Name"
                                ></v-img>
                                <div v-if="i % 3 === 0" class="white--text sale font-weight-medium d-flex justify-center align-center">
                                    - 50%
                                </div>
                                <div class="d-flex align-center justify-space-between px-1 mt-5">
                                    <v-card-title class="pt-0 pl-0 pb-0 text-uppercase subtitle-1 font-weight-bold main-text-color">Smoke Sensor</v-card-title>
                                    <!-- <v-hover v-slot="{ hover }">
                                        <v-icon :color="hover ? '#0057A8' : ''">
                                            {{ hover ? 'mdi-heart' : 'mdi-heart-outline' }}
                                        </v-icon>
                                    </v-hover> -->
                                </div>
                                <v-card-text class="pa-2">
                                    <p class="caption grey--text mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit...etc</p>
                                </v-card-text>

                                <v-card-text class="pa-0">
                                    <v-card-subtitle class="pl-2 black--text font-weight-bold">
                                        <span v-if="i % 3 === 0" class="mr-2 grey--text text-decoration-line-through body-2 font-weight-bold">$100.00</span>
                                        <span>${{ parseFloat(50).toFixed(2) }}</span> 
                                    </v-card-subtitle>
                                    <!-- <div class="rating">
                                        <v-rating
                                        :value="4"
                                        color="amber"
                                        dense
                                        readonly
                                        size="14"
                                        ></v-rating>
                                    </div> -->
                                </v-card-text>
                            </v-card>
                    </router-link>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import ProductsFilterEn from './ProductsFilterEn.vue'
export default {
    name: "ShopEn",
    data(){
        return {
            products: 10,
            discount: true
        }
    },
    components:{
        ProductsFilterEn,
    }
}
</script>

<style>
.products .sale {
    background-color: #0057a8;
    width:50px;
    height:30px;
    position:absolute;
    top:0;
    left:0;
}
.products .v-card .v-image__image {
    transition: 0.4s
}
.products .v-card:hover .v-image__image {
    transform: scale(1.3) !important;
}

.main-text-color {
    color :#0057a8 !important;
}
</style>