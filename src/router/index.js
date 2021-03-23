import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import WishList from "../views/WishList.vue";
import ReadBooks from "../views/ReadBooks.vue";
import Reviews from "../views/Reviews.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/wishlist",
    name: "WishList",
    component: WishList,
  },
  {
    path: "/readbooks",
    name: "ReadBooks",
    component: ReadBooks,
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: Reviews,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
