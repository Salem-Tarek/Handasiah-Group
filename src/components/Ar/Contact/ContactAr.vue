<template>
    <div class="contactAr">
        <h1 class="text-center text-uppercase mb-5 main-text-color">إتصل بنا</h1>
        <v-form ref="contactFormAr">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="contactForm.name"
                            :rules="rules.name"
                            label="الاسم"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="contactForm.email"
                            :rules="rules.email"
                            label="البريد الالكترونى"
                            required
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="contactForm.phone"
                            :rules="rules.phone"
                            label="رقم الهاتف"
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
                            label="رقم الواتس اب"
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
                            label="الموضوع"
                            required
                            outlined
                            dense
                            no-resize
                        ></v-textarea>
                    </v-col>
                    <v-col cols="12" md="12" class="pt-0">
                        <v-btn type="submit" class="main-btn text-uppercase font-weight-bold mb-5" dark block>إرسال</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
export default {
    name: "ContactAr",
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
                    v => !!v || 'الاسم مطلوب',
                ],
                email: [
                    v => !!v || 'البريد الاكتروني مطلوب',
                    v => /.+@.+\..+/.test(v) || 'يجب ان يكون البريد الاكتروني صحيح',
                ],
                phone: [
                    v => !!v || 'رقم الهاتف مطلوب',
                ],
                Whatsapp: [
                    v => !!v || 'رقم الواتس اب مطلوب',
                ],
                subject: [
                    v => !!v || 'الموضوع مطلوب',
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