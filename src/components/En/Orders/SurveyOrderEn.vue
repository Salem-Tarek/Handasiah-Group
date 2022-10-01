<template>
    <div class="serviceOrder">
        <h1 class="text-center text-uppercase mb-5 main-text-color">Making a Survey Order</h1>
        <v-form ref="surveyFormEn">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.name"
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
                            v-model="serviceForm.phone"
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
                            v-model="serviceForm.location"
                            :rules="rules.location"
                            label="Location through Whatsapp"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.system"
                            :rules="rules.system"
                            label="Which System will be Checked ?"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" class="py-0">
                        <v-text-field
                            v-model="serviceForm.date"
                            :rules="rules.date"
                            label="Determine Time For Making The Review"
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
                        <v-btn type="submit" class="text-uppercase font-weight-bold mb-5" dark block>Submit</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
export default {
    name: "SurveyOrderEn",
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
                    v => !!v || 'Name is required',
                ],
                email: [
                    v => !!v || 'Email is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                address: [
                    v => !!v || 'Address is required',
                ],
                location: [
                    v => !!v || 'Location is required',
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
    }
}
</script>

<style>
.main-text-color {
    color: #0057a8 !important;
}
</style>