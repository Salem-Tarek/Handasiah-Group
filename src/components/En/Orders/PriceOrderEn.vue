<template>
    <div class="priceOrderEn">
        <h1 class="text-center text-uppercase mb-5 main-text-color">{{getLang === 'En' ? 'Price Offer Order' : 'طلب عرض سعر'}}</h1>
        <v-form ref="priceFormEn">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6" class="py-0 mb-3">
                        <v-text-field
                            v-model="serviceForm.fullname"
                            :label="getLang === 'En' ? 'Name' : 'الاسم'"
                            required
                            outlined
                            hide-details
                            :error="!isValid(serviceForm.fullname.trim(), requiredInputs.fullname)"
                            @blur="requiredInputs.fullname = true"
                            dense
                        ></v-text-field>
                        <div v-if="!isValid(serviceForm.fullname.trim(), requiredInputs.fullname)" class="red--text subtitle-2 mt-1 mx-1">{{ getLang === 'En' ? 'Name is required' : 'الاسم مطلوب' }}</div>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0 mb-3">
                        <v-text-field
                            v-model="serviceForm.email"
                            :label="getLang === 'En' ? 'Email' : 'البريد الالكترونى'"
                            type="email"
                            outlined
                            hide-details
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="8" class="py-0 mb-3">
                        <v-text-field
                            v-model="serviceForm.address"
                            :label="getLang === 'En' ? 'Address' : 'العنوان'"
                            outlined
                            hide-details
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" class="py-0 mb-3">
                        <v-text-field
                            v-model="serviceForm.whatsapp"
                            :label="getLang === 'En' ? 'Phone(Whatsapp)' : 'رقم الواتس اب'"
                            type="number"
                            hide-spin-buttons
                            required
                            outlined
                            hide-details
                            :error="!isValid(serviceForm.whatsapp.trim(), requiredInputs.whatsapp)"
                            @blur="requiredInputs.whatsapp = true"
                            dense
                        ></v-text-field>
                        <div v-if="!isValid(serviceForm.whatsapp.trim(), requiredInputs.whatsapp)" class="red--text subtitle-2 mt-1 mx-1">{{ getLang === 'En' ? 'Whatsapp is required' : 'رقم الواتس اب مطلوب' }}</div>
                    </v-col>
                    <v-col cols="12" md="12" class="py-0 mb-3">
                        <v-text-field
                            v-model="serviceForm.details"
                            :label="getLang === 'En' ? 'Offer Details' : 'تفاصيل العرض'"
                            required
                            outlined
                            hide-details
                            :error="!isValid(serviceForm.details.trim(), requiredInputs.details)"
                            @blur="requiredInputs.details = true"
                            dense
                        ></v-text-field>
                        <div v-if="!isValid(serviceForm.details.trim(), requiredInputs.details)" class="red--text subtitle-2 mt-1 mx-1">{{ getLang === 'En' ? 'Offer Details is required' : 'تفاصيل العرض مطلوبة' }}</div>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0 mb-3">
                        <v-text-field
                            v-model="serviceForm.career"
                            :label="getLang === 'En' ? 'client Field Activity' : 'مجال عمل العميل'"
                            outlined
                            hide-details
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0 mb-3">
                        <v-text-field
                            v-model="serviceForm.person"
                            :label="getLang === 'En' ? 'Client Responsible Person' : 'الشخص المسئول لدى العميل'"
                            outlined
                            hide-details
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" class="py-0 mb-3">
                        <v-textarea
                            v-model="serviceForm.notes"
                            :label="getLang === 'En' ? 'Notes' : 'ملاحظات'"
                            outlined
                            hide-details
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
            requiredInputs: {
                fullname: false,
                details: false,
                whatsapp: false,
            }
        }
    },
    methods: {
        async submitOffer(){
            let requiredEmptyVals = [];
            let requiredVals = [];
            for(let key in this.requiredInputs){
                if(this.serviceForm[key] === ''){
                    requiredEmptyVals.push(this.serviceForm[key]);
                }
                requiredVals.push(this.serviceForm[key]);
            }
            for(let key in this.requiredInputs){
                if(requiredVals.every(val => val.trim() === "")){
                    this.alertMaker('Please, Fill All Required Fields', 'من فضلك قم بملئ جميع حقول الإدخال المطلوبة', 'warning');
                    for(let requireInput in this.requiredInputs){
                        this.requiredInputs[requireInput] = true;
                    }
                    return;
                }
                if(this.serviceForm[key] === ''){
                    this.requiredInputs[key] = true;
                    this.alertMaker('Please, Fill All Required Fields', 'من فضلك قم بملئ جميع حقول الإدخال المطلوبة', 'warning');
                    return;
                }
                let requiredVals_noPhone = this.serviceForm.phone?.trim().length ? requiredEmptyVals.filter(val => val !== this.serviceForm.phone) : requiredEmptyVals;
                if(this.serviceForm.phone?.trim().length < 11 || this.serviceForm.whatsapp?.trim().length < 11 && !requiredVals_noPhone.length){
                    this.alertMaker('Please, Phone Must consists of 11 Numbers', 'من فضلك رقم الموبايل يجب ان يتكون من 11 رقم', 'warning');
                    return;    
                }
            }
            
            const res = await axios.post('/frontend/orderPrice', {...this.serviceForm});
            if(res.status === 200){
                this.alertMaker('Order Sent Successfully', 'تم إرسال الطلب بنجاح');
                this.resetForm()
                // location.reload();
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
        },
        isValid(txt, isBlured){
            if(isBlured){
                if(txt.trim().length){
                    return true;
                }else{
                    return false; 
                }
            }else{
                return true 
            }
        },
        resetForm(){
            for(let key in this.serviceForm){
                if(key !== 'date'){
                    this.serviceForm[key] = "";
                }
            }
            for(let key in this.requiredInputs){
                this.requiredInputs[key] = false;
            }
        }
    },
    computed: {
        ...mapGetters(['getLang']),
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