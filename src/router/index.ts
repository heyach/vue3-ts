import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/todolist",
        name: "TodoList",
        component: () => import("../views/todolist/TodoList.vue"),
    },
    {
        path: "/goodslist",
        name: "GoodsList",
        component: () => import("../views/goodslist/GoodsList.vue"),
    },
    {
        path: "/goodslisthooks",
        name: "GoodsListHooks",
        component: () => import("../views/goodslist/GoodsListHooks.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
