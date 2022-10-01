<template>
    <div class="priceOrderEn">
        <h1 class="text-center text-uppercase mb-5 main-text-color">Price Offer Order</h1>
        <v-form ref="priceFormEn">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.name"
                            :rules="rules.name"
                            label="Name"
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
                    <v-col cols="12" md="12" class="py-0">
                        <v-text-field
                            v-model="serviceForm.offreDetails"
                            :rules="rules.offreDetails"
                            label="Offer Details "
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.clientField"
                            :rules="rules.clientField"
                            label="client Field Activity"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="serviceForm.responsiblePerson"
                            :rules="rules.responsiblePerson"
                            label="Client Responsible Person"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" class="py-0">
                        <v-text-field
                            v-model="serviceForm.date"
                            :rules="rules.date"
                            label="Suitable Time for Making the Survey"
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
    name: "PriceOrderEn",
    data(){
        return {
            serviceForm: {
                name: "",
                email: "",
                address: "",
                offreDetails: "",
                phone: "",
                responsiblePerson: "",
                clientField: "",
                date: "",
                notes: "",
            },
            rules: {
                name: [
                    v => !!v || 'Name is required',
                ],
                email: [
                    v => !!v || 'Email is required',
                    v => /.+@.+\..+/.test(v) || 'Email must be valid',
                ],
                address: [
                    v => !!v || 'Address is required',
                ],
                offreDetails: [
                    v => !!v || 'Offre Details is required',
                ],
                phone: [
                    v => !!v || 'Phone is required',
                ],
                clientField: [
                    v => !!v || 'Client Field is required',
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

</style>