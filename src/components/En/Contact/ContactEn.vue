<template>
    <div class="contactEn">
        <h1 class="text-center text-uppercase mb-5 main-text-color">Contact Us</h1>
        <v-form ref="contactFormEn">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="contactForm.name"
                            :rules="rules.name"
                            label="Name"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="contactForm.email"
                            :rules="rules.email"
                            label="Email"
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
                            label="Phone"
                            type="number"
                            hide-spin-buttons
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="contactForm.Whatsapp"
                            :rules="rules.Whatsapp"
                            label="Phone(Whatsapp)"
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
                            label="Subject"
                            required
                            outlined
                            dense
                            no-resize
                        ></v-textarea>
                    </v-col>
                    <v-col cols="12" md="12" class="pt-0">
                        <v-btn type="submit" class="main-btn text-uppercase font-weight-bold mb-5" dark block>Submit</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
export default {
    name: "ContactEn",
    data(){
        return {
            contactForm: {
                name: "",
                email: "",
                phone: "",
                Whatsapp: "",
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