<template>
    <div class="contact">
        <h1 class="text-center text-uppercase mb-5 main-text-color">{{ getLang === 'En' ? 'Contact Us' : 'تواصل معنا' }}</h1>
        <v-form ref="contactFormEn">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="contactForm.fullname"
                            :rules="rules.name"
                            :label="getLang === 'En' ? 'Name' : 'الاسم'"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="contactForm.email"
                            :rules="rules.email"
                            :label="getLang === 'En' ? 'Email' : 'البريد الالكترونى'"
                            type="email"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="contactForm.phone"
                            :rules="rules.phone"
                            :label="getLang === 'En' ? 'Phone' : 'رقم الهاتف'"
                            type="number"
                            hide-spin-buttons
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="contactForm.whatsapp"
                            :rules="rules.Whatsapp"
                            :label="getLang === 'En' ? 'Phone(Whatsapp)' : 'رقم الواتس اب'"
                            type="number"
                            hide-spin-buttons
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" class="py-0">
                        <v-textarea
                            v-model="contactForm.subject"
                            :rules="rules.subject"
                            :label="getLang === 'En' ? 'Subject' : 'الموضوع'"
                            required
                            outlined
                            dense
                            no-resize
                        ></v-textarea>
                    </v-col>
                    <v-col cols="12" md="12" class="pt-0">
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
            rules: {
                name: [
                    v => !!v || this.rulesLocalization.name,
                ],
                email: [
                    v => !!v || this.rulesLocalization.email,
                    v => /.+@.+\..+/.test(v) || this.rulesLocalization.emailValidation,
                ],
                phone: [
                    v => !!v || this.rulesLocalization.phone,
                ],
                Whatsapp: [
                    v => !!v || this.rulesLocalization.whatsapp,
                ],
                subject: [
                    v => !!v || this.rulesLocalization.subject,
                ],
            }
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
                whatsapp: this.getLang === 'En' ? 'Whatsapp is required' : 'رقم الواتس اب مطلوب',
                subject: this.getLang === 'En' ? 'Subject is required' : 'الموضوع مطلوب',
            }
        }
    },
    methods: {
        async submitContact(){
            for(let key in this.contactForm){
                if(this.contactForm[key].trim() === ''){
                    this.alertMaker('Please, Fill All Fields', 'من فضلك قم بملئ جميع حقول الإدخال', 'warning');
                    // location.reload();
                    return;
                }
            }
            const res = await axios.post('/frontend/contactUs', this.contactForm);
            if(res.status === 200){
                // alert('تم إرسال الرسالة بنجاح');
                this.alertMaker('Message Sent Successfully', 'تم إرسال الرسالة بنجاح');
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