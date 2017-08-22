import Vue from "vue";
import Router from "vue-router";
import Epic from "@/components/Epic";
import Home from "@/components/Home";
import Login from "@/components/Login";
import Signup from "@/components/Signup";
import Create from "@/components/Create";
import Rules from "@/components/Rules";

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
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/rules",
      name: "Rules",
      component: Rules
    },
    {
      path: "/create",
      name: "Create",
      component: Create
    }
  ]
});
