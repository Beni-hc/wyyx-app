<template>
    <div class="categoryContentList">
        <div class="categoryTitle" v-if="!!title">{{ title }}</div>
        <ul class="categorycontent">
            <li
                class="categoryItme"
                v-for="(item, index) in listArray"
                :key="item[text]"
                @touchstart="onClick(index)"
            >
                <div>
                    <img :src="item[img]" :alt="item[text]" />
                </div>
                <div>
                    {{ item[text] }}
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "categoryContentList",
    props: {
        title: {
            type: String,
            default: "",
        },
        listArray: {
            type: Array,
            default: function () {
                return [];
            },
        },
        //数组里面对象的文本属性名字
        text: {
            type: String,
            default: "",
        },
        //数组里面对象的图片属性名字
        img: {
            type: String,
            default: "",
        },
    },
    methods: {
        onClick(index) {
            this.$emit("onClick", index);
        },
    },
};
</script>
<style lang="stylus" scoped>
.categoryContentList
    margin-bottom 12px
    .categoryTitle
        margin-bottom 24px
        border-bottom 1px solid #d9d9d9
        color #333
        font-weight 700
        font-size 28px
        padding-bottom 8px
    .categorycontent
        display flex
        flex-flow row wrap
        .categoryItme
            margin-right 34px
            &>div:first-child
                width 144px
                height 144px
                img
                    width 100%
            &>div:last-child
                width 144px
                height 72px
                font-size 24px
                color #333
                text-align center
        &>.categoryItme:nth-child(3n)
            margin-right 0px
</style>