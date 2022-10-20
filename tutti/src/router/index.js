import { createRouter, createWebHistory } from "vue-router";
import LoginFlow from "../views/LoginFlow.vue";
import Login from "../views/Login.vue";
import FeedView from "../views/FeedView.vue";
import NewPost from "../views/NewPostView.vue";
import { api, user } from  "../spotify.js"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/login",
      name: "login-explicit",
      component: Login,
    },
    {
      path: "/feed",
      name: "feed",
      component: FeedView,
    },
    {
      path: "/post",
      name: "post",
      component: NewPost,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if(to.name !== 'login' && !user.isAuthenticated()) next({ name: 'login'})
  else next()
});

export default router;
