<template>
    <div class='sortHead'>
        <div>
            <i></i>
            <span>搜索商品,共40446款好物</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .sortHead {
        width: 100%;
        height: 87px;
        padding: 16px 30px;
        background-color: #fff;
    }
    .sortHead div {
        height: 100%;
        border-radius: 5px;
        background-color: #ededed;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
    }
    .sortHead div i {
        width: 30px;
        height: 30px;
        background-image: url('../../../assets/tubiao1.png');
        background-repeat: no-repeat;
        background-size: 160px;
        background-position: -124px -7px;
        margin-right: 10px;
    }
    .sortHead div span {
        font-size: 28px;
        color: #666666;
    }
</style>