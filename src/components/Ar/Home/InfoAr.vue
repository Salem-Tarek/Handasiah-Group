<template>
  <div class="infoAr py-5 my-3 grey lighten-2">
    <v-container>
      <v-row>
        <v-col cols="12">
          <p class="mb-0 title font-weight-bold">بعض الكلمات عنا</p>
          <p class="subtitle-2 grey--text text--darken-3">
            {{ content.aboutSomeWords.description }}
          </p>
          <p class="mb-0 title font-weight-bold">المهمة</p>
          <p class="subtitle-2 grey--text text--darken-3">
            {{ content.mission.description }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "InfoAr",
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