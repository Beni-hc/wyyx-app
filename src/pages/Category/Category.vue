<template>
    <div>
        <Heading @clickApp="offApp">
            <div class="categoryHead">
                <searchBox :text="categoryData.search" />
            </div>
        </Heading>
        <div class="categoryBody" :style="changeHeight">
            <div class="categoryLfet">
                <categoryContentNav
                    width="100%"
                    height="100%"
                    :navlistArray="categoryData.title"
                    @onClick="routeNav"
                />
            </div>
            <div class="categoryRight" ref="categoryRight">
                <div class="scrollBlock">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from "@better-scroll/core";

import Heading from "../../components/Heading/Heading";
import searchBox from "../../components/Heading/searchBox";
import categoryContentNav from "../Category/Category/categoryContentNav";
import dataList from "../../DATA/data";

export default {
    name: "category",
    data() {
        return {
            categoryData: {},
            isShow: true,
        };
    },
    methods: {
        _initScroll() {
            this.$nextTick(() => {
                if (!!!this.scroll) {
                    this.scroll = new BScroll(this.$refs.categoryRight, {
                        startX: 0,
                        scrollX: false,
                        scrollY: true,
                    });
                } else {
                    this.scroll.refresh();
                    this.scroll.scrollTo(0, 0);
                }
            });
        },
        routeNav(id) {
            this.$router.replace({
                path: `/category/categorycontentlist/${id}`,
            });
        },
        offApp(isShow) {
            this.isShow = isShow;
        },
    },
    computed: {
        changeHeight() {
            return this.isShow
                ? { height: `calc(100vh - 3.85rem)` }
                : { height: `calc(100vh - 2.46rem)` };
        },
    },
    mounted() {
        this._initScroll();

        this.categoryData = dataList;
        let id = this.categoryData.title[0].id;
        this.$router.replace({
            path: `/category/categorycontentlist/${id}`,
        });
    },
    components: {
        Heading,
        searchBox,
        categoryContentNav,
    },
    watch: {
        $route() {
            this._initScroll();
        },
    },
};
</script>
<style lang="stylus" scoped>
.categoryHead
    width 100%
    height 87px
    padding 16px 30px
    background-color #fff
    position relative
    top 0
    left 0
    &:after
        content ''
        position absolute
        bottom 0
        left 0
        right 0
        height 1px
        background-color rgba(0, 0, 0, 0.15)
        transform-origin 100% 50% 0
        z-index 100
.categoryBody
    width 100%
    background-color #fff
    display flex
    overflow hidden
.categoryLfet
    width 162px
    height 100%
    position relative
    top 0
    left 0
    &:after
        content ''
        position absolute
        top 0
        right 1px
        bottom 0
        width 1px
        background-color rgba(0, 0, 0, 0.15)
        transform-origin 100% 50% 0
        z-index 100
.categoryRight
    height 100%
    width 588px
    .scrollBlock
        width 100%
        height auto
        padding 30px 30px 21px 30px
</style>