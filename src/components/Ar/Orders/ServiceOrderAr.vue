<template>
    <div class="serviceOrderAr">
        <h1 class="text-center mb-5 main-text-color">طلب خدمة (صيانة)</h1>
        <v-form ref="serviceFormAr">
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
                            label="الإيميل"
                            type="email"
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
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.location"
                            :rules="rules.location"
                            label="العنوان عن طريق الواتس اب"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.system"
                            :rules="rules.system"
                            label="النظام المراد إجراء صيانته"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" class="py-0">
                        <v-text-field
                            v-model="serviceForm.date"
                            :rules="rules.date"
                            label="الموعد المناسب لاجراء الصيانه "
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
                        <v-btn type="submit" class="main-btn text-uppercase font-weight-bold mb-5" dark block>إرسال</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
export default {
    name: "ServiceOrderAr",
    data(){
        return {
            serviceForm: {
                name: "",
                email: "",
                address: "",
                location: "",
                phone: "",
                system: "",
                date: "",
                notes: "",
            },
            rules: {
                name: [
                    v => !!v || 'الاسم مطلوب',
                ],
                email: [
                    v => !!v || 'البريد الاكتروني مطلوب',
                    v => /.+@.+\..+/.test(v) || 'يجب ان يكون البريد الاكتروني صحيح',
                ],
                address: [
                    v => !!v || 'العنوان مطلوب',
                ],
                location: [
                    v => !!v || 'العنوان عن طريق الواتس اب مطلوب',
                ],
                phone: [
                    v => !!v || 'رقم الهاتف مطلوب',
                ],
                system: [
                    v => !!v || 'النظام المراد صيانته مطلوب',
                ],
                date: [
                    v => !!v || 'الموعد المناسب لإجراء الصيانه مطلوب',
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