<template>
    <div
        class="scrollNavX"
        ref="scrollNavX"
        :style="{ height: lineHeight / 75 + 'rem' }"
    >
        <ul
            class="scrollBlock"
            :style="{ padding: '0rem' + ' ' + scrollpadding / 75 + 'rem' }"
        >
            <li
                class="scrollItem"
                v-for="(nav, index) in listNav"
                :key="index"
                :style="!!index ? { 'margin-left': sbt / 75 + 'rem' } : ''"
                @tap="isShowIndex(index)"
            >
                <span
                    :style="[spanStyle]"
                    :class="{ text: isShow === index }"
                    >{{ nav }}</span
                >
            </li>
        </ul>
    </div>
</template>
<script>
import BScroll from "@better-scroll/core";

export default {
    name: "scrollNavX",
    props: {
        //滚动条两端内边距
        scrollpadding: {
            type: Number,
            default: 30,
        },
        //间距
        sbt: {
            type: Number,
            default: 20,
        },
        //字体大小
        fontSize: {
            type: Number,
            default: 28,
        },
        //字体两边的内边距
        padWith: {
            type: Number,
            default: 16,
        },
        //行高
        lineHeight: {
            type: Number,
            default: 60,
        },
        //点击字体颜色
        activText: {
            type: String,
            default: "#dd1a21",
        },
        //点击下边框宽度
        activWith: {
            type: Number,
            default: 4,
        },
        //点击下边框颜色
        activColor: {
            type: String,
            default: "#dd1a21",
        },
        //数据列表
        listNav: {
            type: Array,
            default: function () {
                return [
                    "推荐",
                    "居家生活",
                    "服饰鞋包",
                    "美食酒水",
                    "个护清洁",
                    "巨婴亲子",
                    "运动旅行",
                    "数码家电",
                    "严选全球",
                ];
            },
        },
        //传入的切换数据
        showIndex: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            isShow: 0,
        };
    },
    methods: {
        //初始化滚动
        _initScroll() {
            this.$nextTick(() => {
                if (!this.scroll) {
                    this.scroll = new BScroll(this.$refs.scrollNavX, {
                        startX: 0,
                        tap: "tap",
                        scrollX: true,
                        scrollY: false,
                    });
                    this.$once("hook:beforeDestroy", function () {
                        this.scroll.destroy();
                    });
                } else {
                    this.scroll.refresh();
                }
            });
        },
        //点击切换颜色
        isShowIndex(index) {
            this.isShow = index;
        },
        //指定滚动元素
        _scrollTo(index) {
            let el = this.scroll.content.children;
            let x = el[index].offsetLeft;
            let leftPadding = el[0].offsetLeft;
            let maxScrollX = this.scroll.maxScrollX;
            if (-x < 0 && -x > maxScrollX) {
                this.scroll.scrollTo(-x + leftPadding, 0, 600);
            }
            if (-x < maxScrollX) {
                this.scroll.scrollTo(maxScrollX, 0, 600);
            }
        },
        //生成自定义激活样式
        _activStyle() {
            this.$nextTick(function () {
                let style = document.createElement("style");
                style.innerHTML = `.text {
                      color: ${this.activText}!important;
                      }\n.text::after {
                      content: '';
                      width: 100%;
                      height: ${this.activWith / 75}rem;
                      position: absolute;
                      left: 0;
                      bottom: 0;
                      background-color: ${this.activColor};
                    }`;
                document.head.appendChild(style);
            });
        },
    },
    computed: {
        //初始化样式(span)
        spanStyle() {
            return {
                "font-size": this.fontSize / 75 + "rem",
                padding: 0 + "rem" + " " + this.padWith / 75 + "rem",
                "line-height": this.lineHeight / 75 + "rem",
            };
        },
    },
    mounted() {
        this._activStyle();
        this._initScroll();
    },
    watch: {
        showIndex(val) {
            this.isShow = val;
        },
        isShow(val) {
            this._scrollTo(val);
            this.$emit("router-path", val);
        },
        listNav() {
            this._initScroll();
        },
    },
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.scrollNavX
    width 100%
    display flex
    flex-flow row nowrap
    background-color #fff
    overflow hidden
.scrollBlock
    width auto
    display flex
    flex-flow row nowrap
    flex-shrink 0
    touch-action none
.scrollItem
    width auto
    flex-shrink 0
    span
        display inline-block
        color #333
        position relative
        top 0
        left 0
</style>