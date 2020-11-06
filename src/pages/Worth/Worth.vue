<template>
    <div>
        <heading>
            <generalNav />
        </heading>
        <div class="worthtop">
            <img src="../../DATA/dataimg/worthimg/beijtu.jpg" alt="" />
            <img src="../../DATA/dataimg/worthimg/zhidemai.png" alt="" />
            <span>严选好物 用心生活</span>
            <div class="bannerBox">
                <worthBanner />
            </div>
        </div>
        <div class="worthbottom">
            <div>
                <WorthItem
                    v-for="(leftItem, leftIndex) in listLeft"
                    :key="leftIndex"
                    :listImg="leftItem.showImg"
                    :listText="leftItem.text"
                    :headImg="leftItem.headImg"
                    :headName="leftItem.name"
                    :watchNumber="leftItem.watchNumber"
                />
            </div>
            <div>
                <WorthItem
                    v-for="(rightItem, rightIndex) in listRight"
                    :key="rightIndex"
                    :listImg="rightItem.showImg"
                    :listText="rightItem.text"
                    :headImg="rightItem.headImg"
                    :headName="rightItem.name"
                    :watchNumber="rightItem.watchNumber"
                />
            </div>
        </div>
    </div>
</template>
<script>
import heading from "../../components/Heading/Heading";
import generalNav from "../../components/Heading/generalNav";
import worthBanner from "./Worth/WorthBanner";
import WorthItem from "./Worth/WorthItem";
import worth from "../../DATA/data";
export default {
    name: "worth",
    data() {
        return {
            listLeft: [],
            listRight: [],
            pendding: true,
            huhuan: true,
            worthlist: [],
        };
    },
    components: {
        heading,
        generalNav,
        worthBanner,
        WorthItem,
    },
    methods: {
        _onscroll() {
            let pages = document.documentElement || document.body;
            let ch = pages.clientHeight;
            let sh = pages.scrollHeight;
            let st = pages.scrollTop;
            if (sh - ch - st < 400 && this.pendding) {
                this.pendding = false;
                setTimeout(() => {
                    if (this.huhuan) {
                        this.listLeft.push(...this.worthlist[1]);
                        this.listRight.push(...this.worthlist[0]);
                        this.huhuan = false;
                    } else {
                        this.listLeft.push(...this.worthlist[0]);
                        this.listRight.push(...this.worthlist[1]);
                        this.huhuan = true;
                    }

                    this.pendding = true;
                }, 500);
            }
        },
    },
    created() {
        this.worthlist.push(...JSON.parse(JSON.stringify(worth.worth.display)));
        this.listLeft.push(...this.worthlist[0]);
        this.listRight.push(...this.worthlist[1]);
    },
    mounted() {
        document.addEventListener("scroll", this._onscroll);
        this.$once("hook:beforeDestroy", function () {
            document.removeEventListener("scroll", this._onscroll);
        });
    },
};
</script>
<style lang="stylus" scoped>
.worthtop
    width 100%
    position relative
    top 0
    left 0
    z-index 1
    padding-top 143px
    img
        position absolute
        &:nth-child(1)
            width 100%
            top 0
            left 0
        &:nth-child(2)
            top 60px
            left 12px
            width 130px
    span
        position absolute
        top 81px
        left 146px
        font-size 30px
        color #fff
.bannerBox
    width 710px
    height 540px
    margin 0 auto
    border-radius 12px
    background-color #fff
    position relative
    top 0
.worthbottom
    width 100%
    padding 30px 20px 0 20px
    display flex
    flex-flow row nowrap
    justify-content space-between
    div
        width 345px
</style>

