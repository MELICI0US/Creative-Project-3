import Vue from "vue";
import VueRouter from "vue-router";
import Browse from "../views/Browse.vue";
import Search from "../views/Search.vue";
import Watchlist from "../views/Watchlist.vue";


Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Browse",
        component: Browse,
    },
    {
        path: "/search",
        name: "Search",
        component: Search
    },
    {
        path: "/watchlist",
        name: "Watchlist",
        component: Watchlist
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;