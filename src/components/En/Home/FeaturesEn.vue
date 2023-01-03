<template>
    <div class="features py-5">
        <v-container>
            <v-row>
                <v-col md="6" cols="12" class="d-flex justify-center align-center" v-for="feat in services" :key="feat.id">
                    <v-icon x-large left class="main-text-color">{{ feat.icon }}</v-icon>
                    <div class="d-flex justify-center flex-column">
                        <p class="mb-0 title font-weight-bold">{{ feat.title }}</p>
                        <p class="mb-0 subtitle-1 grey--text text--darken-2">
                            {{ feat.description }}
                        </p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Features",
    props: {
        services: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style lang="scss">
.features {
    .col {
        i {
            font-size: 60px !important;
        }
    }
}
.main-text-color {
    color: #0057a8 !important;
}
</style>