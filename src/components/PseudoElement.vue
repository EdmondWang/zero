<template>
  <div class="module-wrapper">
    <h1>Pseudo Element</h1>
    <h2>Before::</h2>
    <div class="panel before">
      <p>Buy potato</p>
      <p class="done">Buy meet</p>
    </div>
    <h2>After::</h2>
    <div class="panel gena">
      <p>RX-78 GP01 FB</p>
    </div>
    <h2>Tooltip via After::</h2>
    <p>Also take help from data() function of css3</p>
    <div class="panel tooltip">
      <p>
      We should accerlarte the development of
      <span data-descr="The RX-78GP01 Gundam 'Zephyranthes' (aka Zephyranthes, GP01, Unit 1) is a prototype general-purpose mobile suit from the Mobile Suit Gundam 0083: Stardust Memory OVA series. It was piloted by Kou Uraki for the Earth Federation Forces during Operation Stardust.">
        RX-78 GP01 FB
      </span>
      </p>
    </div>

  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.before p {
  margin-left: 2rem;
  position: relative;
  padding: 0 2rem;
}

.before p.done::before {
  content: '';
  width: 0.6rem;
  height: 1.2rem;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -40%) rotate(45deg);
  border: 0.2rem solid hsla(110, 100%, 45%, 1);
  border-left-color: transparent;
  border-top-color: transparent;
  border-right-width: 0.3rem;
}

.gena p::after {
  content: 'Be Ready to go!';
  background-color: hsla(110, 100%, 35%, 1);
  color: #FFFFFF;
  padding: .25rem;
  font-weight: bold;
  margin-left: 2rem;
}


.tooltip span[data-descr] {
  cursor: pointer;
  text-decoration: underline;
  color: hsla(240, 100%, 35%, 1);
  position: relative;
}

.tooltip span:hover::after {
  content: attr(data-descr);
  position: absolute;
  left: 0;
  top: 1rem;
  width: 20rem;
  background-color: hsla(60, 100%, 75%, 1);
  border: 1px solid hsla(60, 100%, 55%, 1);
  border-radius: .5rem;
  padding: 1rem;
}
</style>
