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
                @tap="activColor(navitem.id, index)"
            >
                {{ navitem.name }}
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
                return [];
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
        };
    },
    methods: {
        activColor(id, index) {
            this.isActivColor = index;
            this.$emit("onClick", id);
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
                    this.$once("hook:beforeDestroy", function () {
                        this.scroll.destroy();
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
        navlistArray() {
            this._initScroll();
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