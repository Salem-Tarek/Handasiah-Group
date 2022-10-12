<template>
    <div class="features py-5">
        <v-container>
            <v-row>
                <v-col md="6" cols="12" class="d-flex justify-center align-center">
                    <v-icon x-large right class="main-text-color">mdi-shield-sun-outline</v-icon>
                    <div class="d-flex justify-center flex-column">
                        <p class="mb-0 title font-weight-bold">حماية كاملة</p>
                        <p class="mb-0 subtitle-1 grey--text text--darken-2">
                            تمتاز الشركة الهندسية بالتنوع فى تقديم مجالات الأنظمة الأمنية مع التفوق فى اداء كل نظام وذلك من خلال التعدد فى منظومة القسم الفنى المختص لكل نظام .
                        </p>
                    </div>
                </v-col>
                <v-col md="6" cols="12" class="d-flex justify-center align-center">
                    <v-icon x-large right class="main-text-color">mdi-clock-outline</v-icon>
                    <div class="d-flex justify-center flex-column">
                        <p class="mb-0 title font-weight-bold">الرد خلال 24 ساعة</p>
                        <p class="mb-0 subtitle-1 grey--text text--darken-2">
                            تمتاز الشركة الهندسية بتلبية الأعطال و الرد على جميع الطلبات سواء عرض سعر أو إجراء معاينة أو خدمة صيانة خلال 24 ساعة.
                        </p>
                    </div>
                </v-col>
                <v-col md="6" cols="12" class="d-flex justify-center align-center">
                    <v-icon x-large right class="main-text-color">mdi-check</v-icon>
                    <div class="d-flex justify-center flex-column">
                        <p class="mb-0 title font-weight-bold">الضمان</p>
                        <p class="mb-0 subtitle-1 grey--text text--darken-2">
                            تمتاز الشركة الهندسية بتقديم خدمة ما بعد البيع وهى الفترة خلال الضمان من خلال عمل تقارير الصيانة الدورية والمتابعة الجيدة للأنظمة المختلفة وتفعيل عقود صيانة سنوية بعد انتهاء فترة الضمان لمتابعة الأنظمة. 
                        </p>
                    </div>
                </v-col>
                <v-col md="6" cols="12" class="d-flex justify-center align-center">
                    <v-icon x-large right class="main-text-color">mdi-cog</v-icon>
                    <div class="d-flex justify-center flex-column">
                        <p class="mb-0 title font-weight-bold">دعم فني</p>
                        <p class="mb-0 subtitle-1 grey--text text--darken-2">
                            تمتاز الشركة الهندسية فى سرعة تلبية الأعطال المفاجئة وذلك من خلال فريق عمل فنى على أعلى مستوى.
                        </p>
                    </div>
                </v-col>
                <v-col md="6" cols="12" class="d-flex justify-center align-center">
                    <v-icon x-large right class="main-text-color">mdi-certificate</v-icon>
                    <div class="d-flex justify-center flex-column">
                        <p class="mb-0 title font-weight-bold">شهادات</p>
                        <p class="mb-0 subtitle-1 grey--text text--darken-2">
                            حصلت الشركة الهندسية على الكثير من الشهادات فى مجال كاميرات المراقبة و أنظمة الشبكات و أجهزة مكافحة الحريق و أجهزة الإنذار.
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