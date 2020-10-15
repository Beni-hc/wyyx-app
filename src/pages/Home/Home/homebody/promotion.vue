<template>
    <div class='promotion'>
        <div class='promotionTop'>
            <a href="javascript:;">
                <img src="../../../../assets/promotion_img/promotion_1.gif" alt="">
            </a>
        </div>
        <div class='promotionBottom'>
            <a href="javascript:;">
                <img src="../../../../assets/promotion_img/promotion_2.webp" alt="">
            </a>
            <a href="javascript:;">
                <img src="../../../../assets/promotion_img/promotion_3.webp" alt="">
            </a>
            <a href="javascript:;">
                <img src="../../../../assets/promotion_img/promotion_4.webp" alt="">
            </a>
            <a href="javascript:;">
                <img src="../../../../assets/promotion_img/promotion_5.webp" alt="">
            </a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.promotion{
    width: 100%;
    height: 754px;
}
.promotionTop {
    width: 100%;
    height: 322px;
}
.promotionTop a img {
    width: 100%;
}
.promotionBottom {
    width: 100%;
    height: 432px;
    background-color: #f14937;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-content: center;
}
.promotionBottom a:first-child {
    width: 714px;
    height: 165px;
}
.promotionBottom a {
    width: 233px;
    height: 221px;
    flex-shrink: 0;
    margin: 0 4px;
}
.promotionBottom a img {
    width: 100%;
}
</style>