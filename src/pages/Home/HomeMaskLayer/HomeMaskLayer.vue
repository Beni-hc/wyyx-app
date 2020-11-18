<template>
    <div v-if="isShowHomeMaskLayer" class="HomeMaskLayer">
        <i @touchstart="closeButton" class="iconfont icon-chahao2"></i>
        <div>
            <img
                src="//yanxuan.nosdn.127.net/61694f382ffef2efadc058087405c59f.png"
                alt=""
            />
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { IS_SHOW_HOME_MASK_LAYER } from "../../../store/mutations-type";

export default {
    name: "HomeMaskLayer",
    methods: {
        closeButton() {
            this.$store.commit(IS_SHOW_HOME_MASK_LAYER);
        },
    },
    computed: {
        ...mapState(["isShowHomeMaskLayer"]),
    },
};
</script>

<style lang="stylus" scoped>
.HomeMaskLayer
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    z-index 9999
    background-color rgba(0, 0, 0, 0.5)
    div
        width 540px
        height 825px
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        img
            width 100%
            height 100%
            display block
    i
        position fixed
        top 58px
        right 30px
        font-size 63px
        color #fff
        border-radius 50%
        background-color rgba(0, 0, 0, 0.3)
</style>