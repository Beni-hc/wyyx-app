<template>
    <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <div
                class="swiper-slide"
                v-for="(banner, index) in bannerList"
                :key="index"
            >
                <img :src="banner" alt="" class="imgStyle" />
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
    name: "banenr",
    props: {
        bannerList: {
            type: Array,
            default: function () {
                return [
                    require("../../assets/banner_img/banner1.webp"),

                    require("../../assets/banner_img/banner2.webp"),

                    require("../../assets/banner_img/banner3.webp"),

                    require("../../assets/banner_img/banner4.webp"),

                    require("../../assets/banner_img/banner5.webp"),

                    require("../../assets/banner_img/banner6.webp"),

                    require("../../assets/banner_img/banner7.webp"),

                    require("../../assets/banner_img/banner8.webp"),
                ];
            },
        },
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    directives: {
        swiper: directive,
    },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: ".swiper-pagination",
                },
                autoplay: true, //自动滑动
                loop: true, //无缝滚动
            },
        };
    },
    methods: {
        _clickEmit() {
            this.$emit("bannerIndex", this.mySwiper.realIndex);
        },
    },
    mounted() {
        this.mySwiper.on("click", this._clickEmit);
    },
};
</script>
<style lang="stylus">
.swiper-container
    width 100%
    height 100%
    position relative
    overflow hidden
    z-index 1
    .swiper-wrapper
        &>.swiper-slide
            &>img
                width 100%
                height auto
                position absolute
                left 0
                top 50%
                transform translateY(-50%)
    .swiper-pagination
        bottom 30px
        display flex
        flex-flow row nowrap
        justify-content center
        .swiper-pagination-bullet
            margin 0 10px 0 0
            width 40px
            height 4px
            border-radius 0
            background #fff
            opacity 0.4
        .swiper-pagination-bullet-active
            opacity 1
            background #fff
            border-radius 0
</style>