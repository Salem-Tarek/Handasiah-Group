<template>
    <div class="underSlider main-bg-color py-5 white--text">
        <v-container>
            <div class="d-flex justify-center justify-md-space-between align-center flex-column flex-md-row" style="gap:20px">
                <p class="text-subtitle-1 font-weight-bold text-sm-h5 mb-0 text-center">بحث عن خدمة عالية الجودة وبأسعار معقولة ؟</p>
                <v-btn class="text-uppercase font-weight-bold" dark to="/price-order">احصل على سعر عبر الإنترنت</v-btn>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "UnderSlider",
}
</script>

<style>
.main-bg-color {
    background-color: #0057a8
}
</style>