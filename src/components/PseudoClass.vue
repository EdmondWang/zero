<template>
  <div class="module-wrapper">
    <h1>Pseudo Class</h1>
    <p>A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). </p>
    
    <h1>LVHA Order</h1>
    <div class="panel">
      <router-link tag="a" to="/css/pseudo/class" target="_self">
        Google
      </router-link>
       <router-link tag="a" to="/css/pseudo/class" target="_self">
        Apple
      </router-link>
       <router-link tag="a" to="/css/pseudo/class" target="_self">
        Huawei
      </router-link>
      <router-link tag="a" to="/css/pseudo/class" target="_self">
        Tencent
      </router-link>
      <router-link tag="a" to="/css/pseudo/class" target="_self">
        Ali
      </router-link>
       <router-link tag="a" to="/css/pseudo/class" target="_self">
        Citi
      </router-link>
    </div>

    <h1>:root</h1>
    <div class="panel">
      
    </div>

    <h1>:focus</h1>
    <p>Learn more about 'focus-within'.</p>
    <div class="panel">
      <input type="text" class="focus-blue">
      <input type="text" class="focus-orange">
    </div>

    <h1>:checked</h1>
    <div class="panel">
      <br />
      <input type="checkbox" class="checked-blue">
      <input type="checkbox" class="checked-blue">
      <br />
      <input type="radio" name="tryme" class="checked-blue">
      <input type="radio" name="tryme" class="checked-blue">
      <br />
      <p></p>
    </div>

    <h1>:not</h1>
    <p>Select a not:(.sugar)</p>
    <div class="panel not-sugar">
      <div class="comp sugar"></div>
      <div class="comp sugar"></div>
      <div class="comp"></div>
      <div class="comp sugar"></div>
      <div class="comp sugar"></div>
    </div>

    <h1>:nth-child (odd)</h1>
    <div class="panel nth-child-odd">
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
    </div>

    <h1>:nth-child (even)</h1>
    <div class="panel nth-child-even">
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
    </div>

    <h1>:nth-child (3n+1)</h1>
    <div class="panel nth-child-anb">
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
    </div>

    <h1>:nth-last-child (odd)</h1>
    <div class="panel nth-last-child-odd">
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
    </div>

    <h1>:nth-last-child</h1>
    <p>Select Last 3 child</p>
    <p>n=0=>3, n=1=>2, n=2=>1, then invalid to any numeric position &#60; 0</p>
    <div class="panel nth-last3-child">
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
      <div class="comp"></div>
    </div>

    <h1>:read-only</h1>
    <div class="panel read-only">
      <p contenteditable="true">I am an editable paragraph</p>
      <p contenteditable="false">I am an read only paragraph</p>
      <p>I am a ready only paragraph</p>
    </div>

  </div>
</template>
<script>
</script>
<style scoped>
.comp {
  width: 30px;
  height: 30px;
  border: 1px solid hsla(203, 100%, 45%, 1);
  border-radius: 0.25rem;
  box-shadow: 0 0 .25rem .05rem hsla(203, 100%, 65%, 1);
  margin: .25rem;
}

a {
  display: inline-block;
  text-decoration: none;
  margin-right: 1rem;
}

a:link {
  color: hsla(320, 100%, 45%, 1);
}

a:visited {
  color: hsla(240, 100%, 75%, 1);
}

a:hover {
  color: hsla(120, 100%, 40%, 1);
}

a:active {
  color: hsla(120, 100%, 20%, 1);
  transform: translateY(.1rem);
}

.focus-blue:focus {
  background-color: hsla(203, 100%, 45%, 1);
}

.focus-orange:focus {
  background-color: hsla(23, 100% , 45%, 1);
}

.checked-blue:checked {
  box-shadow: 0 0 .25rem .05rem hsla(203, 100%, 65%, 1);
}

.sugar {
  border: 1px solid hsla(320, 100%, 45%, 1);
  box-shadow: 0 0 .25rem .05rem hsla(320, 100%, 65%, 1);
}

.not-sugar .comp:not(.sugar) {
  border: 1px solid hsla(120, 100%, 45%, 1);
  box-shadow: 0 0 .25rem .05rem hsla(120, 100%, 65%, 1);
}

.nth-child-odd .comp:nth-child(odd) {
  border: 1px solid hsla(23, 100%, 45%, 1);
  box-shadow: 0 0 .25rem .05rem hsla(23, 100%, 65%, 1);
}

.nth-child-even .comp:nth-child(even) {
  border: 1px solid hsla(23, 100%, 45%, 1);
  box-shadow: 0 0 .25rem .05rem hsla(23, 100%, 65%, 1);
}

.nth-child-anb .comp:nth-child(3n+1) {
  border: 1px solid hsla(23, 100%, 45%, 1);
  box-shadow: 0 0 .25rem .05rem hsla(23, 100%, 65%, 1);
}

.nth-last-child-odd .comp:nth-last-child(odd) {
  border: 1px solid hsla(23, 100%, 45%, 1);
  box-shadow: 0 0 .25rem .05rem hsla(23, 100%, 65%, 1);
}

.nth-last3-child .comp:nth-last-child(-n+3) { 
  border: 1px solid hsla(23, 100%, 45%, 1);
  box-shadow: 0 0 .25rem .05rem hsla(23, 100%, 65%, 1);
}

.read-only p:read-only{
  color: #AAAAAA;
  text-decoration: underline;
}
</style>
