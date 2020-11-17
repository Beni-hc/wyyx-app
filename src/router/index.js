import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store";

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
});
router.beforeEach((to, from, next) => {
	if (to.name === "loginpersonalinfo" && !!!store.state.needToken) {
		next({ name: "personalInfo" });
	} else if (to.name === "personalInfo" && !!store.state.needToken) {
		next({ name: "loginpersonalinfo" });
	} else {
		next();
	}
});
export default router;
