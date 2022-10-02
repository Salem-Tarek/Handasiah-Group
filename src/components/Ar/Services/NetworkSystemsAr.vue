<template>
    <div class="networkSystemsAr">
        <v-container fluid>
            <carousel dir="ltr" :autoplayTimeout="3000" :autoplay="true" :nav="false" :responsive="{ 0:{items:1} }">
                <v-img height="calc(100vh - 126px)" src="../../../assets/network/slider2.jpeg"></v-img>
                <v-img height="calc(100vh - 126px)" src="../../../assets/network/slider1.jpeg"></v-img>
                <v-img height="calc(100vh - 126px)" src="../../../assets/network/slider3.jpeg"></v-img>
                <v-img height="calc(100vh - 126px)" src="../../../assets/network/slider4.jpeg"></v-img>
            </carousel>
        </v-container>
        <v-container>
            <h1 class="text-uppercase main-text-color mb-5">أنظمة شبكات</h1>
            <p class="subtitle-1">احد الشركات الرائدة فى مجال الأنظمة الأمنية وقد قامت بالكثير من المشاريع بكبرى شركات القطاع الخاص والقطاع العام والهيئات والجهات الحكومية بأعلى كفاءة وفاعلية.</p>    
            <p class="subtitle-1">تمتاز الشركة الهندسية فى سرعة تلبية الأعطال المفاجئة وذلك من خلال فريق عمل فنى على أعلى مستوى..وذلك من خلال استقبال المعلومات الخاصة بالأعطال المفاجئة والتحرك نحو العميل خلال 24 ساعة لمعالجة تلك الأعطال .</p>    
        </v-container>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    name: "NetworkSystemsAr",
    components:{
        carousel,
    }
}
</script>

<style>
.main-text-color {
    color: #0057a8 !important;
}
</style>