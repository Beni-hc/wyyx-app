<template>
    <div class="pullDownList">
        <div class="listImg">
            <img :src="listImg" alt="" />
        </div>
        <div class="listText">{{ listText }}</div>
        <div class="listUser">
            <div class="screenName">
                <img :src="headImg" alt="" />
                <div>{{ headName }}</div>
            </div>
            <div class="viewNumber">
                <img :src="imgtu" alt="" />
                <div>{{ watch }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "worthItem",
    props: {
        listImg: {
            type: String,
            default: require("../../../DATA/dataimg/worthimg/listimg/1 (2).png"),
        },
        listText: {
            type: String,
            default: "",
        },
        headImg: {
            type: String,
            default: require("../../../DATA/dataimg/worthimg/listimg/1 (2).png"),
        },
        headName: {
            type: String,
            default: "",
        },
        imgtu: {
            type: String,
            default: require("../../../DATA/dataimg/worthimg/listimg/1 (4).png"),
        },
        watchNumber: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        watch() {
            return this.watchNumber >= 10000
                ? Math.round(this.watchNumber / 1000) + "K"
                : this.watchNumber;
        },
    },
};
</script>

<style lang="stylus" scoped>
.pullDownList
    width 100%
    border-radius 16px
    background-color #fff
    overflow hidden
    margin-bottom 20px
    .listImg
        width 100%
        height auto
        img
            width 100%
    .listText
        width 100%
        padding 18px 16px 0 16px
        margin-bottom 17px
        font-size 28px
        color #333
    .listUser
        width 100%
        padding 17px 16px 24px 16px
        display flex
        flex-flow row nowrap
        justify-content space-between
        font-size 24px
        color #7f7f7f
        .screenName
            display flex
            justify-content flex-start
            align-items center
            img
                width 44px
                height 44px
                margin 2px
                border-radius 22px
            div
                margin-left 8px
        .viewNumber
            display flex
            justify-content flex-end
            align-items center
            img
                width 32px
                height 32px
</style>