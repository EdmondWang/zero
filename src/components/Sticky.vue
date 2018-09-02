<template>
  <div class="module-wrapper">
    <div class="arrow-down position-sticky top-10">
    </div>
    <div class="bar position-sticky top-0">
    </div>
    <div class="ton">
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.bar {
  background-color: hsla(203, 100%, 45%, 1);
  border: 1px solid hsla(203, 100%, 65%, 1);
  border-radius: .5rem;
  width: 100%;
  height: 80px;
  z-index: 1;
  transition: all 1s ease;
}

.arrow-down {
  border: 60px solid hsla(23, 100%, 65%, 1);
  border-bottom: 60px solid transparent;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  width: 0;
  height: 0;
  z-index: 10;
  transition: all 1s ease;
  margin: 0 auto;
}

.position-sticky {
  position: sticky;
}

.top-0 {
  top: 0;
}

.top-10 {
  top: 10px;
}

.ton {
  height: 2000px;
}
</style>
