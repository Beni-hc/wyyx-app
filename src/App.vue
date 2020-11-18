<template>
    <div class="box">
        <div class="loading" v-if="loading">
            <img
                v-if="$route.meta.isShowHomeLoading"
                src="./assets/loading/home.png"
                alt=""
            />
            <img
                v-if="$route.meta.isShowCategoryLoading"
                src="./assets/loading/Category.png"
                alt=""
            />
        </div>
        <router-view></router-view>
        <FooterNav v-show="isShowPage && $route.meta.isShowFooter" />
        <HomeMaskLayer v-if="isShowPage && $route.meta.isShowHomeMaskLayer" />
    </div>
</template>
<script>
import FooterNav from "./components/FooterNav/FooterNav";
import HomeMaskLayer from "./pages/Home/HomeMaskLayer/HomeMaskLayer";
import { mapState } from "vuex";
export default {
    name: "app",
    components: {
        FooterNav,
        HomeMaskLayer,
    },
    computed: {
        ...mapState(["loading", "isShowPage"]),
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}
body {
    font-size: 12px;
    font-family: "PingFangSC-Light", "helvetica", "Heiti SC";
}
/* html,
body {
    width: 100%;
    height: 100%;
} */
a {
    text-decoration: none;
    color: black;
}
ul li {
    list-style: none;
}
.box {
    background-color: #eee;
    /* padding-bottom: 98px; */
}
.loading {
    width: 100%;
    height: 100%;
}
.loading img {
    width: 100%;
    height: 100%;
}
</style>
