<template>
    <div class="sortHead">
        <searchBox />
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
.sortHead
    width 100%
    height 87px
    padding 16px 30px
    background-color #fff
</style>