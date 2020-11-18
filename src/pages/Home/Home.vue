<template>
    <div v-if="isShowPage" class="homeBox">
        <Heading>
            <div class="HeadingTop">
                <a href="javascript:;"></a>
                <searchBox :text="search" />
                <div class="HeadingSignIn">登录</div>
            </div>
            <HomeNavSwitch @clickswitch="show = $event" :isShow="show">
                <div v-show="show" class="scrollWidth">
                    <scrollNavX
                        @router-path="routerpath"
                        :showIndex="showIndex"
                    />
                </div>
                <HomeAvtivNav
                    @activ-nav-index="activnavindex"
                    v-show="!show"
                    :showIndex="showIndex"
                />
            </HomeNavSwitch>
        </Heading>
        <Recommend />
    </div>
</template>
<script>
//头部组件
import Heading from "../../components/Heading/Heading";
import searchBox from "../../components/Heading/searchBox";
import scrollNavX from "../../components/Heading/scrollNavX";
import HomeAvtivNav from "./HomeActivNav/HomeActivNav";
import HomeNavSwitch from "./HomeNavSwitch/HomeNavSwitch";
import Recommend from "./HomeBody/Recommend/Recommend";
import { mapState } from "vuex";
import {
    GET_HOME_SEARCH,
    GET_HOME_LIST,
    IS_SHOW_LOADING_AND_PAGE,
} from "../../store/mutations-type";

export default {
    name: "home",
    components: {
        //头部组件
        Heading,
        searchBox,
        scrollNavX,
        HomeAvtivNav,
        HomeNavSwitch,
        Recommend,
    },
    data() {
        return {
            show: true,
            showIndex: 0,
        };
    },
    computed: {
        ...mapState(["search", "isShowPage"]),
    },
    methods: {
        routerpath(index) {
            this.showIndex = index;
        },
        activnavindex(index) {
            this.show = !this.show;
            this.showIndex = index;
        },
    },
    created() {
        this.$store.commit(IS_SHOW_LOADING_AND_PAGE);
        this.$store.dispatch(GET_HOME_LIST);
        this.$store.dispatch(GET_HOME_SEARCH);
    },
};
</script>
<style lang="stylus" scoped>
.homeBox
    padding-bottom 98px
.HeadingTop
    width 100%
    height 88px
    padding 16px 30px
    display flex
    flex-flow row nowrap
    align-items center
    a
        width 218px
        height 40px
        margin-right 20px
        background-image url('../../assets/tubiao1.png')
        background-repeat no-repeat
        background-size 200px
        background-position -4px -4px
        background-origin content-box
    .HeadingSignIn
        width 112px
        height 40px
        line-height 40px
        text-align center
        border-radius 8px
        color #dd1a21
        border 1px solid #dd1a21
        font-size 24px
        margin-left 16px
.scrollWidth
    width 650px
    height 100%
</style>