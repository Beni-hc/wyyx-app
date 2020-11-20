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
            <div
                v-for="(listLeftAndRight, index) in worthLeftAndRight"
                :key="index"
            >
                <WorthItem
                    v-for="(leftItem, leftIndex) in listLeftAndRight"
                    :key="leftIndex"
                    :listImg="leftItem.picUrl"
                    :listText="leftItem.title"
                    :headImg="leftItem.avatar"
                    :headName="leftItem.nickname"
                    :watchNumber="leftItem.readCount"
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
import { mapState } from "vuex";
import { GET_WORTH_ITEM_LIST } from "../../store/mutations-type";

export default {
    name: "worth",
    data() {
        return {
            worthLeftAndRight: [],
            page: 1,
            pending: true,
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
            let ch =
                document.documentElement.clientHeight ||
                document.body.clientHeight;
            let sh =
                document.documentElement.scrollHeight ||
                document.body.scrollHeight;
            let st =
                document.documentElement.scrollTop || document.body.scrollTop;
            if (sh - ch - st < 200 && this.pending) {
                this.page++;
                this.pending = false;
                this.$store.dispatch(GET_WORTH_ITEM_LIST, {
                    page: this.page,
                    _addWorthItemList: this._addWorthItemList,
                });
            }
        },
        _addWorthItemList() {
            if (!this.worthLeftAndRight.length) {
                this.worthItemList.result.forEach((e) => {
                    this.worthLeftAndRight.push(e.topics);
                });
            } else {
                this.worthItemList.result.forEach((e, index) => {
                    this.worthLeftAndRight[index].push(...e.topics);
                });
            }
            this.pending = true;
        },
    },
    computed: {
        ...mapState(["worthItemList"]),
    },
    created() {
        this.$store.dispatch(GET_WORTH_ITEM_LIST, {
            page: this.page,
            _addWorthItemList: this._addWorthItemList,
        });
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

