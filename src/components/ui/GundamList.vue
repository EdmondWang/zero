<template>
  <div>
    <ul>
      <li v-for="gundam in ownedGundams" :key="gundam.name">
        {{gundam.name}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    ownedGundams() {
      return this.$store.getters['genaM/ownedGundams'];
    }
  }
};
</script>
<style>
</style>
