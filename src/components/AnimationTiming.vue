<template>
  <div class="module-wrapper">
    <h1>Animation Timing Function</h1>
    <!--
    animation-name: pan;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-delay: initial;
    animation-iteration-count: infinite;
    animation-direction: initial;
    animation-fill-mode: initial;
    animation-play-state: initial;
    -->
    <h2>Linear</h2>
    <div class="panel">
      <div class="comp liner">liner</div>
    </div>
    <h2>Ease</h2>
    <div class="panel">
      <div class="comp ease">ease, low middle</div>
        <div class="comp ease-in-out">ease-in-out</div>
      <div class="comp ease-in">ease-in, low start</div>
      <div class="comp ease-out">ease-out, low end</div>
    </div>
    <h2>Step Start</h2>
    <div class="panel">
      <div class="comp step-start">step-start</div>
      <div class="comp step-end">step-end</div>
      <div class="comp step-5">step-5</div>
    </div>

  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.panel {
  width: 30rem;
  min-heihgt: 0;
  border: 2px solid hsla(203, 100%, 45%, 1);
  background-color: hsla(203, 100%, 75%, 1);
}

.comp {
  width: 8rem;
  height: 6rem;
  background-color: hsla(203, 100%, 45%, 1);
  border: 1px solid hsla(203, 100%, 65%, 1);
  border-radius: .2rem;
  color: #FFF;
  padding: .6rem;
  font-size: 1.2rem;
  text-align: center;
  animation-name: pan;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  margin: 2rem 0;
}

.liner {
  animation-timing-function: linear;
}

.ease {
  animation-timing-function: ease;
}

.ease-in-out {
  animation-timing-function: ease-in-out;
}

.ease-in {
  animation-timing-function: ease-in;
}

.ease-out {
  animation-timing-function: ease-out;
}

.step-start {
  animation-timing-function: step-start;
}

.step-end {
  animation-timing-function: step-end;
}

.step-5 {
  animation-timing-function: step(5);
}

@keyframes pan {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(30rem - 8rem));
    
  }
}
</style>
