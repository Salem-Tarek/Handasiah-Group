<template>
    <div class="infoEn py-5 my-3 grey lighten-2">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <p class="mb-0 title font-weight-bold grey--text text--darken-3">{{ getLang === 'En' ? 'Some words about us' : 'بعض الكلمات عننا' }}</p>
                    <p class="subtitle-2">{{ content.aboutSomeWords && content.aboutSomeWords.description }}</p>

                    <p class="mb-0 title font-weight-bold grey--text text--darken-3">{{ getLang === 'En' ? 'Mission' : 'الرؤية' }}</p>
                    <p class="subtitle-2">{{ content.mission && content.mission.description }}</p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "InfoEn",
    props: {
        content: {
        type: Object,
        required: true,
        }
    },
    computed: {
        ...mapGetters(['getLang'])
    }
}
</script>

<style>
</style>