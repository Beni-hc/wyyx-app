import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import Worth from '../pages/Worth/Worth.vue'
import ShoppingTrolley from '../pages/ShoppingTrolley/ShoppingTrolley.vue'
import PersonalInfo from '../pages/PersonalInfo/PersonalInfo.vue'

export default [
    //首页
    {
        path: '/home',
        component: Home
    },
    //分类
    {
        path: '/category',
        component: Category
    },
    //值得买
    {
        path: '/worth',
        component: Worth
    },
    //购物车
    {
        path: '/shoppingTrolley',
        component: ShoppingTrolley
    },
    //个人中心
    {
        path: '/personalInfo',
        component: PersonalInfo
    },
    {
        path: '/',
        redirect: '/home'
    },
]