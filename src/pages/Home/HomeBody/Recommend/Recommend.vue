<template>
    <div>
        <div class="banner">
            <banner :bannerList="homeDataList.focusList"></banner>
        </div>
        <div class="classify">
            <div class="promise">
                <div
                    v-for="(promise, index) in homeDataList.policyDescList"
                    :key="index"
                >
                    <img :src="promise.icon" alt="" /><span>{{
                        promise.desc
                    }}</span>
                </div>
            </div>
            <div class="classList">
                <a
                    href="javascript:;"
                    v-for="(classList, index) in homeDataList.kingKongModule
                        .kingKongList"
                    :key="index"
                >
                    <img :src="classList.picUrl" alt="" />
                    <span>{{ classList.text }}</span>
                </a>
            </div>
        </div>
        <div class="promotion">
            <div class="promotionTop">
                <a href="javascript:;">
                    <img
                        :src="
                            homeDataList.bigPromotionModule.floorList[0]
                                .cells[0].picUrl
                        "
                        alt=""
                    />
                </a>
            </div>
            <div class="promotionBottom">
                <a href="javascript:;">
                    <img
                        src="../../../../assets/promotion_img/promotion_2.webp"
                        alt=""
                    />
                </a>
                <a href="javascript:;">
                    <img
                        src="../../../../assets/promotion_img/promotion_3.webp"
                        alt=""
                    />
                </a>
                <a href="javascript:;">
                    <img
                        src="../../../../assets/promotion_img/promotion_4.webp"
                        alt=""
                    />
                </a>
                <a href="javascript:;">
                    <img
                        src="../../../../assets/promotion_img/promotion_5.webp"
                        alt=""
                    />
                </a>
            </div>
        </div>
        <div class="zxlList">
            <div class="zxlTitle"><i></i><span>新人专享礼</span><i></i></div>
            <div class="zxlContent">
                <a href="javascript:;">
                    <div>新人专享礼包</div>
                    <img src="../../../../assets/bodylist/libao.png" alt="" />
                </a>
                <a
                    href="javascript:;"
                    v-for="(zxlContent,
                    index) in homeDataList.indexActivityModule"
                    :key="index"
                >
                    <div>
                        <div>
                            {{ zxlContent.title }}
                        </div>
                        <div>
                            <span>
                                {{ zxlContent.subTitle || zxlContent.tag }}
                            </span>
                        </div>
                        <div>
                            <div>
                                <span>{{ zxlContent.activityPrice }}</span>
                                <del
                                    ><span>{{
                                        zxlContent.originPrice
                                    }}</span></del
                                >
                            </div>
                            <img :src="zxlContent.showPicUrl" alt="" />
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="rxbList">
            <div class="rxbTitle">
                <span>{{ homeDataList.categoryHotSellModule.title }}</span>
            </div>
            <div class="rxbBody">
                <div
                    v-for="(rxblist, index) in homeDataList
                        .categoryHotSellModule.categoryList"
                    :key="index"
                >
                    <div>{{ rxblist.categoryName }}</div>
                    <div>
                        <img :src="rxblist.picUrl" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div v-show="false" class="xsgList">
            <div class="xsgTitle">
                <span>限时购</span>
                <div>
                    <span>02</span>
                    <div><i></i><i></i></div>
                    <span>56</span>
                    <div><i></i><i></i></div>
                    <span>34</span>
                </div>
                <div>
                    <span>更多</span>
                    <i></i>
                </div>
            </div>
            <!-- <div class="xsgBody">
                <div v-for="(xsglist, index) in xsg || []" :key="index">
                    <div>
                        <img :src="xsglist.xsgTu" alt="123" />
                    </div>
                    <div>
                        ¥{{ xsglist.discount }}
                        <span
                            ><del>¥{{ xsglist.price }}</del></span
                        >
                    </div>
                </div>
            </div> -->
        </div>
        <div class="xpsfList">
            <div class="xpsfTitle">
                <div>
                    <span>新品首发</span>
                </div>
                <div>
                    <span>更多</span>
                    <i></i>
                </div>
            </div>
            <div class="xpsfBody">
                <div v-for="(xpsfList, index) in xpsfBody" :key="index">
                    <div>
                        <img :src="xpsfList.listPicUrl" alt="" />
                    </div>
                    <div>
                        <p>{{ xpsfList.name }}</p>
                        <span>¥{{ xpsfList.retailPrice }}</span>
                        <div>
                            <div>
                                <span>{{ xpsfList.itemTagList[0].name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="yxcsList">
            <div
                v-for="(yxcsList,
                index) in homeDataList.sceneLightShoppingGuideModule"
                :key="index"
            >
                <div>
                    {{ yxcsList.styleItem.title }}
                </div>
                <div>
                    {{ yxcsList.styleItem.desc }}
                </div>
                <div>
                    <img :src="yxcsList.styleItem.picUrlList[0]" alt="" />
                    <img :src="yxcsList.styleItem.picUrlList[1]" alt="" />
                </div>
            </div>
        </div>
        <div class="tagend">
            <div class="tagendAPP">
                <div>下载APP</div>
                <div>电脑版</div>
            </div>
            <div class="tagendBanquan">
                <p>网易公司版权所有 © 1997-2020</p>
                <p>食品经营许可证： JY13301080111719</p>
            </div>
        </div>
    </div>
</template>

<script>
import banner from "../../../../components/banner/banner";
//常量
import { GET_HOME_LIST } from "../../../../store/mutations-type";
import { mapState } from "vuex";

export default {
    name: "Recommend",
    data() {
        return {};
    },
    computed: {
        ...mapState(["homeDataList"]),
        xpsfBody() {
            return this.homeDataList.newItemList.slice(0, 6);
        },
    },
    created() {
        this.$store.dispatch(GET_HOME_LIST);
    },
    components: {
        banner,
    },
};
</script>

<style lang="stylus" scoped>
.banner
    width 100%
    height 296px
    background-color #fff
.classify
    width 100%
    height 446px
    background-color #fff
    .promise
        width 100%
        height 74px
        display flex
        padding-left 8px
        div
            height 100%
            line-height 74px
            margin 0 22px
            img
                width 34px
                height 34px
                vertical-align middle
                margin-right 10px
            span
                font-size 23px
                vertical-align middle
    .classList
        width 100%
        height 372px
        display flex
        flex-flow wrap
        a
            width 106px
            height 146px
            margin 16px 22px 16px 22px
            text-align center
            img
                width 106px
            span
                font-size 23px
                color #313131
.promotion
    width 100%
    height 754px
    .promotionTop
        width 100%
        height 322px
        a
            img
                width 100%
    .promotionBottom
        width 100%
        height 432px
        background-color #f14937
        display flex
        flex-flow wrap
        justify-content center
        align-content center
        a
            width 233px
            height 221px
            flex-shrink 0
            margin 0 4px
            &:first-child
                width 714px
                height 165px
            img
                width 100%
.zxlList
    width 100%
    height 560px
    margin 20px 0 0 0
    background-color #fff
    .zxlTitle
        width 100%
        height 89px
        font-size 31px
        display flex
        justify-content center
        align-items center
        span
            padding 3px 0 0 0
        i
            width 25px
            height 3px
            background-color #3d3d3d
            margin 0 15px
            padding 3px 0 0 0
    .zxlContent
        width 100%
        height 100%
        display flex
        flex-flow column wrap
        align-content center
        a
            width 344px
            height 217px
            margin 0 0 4px 4px
            flex-shrink 0
            background-color #fbe2d3
            &:nth-child(1)
                width 345px
                height 438px
                background-color #f9e9cf
                div
                    height 112px
                    line-height 112px
                    font-size 31px
                    margin-left 30px
                img
                    display block
                    width 260px
                    margin 0 auto
            &:nth-child(2), &:nth-child(3)
                &>div
                    margin 30px 0 0 30px
                    position relative
                    top 0
                    left 0
                    &>div:first-child
                        font-size 31px
                    &>div:last-child
                        width 166px
                        position absolute
                        top 0
                        right 0
                        img
                            width 100%
                        div
                            width 80px
                            height 80px
                            position absolute
                            top -12px
                            right 30px
                            background-color rgba(246, 166, 67, 0.7)
                            border-radius 40px
                            display flex
                            flex-flow column nowrap
                            justify-content center
                            align-items center
                            color #fff
                            font-size 21px
            &:nth-child(2)
                &>div
                    &>div:nth-child(2)
                        font-size 23px
                        color #8d8b89
            &:nth-child(3)
                background-color #ffecc2
                &>div
                    &>div:nth-child(2)>span
                        font-size 22px
                        background-color #cbb693
                        color #fff
                        border-radius 6px
                        padding 0 10px
.rxbList
    width 100%
    height 712px
    margin-top 22px
    background-color #fff
    .rxbTitle
        height 101px
        font-size 31px
        margin-left 31px
        line-height 101px
    .rxbBody
        width 100%
        height 100%
        display flex
        flex-flow row wrap
        justify-content center
        align-content flex-start
        &>div
            width 166px
            height 183px
            background-color #f5f5f5
            flex-shrink 0
            margin 0 8px 8px 0
            &>div
                &:first-child
                    width 166px
                    height 60px
                    font-size 22px
                    text-align center
                    line-height 60px
                &:last-child
                    width 123px
                    margin 0 auto
                    img
                        width 100%
            &:nth-child(1), &:nth-child(2)
                width 340px
                height 200px
                display flex
                align-items center
                &>div
                    &:first-child
                        width auto
                        height auto
                        font-size 26px
                        margin 0 23px
                        position relative
                        top 0
                        left 0
                        transform translateY(-30%)
                        &::after
                            content ''
                            width 50px
                            height 4px
                            background-color black
                            position absolute
                            left 0
                            bottom 0
                    &:last-child
                        width 200px
            &:nth-child(1)
                background-color #f9f3e4
            &:nth-child(2)
                background-color #ebeff6
.xsgList
    width 100%
    height 702px
    margin-top 20px
    background-color #fff
    .xsgTitle
        width 100%
        height 100px
        display flex
        align-items center
        position relative
        top 0
        left 0
        &>span
            font-size 32px
            margin 0 23px 0px 32px
        &>div
            &:nth-child(2)
                display flex
                padding-top 11px
                div
                    width 28px
                    height 39px
                    display flex
                    flex-flow column nowrap
                    justify-content space-evenly
                    align-items center
                    i
                        width 4px
                        height 4px
                        background-color #333333
                        border-radius 2px
                span
                    width 39px
                    height 39px
                    background-color black
                    color #fff
                    font-size 26px
                    text-align center
                    line-height 39px
                    border-radius 7px
            &:last-child
                width 108px
                height 45px
                position absolute
                top 0
                right 0
                bottom 0
                margin auto 0
                font-size 30px
                display flex
                align-items center
                i
                    width 25px
                    height 36px
                    background-image url('../../../../assets/tubiao2.png')
                    background-repeat no-repeat
                    background-size 130px
                    background-position 8px -92px
    .xsgBody
        width 100%
        height 602px
        display flex
        flex-flow row wrap
        justify-content center
        &>div
            width 218px
            height 283px
            font-size 27px
            margin 0 9px 18px 9px
            &>div
                &:first-child
                    width 218px
                    height 218px
                    background-color #f5f5f5
                    img
                        width 100%
                &:last-child
                    height 66px
                    line-height 66px
                    margin-left 18px
                    color #da080f
                    span
                        font-size 25px
                        margin-left 14px
                        color #828282
.xpsfList
    width 100%
    margin-top 20px
    background-color #fff
    padding-bottom 26px
    .xpsfTitle
        height 100px
        margin 0 30px
        display flex
        justify-content space-between
        align-items center
        &>div
            &:first-child
                font-size 32px
            &:last-child
                span
                    font-size 30px
                    vertical-align middle
                i
                    display inline-block
                    width 15px
                    height 30px
                    vertical-align middle
                    background-image url('../../../../assets/tubiao2.png')
                    background-repeat no-repeat
                    background-size 114px
                    background-position 2px -81px
                    margin-left 8px
    .xpsfBody
        margin 0 30px
        display flex
        flex-flow row wrap
        justify-content space-between
        &>div
            width 218px
            margin-bottom 30px
            &>div
                &:first-child
                    width 100%
                    img
                        width 100%
                &:last-child
                    p
                        font-size 23px
                    span
                        font-size 29px
                        color #de252c
                    div
                        span
                            font-size 23px
                            color #dd1a21
                            border 2px solid #dd1a21
                            padding 0 15px
                            border-radius 6px
                            position relative
                            top 0
                            left 0
                            &::after
                                content ''
                                width 15px
                                height 15px
                                position absolute
                                top 0
                                right -13px
                                bottom 0
                                margin auto 0
                                border 2px solid #dd1a21
                                border-radius 15px
                                background-color #fff
                                clip rect(5px 25px 25px 5px)
                                transform rotate(135deg)
                            &::before
                                content ''
                                width 15px
                                height 15px
                                position absolute
                                top 0
                                left -13px
                                bottom 0
                                margin auto 0
                                border 2px solid #dd1a21
                                border-radius 15px
                                background-color #fff
                                clip rect(5px 25px 25px 5px)
                                transform rotate(-45deg)
.yxcsList
    margin-top 20px
    background-color #fff
    padding 13px 30px
    display flex
    justify-content space-between
    &>div
        width 344px
        height 265px
        background-color #f5f5f5
        margin-bottom 13px
        padding 30px 0 0 30px
        &>div
            &:first-child
                font-size 31px
            &:nth-child(2)
                font-size 23px
                color #7f7f7f
            &:last-child
                img
                    width 150px
                    height 150px
                    margin-right 6px
.tagend
    width 100%
    margin-top 20px
    padding 26px 0
    background-color #414141
    .tagendAPP, .tagendBanquan
        width 100%
        height 94px
        display flex
    .tagendAPP
        justify-content center
        align-items flex-end
        div
            width 170px
            height 62px
            margin 0 24px
            border 1px solid #999
            color #fff
            text-align center
            line-height 62px
            font-size 24px
            border-radius 2px
    .tagendBanquan
        flex-direction column
        justify-content flex-end
        align-items center
        p
            color #999
            font-size 24px
</style>