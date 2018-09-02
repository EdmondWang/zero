import Vue from 'vue';
import Vuex from 'vuex';

import genaM from '../modules/gena.js';
import generalM from '../modules/general.js';

Vue.use(Vuex);

let mainStore = new Vuex.Store({
  state: {
    profile: {
      name: 'rootState'
    }
  },
  strict: true,
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    generalM,
    genaM
  }
});

export default mainStore;
