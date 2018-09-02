import { gundams as datasource } from '../../data/gundams.js';

export const actions = {
  fetchGundams({ dispatch, commit, getter, rootGetter }) {}
};

export const MU_GENA_UPDATE_SEARCH_NAME = 'updateSearchName';
export const mutations = {
  [MU_GENA_UPDATE_SEARCH_NAME](state, name) {
    state.search.name = name;
  }
};

export default {
  namespaced: true,
  state: {
    search: {
      name: ''
    },
    gundams: [...datasource]
  },
  mutations,
  actions,
  getters: {
    ownedGundams(state, getter, rootState, rootGetter) {
      return state.gundams.filter(x => x.own);
    }
  }
};
