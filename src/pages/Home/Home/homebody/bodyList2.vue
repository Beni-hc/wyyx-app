<template>
    <div class='rxb-list'>
        <div class='rxb-title'>
            <span>类目热销榜</span>
        </div>
        <div class='rxb-body'>
            <div v-for="(rxblist,index) in rxb" :key='index'>
                <div>{{rxblist.title}}</div>
                <div>
                    <img :src="rxblist.imgShow"  alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            rxb:[
                {title: '热销榜',imgShow: require('../../../../assets/bodylist/rxb_1.webp')},
                {title: '好评榜',imgShow: require('../../../../assets/bodylist/rxb_2.webp')},
                {title: '美食酒水榜',imgShow: require('../../../../assets/bodylist/rxb_3.webp')},
                {title: '居家生活榜',imgShow: require('../../../../assets/bodylist/rxb_4.webp')},
                {title: '服饰鞋包榜',imgShow: require('../../../../assets/bodylist/rxb_5.webp')},
                {title: '个护清洁榜',imgShow: require('../../../../assets/bodylist/rxb_6.webp')},
                {title: '数码家电榜',imgShow: require('../../../../assets/bodylist/rxb_7.webp')},
                {title: '运动旅行榜',imgShow: require('../../../../assets/bodylist/rxb_8.webp')},
                {title: '母婴亲子榜',imgShow: require('../../../../assets/bodylist/rxb_9.webp')},
                {title: '严选全球榜',imgShow: require('../../../../assets/bodylist/rxb_10.webp')},  
            ]
        }
    }
}
</script>
<style scoped>
    .rxb-list {
        width: 100%;
        height: 712px;
        margin-top: 22px;
        background-color: #fff;
    }
    .rxb-title {
        height: 101px;
        font-size: 31px;
        margin-left: 31px;
        line-height: 101px;
    }
    .rxb-body {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-content: flex-start;
    }
    .rxb-body>div:nth-child(1),
    .rxb-body>div:nth-child(2) {
        width: 340px;
        height: 200px;
        display: flex;
        align-items: center;
    }
    .rxb-body>div:nth-child(1) {
        background-color: #f9f3e4;
    }
    .rxb-body>div:nth-child(2) {
        background-color: #ebeff6;
    }
    .rxb-body>div {
        width: 166px;
        height: 183px;
        background-color: #f5f5f5;
        flex-shrink: 0;
        margin: 0 8px 8px 0;
    }
    .rxb-body>div>div:first-child {
        width: 166px;
        height: 60px;
        font-size: 22px;
        text-align: center;
        line-height: 60px;
    }
    .rxb-body>div>div:last-child {
        width: 123px;
        margin: 0 auto;
        
    }
    .rxb-body>div>div:last-child img {
        width: 100%;
    }
    .rxb-body>div:nth-child(1)>div:last-child,
    .rxb-body>div:nth-child(2)>div:last-child {
        width: 200px;
    }
    .rxb-body>div:nth-child(1)>div:first-child,
    .rxb-body>div:nth-child(2)>div:first-child {
        width: auto;
        height: auto;
        font-size: 26px;
        margin: 0 23px;
        position: relative;
        top: 0;
        left: 0;
        transform: translateY(-30%);
    }
    .rxb-body>div:nth-child(1)>div:first-child::after,
    .rxb-body>div:nth-child(2)>div:first-child::after {
        content: '';
        width: 50px;
        height: 4px;
        background-color: black;
        position: absolute;
        left: 0;
        bottom: 0;
    }
</style>