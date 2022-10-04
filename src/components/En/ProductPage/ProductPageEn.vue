<template>
    <div class="product-page">
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <v-img max-height="100%" src="../../../assets/prod-1.jpg" alt="Product Page"></v-img>
                </v-col>
                <v-col cols="12" md="6">
                    <h1 class="text-uppercase main-text-color">Smoke Sensor</h1>
                    <div class="d-flex align-center">
                        <span v-if="discount" class="mr-2 grey--text text-decoration-line-through subtitle-1 font-weight-black">$100.00</span>
                        <h3 class="font-weight-bold mr-3">${{ parseFloat(50).toFixed(2) }}</h3>
                    </div>
                    <v-rating
                    :value="4"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="20"
                    class="my-5"
                    ></v-rating>
                    <p class="subtitle-1 grey--text">
                        <span class="font-weight-bold black--text">Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sint nam nobis corrupti voluptate cupiditate quas odio corporis maiores ullam.
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "ProductPageEn",
    data(){
        return {
            discount: true,
        }
    }
}
</script>

<style>
.main-text-color {
    color :#0057a8 !important;
}
</style>