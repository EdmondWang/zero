<template>
  <div class="module-wrapper">
    <div class="panel">
      <img class="float-left" width="200px" v-bind:src="imgOfGp01" alt="GP01" />
      {{introOfGp01}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      introOfGp01: `RX-78 GP01是登场于日本OVA动画作品《机动战士高达0083 星尘（一译星屑，Stardust）的回忆》（1991）的测试RX-78-2的改良型机体，主要特性为逃生用核战机。陆战专用，到达宇宙机动性严重下降。`,
      imgOfGp01: 'https://uploads.codesandbox.io/uploads/user/a435107e-0003-484a-9ef8-3536ba6aed5e/Fgyh-IMG_7779.jpg'
    }
  }
}
</script>
<style scoped>
.panel {
  padding: 1rem;
}

.panel::after {
  content: ' ';
  clear: both;
  display: block;
}

.float-left {
  float: left;
}
</style>
