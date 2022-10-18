import { createRouter, createWebHistory } from "vue-router";
import LoginFlow from "../views/LoginFlow.vue";
import FeedView from "../views/FeedView.vue";
import NewPost from "../views/NewPostView.vue";
import "../spotify.js"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginFlow,
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

router.afterEach((to, from, next) => {
  console.log(to)
  next()
});

export default router;
