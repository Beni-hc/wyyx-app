<template>
    <div class="top">
        <a href="javascript:;"></a>
        <searchBox />
        <div class="signIn">登录</div>
    </div>
</template>
<script>
import searchBox from "../../../components/Heading/searchBox";
export default {
    components: {
        searchBox,
    },
};
</script>
<style lang="stylus" scoped>
.top
    width 100%
    height 88px
    padding 16px 30px
    display flex
    flex-flow row nowrap
    align-items center
    a
        width 218px
        height 40px
        margin-right 20px
        background-image url('../../../assets/tubiao1.png')
        background-repeat no-repeat
        background-size 200px
        background-position -4px -4px
        background-origin content-box
.signIn
    width 112px
    height 40px
    line-height 40px
    text-align center
    border-radius 8px
    color #dd1a21
    border 1px solid #dd1a21
    font-size 24px
    margin-left 16px
</style>
