import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";

import Book from "./views/book";
import Spaces from "./views/spaces";
import Profile from "./views/profile";
import Space from "./views/space";
import Home from "./views/home";
import "./style.css";

Vue.use(Router);
Vue.use(Meta);
export default new Router({
    mode: "history",
    routes: [
        {
            name: "Book",
            path: "/spaces/book/:space",
            component: Book,            
        },
        {
            name: "Spaces",
            path: "/spaces",
            component: Spaces,
        },
        {
            name: "Profile",
            path: "/profile",
            component: Profile,
        },
        {
            name: "Space",
            path: "/spaces/:space",
            component: Space,
        },
        {
            name: "Home",
            path: "/",
            component: Home,
        },
    ],
});
