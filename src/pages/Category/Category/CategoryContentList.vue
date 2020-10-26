<template>
    <div class="categoryList">
        <div class="categoryrightTop">
            <img
                v-if="datalist.content[id].img.length < 2"
                :src="datalist.content[id].img"
                alt=""
            />
            <banner v-else :bannerlist="datalist.content[id].img" />
        </div>
        <div class="categoryrightBottom">
            <categoryContentItem
                :text="'text'"
                :img="'img'"
                v-for="title in datalist.content[id].title"
                :key="title.id"
                :title="title.title"
                :listArray="datalist.content[id].content[title.id]"
            ></categoryContentItem>
        </div>
    </div>
</template>
<script>
import banner from "../../../components/banner/banner";
import categoryContentItem from "./categoryContentItem";
import Category from "../../../DATA/data";
export default {
    name: "CategoryContentList",
    props: ["id"],
    data() {
        return {
            datalist: {},
        };
    },
    methods: {},
    mounted() {},
    components: {
        banner,
        categoryContentItem,
    },
    created() {
        this.datalist = Category.Category;
    },
};
</script>
<style lang="stylus" scoped>
.categoryList
    width 100%
    height 100%
.categoryrightTop
    width 100%
    height 194px
    img
        width 100%
.categoryrightBottom
    width 100%
    margin-top 32px
</style>