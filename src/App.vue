<template>
  <div>
    <nav>
      <ul>
        <router-link tag="li" to="/greeting/">
          <a href="#">Greeting</a>
        </router-link>
        <router-link tag="li" to="/history/">
          <a href="#">History</a>
        </router-link>
        <router-link tag="li" to="/vue/">
          <a href="#">VUE JS</a>
          <ul>
            <router-link tag="li" to="/vue/lifecycle/">
              <a href="#">Life Cycle</a>
            </router-link>
            <router-link tag="li" to="/vue/vuex/">
              <a href="#">VUEX</a>
            </router-link>
          </ul>
        </router-link>
        <router-link tag="li" to="/layout/">
          <a href="#">CSS Layout</a>
          <ul>
            <router-link tag="li" to="/layout/grid">
              <a href="#">Grid Layout</a>
            </router-link>
            <router-link tag="li" to="/layout/flex/">
              <a href="#">Flex Layout</a>
            </router-link>
          </ul>
        </router-link>
        <router-link tag="li" to="/dom/">
          <a href="#">DOM</a>
        </router-link>
        <router-link tag="li" to="/css/">
          <a href="#">CSS</a>
          <ul>
            <router-link tag="li" to="/css/color/hsla">
              <a href="#">HSLA</a>
            </router-link>
            <router-link tag="li" to="/css/pseudo/class">
              <a href="#">Pseudo Class</a>
            </router-link>
            <router-link tag="li" to="/css/pseudo/element">
              <a href="#">Pseudo Element</a>
            </router-link>
            <router-link tag="li" to="/css/position/sticky">
              <a href="#">Sticky Position</a>
            </router-link>
            <router-link tag="li" to="/css/box-shadow">
              <a href="#">Box Shadow</a>
            </router-link>
            <router-link tag="li" to="/css/center">
              <a href="#">Center</a>
            </router-link>
            <router-link tag="li" to="/css/display">
              <a href="#">Display</a>
            </router-link>
            <router-link tag="li" to="/css/animation-timing">
              <a href="#">Animation Timing Function</a>
            </router-link>
            <router-link tag="li" to="/css/table">
              <a href="#">Table</a>
            </router-link>
            <router-link tag="li" to="/css/float">
              <a href="#">Float</a>
            </router-link>
          </ul>
        </router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    debugger;
    this;
  }
};
</script>

<style lang="scss" type="text/scss">
$primary-color: hsla(203, 100%, 45%, 1);
$secondary-color: hsla(23, 100%, 45%, 1);

* {
  box-sizing: border-box;
}

html {
  font-size: 11px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

li {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

a:link {
  color: $primary-color;
}

a:visited {
  color: $primary-color;
}

a:hover {
  color: $secondary-color;
}

a:active {
  color: $primary-color;
}

nav {
  position: sticky;
  top: 0;
  background-color: #FAFAFA;
  border: 1px solid #CCCCCC;
  box-shadow: 0 2px 0 0 #DDDDDD;
  padding: 0.4rem;
  margin-bottom: 10px;
  z-index: 999999999;
}

nav {
  
  ul {
    display: flex;
    flex-wrap: nowrap;
  }

  li.router-link-active>a {
    color: $secondary-color;
  }

  >ul {
    flex-direction: row;
    justify-content: flex-start;
  }
  >ul{

    >li {
      padding: 0.6rem;
    }

    >li:hover>ul {
      display: flex;
    }

    >li {
      >ul {
        display: none;
        flex-direction: column;
        position: absolute;
        background-color: #FFFFFF;
      }

      >ul>li {
        border: 1px solid #cccccc;
        padding: 0.6rem;
      }
    }

  }

}

.module-wrapper {
  border: 1px solid #CCCCCC;
  padding: 10px;
  background-color: #FAFAFA;
  min-height: 10rem;
  margin-bottom: 1rem;
}

.panel {
  display: block;
  background-color: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: .2rem;
  margin-bottom: 10rem;
  min-height: 10rem;
}

.btn {
  cursor: pointer;
  padding: 0.5rem 0.6rem;
  margin: 0.5rem;
  cursor: pointer;
  border: 1px solid #CCCCCC;
  border-radius: 0.4rem;
  outline: none;
}

.btn-primary {
  color: #ffffff;
  background-color: $primary-color;
  border: 1px solid hsla(203, 100%, 60%, 1);
}

.btn-primary:hover {
  background-color: hsla(203, 100%, 60%, 1);
}

.btn-primary:active {
  background-color: $primary-color;
}

.text-primary {
  color: $primary-color;
}
</style>
