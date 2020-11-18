<template>
    <div v-if="isShowPage" class="categoryBox">
        <Heading>
            <div class="categoryHead">
                <searchBox :text="search" />
            </div>
        </Heading>
        <div class="categoryBody">
            <div v-show="true" class="categoryLfet">
                <categoryContentNav
                    width="100%"
                    height="100%"
                    :navlistArray="category.categoryL1List"
                    @onClick="routeNav"
                />
            </div>
            <div v-show="true" class="categoryRight" ref="categoryRight">
                <div class="scrollBlock">
                    <!-- <router-view :category="category"></router-view> -->
                    <CategoryContentList :category="category" />
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
import CategoryContentList from "./Category/CategoryContentList";

import {
    GET_CATEGORY_LIST,
    IS_SHOW_LOADING_AND_PAGE,
} from "../../store/mutations-type";
import { mapState } from "vuex";

export default {
    name: "category",
    data() {
        return {};
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
                    this.$once("hook:beforeDestroy", function () {
                        this.scroll.destroy();
                    });
                } else {
                    this.scroll.refresh();
                    this.scroll.scrollTo(0, 0);
                }
            });
        },
        routeNav(id) {
            this.$store.dispatch(GET_CATEGORY_LIST, id);
        },
    },
    computed: {
        ...mapState({
            isShowPage: "isShowPage",
            search: "search",
            category: function (state) {
                if (this.isShowPage) this._initScroll();
                return state.category;
            },
        }),
    },
    mounted() {
        if (this.isShowPage) this._initScroll();
    },
    created() {
        this.$store.commit(IS_SHOW_LOADING_AND_PAGE);
        this.$store.dispatch(GET_CATEGORY_LIST);
    },
    components: {
        Heading,
        searchBox,
        categoryContentNav,
        CategoryContentList,
    },
    watch: {},
};
</script>
<style lang="stylus" scoped>
.categoryBox
    width 100vw
    height 100vh
    padding-bottom 98px
    display flex
    flex-flow column nowrap
.categoryHead
    width 100%
    height 87px
    padding 16px 30px
    background-color #fff
.categoryBody
    width 100%
    background-color #fff
    flex 1 1 0%
    display flex
    overflow hidden
.categoryLfet
    width 162px
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
    width 588px
    .scrollBlock
        width 100%
        height auto
        padding 30px 30px 21px 30px
</style>