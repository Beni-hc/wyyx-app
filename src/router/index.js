import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store";

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	},
});
router.beforeEach((to, from, next) => {
	if (store.state.needToken && to.name === "personalInfo") {
		next(false);
	} else if (!store.state.needToken && to.name === "loginpersonalinfo") {
		router.replace({ name: "personalInfo" });
	} else {
		next();
	}
});
export default router;
