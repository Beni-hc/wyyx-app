<template>
    <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <div
                class="swiper-slide"
                v-for="banner in bannerlist"
                :key="banner.id"
            >
                <img :src="banner.bannerImg" alt="" class="imgStyle" />
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
            },
            bannerlist: [
                {
                    id: 1,
                    bannerImg: require("../../assets/banner_img/banner1.webp"),
                },
                {
                    id: 2,
                    bannerImg: require("../../assets/banner_img/banner2.webp"),
                },
                {
                    id: 3,
                    bannerImg: require("../../assets/banner_img/banner3.webp"),
                },
                {
                    id: 4,
                    bannerImg: require("../../assets/banner_img/banner4.webp"),
                },
                {
                    id: 5,
                    bannerImg: require("../../assets/banner_img/banner5.webp"),
                },
                {
                    id: 6,
                    bannerImg: require("../../assets/banner_img/banner6.webp"),
                },
                {
                    id: 7,
                    bannerImg: require("../../assets/banner_img/banner7.webp"),
                },
                {
                    id: 8,
                    bannerImg: require("../../assets/banner_img/banner8.webp"),
                },
            ],
        };
    },
    methods: {},
    computed: {},
    mounted() {},
};
</script>
<style lang="stylus" scoped>
.imgStyle
    width 100%
.banner
    width 100%
    height 297px
    position relative
    top 0
    left 0
    overflow hidden
.bannerAds
    display flex
    flex-flow row nowrap
    z-index 1
    position absolute
    top 0
    left 0
    li
        width 750px
        height 297px
        position relative
        top 0
        left 0
        flex-shrink 0
        overflow hidden
        img
            width 100%
            position absolute
            left 0
            top 50%
            transform translateY(-50%)
.bannerDot
    width 100%
    height 5px
    position absolute
    top 264px
    left 0
    z-index 10
    display flex
    justify-content center
    li
        width 40px
        height 100%
        margin 0 6px
        background-color rgba(255, 255, 255, 0.3)
.isShowDot
    background-color #fff !important
</style>