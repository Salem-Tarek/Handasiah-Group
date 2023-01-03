<template>
    <div class="infoEn py-5 my-3 grey lighten-2">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <p class="mb-0 title font-weight-bold grey--text text--darken-3">Some words about us</p>
                    <p class="subtitle-2">{{ content.aboutSomeWords.description }}</p>

                    <p class="mb-0 title font-weight-bold grey--text text--darken-3">Mission</p>
                    <p class="subtitle-2">{{ content.mission.description }}</p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "InfoEn",
    props: {
    content: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style>
</style>