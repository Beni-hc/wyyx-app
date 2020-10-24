<template>
    <div>
        <div class="banner">
            <banner></banner>
        </div>
        <classify></classify>
        <promotion></promotion>
        <bodylist1></bodylist1>
        <bodylist2></bodylist2>
        <bodylist3></bodylist3>
        <bodylist4></bodylist4>
        <choiceness></choiceness>
        <tagend></tagend>
    </div>
</template>
<script>
import banner from "../../../components/banner/banner";
import classify from "./homebody/classify";
import choiceness from "./homebody/choiceness";
import bodylist1 from "./homebody/bodyList1";
import bodylist2 from "./homebody/bodyList2";
import bodylist3 from "./homebody/bodyList3";
import bodylist4 from "./homebody/bodyList4";
import promotion from "./homebody/promotion";
import tagend from "./homebody/tagend";
export default {
    components: {
        banner,
        classify,
        choiceness,
        bodylist1,
        bodylist2,
        bodylist3,
        bodylist4,
        promotion,
        tagend,
    },
    methods: {},
};
</script>
<style lang="stylus" scoped>
.banner
    height 296px
    background-color #fff
</style>