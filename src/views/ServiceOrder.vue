<template>
    <div class="serviceOrder">
        <ServiceOrderEn />
    </div>
</template>

<script>
import ServiceOrderEn from '../components/En/Orders/ServiceOrderEn.vue'
import { mapGetters } from 'vuex'

export default {
    name: "ServiceOrder",
    computed:{
        ...mapGetters(['getLang'])
    },
    components:{
        ServiceOrderEn,
    }
}
</script>

<style>

</style>