<template>
  <div class="module-wrapper">
    <div class="tabs">
      <ul>
        <li><a href="#" @click.prevent="currentview = 'LifeCycle';">tab A</a></li>
        <li><a href="#" @click.prevent="currentview = 'Loading';">tab B</a></li>
      </ul>
      <keep-alive>
        <component :is="currentview">
        </component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Loading from './Loading.vue';
import LifeCycle from './LifeCycle.vue';

export default {
  name: 'LifeCycleParent',
  data() {
    return {
      currentview: 'LifeCycle'
    };
  },
  components: {
    LifeCycle,
    Loading
  },
  methods: {
  },
  mounted() {
    
  }
};
</script>
<style scoped>
.tab-panel {
  display: none;
}

.tab-panel.active {
  display: block;
}
</style>
