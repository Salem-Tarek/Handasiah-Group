<template>
    <div class="serviceOrder">
        <h1 class="text-center text-uppercase mb-5 main-text-color">{{getLang === 'En' ? 'Making a Survey Order' : 'طلب إجراء معاينة'}}</h1>
        <v-form ref="surveyFormEn">
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
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.person"
                            :label="getLang === 'En' ? 'Client Responsible Person' : 'الشخص المسئول لدى العميل'"
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.system"
                            :rules="rules.system"
                            :label="getLang === 'En' ? 'Which System will be fixed ?' : 'النظام المراد إجراء معاينة له'"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" class="py-0">
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
                            >
                            </v-date-picker>
                        </v-menu>
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
            rules: {
                name: [
                    v => !!v || 'Name is required',
                ],
                email: [
                    v => !!v || 'Email is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                address: [
                    v => !!v || 'Address is required',
                ],
                phone: [
                    v => !!v || 'Phone is required',
                ],
                system: [
                    v => !!v || 'System is required',
                ],
                date: [
                    v => !!v || 'Date is required',
                ],
            }
        }
    },
    methods: {
        async submitOffer(){
            const res = await axios.post('/frontend/order', {...this.serviceForm});
            if(res.status){
                this.serviceForm.fullname = "";
                this.serviceForm.email = "";
                this.serviceForm.address = "";
                this.serviceForm.person = "";
                this.serviceForm.whatsapp = "";
                this.serviceForm.system = "";
                this.serviceForm.date = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10);
                this.serviceForm.notes = "";
                // alert('تم إرسال طلب المعاينة بنجاح')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: this.getLang === 'En' ? 'Order Sent Successfully' : 'تم إرسال الطلب بنجاح',
                    showConfirmButton: false,
                    timer: 3000,
                    didDestroy: () => {
                        location.reload();
                    }
                })
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