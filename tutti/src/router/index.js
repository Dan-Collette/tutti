import { createRouter, createWebHistory } from "vue-router";
import LoginFlow from "../views/LoginFlow.vue";
import Login from "../views/Login.vue";
import FeedView from "../views/FeedView.vue";
import NewPost from "../views/NewPostView.vue";
import InfoView from "../views/InfoView.vue";
import { api, user } from "../spotify.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    // Logic for the oAuth callback from spotify
    {
      path: "/handleLogin",
      name: "handleLogin",
      // component: Login,
      // Before we load this page, check to see if there's a token
      async beforeEnter(to, from) {
        console.log('before endter')
        let url = new URL(window.location.href.replace("#", "?"));

        let token = url.searchParams.get("access_token") || false;
        let expires = url.searchParams.get("expires_in") || false;

        // If the user authenticated, they'll have a token
        if (token) {
          await user.setToken(token);
          await user.setExpires(expires);
          await api.init()

          return { to: "home" };
        }
      },
    },
    {
      path: "/",
      name: "home",
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
    {
      path: "/info",
      name: "info",
      component: InfoView,
    },
  ],
});

router.beforeEach(async (to, from) => {
  const authenticated = await user.isAuthenticated();
  if (!authenticated && to.name !== 'login' && to.name !== 'handleLogin'){
    console.log('not authenticated')
    return { name: "login" };
  }
});

export default router;
