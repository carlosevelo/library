import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

let data = {
  books: [
    {
      title: "12 Rules for Life: An Antidote to Chaos",
      author: "Jordan B. Peterson",
      published: 2018,
      genre: "Health, Mind & Body",
      pages: 448,
      isRead: true,
      review: "A very good book."
    },
    {
      title: "The Screwtape Letters",
      author: "C. S. Lewis",
      published: 2009,
      genre: "Religion & Spirituality",
      pages: 224,
      isRead: false,
      review: ""
    },
  ],
}

new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
