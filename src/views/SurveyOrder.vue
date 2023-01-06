<template>
    <div class="surveyOrder">
        <SurveyOrderEn />
    </div>
</template>

<script>
import SurveyOrderEn from '../components/En/Orders/SurveyOrderEn.vue'
import { mapGetters } from 'vuex'

export default {
    name: "SurveyOrder",
    computed:{
        ...mapGetters(['getLang'])
    },
    components:{
        SurveyOrderEn,
    }
}
</script>

<style>

</style>