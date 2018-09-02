<template>
  <div>
    {{myGreeting}}
    <p class="count_label">
      {{myCount}}
    </p>
    <div>
      <button v-on:click="handleClickHit(1, $event)" class="btn btn-primary">
        Hit !
      </button>
      <button v-on:click="handleClickHit(2, $event)" class="btn btn-primary">
        Double Hit !!
      </button>
      <button v-on:click="handleClickHit(3, $event)" class="btn btn-primary">
        Three Combo !!!
      </button>
    </div>
    <div>
      <button v-on:click="handleClickHitAsync(1, 2000, $event)" class="btn btn-primary">
        Hit after 2s!
      </button>
       <button v-on:click="handleClickHitAsync(1, 3000, $event)" class="btn btn-primary">
        Hit after 3s!
      </button>
    </div>
  </div>
</template>
<script>
import { MU_INCREASE, AC_INCREASE } from '../../vuex/modules/general.js';

export default {
  computed: {
    myGreeting() {
      return this.$store.getters.greeting;
    },
    myCount() {
      return this.$store.state.generalM.count;
    }
  },
  methods: {
    handleClickHit(n, event) {
      this.$store.commit(MU_INCREASE, n);
    },
    handleClickHitAsync(n, delay, event) {
      this.$store.dispatch(AC_INCREASE, {n, delay});
    }
  }
};
</script>
<style scoped>
.count_label {
  font-size: 2rem;
  color: hsla(203, 100%, 45%, 1);
  border: 1px solid hsla(0, 0%, 80%, 1);
  border-radius: 0.2rem;
  text-align: center;
  padding: 0.2rem;
  margin: .6rem;
}
</style>
