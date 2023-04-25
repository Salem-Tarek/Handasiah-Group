<template>
    <div class="contact pt-4">
        <h1 class="text-center text-uppercase mb-5 main-text-color">{{ getLang === 'En' ? 'Contact Us' : 'تواصل معنا' }}</h1>
        <v-form ref="contactFormEn">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            @blur="requiredInputs.fullname = true"
                            :class="isValid(contactForm.fullname.trim(), requiredInputs.fullname) ? 'mb-3' : ''"    
                            v-model="contactForm.fullname"
                            :label="getLang === 'En' ? 'Name' : 'الاسم'"
                            required
                            hide-details
                            outlined
                            dense
                            :error="!isValid(contactForm.fullname.trim(), requiredInputs.fullname)"
                        ></v-text-field>
                        <div v-if="!isValid(contactForm.fullname.trim(), requiredInputs.fullname)" class="red--text subtitle-2 mb-2 mt-1 mx-1">{{ getLang === 'En' ? 'Name is required' : 'الاسم مطلوب' }}</div>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            class="mb-3"    
                            v-model="contactForm.email"
                            :label="getLang === 'En' ? 'Email' : 'البريد الالكترونى'"
                            type="email"
                            outlined
                            dense
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            @blur="requiredInputs.phone = true"
                            :class="isValid(contactForm.phone.trim(), requiredInputs.phone) ? 'mb-3' : ''"   
                            v-model="contactForm.phone"
                            :label="getLang === 'En' ? 'Phone' : 'رقم الهاتف'"
                            type="number"
                            hide-spin-buttons
                            required
                            hide-details
                            outlined
                            dense
                            :error="!isValid(contactForm.phone.trim(), requiredInputs.phone)"
                        ></v-text-field>
                        <div v-if="!isValid(contactForm.phone.trim(), requiredInputs.phone)" class="red--text subtitle-2 mb-2 mt-1 mx-1">{{ getLang === 'En' ? 'Phone is required' : 'رقم الهاتف مطلوب' }}</div>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            class="mb-3"    
                            v-model="contactForm.whatsapp"
                            :label="getLang === 'En' ? 'Phone(Whatsapp)' : 'رقم الواتس اب'"
                            type="number"
                            hide-spin-buttons
                            outlined
                            hide-details
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" class="py-0">
                        <v-textarea
                            @blur="requiredInputs.subject = true"
                            :class="isValid(contactForm.subject.trim(), requiredInputs.subject) ? 'mb-3' : ''" 
                            v-model="contactForm.subject"
                            :label="getLang === 'En' ? 'Subject' : 'الموضوع'"
                            required
                            hide-details
                            outlined
                            dense
                            no-resize
                            :error="!isValid(contactForm.subject.trim(), requiredInputs.subject)"
                        ></v-textarea>
                        <div v-if="!isValid(contactForm.subject.trim(), requiredInputs.subject)" class="red--text subtitle-2 mb-2 mt-1 mx-1">{{ getLang === 'En' ? 'Subject is required' : 'الموضوع مطلوب' }}</div>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-btn type="submit" class="main-btn text-uppercase font-weight-bold mb-5" dark block @click.prevent="submitContact">{{ getLang === 'En' ? 'Submit' : 'إرسال' }}</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: "ContactEn",
    data(){
        return {
            contactForm: {
                fullname: "",
                email: "",
                phone: "",
                whatsapp: "",
                subject: "",
            },
            requiredInputs: {
                fullname: false,
                phone: false,
                subject: false,
            }
        }
    },
    computed: {
        ...mapGetters(['getLang']),
    },
    methods: {
        async submitContact(){
            let requiredEmptyVals = [];
            let requiredVals = [];
            for(let key in this.requiredInputs){
                if(this.contactForm[key] === ''){
                    requiredEmptyVals.push(this.contactForm[key]);
                }
                requiredVals.push(this.contactForm[key]);
            }
            for(let key in this.requiredInputs){
                if(requiredVals.every(val => val.trim() === "")){
                    this.alertMaker('Please, Fill All Required Fields', 'من فضلك قم بملئ جميع حقول الإدخال المطلوبة', 'warning');
                    for(let requireInput in this.requiredInputs){
                        this.requiredInputs[requireInput] = true;
                    }
                    return;
                }
                if(this.contactForm[key] === ''){
                    this.requiredInputs[key] = true;
                    this.alertMaker('Please, Fill All Required Fields', 'من فضلك قم بملئ جميع حقول الإدخال المطلوبة', 'warning');
                    return;
                }
                let requiredVals_noPhone = this.contactForm.phone?.trim().length ? requiredEmptyVals.filter(val => val !== this.contactForm.phone) : requiredEmptyVals;
                if((this.contactForm.phone?.trim().length < 11 || this.contactForm.whatsapp?.trim().length < 11) && !requiredVals_noPhone.length){
                    console.log(this.contactForm.phone?.trim().length < 11);
                    console.log(this.contactForm.whatsapp?.trim().length < 11);
                    console.log(!requiredVals_noPhone.length);
                    this.alertMaker('Please, Phone Must consists of 11 Numbers', 'من فضلك رقم الموبايل يجب ان يتكون من 11 رقم', 'warning');
                    return;    
                }
            }

            const res = await axios.post('/frontend/order', {...this.contactForm});
            if(res.status === 200){
                this.alertMaker('Order Sent Successfully', 'تم إرسال الطلب بنجاح');
                this.resetForm()
                // location.reload();
                // alert('تم إرسال طلب المعاينة بنجاح')
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
            for(let key in this.contactForm){
                this.contactForm[key] = "";
            }
            for(let key in this.requiredInputs){
                this.requiredInputs[key] = false;
            }
        }
    },
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