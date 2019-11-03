import Vue from 'vue';
import Router from 'vue-router';

import Greeting from '../components/Greeting.vue';
import WEBHistory from '../components/History.vue';

import VUE from '../components/VUE.vue';
import LifeCycleParent from '../components/LifeCycleParent.vue';
import GAPP from '../components/ui/GAPP.vue';

import CSS from '../components/CSS.vue';
import HSLA from '../components/HSLA.vue';
import PseudoClass from '../components/PseudoClass.vue';
import PseudoElement from '../components/PseudoElement.vue';
import BoxShadow from '../components/BoxShadow.vue';
import Sticky from '../components/Sticky.vue';
import Center from '../components/Center.vue';
import Display from '../components/Display.vue';
import AnimationTiming from '../components/AnimationTiming.vue';
import Table from '../components/Table.vue';
import Float from '../components/Float.vue';

import CSSLayout from '../components/CSSLayout.vue';
import GridLayout from '../components/GridLayout.vue';
import FlexLayout from '../components/FlexLayout.vue';

import DOM from '../components/DOM.vue';

Vue.use(Router);

const routes = [
  { path: '/', redirect: '/greeting/' },
  { path: '/greeting/', component: Greeting },
  { path: '/history/', component: WEBHistory },
  {
    path: '/dom/',
    component: DOM
  },
  {
    path: '/vue/',
    component: VUE,
    children: [
      {
        path: '/',
        redirect: '/vue/lifecycle/'
      },
      {
        path: 'vuex/',
        component: GAPP
      },
      {
        path: 'lifecycle/',
        component: LifeCycleParent
      }
    ]
  },
  {
    path: 'layout',
    component: CSSLayout,
    children: [
      {
        path: '/',
        redirect: '/layout/grid/'
      },
      { path: '/layout/grid/', component: GridLayout },
      { path: '/layout/flex/', component: FlexLayout }
    ]
  },
  {
    path: '/css/',
    component: CSS,
    children: [
      {
        path: '/',
        redirect: 'color/hsla/'
      },
      {
        path: 'color/hsla/',
        component: HSLA
      },
      {
        path: 'position/sticky/',
        component: Sticky
      },
      {
        path: 'pseudo/class',
        component: PseudoClass
      },
      {
        path: 'pseudo/element',
        component: PseudoElement
      },
      {
        path: 'box-shadow',
        component: BoxShadow
      },
      {
        path: 'center',
        component: Center
      },
      {
        path: 'display',
        component: Display
      },
      {
        path: 'animation-timing',
        component: AnimationTiming
      },
      {
        path: 'table',
        component: Table
      },
      {
        path: 'float',
        component: Float
      }
    ]
  }
];

export default new Router({
  base: 'tricky-storm',
  mode: 'history',
  routes: routes
});
