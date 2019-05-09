import Vue from 'vue';
import Home from './pages/home/Home.vue';
import About from './pages/About.vue';
import NotFound from './pages/NotFound.vue';

Vue.config.productionTip = false;

const routes = {
  '/': Home,
  '/about': About
};

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound;
    }
  },
  render(h) {
    return h(this.ViewComponent);
  }
});
