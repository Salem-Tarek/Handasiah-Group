<template>
    <div class="serviceOrder">
        <h1 class="text-center text-uppercase mb-5 main-text-color">Service Order</h1>
        <v-form ref="serviceFormEn">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.fullName"
                            :rules="rules.name"
                            label="Full Name"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.email"
                            :rules="rules.email"
                            label="Email"
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
                            label="Address"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" class="py-0">
                        <v-text-field
                            v-model="serviceForm.whatsapp"
                            :rules="rules.phone"
                            label="Phone(Whatsapp)"
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
                            label="Client Responsible Person"
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.system"
                            :rules="rules.system"
                            label="Which System will be fixed ?"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" class="py-0">
                        <v-text-field
                            v-model="serviceForm.date"
                            :rules="rules.date"
                            label="Set a Time for the Fix"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>    
                    <v-col cols="12" md="12" class="py-0">
                        <v-textarea
                            v-model="serviceForm.notes"
                            :rules="rules.notes"
                            label="Notes"
                            required
                            outlined
                            dense
                            no-resize
                        ></v-textarea>
                    </v-col>
                    <v-col cols="12" md="12" class="pt-0">
                        <v-btn type="submit" class="main-btn text-uppercase font-weight-bold mb-5" dark block @click.prevent="submitOffer">Submit</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "ServiceOrderEn",
    data(){
        return {
            serviceForm: {
                fullName: "",
                email: "",
                address: "",
                person: "",
                whatsapp: "",
                system: "",
                date: "",
                notes: "",
            },
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
            console.log(this.serviceForm);
            const res = await axios.post('/frontend/orderService', {...this.serviceForm});
            console.log(res);
            if(res.status){
                alert('تم إرسال طلب الخدمة بنجاح')
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