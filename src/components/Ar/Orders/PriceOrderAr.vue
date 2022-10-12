<template>
    <div class="priceOrderAr">
        <h1 class="text-center mb-5 main-text-color">طلب عرض سعر</h1>
        <v-form ref="priceFormAr">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.name"
                            :rules="rules.name"
                            label="الاسم بالكامل"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.email"
                            :rules="rules.email"
                            label="البريد الالكترونى"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="8" class="py-0">
                        <v-text-field
                            v-model="serviceForm.address"
                            :rules="rules.address"
                            label="العنوان"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" class="py-0">
                        <v-text-field
                            v-model="serviceForm.phone"
                            :rules="rules.phone"
                            label="رقم الواتس اب"
                            type="number"
                            hide-spin-buttons
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" class="py-0">
                        <v-text-field
                            v-model="serviceForm.offreDetails"
                            :rules="rules.offreDetails"
                            label="تفاصيل العرض المطلوب "
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.clientField"
                            :rules="rules.clientField"
                            label="مجال نشاط العميل"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.responsiblePerson"
                            label="الشخص المسئول لدى العميل"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" class="py-0">
                        <v-textarea
                            v-model="serviceForm.notes"
                            :rules="rules.notes"
                            label="ملاحظات من العميل"
                            required
                            outlined
                            dense
                            no-resize
                        ></v-textarea>
                    </v-col>
                    <v-col cols="12" md="12" class="pt-0">
                        <v-btn type="submit" class="main-btn text-uppercase font-weight-bold mb-5" dark block>إرســـال</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
export default {
    name: "PriceOrderAr",
    data(){
        return {
            serviceForm: {
                name: "",
                email: "",
                address: "",
                offreDetails: "",
                phone: "",
                responsiblePerson: "",
                clientField: "",
                notes: "",
            },
            rules: {
                name: [
                    v => !!v || 'الاسم مطلوب',
                ],
                email: [
                    v => !!v || 'البريد الالكتروني مطلوب',
                    v => /.+@.+\..+/.test(v) || 'يجب ان يكون البريد الالكتروني صحيح',
                ],
                address: [
                    v => !!v || 'العنوان مطلوب',
                ],
                offreDetails: [
                    v => !!v || 'تفاصيل العرض مطلوب',
                ],
                phone: [
                    v => !!v || 'رقم الهاتف مطلوب',
                ],
                clientField: [
                    v => !!v || 'مجال نشاط العميل مطلوب',
                ],
            }
        }
    }
}
</script>

<style>
.main-btn {
    letter-spacing: 0 !important;
}
.main-btn:hover, .main-btn:focus {
    background-color: #0057A8 !important;
}
</style>