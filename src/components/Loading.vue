<script>
export default {
  'name': 'Loading'
};
</script>
<template>
  <div class="loading">
    <div class="dot dot1">
    </div>
    <div class="dot dot2">
    </div>
    <div class="dot dot3">
    </div>
  </div>
</template>
<style scoped>
.dot {
  display: inline-block;
  background-color: #008ce6;
  width: 10px;
  height: 10px;
  margin: 0 0.1rem;
  animation: blink 1s infinite;
  animation-timing-function: ease-out;
  opacity: 0;
}

.dot1 {
  animation-delay: 0s;
}

.dot2 {
  animation-delay: 0.25s;
}

.dot3 {
  animation-delay: 0.5s;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
