<template>
  <div class="hello">
    <h1 contenteditable="true">{{ supermsg }}</h1>
    <button @click="udpateMsg">Cheer up</button>
    <h2>To Do List</h2>
    <ol>
      <li>v-model with contenteditable</li>
      <li>CSS Column Rule</li>
      <li>Object.create</li>
      <li>Mocha + Chai</li>
      <li>Webpack</li>
      <li>VUE Server Side Rendering</li>
    </ol>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <Spinner></Spinner>
    <Loading></Loading>
    <p>
      sun radius: 6.955 * 10 ^5 km
      earth radius: 6378 km
      distance between Earth and Sun: 1.5 * 10 ^8 km
    </p>
  </div>
</template>

<script>
import Spinner from './Spinner.vue';
import Loading from './Loading.vue';

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Vue"
    };
  },
  computed: {
    supermsg() {
      return this.msg + '!!!';
    }
  },
  methods: {
    udpateMsg() {
      this.msg += 'e';
    }
  },
  components: {Spinner, Loading}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
