<template>
    <div class="worthBox" v-swiper:mySwiper="swiperOption">
        <ul class="swiper-wrapper">
            <li
                class="swiper-slide"
                v-for="(list, index) in worthNva"
                :key="index"
            >
                <div
                    class="worthItem"
                    v-for="(item, indexItem) in list"
                    :key="indexItem"
                >
                    <img :src="item.picUrl" :alt="item.mainTitle" />
                    <div>{{ item.mainTitle }}</div>
                    <div>{{ item.viceTitle }}</div>
                </div>
            </li>
        </ul>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import { mapState } from "vuex";
import { GET_WORTH_LIST_NAV } from "../../../store/mutations-type";
export default {
    name: "worthBanner",
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: ".swiper-pagination",
                    bulletClass: "my-bullet",
                    bulletActiveClass: "my-bullet-active",
                },
                slidesPerView: "auto",
            },
        };
    },
    computed: {
        ...mapState({
            worthNva: function (state) {
                const navList = [];
                const numb = 8;
                if (state.worthNva.navList) {
                    state.worthNva.navList.forEach((e, index) => {
                        if (index < numb) {
                            navList.push([e]);
                        } else {
                            navList[index - numb].push(e);
                        }
                    });
                }

                return navList;
            },
        }),
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    directives: {
        swiper: directive,
    },
    created() {
        this.$store.dispatch(GET_WORTH_LIST_NAV);
    },
};
</script>
<style lang="stylus">
.my-bullet
    width 38px
    height 4px
    background-color #d9d9d9
    opacity 1
.my-bullet-active
    background-color #dd1a21
</style>

<style lang="stylus" scoped>
.swiper-pagination, .worthBox
    display flex
    flex-flow row nowrap
    .swiper-pagination
        bottom 22px
.swiper-wrapper
    height 434px
    padding-top 36px
    flex-shrink 0
    display flex
    flex-flow row nowrap
.swiper-slide
    width auto
    height 434px
    display flex
    flex-flow column nowrap
    justify-content space-between
    flex-shrink 0
.worthItem
    width 178px
    height 200px
    padding 0 6px
    img
        display block
        width 120px
        height 120px
        margin 0 auto
    div
        text-align center
        &:nth-child(2)
            margin-top 8px
            font-size 28px
            color #333
            font-weight 700
        &:nth-child(3)
            margin-top 2px
            font-size 24px
            color #999
</style>
<style>
</style>