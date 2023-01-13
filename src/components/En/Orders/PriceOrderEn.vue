<template>
    <div class="priceOrderEn">
        <h1 class="text-center text-uppercase mb-5 main-text-color">{{getLang === 'En' ? 'Price Offer Order' : 'طلب عرض سعر'}}</h1>
        <v-form ref="priceFormEn">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.fullname"
                            :rules="rules.name"
                            :label="getLang === 'En' ? 'Name' : 'الاسم'"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.email"
                            :rules="rules.email"
                            :label="getLang === 'En' ? 'Email' : 'البريد الالكترونى'"
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
                            :label="getLang === 'En' ? 'Address' : 'العنوان'"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" class="py-0">
                        <v-text-field
                            v-model="serviceForm.whatsapp"
                            :rules="rules.phone"
                            :label="getLang === 'En' ? 'Phone(Whatsapp)' : 'رقم الواتس اب'"
                            type="number"
                            hide-spin-buttons
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" class="py-0">
                        <v-text-field
                            v-model="serviceForm.details"
                            :rules="rules.offreDetails"
                            :label="getLang === 'En' ? 'Offer Details' : 'تفاصيل العرض'"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.career"
                            :rules="rules.clientField"
                            :label="getLang === 'En' ? 'client Field Activity' : 'مجال عمل العميل'"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.person"
                            :rules="rules.person"
                            :label="getLang === 'En' ? 'Client Responsible Person' : 'الشخص المسئول لدى العميل'"
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" class="py-0">
                        <v-textarea
                            v-model="serviceForm.notes"
                            :rules="rules.notes"
                            :label="getLang === 'En' ? 'Notes' : 'ملاحظات'"
                            required
                            outlined
                            dense
                            no-resize
                        ></v-textarea>
                    </v-col>
                    <v-col cols="12" md="12" class="pt-0">
                        <v-btn type="submit" class="main-btn text-uppercase font-weight-bold mb-5" dark block @click.prevent="submitOffer">{{getLang === 'En' ? 'Submit' : 'إرسال'}}</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2'

export default {
    name: "PriceOrderEn",
    data(){
        return {
            serviceForm: {
                fullname: "",
                email: "",
                address: "",
                details: "",
                whatsapp: "",
                person: "",
                career: "",
                notes: "",
            },
            rules: {
                name: [
                    v => !!v || this.rulesLocalization.name,
                ],
                email: [
                    v => !!v || this.rulesLocalization.email,
                    v => /.+@.+\..+/.test(v) || this.rulesLocalization.emailValidation,
                ],
                address: [
                    v => !!v || this.rulesLocalization.address,
                ],
                offreDetails: [
                    v => !!v || this.rulesLocalization.offreDetails,
                ],
                phone: [
                    v => !!v || this.rulesLocalization.phone,
                ],
                clientField: [
                    v => !!v || this.rulesLocalization.clientField,
                ],
                person: [
                    v => !!v || this.rulesLocalization.person,
                ],
            }
        }
    },
    methods: {
        async submitOffer(){
            for(let key in this.serviceForm){
                if(this.serviceForm[key].trim() === ''){
                    this.alertMaker('Please, Fill All Fields', 'من فضلك قم بملئ جميع حقول الإدخال', 'warning');
                    // location.reload();
                    return;
                }
            }
            const res = await axios.post('/frontend/orderPrice', {...this.serviceForm});
            if(res.status === 200){
                // alert('تم إرسال طلب السعر بنجاح');
                this.alertMaker('Order Sent Successfully', 'تم إرسال الطلب بنجاح');
                location.reload();
            }
        },
        alertMaker(titleEn, titleAr, icon = 'success'){
            Swal.fire({
                    position: 'center',
                    customClass: {
                        title: this.getLang === 'En' ? 'alertClassEn' : 'alertClassAr',
                    },
                    icon: icon,
                    title: this.getLang === 'En' ? titleEn : titleAr,
                    showConfirmButton: false,
                    timer: 3000,
                    // didDestroy: () => {
                    //     // location.reload();
                    // }
                })
        }
    },
    computed: {
        ...mapGetters(['getLang']),
        rulesLocalization(){
            return {
                name: this.getLang === 'En' ? 'Name is required' : 'الاسم مطلوب',
                email: this.getLang === 'En' ? 'Email is required' : 'البريد الالكترونى مطلوب',
                emailValidation: this.getLang === 'En' ? 'Email must be valid' : 'البريد الالكترونى يجب ان يكون صحيح البنية',
                phone: this.getLang === 'En' ? 'Phone is required' : 'رقم الهاتف مطلوب',
                address: this.getLang === 'En' ? 'Address is required' : 'العنوان مطلوب',
                offreDetails: this.getLang === 'En' ? 'Offer Details is required' : 'تفاصيل العرض مطلوبة',
                clientField: this.getLang === 'En' ? 'Client Field is required' : 'مجال عمل العميل مطلوب',
                person: this.getLang === 'En' ? 'Client Responsible Person is required' : 'الشخص المسئول لدى العميل مطلوب',
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

.alertClassEn {
    font-family: "Poppins", sans-serif !important;
}
.alertClassAr {
    font-family: "Cairo", sans-serif !important;
}
</style>