const Home = () => import("../pages/Home/Home.vue");
const Category = () => import("../pages/Category/Category.vue");
const Worth = () => import("../pages/Worth/Worth.vue");
const ShoppingTrolley = () =>
	import("../pages/ShoppingTrolley/ShoppingTrolley.vue");
const PersonalInfo = () => import("../pages/PersonalInfo/PersonalInfo.vue");
const loginPersonalInfo = () =>
	import("../pages/PersonalInfo/loginPersonalInfo/loginPersonalInfo.vue");

// import Home from "../pages/Home/Home.vue";
// import Category from "../pages/Category/Category.vue";
// import Worth from "../pages/Worth/Worth.vue";
// import ShoppingTrolley from "../pages/ShoppingTrolley/ShoppingTrolley.vue";
//个人页路由
// import PersonalInfo from "../pages/PersonalInfo/PersonalInfo.vue";
// import loginPersonalInfo from "../pages/PersonalInfo/loginPersonalInfo/loginPersonalInfo.vue";
//category页路由
// import CategoryContentList from "../pages/Category/Category/CategoryContentList.vue";

export default [
	//首页
	{
		path: "/home",
		component: Home,
		meta: {
			isShowFooter: true,
			isShowFooterRed: 0,
			isShowHomeLoading: true,
			isShowHomeMaskLayer: true,
		},
	},
	//分类
	{
		path: "/category",
		component: Category,
		meta: {
			isShowFooter: true,
			isShowFooterRed: 1,
			isShowCategoryLoading: true,
		},
	},
	//值得买
	{
		path: "/worth",
		component: Worth,
		meta: {
			isShowFooter: true,
			isShowFooterRed: 2,
		},
	},
	//购物车
	{
		path: "/shoppingTrolley",
		name: "shoppingTrolley",
		component: ShoppingTrolley,
		meta: {
			isShowFooter: true,
			isShowFooterRed: 3,
		},
	},
	//个人中心
	{
		path: "/loginpersonalinfo",
		name: "loginpersonalinfo",
		component: loginPersonalInfo,
		meta: {
			isShowFooter: true,
			isShowFooterRed: 4,
		},
	},
	{
		path: "/personalInfo",
		name: "personalInfo",
		component: PersonalInfo,
	},
	//重定向
	{
		path: "/",
		redirect: "/home",
		meta: {
			isShowHomeLoading: true,
		},
	},
];
