<template>
    <div class="categoryList">
        <div class="categoryrightTop" v-if="!!category.currentCategory">
            <img
                v-if="category.currentCategory.bannerList.length < 2"
                :src="category.currentCategory.bannerList[0].picUrl"
                alt=""
            />
            <banner v-else :bannerList="category.currentCategory.bannerList" />
        </div>
        <div class="categoryrightBottom">
            <categoryContentItem
                :text="'name'"
                :img="'wapBannerUrl'"
                v-for="title in category.categoryGroupList"
                :key="title.id"
                :title="title.name"
                :listArray="title.categoryList"
            ></categoryContentItem>
        </div>
    </div>
</template>
<script>
import banner from "../../../components/banner/banner";
import categoryContentItem from "./categoryContentItem";
export default {
    name: "CategoryContentList",
    props: {
        category: Object,
    },
    data() {
        return {};
    },
    methods: {},
    mounted() {},
    components: {
        banner,
        categoryContentItem,
    },
    created() {},
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