<template>
    <div class="navBox" :style="{ width, height }" ref="navBox">
        <ul
            class="navList"
            :style="{ padding: padding / 75 + 'rem' + ' ' + 0 }"
        >
            <li
                v-for="(navitem, index) in navlistArray"
                :class="{ activColor: isActivColor === index }"
                :key="navitem.id"
                @tap="activColor(index, navitem.id)"
            >
                {{ navitem.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
    name: "categoryContentNav",
    props: {
        navlistArray: {
            type: Array,
            default: function () {
                return [
                    { id: 20001, title: "推荐专区" },
                    { id: 20002, title: "新品专区" },
                    { id: 20003, title: "居家生活" },
                    { id: 20004, title: "服饰鞋包" },
                    { id: 20005, title: "美食酒水" },
                    { id: 20006, title: "个护清洁" },
                    { id: 20007, title: "母婴亲子" },
                    { id: 20008, title: "运动旅行" },
                    { id: 20009, title: "数码家电" },
                    { id: 20010, title: "严选全球" },
                ];
            },
        },
        width: {
            type: String,
            default: "100vw",
        },
        height: {
            type: String,
            default: "100vh",
        },
        padding: {
            type: Number,
            default: 40,
        },
    },
    data() {
        return {
            isActivColor: 0,
            id: 0,
        };
    },
    methods: {
        activColor(index, id) {
            this.isActivColor = index;
            this.id = id;
        },
        //初始化滚动
        _initScroll() {
            this.$nextTick(() => {
                if (!!!this.scroll) {
                    this.scroll = new BScroll(this.$refs.navBox, {
                        startX: 0,
                        tap: "tap",
                        scrollX: false,
                        scrollY: true,
                    });
                } else {
                    this.scroll.refresh();
                }
            });
        },
    },
    mounted() {
        this._initScroll();
    },
    watch: {
        id(val) {
            this.$emit("onClick", val);
        },
    },
};
</script>
<style lang="stylus" scoped>
.navBox
    overflow hidden
.navList
    li
        width 100%
        height 50px
        margin-top 40px
        text-align center
        line-height 50px
        font-size 28px
        color #333
        position relative
        top 0
        left 0
    &>li:first-child
        margin-top 0
.activColor
    color #ab2b2b !important
    &::before
        content ''
        width 6px
        background-color #ab2b2b
        position absolute
        top 0
        left 0
        bottom 0
</style>