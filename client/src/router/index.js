import Vue from "vue";
import Router from "vue-router";
import Epic from "@/components/Epic";
import Home from "@/components/Home";
import Signup from "@/components/Signup";
import Create from "@/components/Create";

Vue.use(Router);

export default new Router({
  mode: "history",
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
    },

    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/create",
      name: "Create",
      component: Create
    }
  ]
});
