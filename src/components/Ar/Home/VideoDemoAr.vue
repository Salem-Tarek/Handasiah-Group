<template>
    <div class="demo py-5 text-center d-flex align-center justify-center flex-column">
        <h1 class="mb-10">شاهد <span class="main-text-color">عرض الفيديو</span> الخاص بنا</h1>
        <p class="mb-10 font-weight-bold grey--text text--darken-2">لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا .</p>
        <v-icon x-large @click="toggleDemoOverlay()" class="main-text-color">mdi-play-circle</v-icon>
        <v-overlay :z-index="zIndex" :value="overlay" @click="toggleDemoOverlay()">
            <iframe src="//www.youtube.com/embed/Qi8bskIhfw8?autoplay=1" frameborder="0"></iframe>
        </v-overlay>
    </div>
</template>

<script>
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