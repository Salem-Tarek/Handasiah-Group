import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: "En"
  },
  getters:{
    getLang: state => state.lang,
  },
  mutations: {
    toggleLang: state => {
      if(state.lang === "En"){
        state.lang = "Ar"
      }else{
        state.lang = "En"
      }
    }
  },
  actions: {
    toggleLang({commit}){
      commit('toggleLang')
    }
  },
  modules: {},
});
