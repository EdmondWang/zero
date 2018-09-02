<template>
  <div class="comp">
    <ul>
      <li v-for="n in sequence">
        {{n}}
      </li>
    </ul>
    <a href="https://alligator.io/vuejs/component-lifecycle/">LifeCycle</a>
  </div>
</template>
<script>
export default {
  name: 'LifeCycle',
  data() {
    return {
      sequence: ['a']
    }
  },
  computed: {
    sequenceComputed() {
      console.warn('sequenceComputed get called')
      return this.sequence;
    }
  },
  beforeCreate() {
    console.info('beforeCreate:')
    console.warn(`${this.sequence? this.sequence: 'Cannot access sequence'}`);
    console.warn(`${this.$el? this.$el: 'Cannot access this.$el'}`);
  },
  created() {
     console.info('created');

     this.sequence.push('b');
     console.warn(`Be able to access sequence: ${this.sequence}`);
  },
  beforeMount() {
     console.info('beforeMount');
  },
  mounted() {
    console.info('mounted');
    console.warn(`${this.$el}`);

    this.sequence.push('c');
    this.$nextTick(() => {
      this.sequence.push('d');
    });
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.info('updated');
  },
  activated() {
    console.info('activated');
  },
  deactivated() {
    console.info('deactivated');
  },
  beforeDestroy() {
    console.info('beforeDestroy');
  },
  destroyed() {
     console.info('destroyed');
     console.warn(`This is : ${this}`);
     console.warn(`$el is : ${this.$el}`);
  }
};
</script>
<style scoped>
.comp {
  width: 20rem;
  height: 20rem;
  border: 1px solid hsla(203, 100%, 55%, 1);
  border-radius: .4rem;
  background-color: #FFFFFF;
  margin: auto;
  padding: 0.4rem;
}
</style>
