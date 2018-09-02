<script>
export default {};
</script>
<template>
  <div class="module-wrapper">
    <h1>Flex Layout</h1>
    <h2>Flex Container</h2>
    <div class="panel d-flex flex-row">
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
    </div>
    <h2>Column direction</h2>
    <div class="panel d-flex flex-column">
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
    </div>
    <h2>Justify Content - Start</h2>
    <div class="panel d-flex justify-content-start">
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
    </div>
    <h2>Justify Content - Center</h2>
    <div class="panel d-flex justify-content-center">
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
    </div>
    <h2>Justify Content - End</h2>
    <div class="panel d-flex justify-content-end">
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
    </div>
    <h2>Justify Content - Between</h2>
    <div class="panel d-flex justify-content-between">
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
    </div>
    <h2>Justify Content - Around</h2>
    <div class="panel d-flex justify-content-around">
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
    </div>
    <h2>Justify Content - Evenly</h2>
    <div class="panel d-flex justify-content-evenly">
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
    </div>
    <h2>Align Items - Start</h2>
    <div class="panel d-flex justify-content-evenly align-items-start">
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
    </div>
     <h2>Align Items - Center</h2>
    <div class="panel d-flex justify-content-evenly align-items-center">
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
    </div>
    <h2>Align Items - End</h2>
    <div class="panel d-flex justify-content-evenly align-items-end">
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
    </div>
    <h2>Align Items - Baseline</h2>
    <p>Starts from cross-start line, ends in the longest distance.</p>
    <div class="panel d-flex justify-content-evenly align-items-baseline">
      <div class="comp h-3">3</div>
      <div class="comp h-4">4</div>
      <div class="comp h-5">5</div>
      <div class="comp h-6">6</div>
      <div class="comp h-7">7<br /> 7</div>
    </div>
    <h2>Align Items - Stretch</h2>
    <div class="panel d-flex justify-content-evenly align-items-stretch">
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
    </div>
    <h2>Align Content - Start</h2>
    <div class="panel d-flex flex-wrap h-400px align-items-start align-content-start">
      <div class="comp h-3">1</div>
      <div class="comp h-4">2</div>
      <div class="comp h-5">3</div>
      <div class="comp h-6">4</div>
      <div class="comp h-7">5</div>
      <div class="comp">6</div>
      <div class="comp">7</div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp h-7"></div>
    </div>
    <h2>Align Content - Center</h2>
    <div class="panel d-flex flex-wrap h-400px align-items-start align-content-center">
      <div class="comp h-3">1</div>
      <div class="comp h-4">2</div>
      <div class="comp h-5">3</div>
      <div class="comp h-6">4</div>
      <div class="comp h-7">5</div>
      <div class="comp">6</div>
      <div class="comp">7</div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp h-7"></div>
    </div>
    <h2>Align Content - End</h2>
    <div class="panel d-flex flex-wrap h-400px align-items-start align-content-end">
      <div class="comp h-3">1</div>
      <div class="comp h-4">2</div>
      <div class="comp h-5">3</div>
      <div class="comp h-6">4</div>
      <div class="comp h-7">5</div>
      <div class="comp">6</div>
      <div class="comp">7</div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp h-7"></div>
    </div>
    <h2>Align Content - Stretch (Default)</h2>
    <div class="panel d-flex flex-wrap h-400px align-items-start align-content-strectch">
      <div class="comp h-3">1</div>
      <div class="comp h-4">2</div>
      <div class="comp h-5">3</div>
      <div class="comp h-6">4</div>
      <div class="comp h-7">5</div>
      <div class="comp">6</div>
      <div class="comp">7</div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp h-7"></div>
    </div>
    <h2>Align Content - baseline</h2>
    <div class="panel d-flex flex-wrap h-400px align-items-start align-content-baseline">
      <div class="comp h-3">1</div>
      <div class="comp h-4">2</div>
      <div class="comp h-5">3</div>
      <div class="comp h-6">4</div>
      <div class="comp h-7">5</div>
      <div class="comp">6</div>
      <div class="comp">7</div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp h-7"></div>
    </div>
    <h2>Align Content - space-between</h2>
    <div class="panel d-flex flex-wrap h-400px align-items-start  align-content-between">
      <div class="comp h-3">1</div>
      <div class="comp h-4">2</div>
      <div class="comp h-5">3</div>
      <div class="comp h-6">4</div>
      <div class="comp h-7">5</div>
      <div class="comp">6</div>
      <div class="comp">7</div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp h-7"></div>
    </div>
    <h2>Align Content - space-evenly</h2>
    <div class="panel d-flex flex-wrap h-400px align-items-start  align-content-evenly">
      <div class="comp h-3">1</div>
      <div class="comp h-4">2</div>
      <div class="comp h-5">3</div>
      <div class="comp h-6">4</div>
      <div class="comp h-7">5</div>
      <div class="comp">6</div>
      <div class="comp">7</div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp h-7"></div>
    </div>
    <h2>Align Content - space-around</h2>
    <div class="panel d-flex flex-wrap h-400px align-items-start align-content-around">
      <div class="comp h-3">1</div>
      <div class="comp h-4">2</div>
      <div class="comp h-5">3</div>
      <div class="comp h-6">4</div>
      <div class="comp h-7">5</div>
      <div class="comp">6</div>
      <div class="comp">7</div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp h-7"></div>
    </div>
    <h2>Flex Item</h2>
    <h2>Equal space on to each item</h2>
    <div class="panel d-flex">
      <div class="comp flex-fill"></div>
      <div class="comp flex-fill"></div>
      <div class="comp flex-fill"></div>
      <div class="comp flex-fill"></div>
      <div class="comp flex-fill"></div>
    </div>
    <h2>Flex Basis</h2>
    <div class="panel d-flex">
      <div class="comp flex-basis"></div>
      <div class="comp flex-basis"></div>
      <div class="comp flex-basis"></div>
      <div class="comp flex-basis"></div>
      <div class="comp flex-basis"></div>
    </div>
    <h2>Flex Grow</h2>
    <p>Flex item width calculation</p>
    <p>remaining-space = parent-width - (parent-width - item-basis-width * item-count)</p>
    <p>piece-width = remaining-space / flex-grow-total-count</p>
    <p><b>width</b> = item-basis-width + piece-width * &#60;flex-grow&#62;</p>
    <div class="panel d-flex">
      <div class="comp flex-basis flex-grow-1">1</div>
      <div class="comp flex-basis flex-grow-2">2</div>
      <div class="comp flex-basis flex-grow-3">3</div>
      <div class="comp flex-basis flex-grow-4">4</div>
      <div class="comp flex-basis flex-grow-5">5</div>
    </div>
    <h2>Flex Shrink</h2>
    <p>Flex item width calculation</p>
    <p>remain-space = parent-width -  item-basis-width * item-count</p>
    <p>piece-width = remaining-space / flex-shrink-total-count</p>
    <p><b>width</b> = item-basis-width - piece-width * &#60;flex-shrink&#62;</p>
    <div class="panel d-flex">
      <div class="comp w-500px flex-shrink-1">1</div>
      <div class="comp w-500px flex-shrink-2">2</div>
      <div class="comp w-500px flex-shrink-3">3</div>
      <div class="comp w-500px flex-shrink-4">4</div>
      <div class="comp w-500px flex-shrink-5">5</div>
    </div>
  </div>
</template>
<style scoped>
.comp {
  width: 80px;
  min-height: 30px;
  background-color: #008ce6;
  border: 4px solid #00bdf2;
  border-radius: .2rem;
  color: #FFFFFF;
}

.h-3 {
  height: 3rem; 
}

.h-4 {
  height: 4rem; 
}

.h-5 {
  height: 5rem; 
}

.h-6 {
  height: 6rem; 
}

.h-7 {
  height: 7rem; 
}

.w-500px {
  width: 500px;
}

.h-400px {
  height: 400px;
}

.d-flex {
  display: flex;
}

.d-inline-flex {
  display: inline-flex;
}

.flex-row {
  flex-direction: row;
}

.flex-column {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.justify-content-start {
  justify-content: flex-start;
}

.justify-content-center {
  justify-content: center;
}

.justify-content-end {
  justify-content: flex-end;
}

.justify-content-between {
  justify-content: space-between;
}

.justify-content-around {
  justify-content: space-around;
}

.justify-content-evenly {
  justify-content: space-evenly;
}

.align-items-start {
  align-items: flex-start;
}

.align-items-center {
  align-items: center;
}

.align-items-end {
  align-items: flex-end;
}

.align-items-baseline {
  align-items: baseline;
}

.align-items-stretch {
  align-items: stretch;
}

.align-content-start {
  align-content: flex-start;
}

.align-content-center {
  align-content: center;
}

.align-content-end {
  align-content: flex-end;
}

.align-content-stretch {
  align-content: stretch;
}

.align-content-baseline {
  align-content: baseline;
}

.align-content-between {
  align-content: space-between;
}

.align-content-around {
  align-content: space-around;
}

.align-content-evenly {
  align-content: space-evenly;
}

.flex-fill {
  flex: 1 1 auto;
}

.flex-basis {
  flex-basis: 3rem;
}

.flex-grow-1 {
  flex-grow: 1;
}

.flex-grow-2 {
  flex-grow: 2;
}

.flex-grow-3 {
  flex-grow: 3;
}

.flex-grow-4 {
  flex-grow: 4;
}

.flex-grow-5 {
  flex-grow: 5;
}

.flex-shrink-1 {
  flex-shrink: 1;
}

.flex-shrink-2 {
  flex-shrink: 2;
}

.flex-shrink-3 {
  flex-shrink: 3;
}

.flex-shrink-4 {
  flex-shrink: 4;
}

.flex-shrink-5 {
  flex-shrink: 5;
}
</style>
