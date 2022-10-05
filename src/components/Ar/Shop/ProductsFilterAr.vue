<template>
    <div class="filter my-5">
        <v-expansion-panels>
            <v-expansion-panel class="elevation-0">
                <v-expansion-panel-header hide-actions disable-icon-rotate class="grey--text">
                    <v-icon left>{{ isFiltered ? 'mdi-filter-check-outline' : 'mdi-filter' }}</v-icon>
                    <span class="text-uppercase title">فلتر</span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                        <v-col cols="12" sm="4" class="mr-5">
                            <p class="subtitle-1 font-weight-bold">الفئة</p>
                            <v-select
                            dense
                            v-model="selectedCategory"
                            :items="categories"
                            cache-items
                            solo
                            :menu-props="{ top: true, offsetY: true }"
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="3" class="ml-5">
                            <p class="subtitle-1 font-weight-bold">الخصم</p>
                            <v-select
                            dense
                            v-model="selectedDiscount"
                            :items="discounts"
                            cache-items
                            solo
                            :menu-props="{ top: true, offsetY: true }"
                            ></v-select>
                        </v-col>
                    </v-row>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <div class="selectedFilters px-8 d-flex align-center" v-if="isFiltered">
            <p class="subtitle-2 font-weight-bold mb-0 mr-4">{{ filterdProductsNum }} {{ filterdProductsNum === 1 ? 'item' : 'items' }} Found</p>
            <v-btn depressed x-small class="mr-4 d-flex align-center" @click="selectedCategory = 'كل الفئات';selectedDiscount = 'لا' ">
                <v-icon x-small class="mr-1">mdi-close</v-icon>
                <span class="grey--text">حذف الكل</span>
            </v-btn>
            <v-btn depressed x-small v-if="selectedCategory !== 'كل الفئات'" class="mr-4 d-flex align-center" @click="selectedCategory = 'كل الفئات'">
                <v-icon x-small class="mr-1">mdi-close</v-icon>
                <span class="grey--text">حذف الفئة</span>
            </v-btn>
            <v-btn depressed x-small v-if="selectedDiscount !== 'لا'" class="mr-4 d-flex align-center" @click="selectedDiscount = 'لا'">
                <v-icon x-small class="mr-1">mdi-close</v-icon>
                <span class="grey--text">حذف الخصم</span>
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductsFilterAr",
    data(){
        return {
            categories:[
                'كل الفئات',
                'أنظمة المراقبة',
                'إنذار حريق',
                'مكافحة حريق',
                'منزل الذكي',
                'ساعات حضور',
                'إنذار سرقة',
                'أنظمة شبكات',
                'أنظمة السنترالات',
                'أنظمة التكييفات',
                'تشطيبات سرقة'
            ],
            selectedCategory: 'كل الفئات',
            discounts: ['لا', 'نعم'],
            selectedDiscount: 'لا',
            filterdProductsNum: 5
        }
    },
    computed:{
        isFiltered(){
            if(this.selectedCategory === "كل الفئات" && this.selectedDiscount === "لا"){
                return false
            }else{
                return true
            }
        },
    },
}
</script>

<style>
/* .filter .v-select__selections {
    min-width: fit-content !important;
} */
.filter .v-expansion-panel::before {
    box-shadow: none;
}
.filter .v-expansion-panel-header {
    width: fit-content;
}
</style>