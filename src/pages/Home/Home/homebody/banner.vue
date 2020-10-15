<template>
    <div class='banner'>
        <ul class='bannerDot'>
            <li :class="-widthImg*imglist.id === bannerX ? 'isShowDot' : ''" 
            v-for="imglist in banner" :key='imglist.id'></li>
        </ul>    
        <ul class='bannerAds' 
        :style="{'transform':'translateX('+ bannerX_x +'px)','transition': 'transform' +' '+ 0 + 'ms'}" 
        @touchstart.stop.prevent='bannerStart($event)' 
        @touchmove.stop.prevent='bannerMove($event)' 
        @touchend.stop.prevent='bannerEnd($event)' 
        >
            <li v-for="(imglist,index) in bannerList" :key='index'>
                <img :src="imglist.bannerImg" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            banStart: 0,
            banMoveX: 0,
            bannerX: 0,
            widthImg: 0,
            banner:[
                {id:1,bannerImg:require('../../../../assets/banner_img/banner1.webp')},
                {id:2,bannerImg:require('../../../../assets/banner_img/banner2.webp')},
                {id:3,bannerImg:require('../../../../assets/banner_img/banner3.webp')},
                {id:4,bannerImg:require('../../../../assets/banner_img/banner4.webp')},
                {id:5,bannerImg:require('../../../../assets/banner_img/banner5.webp')},
                {id:6,bannerImg:require('../../../../assets/banner_img/banner6.webp')},
                {id:7,bannerImg:require('../../../../assets/banner_img/banner7.webp')},
                {id:8,bannerImg:require('../../../../assets/banner_img/banner8.webp')},
            ]
        }
    },
    methods:{
        bannerStart(e){
            this.banStart = e.changedTouches[0].clientX
        },
        bannerMove(e){
            let banMove = e.changedTouches[0].clientX - this.banStart
            this.banMoveX = banMove + this.bannerX
        },
        bannerEnd(e){
            const moveX = this.banMoveX - this.bannerX
            const widthImg = e.target.offsetWidth
            if(Math.abs(moveX) <= widthImg * 0.4) {
                this.banMoveX = this.bannerX
            }
            if(Math.abs(moveX) > widthImg * 0.4) {
                if(moveX > 0){
                    this.bannerX = this.banMoveX = this.bannerX + widthImg
                }
                if(moveX < 0){
                    this.bannerX = this.banMoveX = this.bannerX - widthImg
                }  
            } 
        },
    },
    computed:{
        bannerList(){
            const newBanner = JSON.parse(JSON.stringify(this.banner)) 
            newBanner.push(this.banner[0])
            newBanner.unshift(this.banner[this.banner.length-1])
            return newBanner
        },
        bannerX_x(){
            this.widthImg = parseFloat(document.documentElement.style.fontSize) * 10
            if(this.banMoveX >= 0) {
                return this.banMoveX = this.bannerX = -this.banner.length * this.widthImg
            } else if(this.banMoveX <= -(this.banner.length+1) * this.widthImg) {
                return this.banMoveX = this.bannerX = -this.widthImg
            }else {
                return this.banMoveX
            }  
        },
    }
}
</script>
<style scoped>
.banner {
    width: 100%;
    height: 297px;
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
}
.bannerAds {
    display: flex;
    flex-flow: row nowrap;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
}
.bannerAds li {
    width: 750px;
    height: 297px;
    position: relative;
    top: 0;
    left: 0;
    flex-shrink: 0;
    overflow: hidden;   
}
.bannerAds li img {
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%; 
    transform: translateY(-50%);
}
.bannerDot {
    width: 100%;
    height: 5px;
    position: absolute;
    top: 264px;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
}
.bannerDot li {
    width: 40px;
    height: 100%;
    margin: 0 6px;
    background-color: rgba(255, 255, 255, .3)
}
.isShowDot {
    background-color: #fff !important;
}
</style>