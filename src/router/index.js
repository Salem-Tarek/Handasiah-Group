import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ServiceOrder from "../views/ServiceOrder.vue";
import SurveyOrder from "../views/SurveyOrder.vue";
import PriceOrder from "../views/PriceOrder.vue";
import Service from "../views/Service.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/service-order",
    name: "ServiceOrder",
    component: ServiceOrder,
  },
  {
    path: "/survey-order",
    name: "SurveyOrder",
    component: SurveyOrder,
  },
  {
    path: "/price-order",
    name: "PriceOrder",
    component: PriceOrder,
  },
  {
    path: "/service-page",
    name: "Service",
    component: Service,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
