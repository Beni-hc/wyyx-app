<template>
    <div class="info">
        <heading @changeHeight="changeHeight" @clickApp="clickApp">
            <generalNav
                :leftWidth="52"
                :leftHeight="52"
                :rightWidth="47"
                :rightHeight="47"
                :boxHeight="88"
                ><i class="logo"></i
            ></generalNav>
        </heading>
        <loginMethod
            :showApp="showApp"
            :heightActiv="heightActiv"
            :heightNotActiv="heightNotActiv"
            v-show="false"
        ></loginMethod>
        <phoneMethod> </phoneMethod>
    </div>
</template>
<script>
import heading from "../../components/Heading/Heading";
import generalNav from "../../components/Heading/generalNav";
import loginMethod from "./loginMethod/loginMethod";
import phoneMethod from "./phoneMethod/phoneMethod";
export default {
    name: "PersonalInfo",
    data() {
        return {
            showApp: true,
            heightActiv: 0,
            heightNotActiv: 0,
        };
    },
    methods: {
        changeHeight(heightNotActiv, heightActiv) {
            this.heightNotActiv = heightNotActiv;
            this.heightActiv = heightActiv;
        },
        clickApp(showApp) {
            this.showApp = showApp;
        },
    },
    components: {
        heading,
        generalNav,
        loginMethod,
        phoneMethod,
    },
};
</script>
<style lang="stylus" scoped>
.info
    overflow hidden
.logo
    display block
    width 172px
    height 54px
    background-image url('../../assets/jltu_1.png')
    background-repeat no-repeat
    background-size 173px
    background-position 0px -127px
</style>