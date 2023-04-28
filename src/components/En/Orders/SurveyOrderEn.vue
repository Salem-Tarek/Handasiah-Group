<template>
    <div class="serviceOrder">
        <h1 class="text-center text-uppercase mb-5 main-text-color">{{getLang === 'En' ? 'Making a Survey Order' : 'طلب إجراء معاينة'}}</h1>
        <v-form ref="surveyFormEn">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6" class="py-0 mb-3">
                        <v-text-field
                            v-model="serviceForm.fullname"
                            :label="getLang === 'En' ? 'Name' : 'الاسم'"
                            required
                            hide-details
                            :error="!isValid(serviceForm.fullname.trim(), requiredInputs.fullname)"
                            @blur="requiredInputs.fullname = true"
                            outlined
                            dense
                        ></v-text-field>
                        <div v-if="!isValid(serviceForm.fullname.trim(), requiredInputs.fullname)" class="red--text subtitle-2 mt-1 mx-1">{{ getLang === 'En' ? 'Name is required' : 'الاسم مطلوب' }}</div>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0 mb-3">
                        <v-text-field
                            v-model="serviceForm.email"
                            :label="getLang === 'En' ? 'Email' : 'البريد الالكترونى'"
                            type="email"
                            hide-details
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="8" class="py-0 mb-3">
                        <v-text-field
                            v-model="serviceForm.address"
                            :label="getLang === 'En' ? 'Address' : 'العنوان'"
                            required
                            hide-details
                            :error="!isValid(serviceForm.address.trim(), requiredInputs.address)"
                            @blur="requiredInputs.address = true"
                            outlined
                            dense
                        ></v-text-field>
                        <div v-if="!isValid(serviceForm.address.trim(), requiredInputs.address)" class="red--text subtitle-2 mt-1 mx-1">{{ getLang === 'En' ? 'Address is required' : 'العنوان مطلوب' }}</div>
                    </v-col>
                    <v-col cols="12" md="4" class="py-0 mb-3">
                        <v-text-field
                            v-model="serviceForm.whatsapp"
                            :label="getLang === 'En' ? 'Phone(Whatsapp)' : 'رقم الواتس اب'"
                            type="number"
                            hide-spin-buttons
                            required
                            hide-details
                            :error="!isValid(serviceForm.whatsapp.trim(), requiredInputs.whatsapp) || isPhoneNotValid"
                            @blur="requiredInputs.whatsapp = true"
                            outlined
                            dense
                        ></v-text-field>
                        <div v-if="!isValid(serviceForm.whatsapp.trim(), requiredInputs.whatsapp)" class="red--text subtitle-2 mt-1 mx-1">{{ getLang === 'En' ? 'Whatsapp is required' : 'رقم الواتس اب مطلوب' }}</div>
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
                    <v-col cols="12" md="6" class="py-0 mb-3">
                        <v-text-field
                            v-model="serviceForm.system"
                            :label="getLang === 'En' ? 'Which System will be Checked ?' : 'النظام المراد إجراء معاينة له'"
                            required
                            hide-details
                            :error="!isValid(serviceForm.system.trim(), requiredInputs.system)"
                            @blur="requiredInputs.system = true"
                            outlined
                            dense
                        ></v-text-field>
                        <div v-if="!isValid(serviceForm.system.trim(), requiredInputs.system)" class="red--text subtitle-2 mt-1 mx-1">{{ getLang === 'En' ? 'System will be Checked is required' : 'النظام المراد إجراء معيانة له مطلوب' }}</div>
                    </v-col>
                    <v-col cols="12" md="12" class="py-0 mb-3">
                        <v-menu
                            ref="dateMenu"
                            v-model="dateMenu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                dense
                                outlined
                                v-model="serviceForm.date"
                                hide-details
                                :label="getLang === 'En' ? 'Survey Date' : 'تاريخ المعاينة'"
                                prepend-icon="mdi-calendar"
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker
                            v-model="serviceForm.date"
                            color="primary"
                            header-color="primary"
                            @input="dateMenu = false"
                            hide-details
                            >
                            </v-date-picker>
                        </v-menu>
                    </v-col>    
                    <v-col cols="12" md="12" class="py-0 mb-3">
                        <v-textarea
                            v-model="serviceForm.notes"
                            :label="getLang === 'En' ? 'Notes' : 'ملاحظات'"
                            hide-details
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
// import axios from 'axios'
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2'

export default {
    name: "SurveyOrderEn",
    data(){
        return {
            serviceForm: {
                fullname: "",
                email: "",
                address: "",
                person: "",
                whatsapp: "",
                system: "",
                date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                notes: "",
            },
            dateMenu: false,
            requiredInputs: {
                fullname: false,
                address: false,
                whatsapp: false,
                system: false,
            },
            isPhoneNotValid: false,
        }
    },
    methods: {
        async submitOffer(){
            let requiredVals = [];
            for(let requireInput in this.requiredInputs){
                requiredVals.push(this.serviceForm[requireInput]);
            }

            if(requiredVals.some(val => val === '')){
                this.alertMaker('Please, Fill All Required Fields', 'من فضلك قم بملئ جميع حقول الإدخال المطلوبة', 'warning');
                for(let requireInput in this.requiredInputs) {
                    if(this.serviceForm[requireInput].trim() === ''){
                        this.requiredInputs[requireInput] = true;
                    }
                }
                return;
            }

            if(this.serviceForm.phone?.trim().length < 11 || this.serviceForm.whatsapp?.trim().length < 11){
                this.isPhoneNotValid = true;
                this.alertMaker('Please, Phone Must consists of 11 Numbers', 'من فضلك رقم الموبايل يجب ان يتكون من 11 رقم', 'warning');
                return;    
            }

            // const res = await axios.post('/frontend/order', {...this.serviceForm});
            // if(res.status === 200){
            //     this.alertMaker('Order Sent Successfully', 'تم إرسال الطلب بنجاح');
            //     this.resetForm()
            //     // location.reload();
            //     // alert('تم إرسال طلب المعاينة بنجاح')
            // }
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
</style>