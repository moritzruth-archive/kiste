const Kiste = {
  install(Vue, options) {
    Vue.prototype.$kiste = new Vue({
      data: {
        hasNavigationBar: false
      }
    })
  }
};

export default Kiste;
