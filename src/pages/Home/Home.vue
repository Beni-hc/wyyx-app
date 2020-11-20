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
        <div
            v-show="isShowScrollTop"
            @touchstart="scrollTop"
            class="homeStickyBox"
        >
            <i class="iconfont icon-xiangshangjiantou"></i>
        </div>
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
            isShowScrollTop: false,
            scrollHeight: null,
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
        scrollTop() {
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 0) {
                window.requestAnimationFrame(this.scrollTop);
                window.scroll(0, scrollTop - scrollTop / 10);
            }
        },
        _activScrollTop() {
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;
            if (!this.scrollHeight) {
                const scrollHeight =
                    document.documentElement.scrollHeight ||
                    document.body.scrollHeight;
                this.scrollHeight = scrollHeight * 0.3;
            }
            if (
                !!this.scrollHeight &&
                scrollTop > this.scrollHeight &&
                !this.isShowScrollTop
            ) {
                this.isShowScrollTop = true;
                this.scrollHeight = null;
            }
            if (
                !!this.scrollHeight &&
                scrollTop < this.scrollHeight &&
                this.isShowScrollTop
            ) {
                this.isShowScrollTop = false;
                this.scrollHeight = null;
            }
        },
    },
    created() {
        this.$store.commit(IS_SHOW_LOADING_AND_PAGE);
        this.$store.dispatch(GET_HOME_LIST);
        this.$store.dispatch(GET_HOME_SEARCH);
        document.addEventListener("scroll", this._activScrollTop);
        this.$once("hook:beforeDestroy", function () {
            document.removeEventListener("scroll", this._activScrollTop);
        });
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
.homeStickyBox
    width 80px
    height 80px
    position fixed
    bottom 120px
    right 20px
    &:after
        content ''
        position absolute
        top -50%
        left -50%
        width 200%
        height 200%
        border-radius 50%
        border 1px solid rgba(0, 0, 0, 0.1)
        background-color rgba(255, 255, 255, 0.9)
        transform scale(0.5)
        z-index 1
    i
        position absolute
        top 50%
        left 50%
        z-index 2
        font-size 40px
        color rgba(0, 0, 0, 0.7)
        transform translate(-45%, -50%)
</style>