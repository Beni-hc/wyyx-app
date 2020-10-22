<template>
    <div>
        <div class="activNav">全部频道</div>
        <ul class="activList">
            <li
                v-for="(list, index) in listNav"
                :key="index"
                :class="{ activRed: isShow === index }"
                @click="activShow(index)"
            >
                {{ list }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HomeActivNav",
    data() {
        return {
            isShow: 0,
        };
    },
    props: {
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
        showIndex: {
            type: Number,
            default: 0,
        },
    },
    methods: {
        activShow(index) {
            this.isShow = index;
            this.$emit("activ-nav-index", index);
        },
    },
    watch: {
        showIndex(val) {
            this.isShow = val;
        },
    },
};
</script>

<style lang="stylus" scoped>
.activNav
    height 60px
    font-size 28px
    padding-left 30px
    line-height 60px
    color #333
.activList
    display flex
    flex-flow row wrap
    padding-top 24px
    li
        width 150px
        height 56px
        margin 0 0 40px 30px
        font-size 24px
        background-color #FAFAFA
        color #333
        line-height 56px
        text-align center
        border 1px solid #ccc
        border-radius 4px
        flex-shrink 0
.activRed
    border 1px solid #dd1a21 !important
    color #dd1a21 !important
</style>