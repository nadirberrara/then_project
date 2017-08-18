import Vue from "vue";
import Router from "vue-router";
import Epic from "@/components/Epic";
import Home from "@/components/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/epics/:epicId",
      name: "Epic",
      component: Epic
    },
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ]
});
