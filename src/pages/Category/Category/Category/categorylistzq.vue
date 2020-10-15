<template>
    <div class='sortlistzq'>
        <div v-for="sort in sortlistzq" :key='sort.id'>
            <div>
                <img :src="sort.zqImg" alt="">
            </div>
            <div>
                {{sort.name}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            sortlistzq:[
                {id:1,name:'员工精选',zqImg:require('../../../../assets/sort_img/tjzq_1.webp')},
                {id:2,name:'人气好物',zqImg:require('../../../../assets/sort_img/tjzq_2.webp')},
                {id:3,name:'服饰特卖',zqImg:require('../../../../assets/sort_img/tjzq_3.webp')},
                {id:4,name:'润秋美食',zqImg:require('../../../../assets/sort_img/tjzq_4.webp')},
                {id:5,name:'防晒好物',zqImg:require('../../../../assets/sort_img/tjzq_5.webp')},
                {id:6,name:'回购好物',zqImg:require('../../../../assets/sort_img/tjzq_6.webp')},
                {id:7,name:'秋冬床品',zqImg:require('../../../../assets/sort_img/tjzq_7.webp')},
                {id:8,name:'99专区',zqImg:require('../../../../assets/sort_img/tjzq_8.webp')},
            ]
        }
    }
}
</script>
<style scoped>
    .sortlistzq {
        margin-right: 29px;
        display: flex;
        flex-flow: row wrap;
    }
    .sortlistzq>div {
        margin-bottom: 37px;
        margin-right: 32px;
    }
    .sortlistzq>div:nth-child(3n) {
        margin-right: 0;
    }
    .sortlistzq>div>div:first-child {
        width: 145px;
        height: 145px;
    }
    .sortlistzq>div>div:first-child>img {
        width: 100%;
    }
    .sortlistzq>div>div:last-child {  
        text-align: center;
        font-size: 24px;
        color: #404040;
    }
</style>