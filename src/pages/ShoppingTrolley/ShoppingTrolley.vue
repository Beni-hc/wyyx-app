<template>
    <div>
        <Heading>
            <div class="headNav">
                <div class="leftTitle">购物车</div>
                <div :class="rightStateChanges">
                    <span @touchstart="clickTitleRight">{{
                        isShowEditing ? "领券" : "完成"
                    }}</span>
                    <span
                        @touchstart="editingShopping"
                        v-show="needToken && isShowEditing"
                        >编辑</span
                    >
                </div>
            </div>
        </Heading>
        <div>
            <ul class="description">
                <li>
                    <i></i>
                    <span>30天无忧退货</span>
                </li>
                <li>
                    <i></i>
                    <span>48小时快速退款</span>
                </li>
                <li>
                    <i></i>
                    <span>满99元免邮费</span>
                </li>
            </ul>
        </div>
        <!-- 未登录时显示登录提示 -->
        <div v-if="!!!needToken" class="shoppingCart">
            <div><img src="./img/gouwuche.png" alt="" /></div>
            <div @touchstart="$router.replace({ name: 'personalInfo' })">
                登录
            </div>
        </div>
        <!-- 购物车每一项 -->
        <div v-if="!!needToken">
            <ul class="shoppingCartItem">
                <li v-for="(item, index) in dataList" :key="index">
                    <ShoppingTrolleyItem
                        :commodity="item"
                        :IDIndex="index"
                        @addAndSub="addAndSub"
                        @clickOptFor="clickOptFor"
                    />
                </li>
            </ul>
        </div>
        <div v-if="!!needToken" class="shoppingCartGather">
            <div>
                <div class="shoppingCartGatherLeft">
                    <i
                        @touchstart="clickTotal"
                        class="iconfont"
                        :class="
                            total
                                ? ['icon-check-copy', 'iconCheckRed']
                                : ['icon-check1', 'iconCheckQuan']
                        "
                    ></i>
                    <span>已选({{ selected }})</span>
                </div>
                <div v-show="isShowEditing" class="shoppingCartGatherRight">
                    <div>
                        <span>合计: ¥</span>
                        <span>{{ totalActivityPrice }}</span>
                    </div>
                    <p v-show="!!totalOriginalPrice">
                        已优惠: ¥{{ totalOriginalPrice }}
                    </p>
                </div>
            </div>
            <div :class="{ activRed: !!selected }">
                {{ isShowEditing ? "下单" : "删除所选" }}
            </div>
        </div>
    </div>
</template>
<script>
import Heading from "../../components/Heading/Heading";
import ShoppingTrolleyItem from "./ShoppingTrolleyItem/ShoppingTrolleyItem";
import { mapState } from "vuex";
import a from "../../DATA/data";
export default {
    name: "ShoppingTrolley",
    props: {},
    data() {
        return {
            dataList: [],
            total: false,
            selected: 0,
            totalActivityPrice: 0,
            totalOriginalPrice: 0,
            isShowEditing: true,
        };
    },
    methods: {
        addAndSub(isAdd, IDIndex) {
            if (!isAdd && this.dataList[IDIndex].count === 1) {
                confirm("本商品1件起售");
            }
            if (!isAdd && this.dataList[IDIndex].count > 1) {
                if (!this.dataList[IDIndex].optFor) {
                    this.dataList[IDIndex].optFor = true;
                }
                this.dataList[IDIndex].count--;
            }
            if (isAdd) {
                if (!this.dataList[IDIndex].optFor) {
                    this.dataList[IDIndex].optFor = true;
                }
                this.dataList[IDIndex].count++;
            }
        },
        clickOptFor(IDIndex) {
            this.dataList[IDIndex].optFor = !this.dataList[IDIndex].optFor;
        },
        clickTotal() {
            this.dataList.forEach((element) => {
                if (this.total) {
                    element.optFor = false;
                } else {
                    element.optFor = true;
                }
            });
        },
        editingShopping() {
            this.isShowEditing = false;
        },
        clickTitleRight() {
            if (!this.needToken) {
                console.log("未登录");
            } else {
                if (this.isShowEditing) {
                    console.log("登录");
                } else {
                    this.isShowEditing = true;
                }
            }
        },
    },
    computed: {
        ...mapState({
            needToken: (state) => !!state.needToken,
        }),
        rightStateChanges() {
            if (!this.needToken) {
                return "rightNotLogIn";
            } else {
                if (this.isShowEditing) {
                    return "rightLogIn";
                } else {
                    return "rightLogInEditing";
                }
            }
        },
    },
    watch: {
        dataList: {
            handler: function (val) {
                const list = val.filter((item) => {
                    return item.optFor;
                });
                if (list.length === val.length) {
                    this.total = true;
                } else {
                    this.total = false;
                }
                this.selected = list.length;

                this.totalActivityPrice = list.reduce((x, y) => {
                    return (
                        x + (y.content.activityPrice * 10000 * y.count) / 10000
                    );
                }, 0);
                this.totalOriginalPrice = list.reduce((x, y) => {
                    return (
                        x +
                        ((y.content.originalPrice * 10000 -
                            y.content.activityPrice * 10000) *
                            y.count) /
                            10000
                    );
                }, 0);
            },
            deep: true,
        },
    },
    components: {
        Heading,
        ShoppingTrolleyItem,
    },
    created() {
        this.dataList = a.ShoppingTrolley;
    },
};
</script>
<style lang="stylus" scoped>
.headNav
    width 100%
    height 88px
    padding 0 30px
    display flex
    justify-content space-between
    align-items center
    border-bottom 1px solid #fff
    .leftTitle
        padding-bottom 5px
        font-size 36px
        color #333
    .rightNotLogIn
        span
            font-size 30px
            color #dd1a21
            margin-right 30px
    .rightLogIn
        width 162px
        display flex
        justify-content space-between
        align-items center
        line-height 1.5
        span
            &:first-child
                font-size 20px
                padding 4px 12px
                color #fff
                background-size 100%
                background-image linear-gradient(-45deg, #FC865F 0, #FC625F 100%)
                background-repeat no-repeat
                border-radius 2px
                position relative
                top 0
                left 0
                &::before, &::after
                    content ''
                    width 16px
                    height 16px
                    position absolute
                    top 50%
                    background-color #fff
                    transform translateY(-50%)
                &::before
                    left -10px
                    border-top-right-radius 50%
                    border-bottom-right-radius 50%
                &::after
                    right -10px
                    border-top-left-radius 50%
                    border-bottom-left-radius 50%
            &:last-child
                font-size 30px
                color #333
    .rightLogInEditing
        span
            font-size 30px
            color #333
.description
    width 100%
    height 70px
    padding 0 30px
    background-color #eee
    display flex
    justify-content space-between
    align-items center
    li
        display flex
        align-items center
        i
            width 10px
            height 10px
            margin-right 6px
            background-image url('./img/yuanquan.png')
            background-repeat no-repeat
            background-size cover
        span
            font-size 24px
            color #666
.shoppingCart
    width 100%
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    z-index -1
    background-color #f4f4f4
    &>div:first-child
        width 248px
        height 264px
        position absolute
        top 0
        left 0
        bottom 0
        right 0
        margin auto
        padding-bottom 16px
        img
            width 100%
    &>div:last-child
        width 480px
        height 92px
        position absolute
        top 400px
        left 0
        right 0
        bottom 0
        font-size 30px
        margin auto
        color #fff
        background-color #dd1a21
        border-radius 5px
        text-align center
        line-height 92px
.shoppingCartItem
    li
        margin-bottom 24px
.shoppingCartGather
    padding-left 30px
    background-color #fff
    display flex
    position fixed
    left 0px
    bottom 98px
    &>div
        height 118px
        &:first-child
            width 494px
            display flex
            justify-content space-between
            align-items center
            padding-right 8px
            .shoppingCartGatherLeft
                line-height 38px
                i
                    display inline-block
                    width 38px
                    height 38px
                    margin-right 16px
                    font-size 37px
                    vertical-align bottom
                span
                    font-size 28px
                    color #7f7f7f
                    vertical-align bottom
            .shoppingCartGatherRight
                text-align right
                padding-bottom 10px
                div
                    font-size 28px
                    color #dd1a21
                p
                    font-size 22px
                    color #7f7f7f
                    margin-top 2px
        &:last-child
            width 226px
            background-color #ccc
            font-size 28px
            color #ffffff
            text-align center
            line-height 118px
            &.activRed
                background-color #dd1a21
.iconCheckRed
    color #dc1a21
.iconCheckQuan
    color #d2d6d2
</style>