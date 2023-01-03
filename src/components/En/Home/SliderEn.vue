<template>
    <div class="slider d-flex align-center justify-center">
        <v-container class="pa-0" fluid style="height: 100%">
            <div class="d-flex align-center justify-space-between" style="height: 100%">
                <v-carousel hide-delimiters show-arrows-on-hover height="100%">
                  <v-carousel-item
                    contain
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
  methods: {
    move(amount) {
      let newActive;
      const newIndex = this.active + amount
      if (newIndex > this.slides){
          newActive = 1
      }
      if (newIndex === 0){
          newActive = this.slides
      }
      this.active = newActive || newIndex
    },
  },
}
</script>

<style lang="scss" scoped>
.slider {
  height: calc(100vh - 88px);
}
</style>