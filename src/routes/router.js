import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "@/pages/home/Home";
import Repository from "@/pages/repository/Repository";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    name: "repository",
    path: "/repository/:username/:repository",
    component: Repository,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
