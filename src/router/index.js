import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ServiceOrder from "../views/ServiceOrder.vue";
import SurveyOrder from "../views/SurveyOrder.vue";
import PriceOrder from "../views/PriceOrder.vue";
import Service from "../views/Service.vue";
// import Shop from "../views/Shop.vue";
import ProductPage from "../views/ProductPage.vue";
import Contact from "../views/Contact.vue";

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
  // {
  //   path: "/shop",
  //   name: "Shop",
  //   component: Shop,
  // },
  {
    path: "/product-page",
    name: "ProductPage",
    component: ProductPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
