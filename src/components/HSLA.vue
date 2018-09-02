<template>
  <div class="module-wrapper">
    <h1>HSLA</h1>
    <p>The <b>hsla()</b> function define colors using the Hue-saturation-lightness-alpha model (HSLA).</p>
    <p><b>hue</b>	defines a degree on the color circle (from 0 to 360) - 0 (or 360) is red, 240 is green, 240 is blue</p>
    <p><b>saturation</b>	defines the saturation; 0% is a shade of gray and 100% is the full color (full saturation)</p>
    <p><b>lightness</b>	defines the lightness; 0% is black, 50% is normal, and 100% is white</p>
    <p><b>alpha</b>	defines the opacity as a number between 0.0 (fully transparent) and 1.0 (fully opaque)</p>
    
    <h1>Change Lightness</h1>
    <div class="panel">
      <div class="box" style="background: hsla(203, 100%, 0%, 1);"></div>
      <div class="box" style="background: hsla(203, 100%, 22.5%, 1);"></div>
      <div class="box" style="background: hsla(203, 100%, 45%, 1);"></div>
      <div class="box" style="background: hsla(203, 100%, 67.5%, 1);"></div>
      <div class="box" style="background: hsla(203, 100%, 90%, 1);"></div>
      <div class="box" style="background: hsla(203, 100%, 100%, 1);"></div>
    </div>

    <h1>Change Saturation</h1>
    <div class="panel">
      <div class="box" style="background: hsla(203, 0%, 45%, 1);"></div>
      <div class="box" style="background: hsla(203, 22.5%, 45%, 1);"></div>
      <div class="box" style="background: hsla(203, 45%, 45%, 1);"></div>
      <div class="box" style="background: hsla(203, 67.5%, 45%, 1);"></div>
      <div class="box" style="background: hsla(203, 90%, 45%, 1);"></div>
      <div class="box" style="background: hsla(203, 100%, 45%, 1);"></div>
    </div>

    <h1>Button Hover</h1>
    <div class="panel">
      <div>
        <button class="btn btn-primary">Search</button>
      </div>
    </div>

    <h1>RGBA <-> HSLA</h1>
    <div class="panel">
      https://www.rapidtables.com/convert/color/rgb-to-hsl.html
    </div>

  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.box {
  display: inline-block;
  width: 80px;
  height: 120px;
  border-radius: 0.2rem;
  margin: 0.6rem;
  border: 2px solid #dddddd;
  box-shadow: 1px 1px 1px #aaaaaa;
}
</style>
