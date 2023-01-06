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
                    v => !!v || 'Name is required',
                ],
                email: [
                    v => !!v || 'Email is required',
                    v => /.+@.+\..+/.test(v) || 'Email must be valid',
                ],
                phone: [
                    v => !!v || 'Phone is required',
                ],
                Whatsapp: [
                    v => !!v || 'Whatsapp Number is required',
                ],
                subject: [
                    v => !!v || 'Subject is required',
                ],
            }
        }
    },
    computed: {
        ...mapGetters(['getLang'])
    },
    methods: {
        async submitContact(){
            const res = await axios.post('/frontend/contactUs', this.contactForm);
            if(res.status){
                this.contactForm.fullname =  "";
                this.contactForm.email =  "";
                this.contactForm.phone =  "";
                this.contactForm.whatsapp =  "";
                this.contactForm.subject =  "";
                alert('تم إرسال الرسالة بنجاح');
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