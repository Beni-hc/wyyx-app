<template>
    <div class='classify'>
        <div class='promise'>
           <div><img src="../../../../assets/tubiao1_3.png" alt=""><span>网易自营品牌</span></div>
           <div><img src="../../../../assets/tubiao1_1.png" alt=""><span>30天无忧退货</span></div>
           <div><img src="../../../../assets/tubiao1_2.png" alt=""><span>48小时快速退款</span></div>
        </div>
        <div class='classList'>
            <a href="javascript:;">
                <img src="../../../../assets/classList_img/sp1_1.png" alt="">
                <span>新品首发</span>
            </a>
            <a href="javascript:;">
                <img src="../../../../assets/classList_img/sp1_2.png" alt="">
                <span>居家生活</span>
            </a>
            <a href="javascript:;">
                <img src="../../../../assets/classList_img/sp1_3.png" alt="">
                <span>服饰鞋包</span>
            </a>
            <a href="javascript:;">
                <img src="../../../../assets/classList_img/sp1_4.png" alt="">
                <span>美食酒水</span>
            </a>
            <a href="javascript:;">
                <img src="../../../../assets/classList_img/sp1_5.png" alt="">
                <span>个人清洁</span>
            </a>
            <a href="javascript:;">
                <img src="../../../../assets/classList_img/sp1_6.png" alt="">
                <span>母婴亲子</span>
            </a>
            <a href="javascript:;">
                <img src="../../../../assets/classList_img/sp1_7.png" alt="">
                <span>运动旅行</span>
            </a>
            <a href="javascript:;">
                <img src="../../../../assets/classList_img/sp1_8.png" alt="">
                <span>数码家电</span>
            </a>
            <a href="javascript:;">
                <img src="../../../../assets/classList_img/sp1_9.png" alt="">
                <span>全球特色</span>
            </a>
            <a href="javascript:;">
                <img src="../../../../assets/classList_img/sp1_10.gif" alt="">
                <span>好货抄底</span>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.classify {
    width: 100%;
    height: 446px;
    background-color: #fff;
}
.promise {
    width: 100%;
    height: 74px;
    display: flex;
    padding-left: 8px;
}
.promise div {
    height: 100%;
    line-height: 74px;
    margin: 0 22px;
}
.promise div img {
    width: 34px;
    height: 34px;
    vertical-align: middle;
    margin-right: 10px;
}
.promise div span {
    font-size: 23px;
    vertical-align: middle;
}
.classList {
    width: 100%;
    height: 372px;
    display: flex;
    flex-flow: wrap;
}
.classList a {
    width: 106px;
    height: 146px;
    margin: 16px 22px 16px 22px;
    text-align: center;
}
.classList a  img {
    width: 106px;
}
.classList a span {
    font-size: 23px;
    color: #313131;
}
</style>