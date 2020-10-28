<template>
    <div class="general" :style="{ height: boxHeight / 75 + 'rem' }">
        <div class="generalLeft">
            <img
                :style="{
                    width: leftWidth / 75 + 'rem',
                    height: leftHeight / 75 + 'rem',
                }"
                src="../../assets/house.png"
            />
        </div>
        <div class="generalCenter"><slot>值得买</slot></div>
        <div class="generalRight">
            <img
                :style="{
                    width: rightWidth / 75 + 'rem',
                    height: rightHeight / 75 + 'rem',
                }"
                class="generalimg"
                src="../../assets/fangdaj.png"
                alt=""
            />
            <img
                :style="{
                    width: rightWidth / 75 + 'rem',
                    height: rightHeight / 75 + 'rem',
                }"
                src="../../assets/gouwuche.png"
                alt=""
            />
        </div>
    </div>
</template>
<script>
export default {
    name: "generalNav",
    props: {
        leftWidth: {
            type: Number,
            default: 46,
        },
        leftHeight: {
            type: Number,
            default: 46,
        },
        rightWidth: {
            type: Number,
            default: 46,
        },
        rightHeight: {
            type: Number,
            default: 46,
        },
        boxHeight: {
            type: Number,
            default: 100,
        },
    },
};
</script>
<style lang="stylus" scoped>
.general
    padding 0 24px
    position relative
    top 0
    bottom 0
    left 0
    right 0
    background-color #fff
.generalLeft
    position absolute
    top 50%
    left 24px
    transform translateY(-43%)
.generalCenter
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -55%)
    font-size 36px
.generalRight
    position absolute
    right 30px
    top 50%
    transform translateY(-43%)
.generalimg
    margin-right 38px
</style>
