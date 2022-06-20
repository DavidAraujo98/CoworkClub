import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.prototype.$user = false;

new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");
