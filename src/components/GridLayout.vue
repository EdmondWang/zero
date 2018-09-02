<template>
  <section>
    <div class="module-wrapper">
      <h1>Hello Grid</h1>
      <div class="grid px">
        <div class="box">200 px</div>
        <div class="box">200 px</div>
        <div class="box">200 px</div>
        <div class="box">200 px</div>
        <div class="box">200 px</div>
        <div class="box">200 pxx</div>
        <div class="box">200 px</div>
      </div>
      <h1>1/3 FR</h1>
      <div class="grid fr-333">
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
      </div>
      <h1>1/3 FR with Line Name</h1>
      <div class="grid fr-333-linename">
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
      </div>
      <h1>2 + 1 + 1 FR</h1>
      <div class="grid fr-211">
        <div class="box">2 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">2 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
      </div>
      <h1>200px + 2 + 1 FR</h1>
      <div class="grid fr-200px-21">
        <div class="box">200px</div>
        <div class="box">2 fr</div>
        <div class="box">1 fr</div>
        <div class="box">200px</div>
        <div class="box">2 fr</div>
        <div class="box">1 fr</div>
      </div>
      <h1>200px + repeat(4, 1 FR ) + 200px</h1>
      <div class="grid fr-200px-repeat41-200px">
        <div class="box">200px</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">200px</div>
      </div>
      <h1>repeat(5, 1 FR 2 FR)</h1>
      <div class="grid fr-repeat-512">
        <div class="box">1 fr</div>
        <div class="box">2 fr</div>
        <div class="box">1 fr</div>
        <div class="box">2 fr</div>
        <div class="box">1 fr</div>
        <div class="box">2 fr</div>
        <div class="box">1 fr</div>
        <div class="box">2 fr</div>
        <div class="box">1 fr</div>
        <div class="box">2 fr</div>
      </div>
      <h1>auto-fill with minmax</h1>
      <div class="grid fr-repeat-auto-fill">
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
        <div class="box">1 fr</div>
      </div>
      <h1>With Absolutely Positioned element</h1>
      <div class="grid fr-absolute d-relative">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box d-absolute">
          <p>
            3, This block is absolutely positioned.
            Let us see how will it do the line wrap.
            Max with is the column width,
          </p>
        </div>
        <div class="box">4</div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.grid {
  width: 100%;
  display: grid;
  grid-gap: 10px;
  margin-bottom: 10rem;
}

.px {
  grid-template-columns: 200px 200px 200px;
}

.fr-333 {
  grid-template-columns: 1fr 1fr 1fr;
}

.fr-333-linename {
  grid-template-columns: [first] 1fr [line2] 1fr [line3] 1fr [end];
}

.fr-211 {
  grid-template-columns: 2fr 1fr 1fr;
}

.fr-200px-21 {
  grid-template-columns: 200px 2fr 1fr;
}
.fr-200px-repeat41-200px {
  grid-template-columns: 200px repeat(4, 1fr) 200px;
}

.fr-repeat-512 {
  grid-template-columns: repeat(5, 1fr 2fr);
}

.fr-repeat-auto-fill {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
}

.box {
  padding: 0.5rem;
  box-sizing: border-box;
  border: 1px solid #00BDF2;
  border-radius: .2rem;
  background: #008CE6;
  color: #FFFFFF;
}

.fr-absolute {
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
}

.d-relative {
  position: relative;
}

.d-absolute {
  position: absolute;
}

.fr-absolute .d-absolute {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
  left: 40px;
  top: 40px;
}
</style>
