<template>
    <div class="box">
        <router-view></router-view>
        <FooterNav v-show="false" />
    </div>
</template>

<script>
import FooterNav from "./components/FooterNav/FooterNav";
export default {
    name: "app",
    components: {
        FooterNav,
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "PingFangSC-Light,helvetica,Heiti SC";
    outline: none;
}
body {
    font-size: 12px;
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
</style>
