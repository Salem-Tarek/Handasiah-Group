<template>
    <div class="slider d-flex align-center justify-center">
        <v-container class="pa-0" fluid style="height: 100%">
            <div class="d-flex align-center justify-space-between" style="height: 100%">
                <v-carousel hide-delimiters show-arrows-on-hover height="100%">
                  <v-carousel-item
                    v-for="(slider,i) in slides"
                    :key="i"
                    :src="slider.src"
                    transition="scroll-x-transition"
                  ></v-carousel-item>
                </v-carousel>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
  name: "Slider",
  data(){
    return {
      slides:[
        {
          src: require('../../../assets/slider/slide_1.jpg'),
        },
        {
          src: require('../../../assets/slider/slide_2.jpg'),
        },
        {
          src: require('../../../assets/slider/slide_3.jpg'),
        },
      ]
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