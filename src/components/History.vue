<template>
  <div class="">
    <div class="d-grid">

      <!-- row of timeline -->
      <div class="item-timeline">
        &nbsp;
      </div>
      <div class="item-timeline">
        <div class="time-event">2010</div>  
      </div>
      <div class="item-timeline">
        <div class="time-event">2014</div>  
      </div>
      <div class="item-timeline">
        <div class="time-event">2016</div>  
      </div>
      <div class="item-timeline">
        <div class="time-event">2017</div>  
      </div>
      <div class="item-timeline">
        <div class="time-event">2018</div>  
      </div>
      <div class="item-timeline">
        <div class="time-event">2018 Trend</div>  
      </div>
      <div class="item-timeline">
        &nbsp;
      </div>

      <div class="item-tech js">
      </div>
      <div class="item-tech js">
        <div class="item-tech-hightlight">jQuery 1.x</div>
      </div>
      <div class="item-tech js">
      </div>
      <div class="item-tech js">
        <div class="item-tech-hightlight">React.JS</div>
        <div class="item-tech-hightlight">Flux</div>
        <div class="item-tech-hightlight">React Native</div>
      </div>
      <div class="item-tech js">
        <div class="item-tech-hightlight">VUE.JS</div>
      </div>
      <div class="item-tech js">
      </div>
      <div class="item-tech js">
      </div>
      <div class="item-tech js">
      </div>

      <div class="item-tech css">
      </div>
      <div class="item-tech css">
        <div class="item-tech-hightlight">Bootstrap 2</div>
      </div>
      <div class="item-tech css">
         <div class="item-tech-hightlight">Bootstrap 3</div>
      </div>
      <div class="item-tech css">
        <div class="item-tech-hightlight">Angular Material</div>
      </div>
      <div class="item-tech css">
         <div class="item-tech-hightlight">Bootstrap 4</div>
         <div class="item-tech-hightlight">Angular Material 2</div>
      </div>
      <div class="item-tech css">
      </div>
      <div class="item-tech css">
      </div>
      <div class="item-tech css">
      </div>

      <div class="item-tech ci">
      </div>
      <div class="item-tech ci">
       
      </div>
      <div class="item-tech ci">
      </div>
      <div class="item-tech ci">
         <div class="item-tech-hightlight">Grunt</div>
         <div class="item-tech-hightlight">Bower</div>
      </div>
      <div class="item-tech ci">
      </div>
      <div class="item-tech ci">
      </div>
      <div class="item-tech ci">
      </div>
      <div class="item-tech ci">
      </div>

    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

.d-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 60px repeat(3, minmax(240px, 1fr));
}

.d-contents {
  display: contents;
}

.item-timeline {
  background-color: #ffffff;
  position: relative;
  border: none;
  border-left: 1px solid hsla(203, 100%, 55%, 1);
  z-index: -1;
}

div:last-of-type {
  border-right: 1px solid hsla(203, 100%, 55%, 1);
}

.item-timeline::after {
  content: '';
  border: none;
  border-top: 2px solid hsla(203, 100%, 45%, 1);
  width: 100%;
  display: block;
  height: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

.time-event {
  width: 100%;
  padding: 1rem;
  position: relative;
  text-align: center;
}

.time-event::before {
  content: '';
  border: 2px solid hsla(203, 100%, 45%, 1);
  border-radius: 50%;
  background-color: hsla(203, 100%, 75%, 1);
  width: 12px;
  height: 12px;
  position: absolute;
  top: 22px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
}

.item-tech {
  height: auto;
  text-align: left;
  font-size: 1rem;
}

.item-tech.js {
}

.item-tech.css {
}

.item-tech.ci {
}

.item-tech-hightlight {
  margin: 0.2rem 0;
}
</style>
