<template>
    <div class="demo py-5 text-center d-flex align-center justify-center flex-column">
        <h1 class="mb-10">{{ getLang === 'En' ? 'View our' : 'شاهد' }} <span class="main-text-color">{{ getLang === 'En' ? 'Video Demo' : 'فيديو العرض الخاص بنا' }}</span></h1>
        <p class="mb-10 font-weight-bold grey--text text--darken-2">{{ videoData.description }}</p>
        <v-icon x-large @click="toggleDemoOverlay()" class="main-text-color">mdi-play-circle</v-icon>
        <v-overlay :z-index="zIndex" :value="overlay" @click="toggleDemoOverlay()">
            <iframe :src="videoData.link" frameborder="0"></iframe>
        </v-overlay>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "VideoDemo",
    data(){
        return {
            overlay: false,
            zIndex: 999,
        }
    },
    methods:{
        toggleDemoOverlay(){
            this.overlay = !this.overlay;
            this.$emit('overlaytoggled', this.overlay)
        }
    },
    props: {
        videoData: {
            type: Object,
            required: true,
        }
    },
    computed: {
        ...mapGetters(["getLang"])
    }
}
</script>

<style lang="scss">
.demo {
    background:url('../../../assets/bg_parallax.jpg') no-repeat center center;
    background-attachment: fixed;
    height: 500px;
    p {
        max-width:600px;
    }
    .v-icon{
        font-size:80px !important;
    }
    .v-overlay {
        iframe {
            width: 80vw;
            height: 60vh;
        }
    }
    .main-text-color {
       color: #0057a8 !important;
    }
}
</style>