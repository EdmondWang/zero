<template>
  <div class="module-wrapper">
    <h1>Box Shadow</h1>
    <p>box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit;</p>
  
    <h1>h-offset and v-offset</h1>
    <div class="panel d-flex">
      <div class="comp h-offset"></div>
    </div>

  </div>
</template>
<script>
</script>
<style scoped>
.comp {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  width: 120px;
  height: 80px;
}

.d-flex {
  display: flex;
  justify-content: center;
}


.h-offset {
  box-shadow: 2px 0 0 3px hsla(203, 100%, 45%, 1);
}
</style>
