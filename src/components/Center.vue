<template>
  <div class="module-wrapper">
    <h1>Center</h1>
    
    <a href="https://css-tricks.com/centering-css-complete-guide/">
      Refer to the complete guide here
    </a>
    <h1>auto margin</h1>
    <div class="panel py-1 center-by-absolute">
      <div class="comp ">
      </div>
    </div>

    <h1>flex</h1>
    <div class="panel py-1 d-flex center-by-flex">
      <div class="comp">
      </div>
    </div>

    <h1>grid</h1>
    <div class="panel py-1 d-grid center-by-grid">
      <div class="comp">
      </div>
    </div>

  </div>
</template>
<script>
</script>
<style scoped>
.panel {
  height: 200px;
  width: auto;
}

.comp {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  width: 120px;
  height: 80px;
}

.center-by-absolute {
  position: relative;
}

.center-by-absolute .comp {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.py-1 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.d-flex {
  display: flex;
}

.center-by-flex {
  flex: 1 1 auto;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.d-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-tempalte-rows: 1fr;
}

.center-by-grid {
  justify-content: center;
  align-content: center;
}
</style>
