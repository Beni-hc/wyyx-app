<template>
    <div class="sortBody">
        <div class="sortLeft">
            <ul>
                <li class="activate redFont">推荐专区</li>
                <li>新品专区</li>
                <li>居家生活</li>
                <li>服饰鞋包</li>
                <li>美食酒水</li>
                <li>个护清洁</li>
                <li>母婴亲子</li>
                <li>运动旅行</li>
                <li>数码家电</li>
                <li>严选全球</li>
            </ul>
        </div>
        <div class="sortRight">
            <div class="sortrightTop">
                <banner />
            </div>
            <div class="sortrightBottom">
                <categorylistzq></categorylistzq>
            </div>
        </div>
    </div>
</template>
<script>
import banner from "../../../components/banner/banner";
import categorylistzq from "./Category/categorylistzq";
export default {
    components: {
        banner,
        categorylistzq,
    },
};
</script>
<style scoped>
.sortBody {
    width: 100%;
    border-top: 1px solid #d9d9d9;
    background-color: #fff;
    display: flex;
}
.sortLeft {
    width: 162px;
    border-right: 1px solid #d9d9d9;
    padding: 30px 0;
}
.sortLeft ul {
    height: 885px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
}
.sortLeft ul li {
    height: 52px;
    margin: 10px 0;
    text-align: center;
    line-height: 52px;
    font-size: 27px;
    color: #333;
    position: relative;
}
.sortRight {
    width: 588px;
    padding: 30px;
}
.sortrightTop {
    width: 100%;
    height: 194px;
}
.sortrightBottom {
    width: 100%;
    margin-top: 32px;
}
.activate::before {
    content: "";
    width: 6px;
    height: 100%;
    background-color: #ab2b2b;
    position: absolute;
    top: 0;
    left: 0;
}
.redFont {
    color: #ab2b2b !important;
}
</style>