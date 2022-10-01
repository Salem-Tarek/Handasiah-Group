<template>
    <div class="surveyOrder">
        <SurveyOrderEn v-if="getLang === 'En'" />
        <SurveyOrderAr v-else />
    </div>
</template>

<script>
import SurveyOrderEn from '../components/En/Orders/SurveyOrderEn.vue'
import SurveyOrderAr from '../components/Ar/Orders/SurveyOrderAr.vue'
import { mapGetters } from 'vuex'

export default {
    name: "SurveyOrder",
    computed:{
        ...mapGetters(['getLang'])
    },
    components:{
        SurveyOrderEn,
        SurveyOrderAr,
    }
}
</script>

<style>

</style>