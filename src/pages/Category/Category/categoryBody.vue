<template>
    <div class="sortBody">
        <categoryContentNav />
        <div class="sortRight">
            <div class="sortrightTop">
                <banner />
            </div>
            <div class="sortrightBottom">
                <categoryContentList></categoryContentList>
            </div>
        </div>
    </div>
</template>
<script>
import banner from "../../../components/banner/banner";
import categoryContentList from "./Category/categoryContentList";
import categoryContentNav from "../Category/Category/categoryContentNav";
export default {
    components: {
        banner,
        categoryContentList,
        categoryContentNav,
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
</style>