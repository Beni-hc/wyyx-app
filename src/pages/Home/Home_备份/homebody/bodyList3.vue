<template>
    <div class='xsg-list'>
        <div class='xsg-title'>
            <span>限时购</span>
            <div>
                <span>02</span>
                <div><i></i><i></i></div>
                <span>56</span>
                <div><i></i><i></i></div>
                <span>34</span>
            </div>
            <div>
                <span>更多</span>
                <i></i>
            </div>
        </div>
        <div class='xsg-body'>
            <div v-for="(xsglist,index) in xsg" :key='index'>
                <div>
                    <img :src="xsglist.xsgTu" alt="123">
                </div>
                <div>¥{{xsglist.discount}} <span><del>¥{{xsglist.price}}</del></span></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            xsg:[
                {discount:99,price:139,xsgTu:require('../../../../assets/bodylist/xsg_1.webp')},
                {discount:509,price:599,xsgTu:require('../../../../assets/bodylist/xsg_2.webp')},
                {discount:169,price:369,xsgTu:require('../../../../assets/bodylist/xsg_3.webp')},
                {discount:42,price:49,xsgTu:require('../../../../assets/bodylist/xsg_4.webp')},
                {discount:2939,price:2999,xsgTu:require('../../../../assets/bodylist/xsg_5.webp')},
                {discount:319,price:399,xsgTu:require('../../../../assets/bodylist/xsg_6.webp')},
            ]
        }
    }
}
</script>
<style scoped>
    .xsg-list {
        width: 100%;
        height: 702px;
        margin-top: 20px;
        background-color: #fff;
    }
    .xsg-title {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        position: relative;
        top: 0;
        left: 0;

    }
    .xsg-title>span {
        font-size: 32px;
        margin: 0 23px 0px 32px;
    }
    .xsg-title>div:nth-child(2) {
        display: flex;
        padding-top: 11px;
    }
     .xsg-title>div:nth-child(2) div{
         width: 28px;
         height: 39px;
         display: flex;
         flex-flow: column nowrap;
         justify-content: space-evenly;
         align-items: center;
    }
     .xsg-title>div:nth-child(2) div i {
         width: 4px;
         height: 4px;
         background-color: #333333;
         border-radius: 2px;
    }
    .xsg-title>div:nth-child(2) span{
        width: 39px;
        height: 39px;
        background-color:black;
        color: #fff;
        font-size: 26px;
        text-align: center;
        line-height: 39px;
        border-radius: 7px;
    }
    .xsg-title>div:last-child {
        width: 108px;
        height: 45px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto 0;
        font-size: 30px;
        display: flex;
        align-items: center;
      
        
    }
    .xsg-title>div:last-child>i {
        width: 25px;
        height: 36px;
        background-image: url('../../../../assets/tubiao2.png');
        background-repeat: no-repeat;
        background-size: 130px;
        background-position: 8px -92px;
    
    }
    .xsg-body {
        width: 100%;
        height: 602px;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }
    .xsg-body>div {
        width: 218px;
        height: 283px;
        font-size: 27px;
        margin: 0 9px 18px 9px;
    }
     .xsg-body>div>div:first-child {
        width: 218px;
        height: 218px;
        background-color: #f5f5f5;
    }
    .xsg-body>div>div:first-child>img {
        width: 100%;
    }
     .xsg-body>div>div:last-child {
         height: 66px;
         line-height: 66px;
         margin-left: 18px;
         color: #da080f;      
     }
     .xsg-body>div>div:last-child span {
         font-size: 25px;
         margin-left: 14px;
         color: #828282;
     }

</style>