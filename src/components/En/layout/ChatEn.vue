<template>
  <v-card
    class="mx-auto chatEn"
    max-width="500"
    dark
  >
    <v-card-title class="text-h6 font-weight-regular pb-0 pt-2">
      <span>{{ currentTitle }}</span>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text class="pt-2 pb-0">
            <v-form>
                <v-text-field
                label="Email"
                value="john@vuetifyjs.com"
                hide-details
                ></v-text-field>
                <v-text-field
                label="Password"
                type="password"
                class="mt-4"
                ></v-text-field>
            </v-form>
          <span class="text-caption grey--text text--darken-1">
            LogIn to chat with us.
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text class="pt-2 pb-0">
          <v-text-field
            label="Password"
            type="password"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            type="password"
          ></v-text-field>
          <span class="text-caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
      </v-window-item>
    </v-window>

    <v-card-actions class="pb-1 pt-0">
      <v-spacer></v-spacer>
      <v-btn
        class="font-weight-medium"
        small
        :disabled="step === 3"
        color="primary"
        depressed
        @click="step++"
      >
        LogIn
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ChatEn",
  data: () => ({
    step: 1,
  }),

  computed: {
    currentTitle () {
      switch (this.step) {
        case 1: return 'Sign-in'
        default: return 'Chat With Us'
      }
    },
  },
}
</script>

<style>
.chatEn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 200px;
  width: 300px;
  overflow-y: scroll;
  z-index: 9999999;
}
</style>