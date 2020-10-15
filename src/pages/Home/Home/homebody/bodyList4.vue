<template>
    <div class='xpsf-list'>
        <div class='xpsf-title'>
            <div>
                <span>新品首发</span>
            </div>
            <div>
                <span>更多</span>
                <i></i>
            </div>
        </div>
        <div class='xpsf-body'>
            <div v-for="(xpsfList,index) in xpsf" :key='index'>
                <div>
                    <img :src="xpsfList.img" alt="">
                </div>
                <div>
                    <p>{{xpsfList.descriptive}}</p>
                    <span>¥{{xpsfList.price}}</span>
                    <div>
                        <div><span>{{xpsfList.x}}</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            xpsf:[
                {descriptive:'国潮养生系列 守护你的发际线，黑芝麻丸 100克',price: 29,img: require('../../../../assets/bodylist/xpsf_1.webp'),x:'新人特价'},
                {descriptive:'熨斗界的颜值担当，马卡龙电熨斗',price: 89,img: require('../../../../assets/bodylist/xpsf_2.webp'),x:'每满200减20卷'},
                {descriptive:'原创设计-一体化机身精致迷你破壁机350mL',price: 249,img: require('../../../../assets/bodylist/xpsf_3.webp'),x:'限时购'},
                {descriptive:'眼镜/首饰清洗+除菌，超声波清洁机pro版',price: 219,img: require('../../../../assets/bodylist/xpsf_4.webp'),x:'新人特价'},
                {descriptive:'巴掌大小迷你胖乎壶却有1L大肚腩的保温壶',price: 109,img: require('../../../../assets/bodylist/xpsf_5.webp'),x:'每满200减20卷'},
                {descriptive:'办公室午休神器，无线穴位指压按摩器',price: 309,img: require('../../../../assets/bodylist/xpsf_6.webp'),x:'好货内部价'},
            ]
        }
    }
}
</script>
<style scoped>
    .xpsf-list {
        width: 100%;
        margin-top: 20px;
        background-color: #fff;
        padding-bottom: 26px;
    }
    .xpsf-title {
        height: 100px;
        margin: 0 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .xpsf-title>div:first-child {
        font-size: 32px;
    }
    .xpsf-title>div:last-child span {
        font-size: 30px;
        vertical-align: middle;
    }
    .xpsf-title>div:last-child i {
        display:inline-block;
        width: 15px;
        height: 30px;
        vertical-align: middle;
        background-image: url('../../../../assets/tubiao2.png');
        background-repeat: no-repeat;
        background-size: 114px;
        background-position: 2px -81px;
        margin-left: 8px;
    }
    .xpsf-body {
        margin: 0 30px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    .xpsf-body>div {
        width: 218px;
        margin-bottom: 30px;
    }
    .xpsf-body>div>div:first-child {
        width: 100%;
    }
    .xpsf-body>div>div:first-child img {
        width: 100%;
    }
    .xpsf-body>div>div:last-child p {
        font-size: 23px;
    }
    .xpsf-body>div>div:last-child span {
        font-size: 29px;
        color: #de252c;
    }
    .xpsf-body>div>div:last-child>div>div>span{
        font-size: 23px;
        color: #dd1a21;
    }
    .xpsf-body>div>div:last-child>div>div>span {
        border: 2px solid #dd1a21;
        padding: 0 15px;
        /* border-radius: 50px; */
        border-radius: 6px;
        position: relative;
        top: 0;
        left: 0;
           
    }
    .xpsf-body>div>div:last-child>div>div>span::after {
        content: '';
        width: 15px;
        height: 15px;
        position: absolute;
        top: 0;
        right: -13px;
        bottom: 0;
        margin: auto 0;
        border: 2px solid #dd1a21;
        border-radius: 15px;
        background-color: #fff;
        clip: rect(5px 25px 25px 5px);
        transform: rotate(135deg);
    } 
    .xpsf-body>div>div:last-child>div>div>span::before {
        content: '';
        width: 15px;
        height: 15px;
        position: absolute;
        top: 0;
        left: -13px;
        bottom: 0;
        margin: auto 0;
        border: 2px solid #dd1a21;
        border-radius: 15px;
        background-color: #fff;
        clip: rect(5px 25px 25px 5px);
        transform: rotate(-45deg);
    } 
</style>


