<script>
export default {
  name: 'Spinner'
};
</script>
<style>
.spinner {
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 7px solid #eeeeee;
  border-top-color: #008ce6;
  border-radius: 50%;
  animation-name: spinner;
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
<template>
  <div>
    <div class="spinner">
    </div>
  </div>
</template>
