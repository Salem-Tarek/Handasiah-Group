import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: "Ar"
  },
  getters:{
    getLang: state => state.lang,
  },
  mutations: {
    toggleLang: (state, lang) => {
      state.lang = lang;
    }
  },
  actions: {
    toggleLang({commit}, lang){
      commit('toggleLang', lang)
    }
  },
  modules: {},
});
