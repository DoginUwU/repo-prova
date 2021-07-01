import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./routes/router";

Vue.config.productionTip = false;

store.commit("getUser", "doginuwu");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
