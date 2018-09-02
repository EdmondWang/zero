<template>
  <div class="module-wrapper">
    <h2>GAPP</h2>
    <div class="panel">
      <GundamForm></GundamForm>
      <GundamList></GundamList>
    </div>
    <div class="panel">
      <Counter></Counter>
    </div>
  </div>
</template>
<script>
import Counter from './Counter.vue';
import GundamForm from './GundamForm.vue';
import GundamList from './GundamList.vue';

export default {
  components: {
    Counter, GundamForm, GundamList
  }
}

</script>
<style>
</style>
