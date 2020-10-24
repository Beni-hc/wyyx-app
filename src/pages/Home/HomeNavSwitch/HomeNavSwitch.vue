<template>
    <div class="bottomNav">
        <div class="rightOnOff">
            <div></div>
            <div @touchstart.stop.prevent="clickSwitch">
                <div
                    class="iconfont icon-arrow-down rotate"
                    :style="show || { transform: 'rotateZ(180deg)' }"
                ></div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "HomeNavSwitch",
    props: {
        isShow: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            show: true,
        };
    },
    methods: {
        clickSwitch() {
            this.show = !this.show;
            this.$emit("clickswitch", this.show);
        },
    },
    watch: {
        isShow(val) {
            this.show = val;
        },
    },
};
</script>
<style lang="stylus" scoped>
.bottomNav
    width 100%
    height 100%
    position relative
    top 0
    left 0
.rightOnOff
    width 160px
    height 60px
    display flex
    position absolute
    top 0
    right 0
    z-index 2
    &>div:first-child
        width 60px
        height 60px
        background linear-gradient(to right, rgba(250, 255, 255, 0), rgba(250, 255, 255, 0.7), rgba(255, 255, 255, 1))
    &>div:last-child
        width 100px
        height 60px
        display flex
        justify-content center
        align-items center
        background-color #fff
        div
            font-size 30px
            color #666
.rotate
    transition transform 600ms
    transform rotateZ(0deg)
</style>