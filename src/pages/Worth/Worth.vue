<template>
    <div>
        <heading>
            <generalNav />
        </heading>
        <div class="worthtop">
            <img src="../../DATA/dataimg/worthimg/beijtu.jpg" alt="" />
            <img src="../../DATA/dataimg/worthimg/zhidemai.png" alt="" />
            <span>严选好物 用心生活</span>
            <div class="bannerBox">111111</div>
        </div>
        <div class="lai"></div>
    </div>
</template>
<script>
import heading from "../../components/Heading/Heading";
import generalNav from "../../components/Heading/generalNav";
export default {
    name: "worth",
    components: {
        heading,
        generalNav,
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
    background-color red
    position relative
    top 0
.lai
    height 3000px
</style>
<style >
</style>
