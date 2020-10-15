<template>
    <div class="yxcs-list">
        <div>
            <div>严选超市</div>
            <div>10元凑好物</div>
            <div>
                <img src="../../../../assets/bodylist/yxcs_1.webp" alt="">
                <img src="../../../../assets/bodylist/yxcs_2.webp" alt="">
            </div>
        </div>
        <div>
            <div>员工精选</div>
            <div>泥面膜8折</div>
            <div>
                <img src="../../../../assets/bodylist/ygjp_1.webp" alt="">
                <img src="../../../../assets/bodylist/ygjp_2.webp" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .yxcs-list {
        margin-top: 20px;
        background-color: #fff;
        padding: 13px 30px;
        display: flex;
        justify-content: space-between;
    }
    .yxcs-list>div {
        width: 344px;
        height: 265px;
        background-color: #f5f5f5;
        margin-bottom: 13px;
        padding: 30px 0 0 30px;
    }
    .yxcs-list>div>div:first-child {
        font-size: 31px;
    }
    .yxcs-list>div>div:nth-child(2) {
        font-size: 23px;
        color: #7f7f7f;
    }
    .yxcs-list>div>div:last-child img{
        width: 150px;
        height: 150px;
        margin-right: 6px;
    }
</style>