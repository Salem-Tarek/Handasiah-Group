<template>
    <div class="slider d-flex align-center justify-center">
        <v-container class="pa-0" fluid style="height: 100%">
            <div class="d-flex align-center justify-space-between" style="height: 100%">
                <v-carousel cycle :interval="3000" hide-delimiters show-arrows-on-hover height="100%">
                  <v-carousel-item
                    v-for="(slider,i) in sliders"
                    :key="i"
                    :src="slider.image"
                    reverse-transition="scroll-x-transition"
                  ></v-carousel-item>
                </v-carousel>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    sliders: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.slider {
  height: calc(100vh - 88px);
}
</style>