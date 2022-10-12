<template>
    <div class="aboutAr">
        <div class="subheader d-flex align-end">
            <v-container fluid class="px-0">
                <carousel dir="ltr" :freeDrag="false" :pullDrag="false" :touchDrag="false" :mouseDrag="false" :autoplay="true" :nav="false" :responsive="{ 0:{items:1} }" :dots="false">
                    <v-img width="100%" height="300px" src="../../../assets/about/service1.jpg"></v-img>
                    <v-img width="100%" height="300px" src="../../../assets/about/service2.jpeg"></v-img>
                    <v-img width="100%" height="300px" src="../../../assets/about/service3.jpeg"></v-img>
                </carousel>
                <div class="header-content white--text text-center">
                    <p class="text-uppercase text-h4 text-sm-h3 font-weight-bold">عننـــا</p>
                    <p class="text-subtitle-1 text-sm-h5 font-weight-bold mb-0">"احد الشركات الرائدة فى مجال الأنظمة الأمنية و التشطيبات و أنظمة مكافحة الحرائق"</p>
                </div>
            </v-container>
        </div>
        <v-container>
            <!-- <div class="about-section-1 py-12">
                <v-row class="align-center">
                    <v-col cols="12" md="6" class="mx-auto pa-6">
                        <v-img src="../../../assets/about_1.jpg" contain></v-img>
                    </v-col>
                    <v-col cols="12" md="6" class="mx-auto text-center px-6">
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
            </v-row> -->
            <div class="certificates my-7">
                <p class="headline main-title font-weight-medium mx-auto mb-5 white--text text-center py-3 px-5">شهــاداتـنــــا</p>
                <div class="certificates-wrapper d-flex flex-wrap py-5 justify-center align-center">
                    <img src="../../../assets/certificates/certificate1.jpg">
                    <img src="../../../assets/certificates/certificate2.jpg">
                    <img src="../../../assets/certificates/certificate3.jpg">
                    <img src="../../../assets/certificates/certificate4.jpg">
                    <img src="../../../assets/certificates/certificate5.jpg">
                    <img src="../../../assets/certificates/certificate6.jpg">
                </div>
            </div>
            <div class="partners my-7">
                <p class="headline main-title font-weight-medium mx-auto mb-5 white--text text-center py-3 px-5">شركات تم العمل معها</p>
                <div class="partners-wrapper d-flex flex-wrap py-5 justify-center align-center">
                    <img src="../../../assets/partners/الــــنـــادى الأهـلــى.jpg">
                    <img src="../../../assets/partners/AL AZHAR university.jpg">
                    <img src="../../../assets/partners/dentons.png">
                    <img src="../../../assets/partners/اكاديمية البحث العلمى.jpg">
                    <img src="../../../assets/partners/الشركة المصرية لنفل الدم.jpg">
                    <img src="../../../assets/partners/الشركة المصريه الفرعونيه للتنميه السياحية.jpg">
                    <img src="../../../assets/partners/المجمـــــوعة المتحــــدة لوســــاطة التـــــأمين.png">
                    <img src="../../../assets/partners/المركــــــز الدولــــى التجــــارى للتوريــــدات.png">
                </div>
            </div>
        </v-container>

    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    name: "About",
    components: { 
        carousel,
    },
}
</script>

<style>
.aboutAr .subheader {
    position: relative;
}

.aboutAr .about-section-1 {
    overflow: hidden;
}

.aboutAr  .feat .v-icon {
    color:#0057a8;
    font-size: 50px !important;
}
.aboutAr p.subtitle-2, .aboutAr p.title {
    letter-spacing: 0 !important;
}

.aboutAr .owl-stage {
    position:relative;
}

.aboutAr .owl-stage::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(0, 0, 0, 0.7);
    z-index: 1;
}

.aboutAr .header-content {
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 100%;
}

.aboutAr .partners-wrapper, .aboutAr .certificates-wrapper {
    gap: 30px
}

.aboutAr .partners-wrapper img , .aboutAr .certificates-wrapper img {
    max-width: 280px;
    object-fit: contain;
}

.main-title {
    background-color: #0057A8;
    border-radius: 50px;
    width: fit-content;
}
</style>