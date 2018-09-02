export const MU_INCREASE = 'increaseCount';
export const mutations = {
  [MU_INCREASE](state, n = 1) {
    state.count += n;
  }
};

export const AC_INCREASE = 'decreaseCount';
export const actions = {
  [AC_INCREASE]({ commit }, { n = 1, delay = 1000 }) {
    setTimeout(() => {
      commit(MU_INCREASE, n);
    }, delay);
  }
};

export default {
  state: {
    count: 0,
    job: 'Web Developer',
    interests: ['Gundam']
  },
  mutations,
  actions,
  getters: {
    greeting() {
      return 'Hello, VUEX!';
    }
  }
};
