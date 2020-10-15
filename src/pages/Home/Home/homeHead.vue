<template>
    <div>
        <div class='pad'></div>
        <div class='headPosition'>
            <div class='top'>
                <a href="javascript:;"></a>
                <div class='search'>
                    <i></i>
                    <span>搜索商品，共37672款好物</span>
                </div>
                <div class='signIn'>登录</div>
            </div>
            <div class='bottom'>
                <div v-show="isShow" class="navHead">全部频道</div>
                <div :class="isShow ? 'leftListShow':'leftList'">
                    <div :class="isShow ? 'navListShow':'navList'" 
                    :style="roll" 
                    @touchstart.stop.prevent='rollStart($event)'
                    @touchmove.stop.prevent='rollMove($event)' 
                    @touchend.stop.prevent='rollEnd($event)'
                    >
                        <span v-for="(lst,index) in listNav" :key='lst' 
                        :class="[isShow ? ['spanShow',{['textShow']:colorIndex === index}] : ['isSpan',{['red redText']:colorIndex === index}]]"
                        :data_index='index'
                        >{{lst}}</span>
                        <!-- <span :class="isShow ? 'spanShow' : 'isSpan' ">居家生活</span>
                        <span :class="isShow ? 'spanShow' : 'isSpan' ">服饰鞋包</span>
                        <span :class="isShow ? 'spanShow' : 'isSpan' ">美食酒水</span>
                        <span :class="isShow ? 'spanShow' : 'isSpan' ">个护清洁</span>
                        <span :class="isShow ? 'spanShow' : 'isSpan' ">巨婴亲子</span>
                        <span :class="isShow ? 'spanShow' : 'isSpan' ">运动旅行</span>
                        <span :class="isShow ? 'spanShow' : 'isSpan' ">数码家电</span>
                        <span :class="isShow ? 'spanShow' : 'isSpan' ">严选全球</span> -->
                    </div>
                </div>
                <div class='rightList'>
                    <div></div>
                    <div @touchstart.stop.prevent='isShow=!isShow'>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
        let timeOut 
export default {
    data(){
        return {
            isShow: false,
            colorIndex: 0,
            scroll: 0,
            startX: 0,
            startTime: 0,
            moveX: 0,
            scrollX: 0,
            endTime:0,
            listNav: ['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','巨婴亲子','运动旅行','数码家电','严选全球'],
        }
    },
    methods:{
        rollStart(event,isShow){
            if(event.target.localName === 'span'){
                this.colorIndex = parseInt(event.target.attributes.data_index.value)
            }
            if(!this.isShow){
            this.startX = event.changedTouches[0].clientX
            this.startTime = Date.now()
           }  
        },
        rollMove(event){
            if(!this.isShow){
                let moveX = event.changedTouches[0].clientX - this.startX
                let scrX = this.scroll + this.moveX
                let targetNode = event.target.localName == 'span' ? event.target.parentElement : event.target
                let minWidth = -targetNode.clientWidth * 6/10              
                if(scrX >= 0 || scrX <= minWidth){      
                    this.moveX = this.scrollX + (moveX - this.scrollX) / 5
                } else {
                    this.moveX = this.scrollX = moveX
                }     
            }
        },
        rollEnd(event){
          if(!this.isShow){
                let endTime = Date.now() - this.startTime
                let targetNode = event.target.localName == 'span' ? event.target.parentElement : event.target
                let minWidth = -targetNode.clientWidth * 6/10  
                let isTime = Math.abs(endTime / this.moveX)
                this.scrollX = 0
                if(isTime < 1.5){
                    this.endTime = 600 / isTime
                    this.scroll = this.scroll + this.moveX * (1+isTime)
                    this.moveX = 0
                } else if(isTime > 2 && isTime < 20){
                    this.endTime = 0
                    this.scroll = this.scroll + this.moveX
                    this.moveX = 0  
                } else {
                    this.endTime = 600
                    this.scroll = this.scroll + this.moveX
                    this.moveX = 0  
                }
                if(this.scroll > 0){
                    this.endTime = 600
                    this.scroll = 0      
                }
                if(this.scroll < minWidth) {
                    this.endTime = 600
                    this.scroll = minWidth
                }
                setTimeout(() => {
                    this.endTime = 0
                },400)    
          }
        },
    },
    computed:{
        roll(){             
                return !this.isShow ? {
                transitionTimingFunction: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
                transitionDuration: this.endTime + 'ms',
                transform: 'translate(' + (this.scroll + this.moveX) + 'px,0px) translateZ(0px)'
                } : ''      
        }
    },
}
</script>

<style scoped>
    .pad {
        height: 147px;
    }
    .headPosition {
        width: 100%;
        position: fixed !important;
        top: 0;
        left: 0;
        background-color: #fff;
        z-index: 20;
    }
    .top{
        width: 100%;
        height: 90px;
        padding: 16px 32px 16px 32px;
        display: flex;
        justify-content: space-between;
        text-align: center;
    }
    .top a {
        width: 140px;
        height: 36px;
        margin: 11px 20px 11px 0;
        background-image: url('../../../assets/tubiao1.png');
        background-repeat: no-repeat;
        background-size: 200px;
        background-position: -4px -4px;
        background-origin: content-box;

    }
    .top .search {
        width: 442px;
        height: 58px;
        line-height: 58px;
        background-color: #ededed;
        border-radius:8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .top .search i {
        width: 34px;
        height: 34px;
        margin: 0 12px 0 0;
        background-image: url('../../../assets/tubiao1.png');
        background-repeat: no-repeat;
        background-position: -144px -56px;
        background-size: 250px;
    }
    .top .search span {
        font-size: 24px;
        color: #666666;
    }
    .top .signIn {
        width: 75px;
        height: 40px;
        margin: 9px 0 9px 15px;
        line-height: 40px;
        text-align: center;
        border-radius: 9px;
        color: #dd1a21;
        border:1px solid #dd1a21;
        font-size: 24px;
    }
    .bottom {
        width: 100%;
        height: 57px;
        position: relative;
        top: 0;
        left: 0;
        z-index: 100;
    }
    .bottom .navHead {
        width: 720px;
        height: 57px;
        line-height: 57px;
        margin-left: 33px;
        font-size: 24px;
    }
    .leftListShow{
        width: 100%;
        height: 100%;
    }
    .navListShow {
        width: 100%;
        height: 310px;
        padding: 28px 30px 40px;
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        justify-content: space-between;
        align-content: space-between;
        background-color: #fff;

    }
    .spanShow {
        width: 150px;
        height: 57px;
        text-align: center;
        line-height: 57px;
        border: 1px solid #e9e9e9;
        border-radius: 8px;
        font-size: 24px;
        background-color: #fafafa;
        
    }
    .textShow {
        border: 1px solid #f2a9ac;
        color: #dd1a21;
    }
   .leftList {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .navList {
        width: 1400px;    
        margin-left: 33px;
        height: 57px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        font-size: 24px;
        transition-property: transform;
    }
    .isSpan {
        position: relative;
        top: 0;
        left: 0;
        margin: 0 18px;
    } 
    .red::after {
        content: "";
        position: absolute;
        left: -16px;
        bottom: -12px;
        width: 100%;
        padding: 0 16px;
        height: 4px;
        background-color: #dd1a21;
    }
    .redText {
        color: #dd1a21;
    } 
    .bottom .rightList {
        width: 160px;
        height: 57px;
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
    }
    .bottom .rightList>div:first-child {
        width: 60px;
        height: 57px;
        background: linear-gradient(to right,rgba(250, 255, 255, 0),rgba(250, 255, 255, 0.7),rgba(255,255,255,1));
    }
    .bottom .rightList>div:last-child {
        width: 100px;
        height: 57px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
    }
    .bottom .rightList>div:last-child>div {
        width: 32px;
        height: 20px;
        background-image: url('../../../assets/tubiao2.png');
        background-origin: content-box;
        background-repeat: no-repeat;
        background-position: -31px -4px;
        background-size: 86px;
    }
</style>