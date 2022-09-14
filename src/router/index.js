import Vue from "vue";
import VueRouter from "vue-router";
import HomeEn from "../views/HomeEn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeEn",
    component: HomeEn,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
