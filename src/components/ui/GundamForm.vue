<template>
  <div>
    <form>
      <input type="text" v-model="name" />
      {{name}}
    </form>
  </div>
</template>
<script>
import { gundams as datasource } from '../../data/gundams.js';
import { MU_GENA_UPDATE_SEARCH_NAME } from '../../vuex/modules/gena.js';

export default {
  computed: {
    name: {
      get() {
        return this.$store.state.genaM.search.name;
      },
      set(value) {
        this.$store.commit(`genaM/${MU_GENA_UPDATE_SEARCH_NAME}`, value);
      }
    }
  },
  methods: {
  }
};
</script>
<style>
</style>
