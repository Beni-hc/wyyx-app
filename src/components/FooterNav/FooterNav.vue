<template>
    <div class='footer-fixed'>
        <div class='homeFooter' @touchstart.stop.prevent = 'activNav($event)'>
            <div :class ="isDot === index ? 'redDot' : ''" v-for="(fooList,index) in footerList" :key='index' :data_id='index'>
                <i :style="
                    [isRed === index ? 
                {backgroundPosition: fooList.redX/75 + 'rem' +' '+ fooList.redY/75 + 'rem'} : 
                {backgroundPosition: fooList.imageX/75 + 'rem' +' '+ fooList.imageY/75 + 'rem'}
                ]
                "></i>
                <span :style="[isRed === index ? {color: '#dd1a21'} : '']">{{fooList.name}}</span>
            </div> 
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isDot: 2,
            isRed: 0,
            footerList: [
                {name: '首页',imageX:-98,imageY:-50,redX:-98,redY:0},
                {name: '分类',imageX:-48,imageY:-50,redX:2,redY:-50},
                {name: '值得买',imageX:-48,imageY:-100,redX:2,redY:-99},
                {name: '购物车',imageX:-46,imageY:0,redX:3,redY:1},
                {name: '个人',imageX:-147,imageY:1,redX:-98,redY:-98}
                ]
        }
    },
    methods:{
        activNav(e){
             let isred = e.target
            if(isred.localName === 'i'|| isred.localName === 'span'){
                this.isRed = isred.parentElement.attributes.data_id.value - 0
            }
            if(isred.localName === 'div') {
                this.isRed = isred.attributes.data_id.value - 0
            }
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>
<style scoped>
.footer-fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    background-color: #fff; 
}
.homeFooter {
    display: flex;
    flex-direction: row;
    flex-flow: nowrap;
    align-items: center;   
    justify-content: space-around;
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    border-top: 1px solid #d9d9d9;
    
}
.homeFooter div {
    width: 120px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;
    color: #666666;
}
.homeFooter div i {
    width: 52px;
    height: 48px;
    background-image:url('../../assets/tubiao4.png');
    background-repeat: no-repeat;
    background-size: 196px;
}
.homeFooter div span {
    width: 100%;
    height: 26px;
    font-size: 20px;
    text-align: center;
    line-height: 26px;
    margin: 6px 0 0 ;
}
.redDot::before {
    content:'';
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: #dd1a21;
    position: absolute;
    top: -2px;
    right: -2px;
}
</style>

