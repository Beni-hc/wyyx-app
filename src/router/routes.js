import Home from "../pages/Home/Home.vue";
import Category from "../pages/Category/Category.vue";
import Worth from "../pages/Worth/Worth.vue";
import ShoppingTrolley from "../pages/ShoppingTrolley/ShoppingTrolley.vue";
//个人页路由
import PersonalInfo from "../pages/PersonalInfo/PersonalInfo.vue";
import loginPersonalInfo from "../pages/PersonalInfo/loginPersonalInfo/loginPersonalInfo.vue";
//category页路由
import CategoryContentList from "../pages/Category/Category/CategoryContentList.vue";

export default [
	//首页
	{
		path: "/home",
		component: Home,
	},
	//分类
	{
		path: "/category",
		component: Category,
		children: [
			{
				path: "categorycontentlist/:id",
				component: CategoryContentList,
				props: true,
			},
		],
	},
	//值得买
	{
		path: "/worth",
		component: Worth,
	},
	//购物车
	{
		path: "/shoppingTrolley",
		component: ShoppingTrolley,
	},
	//个人中心
	{
		path: "/personalInfo",
		component: PersonalInfo,
	},
	{
		path: "/loginpersonalinfo",
		component: loginPersonalInfo,
	},
	//重定向
	{
		path: "/",
		redirect: "/home",
	},
];
