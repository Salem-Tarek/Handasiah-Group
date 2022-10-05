<template>
    <div class="product-page my-5">
        <v-container style="position:relative">
            <div v-if="discount" style="z-index: 2" class="white--text sale font-weight-medium d-flex justify-center align-center">
                - 50%
            </div>
            <v-row class="align-start">
                <v-col cols="12" md="6">
                    <v-img style="z-index: 1" max-height="400px" src="../../../assets/prod-1.jpg" alt="Product Page"></v-img>
                </v-col>
                <v-col cols="12" md="6">
                    <h1 class="text-uppercase main-text-color">مستشعر الدخان</h1>
                    <div class="d-flex align-center my-5">
                        <span v-if="discount" class="mr-2 grey--text text-decoration-line-through subtitle-1 font-weight-black">$100.00</span>
                        <h3 class="font-weight-bold mr-3">${{ parseFloat(50).toFixed(2) }}</h3>
                    </div>
                    <p class="subtitle-1 grey--text my-5">
                        <span class="font-weight-bold black--text">الوصف:</span> هذا المنتج يمكن استخدامه فى استشعار الدخان الناتج من الحرائق و يمكن تتبعه بدقه المنتج يمكن استخدامه فى استشعار الدخان الناتج من الحرائق و يمكن تتبعه بدقه شديدة.
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "ProductPageAr",
    data(){
        return {
            discount: true,
        }
    }
}
</script>

<style>
.product-page .sale {
    background-color: #0057a8;
    width:50px;
    height:30px;
    position:absolute;
    top:20px;
    right:20px;
}

.main-text-color {
    color :#0057a8 !important;
}
</style>