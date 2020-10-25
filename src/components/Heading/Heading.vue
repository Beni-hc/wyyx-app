<template>
    <div>
        <div class="pad" :style="{ height: heightChange + 'px' }"></div>
        <div class="headPosition">
            <div class="topApp" v-show="showApp" @touchstart="clickApp">
                <div>
                    <div
                        class="iconfont icon-label-lt"
                        @touchstart="showApp = false"
                    >
                        <i class="iconfont icon-svg--copy"></i>
                    </div>
                </div>
                <div>
                    <img src="../../assets/HeadPop/HeadPop.png" alt="" />
                </div>
            </div>
            <div ref="headHeight">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Heading",
    data() {
        return {
            showApp: true,
            heightActiv: 0,
            heightNotActiv: 0,
        };
    },
    methods: {
        _activApp() {
            let scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;
            this.showApp = !!!scrollTop;
        },
        clickApp() {
            this.$emit("clickApp", this.showApp);
        },
        _headHeight() {
            this.heightNotActiv = this.$refs.headHeight.clientHeight;
            this.heightActiv = this.$refs.headHeight.parentElement.clientHeight;
        },
    },
    computed: {
        heightChange() {
            return this.showApp ? this.heightActiv : this.heightNotActiv;
        },
    },
    mounted() {
        document.addEventListener("scroll", this._activApp);
        this._headHeight();
    },
    beforeDestroy() {
        document.removeEventListener("scroll", this.activApp);
    },
};
</script>
<style lang="stylus" scoped>
.pad
    width 100%
.headPosition
    width 100%
    position fixed !important
    top 0
    left 0
    background-color #fff
    z-index 20
.topApp
    width 100%
    height 104px
    position relative
    top 0
    left 0
    div
        &:first-child
            height 100%
            position absolute
            top 0
            left 0
            div
                position absolute
                top -1px
                left -1px
                font-size 38px
                color #5b5b5b
                i
                    position absolute
                    top -1px
                    left -3px
                    font-size 30px
                    color #adadad
        &:last-child
            width 100%
            height 100%
            img
                width 100%
                height 100%
</style>


