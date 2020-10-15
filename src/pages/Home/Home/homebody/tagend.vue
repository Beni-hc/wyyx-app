<template>
    <div class='tagend'>
        <div class='tagend-APP'>
            <div>下载APP</div>
            <div>电脑版</div>
        </div>
        <div class='tagend-banquan'>
            <p>网易公司版权所有 © 1997-2020</p>
            <p>食品经营许可证： JY13301080111719</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .tagend {
        width: 100%;
        margin-top: 20px;
        padding: 26px 0;
        background-color: #414141;
    }
    .tagend-APP,
    .tagend-banquan {
        width: 100%;
        height: 94px;
        display: flex;
    }
    .tagend-APP {
        justify-content: center;
        align-items: flex-end;
    }
    .tagend-APP div {
        width: 170px;
        height: 62px;
        margin: 0 24px;
        border: 1px solid #999;
        color: #fff;
        text-align: center;
        line-height: 62px;
        font-size: 24px;
        border-radius: 2px;
    }
    .tagend-banquan {
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    }
    .tagend-banquan p {
        color: #999;
        font-size: 24px;
    }
</style>