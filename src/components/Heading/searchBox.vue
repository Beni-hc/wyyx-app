<template>
    <div class="search" :style="_search">
        <i class="iconfont icon-sousuo" :style="_search_i"></i>
        <span :style="_search_span">{{ text }}</span>
    </div>
</template>
<script>
export default {
    name: "searchBox",
    props: {
        //显示的文本
        text: {
            type: String,
            default: "搜索商品，共37672款好物",
        },
        width: {
            type: Number,
        },
        height: {
            type: Number,
        },
        //背景颜色
        bgc: {
            type: String,
            default: "#ededed",
        },
        //圆角
        br: {
            type: Number,
            default: 8,
        },
        //放大镜大小
        fs_i: {
            type: Number,
            default: 26,
        },
        //放大镜与字体距离
        marginR_i: {
            type: Number,
            default: 10,
        },
        //放大镜颜色
        color_i: {
            type: String,
            default: "#666",
        },
        //字体大小
        fs_s: {
            type: Number,
            default: 28,
        },
        //字体颜色
        color_s: {
            type: String,
            default: "#666",
        },
    },
    computed: {
        _search() {
            let width = this.width >= 0 ? this.width / 75 + "rem" : "100%";
            let height = this.height >= 0 ? this.height / 75 + "rem" : "100%";

            return {
                width: width,
                height: height,
                "background-color": this.bgc,
                "border-radius": this.br / 75 + "rem",
            };
        },
        _search_i() {
            return {
                "font-size": this.fs_i / 75 + "rem",
                "margin-right": this.marginR_i / 75 + "rem",
                color: this.color_i,
            };
        },
        _search_span() {
            return {
                "font-size": this.fs_s / 75 + "rem",
                color: this.color_s,
            };
        },
    },
};
</script>
<style lang="stylus" scoped>
.search
    display flex
    flex-flow row nowrap
    justify-content center
    align-items center
</style>
