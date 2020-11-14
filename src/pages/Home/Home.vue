<template>
    <div class="homeBox">
        <Heading>
            <HomeLog />
            <HomeNavSwitch @clickswitch="show = $event" :isShow="show">
                <div v-show="show" class="scrollWidth">
                    <scrollNavX
                        @router-path="routerpath"
                        :showIndex="showIndex"
                    />
                </div>
                <HomeAvtivNav
                    @activ-nav-index="activnavindex"
                    v-show="!show"
                    :showIndex="showIndex"
                />
            </HomeNavSwitch>
        </Heading>
        <div class="banner">
            <banner :bannerList="bannerList"></banner>
        </div>
        <div class="classify">
            <div class="promise">
                <div>
                    <img
                        :src="homeDataLIst.data.policyDescList[0].icon"
                        alt=""
                    /><span>{{
                        homeDataLIst.data.policyDescList[0].desc
                    }}</span>
                </div>
                <div>
                    <img
                        :src="homeDataLIst.data.policyDescList[1].icon"
                        alt=""
                    /><span>{{
                        homeDataLIst.data.policyDescList[1].desc
                    }}</span>
                </div>
                <div>
                    <img
                        :src="homeDataLIst.data.policyDescList[2].icon"
                        alt=""
                    /><span>{{
                        homeDataLIst.data.policyDescList[2].desc
                    }}</span>
                </div>
            </div>
            <div class="classList">
                <a
                    href="javascript:;"
                    v-for="(classList, index) in homeDataLIst.data
                        .kingKongModule.kingKongList"
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
                            homeDataLIst.data.bigPromotionModule.floorList[0]
                                .cells[0].picUrl
                        "
                        alt=""
                    />
                </a>
            </div>
            <div class="promotionBottom">
                <a href="javascript:;">
                    <img
                        src="../../assets/promotion_img/promotion_2.webp"
                        alt=""
                    />
                </a>
                <a href="javascript:;">
                    <img
                        src="../../assets/promotion_img/promotion_3.webp"
                        alt=""
                    />
                </a>
                <a href="javascript:;">
                    <img
                        src="../../assets/promotion_img/promotion_4.webp"
                        alt=""
                    />
                </a>
                <a href="javascript:;">
                    <img
                        src="../../assets/promotion_img/promotion_5.webp"
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
                    <img src="../../assets/bodylist/libao.png" alt="" />
                </a>
                <a href="javascript:;">
                    <div>
                        <div>
                            {{ homeDataLIst.data.indexActivityModule[0].title }}
                        </div>
                        <div>
                            {{
                                homeDataLIst.data.indexActivityModule[0]
                                    .subTitle
                            }}
                        </div>
                        <div>
                            <div>
                                <span
                                    >¥{{
                                        homeDataLIst.data.indexActivityModule[0]
                                            .activityPrice
                                    }}</span
                                >
                                <del
                                    ><span
                                        >¥{{
                                            homeDataLIst.data
                                                .indexActivityModule[0]
                                                .originPrice
                                        }}</span
                                    ></del
                                >
                            </div>
                            <img
                                :src="
                                    homeDataLIst.data.indexActivityModule[0]
                                        .picUrl
                                "
                                alt=""
                            />
                        </div>
                    </div>
                </a>
                <a href="javascript:;">
                    <div>
                        <div>
                            {{ homeDataLIst.data.indexActivityModule[1].title }}
                        </div>
                        <div>
                            <span>{{
                                homeDataLIst.data.indexActivityModule[1]
                                    .subTitle
                            }}</span>
                        </div>
                        <div>
                            <div>
                                <span
                                    >¥{{
                                        homeDataLIst.data.indexActivityModule[1]
                                            .activityPrice
                                    }}</span
                                >
                                <del
                                    ><span
                                        >¥{{
                                            homeDataLIst.data
                                                .indexActivityModule[1]
                                                .originPrice
                                        }}</span
                                    ></del
                                >
                            </div>
                            <img
                                :src="
                                    homeDataLIst.data.indexActivityModule[1]
                                        .picUrl
                                "
                                alt=""
                            />
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="rxbList">
            <div class="rxbTitle">
                <span>{{ homeDataLIst.data.categoryHotSellModule.title }}</span>
            </div>
            <div class="rxbBody">
                <div
                    v-for="(rxblist, index) in homeDataLIst.data
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
        <div class="xsgList">
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
            <div class="xsgBody">
                <div v-for="(xsglist, index) in xsg" :key="index">
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
            </div>
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
            <div>
                <div>
                    {{
                        homeDataLIst.data.sceneLightShoppingGuideModule[0]
                            .styleItem.title
                    }}
                </div>
                <div>
                    {{
                        homeDataLIst.data.sceneLightShoppingGuideModule[0]
                            .styleItem.desc
                    }}
                </div>
                <div>
                    <img
                        :src="
                            homeDataLIst.data.sceneLightShoppingGuideModule[0]
                                .styleItem.picUrlList[0]
                        "
                        alt=""
                    />
                    <img
                        :src="
                            homeDataLIst.data.sceneLightShoppingGuideModule[0]
                                .styleItem.picUrlList[1]
                        "
                        alt=""
                    />
                </div>
            </div>
            <div>
                <div>
                    {{
                        homeDataLIst.data.sceneLightShoppingGuideModule[1]
                            .styleItem.title
                    }}
                </div>
                <div>
                    {{
                        homeDataLIst.data.sceneLightShoppingGuideModule[1]
                            .styleItem.desc
                    }}
                </div>
                <div>
                    <img
                        :src="
                            homeDataLIst.data.sceneLightShoppingGuideModule[1]
                                .styleItem.picUrlList[0]
                        "
                        alt=""
                    />
                    <img
                        :src="
                            homeDataLIst.data.sceneLightShoppingGuideModule[1]
                                .styleItem.picUrlList[1]
                        "
                        alt=""
                    />
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
//头部组件
import Heading from "../../components/Heading/Heading";
import HomeLog from "./HomeLog/HomeLog";
import scrollNavX from "../../components/Heading/scrollNavX";
import HomeAvtivNav from "./HomeActivNav/HomeActivNav";
import HomeNavSwitch from "./HomeNavSwitch/HomeNavSwitch";
//主体组件
import banner from "../../components/banner/banner";
//常量
import { GET_HOME_LIST } from "../../store/mutations-type";
import { mapState } from "vuex";

export default {
    name: "home",
    components: {
        //头部组件
        Heading,
        HomeLog,
        scrollNavX,
        HomeAvtivNav,
        HomeNavSwitch,
        //主体组件
        banner,
    },
    data() {
        return {
            show: true,
            showIndex: 0,
            rxb: [
                {
                    title: "热销榜",
                    imgShow: require("../../assets/bodylist/rxb_1.webp"),
                },
                {
                    title: "好评榜",
                    imgShow: require("../../assets/bodylist/rxb_2.webp"),
                },
                {
                    title: "美食酒水榜",
                    imgShow: require("../../assets/bodylist/rxb_3.webp"),
                },
                {
                    title: "居家生活榜",
                    imgShow: require("../../assets/bodylist/rxb_4.webp"),
                },
                {
                    title: "服饰鞋包榜",
                    imgShow: require("../../assets/bodylist/rxb_5.webp"),
                },
                {
                    title: "个护清洁榜",
                    imgShow: require("../../assets/bodylist/rxb_6.webp"),
                },
                {
                    title: "数码家电榜",
                    imgShow: require("../..//assets/bodylist/rxb_7.webp"),
                },
                {
                    title: "运动旅行榜",
                    imgShow: require("../../assets/bodylist/rxb_8.webp"),
                },
                {
                    title: "母婴亲子榜",
                    imgShow: require("../../assets/bodylist/rxb_9.webp"),
                },
                {
                    title: "严选全球榜",
                    imgShow: require("../../assets/bodylist/rxb_10.webp"),
                },
            ],
            xsg: [
                {
                    discount: 99,
                    price: 139,
                    xsgTu: require("../../assets/bodylist/xsg_1.webp"),
                },
                {
                    discount: 509,
                    price: 599,
                    xsgTu: require("../../assets/bodylist/xsg_2.webp"),
                },
                {
                    discount: 169,
                    price: 369,
                    xsgTu: require("../../assets/bodylist/xsg_3.webp"),
                },
                {
                    discount: 42,
                    price: 49,
                    xsgTu: require("../../assets/bodylist/xsg_4.webp"),
                },
                {
                    discount: 2939,
                    price: 2999,
                    xsgTu: require("../../assets/bodylist/xsg_5.webp"),
                },
                {
                    discount: 319,
                    price: 399,
                    xsgTu: require("../../assets/bodylist/xsg_6.webp"),
                },
            ],
            xpsf: [
                {
                    descriptive: "国潮养生系列 守护你的发际线，黑芝麻丸 100克",
                    price: 29,
                    img: require("../../assets/bodylist/xpsf_1.webp"),
                    x: "新人特价",
                },
                {
                    descriptive: "熨斗界的颜值担当，马卡龙电熨斗",
                    price: 89,
                    img: require("../../assets/bodylist/xpsf_2.webp"),
                    x: "每满200减20卷",
                },
                {
                    descriptive: "原创设计-一体化机身精致迷你破壁机350mL",
                    price: 249,
                    img: require("../../assets/bodylist/xpsf_3.webp"),
                    x: "限时购",
                },
                {
                    descriptive: "眼镜/首饰清洗+除菌，超声波清洁机pro版",
                    price: 219,
                    img: require("../../assets/bodylist/xpsf_4.webp"),
                    x: "新人特价",
                },
                {
                    descriptive: "巴掌大小迷你胖乎壶却有1L大肚腩的保温壶",
                    price: 109,
                    img: require("../../assets/bodylist/xpsf_5.webp"),
                    x: "每满200减20卷",
                },
                {
                    descriptive: "办公室午休神器，无线穴位指压按摩器",
                    price: 309,
                    img: require("../../assets/bodylist/xpsf_6.webp"),
                    x: "好货内部价",
                },
            ],
        };
    },
    methods: {
        routerpath(index) {
            this.showIndex = index;
        },
        activnavindex(index) {
            this.show = !this.show;
            this.showIndex = index;
        },
    },
    computed: {
        ...mapState(["homeDataLIst"]),
        xpsfBody() {
            return this.homeDataLIst.data.newItemList.slice(0, 6);
        },
        bannerList() {
            const list = [];
            this.homeDataLIst.data.focusList.forEach((e) => {
                list.push(e.picUrl);
            });
            return list;
        },
    },
    created() {
        this.$store.dispatch(GET_HOME_LIST);
    },
};
</script>
<style lang="stylus" scoped>
.homeBox
    padding-bottom 98px
.scrollWidth
    width 650px
    height 100%
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
                    background-image url('../../assets/tubiao2.png')
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
                    background-image url('../../assets/tubiao2.png')
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