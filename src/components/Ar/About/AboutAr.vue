<template>
    <div class="aboutAr">
        <div class="subheader d-flex align-end">
            <v-overlay :absolute="true" :value="true" :opacity="0.7" :z-index="0"></v-overlay>
            <v-container style="z-index: 1">
                <div class="content white--text">
                    <p class="text-uppercase display-1 font-weight-bold">عنا</p>
                    <p class="text-subtitle-2 text-sm-h6">"احد الشركات الرائدة فى مجال الأنظمة الأمنية و التشطيبات و أنظمة مكافحة الحرائق"</p>
                </div>
            </v-container>
        </div>
        <v-container>
            <div class="about-section-1 py-12">
                <v-row class="flex-column">
                    <v-col cols="12" sm="6" class="mx-auto pa-6">
                        <v-img src="../../../assets/about_1.jpg" contain></v-img>
                    </v-col>
                    <v-col cols="12" sm="6" class="mx-auto text-center px-6">
                        <h1 class="text-uppercase">"خبراء أمن المنزل"</h1>
                        <p class="subtitle-2 mb-0">
                            تمتاز الشركة الهندسية بالتنوع فى تقديم مجالات الأنظمة الأمنية مع التفوق فى اداء كل نظام وذلك من خلال التعدد فى منظومة القسم الفنى المختص لكل نظام .
                        </p>
                    </v-col>
                </v-row>
            </div>
            <v-divider class="mb-5"></v-divider>
            <v-row class="my-5">
                <v-col cols="12" md="5">
                    <p class="mb-0 title font-weight-bold">بعض الكلمات عنا</p>
                    <p class="subtitle-2 grey--text text--darken-3">
                        	احد الشركات الرائدة فى مجال الأنظمة الأمنية وقد قامت بالكثير من المشاريع بكبرى شركات القطاع الخاص والقطاع العام والهيئات والجهات الحكومية بأعلى كفاءة وفاعلية.
                    </p>
                    <p class="subtitle-2 grey--text text--darken-3">
                        تمتاز الشركة الهندسية فى سرعة تلبية الأعطال المفاجئة وذلك من خلال فريق عمل فنى على أعلى مستوى..وذلك من خلال استقبال المعلومات الخاصة بالأعطال المفاجئة والتحرك نحو العميل خلال 24 ساعة لمعالجة تلك الأعطال .
                    </p>
                    <p class="subtitle-2 grey--text text--darken-3">
                        تمتاز الشركة الهندسية بتقديم خدمة ما بعد البيع وهى الفترة خلال الضمان من خلال عمل تقارير الصيانة الدورية والمتابعة الجيدة للأنظمة المختلفة وتفعيل عقود صيانة سنوية بعد انتهاء فترة الضمان لمتابعة التشغيل للأنظمة المختلفة .
                    </p>
                    <p class="mb-0 title font-weight-bold">المهمة</p>
                    <p class="subtitle-2 grey--text text--darken-3">
                       تمتاز الشركة الهندسية بالتنوع فى تقديم مجالات الأنظمة الأمنية مع التفوق فى اداء كل نظام وذلك من خلال التعدد فى منظومة القسم الفنى المختص لكل نظام .
                    </p>
                    <p class="subtitle-2 grey--text text--darken-3">
                        تمتاز الشركة الهندسية بوجود فريق مدرب على أعلى مستوى خلال أعمال التركيبات والصيانة الدورية ويمتاز هذا الفريق بالنظام والدقة من عمل تقارير الدورية الشهرية .
                    </p>
                </v-col>
                <v-col cols="12" md="7">
                    <div class="feat d-flex align-start grey lighten-3 pa-5 my-5" style="border: 1px solid #333!important;">
                        <v-icon x-large right>mdi-check-circle-outline</v-icon>
                        <div class="content">
                            <p class="mb-0 title font-weight-bold">خدمة احترافية</p>
                            <p class="subtitle-2 mb-0 grey--text text--darken-3">
                                تمتاز الشركة الهندسية بوجود فريق مدرب على أعلى مستوى خلال أعمال التركيبات والصيانة الدورية ويمتاز هذا الفريق بالنظام والدقة من عمل تقارير الدورية الشهرية .
                            </p>
                        </div>
                    </div>
                    <div class="feat d-flex align-start grey lighten-3 pa-5 my-5" style="border: 1px solid #333!important;">
                        <v-icon x-large right>mdi-check-circle-outline</v-icon>
                        <div class="content">
                            <p class="mb-0 title font-weight-bold">أسعار معقولة</p>
                            <p class="subtitle-2 mb-0 grey--text text--darken-3">
                                تمتاز الشركة الهندسية بأسعارها الرائعه و بالجودة الممتازة و الدعم المتوفر على مدار 24 ساعه عن طريق فريق مدرب على أعلى مستوى للكشف و إصلاح الأعطال.
                            </p>
                        </div>
                    </div>
                    <div class="feat d-flex align-start grey lighten-3 pa-5 my-5" style="border: 1px solid #333!important;">
                        <v-icon x-large right>mdi-check-circle-outline</v-icon>
                        <div class="content">
                            <p class="mb-0 title font-weight-bold">دعم كبير</p>
                            <p class="subtitle-2 mb-0 grey--text text--darken-3">
                                تمتاز الشركة الهندسية فى سرعة تلبية الأعطال المفاجئة وذلك من خلال فريق عمل فنى على أعلى مستوى..وذلك من خلال استقبال المعلومات الخاصة بالأعطال المفاجئة والتحرك نحو العميل خلال 24 ساعة لمعالجة تلك الأعطال .
                            </p>
                        </div>
                    </div>
                    <div class="feat d-flex align-start grey lighten-3 pa-5 my-5" style="border: 1px solid #333!important;">
                        <v-icon x-large right>mdi-check-circle-outline</v-icon>
                        <div class="content">
                            <p class="mb-0 title font-weight-bold">ضمان الخدمة</p>
                            <p class="subtitle-2 mb-0 grey--text text--darken-3">
                               تمتاز الشركة الهندسية بتقديم خدمة ما بعد البيع وهى الفترة خلال الضمان من خلال عمل تقارير الصيانة الدورية والمتابعة الجيدة للأنظمة المختلفة وتفعيل عقود صيانة سنوية بعد انتهاء فترة الضمان لمتابعة التشغيل للأنظمة المختلفة .
                            </p>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
export default {
    name: "About",
}
</script>

<style>
.subheader {
    background:url('../../../assets/subheader.jpg') no-repeat center center;
    background-size: cover;
    height: 200px;
    position: relative;
}

.about-section-1 {
    overflow: hidden;
}

.feat .v-icon {
    color:#0057a8;
    font-size: 50px !important;
}
.aboutAr p.subtitle-2, .aboutAr p.title {
    letter-spacing: 0 !important;
}
</style>