import { getFullTheme } from "kiste/js/utils/theming";
import RippleDirective from "vue-ripple-directive";

const Kiste = {
  install(Vue, options = {}) {
    Vue.directive("ripple", RippleDirective);

    Vue.prototype.$kiste = new Vue({
      data: {
        hasNavigationBar: false,
        theme: options.theme || {}
      },
      computed: {
        fullTheme() {
          return getFullTheme(this.theme)
        }
      },
      methods: {
        resetTheme() {
          this.theme = options.theme;
        }
      }
    });
  }
};

export default Kiste;
