<template>
    <div class='footer-fixed'>
        <div class='homeFooter' @touchstart.stop.prevent = 'activNav($event)'>
            <div  v-for="(fooList,index) in footerList" :key='index' :data_id='index'>
                <i :style="
                    [isRed === index ? 
                {backgroundPosition: fooList.redX/75 + 'rem' +' '+ fooList.redY/75 + 'rem'} : 
                {backgroundPosition: fooList.imageX/75 + 'rem' +' '+ fooList.imageY/75 + 'rem'}
                ]" 
                :class ="isDot === index ? 'redDot' : ''"
                ></i>
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
                {name: '首页',imageX:-84,imageY:-38,redX:-84,redY:3},
                {name: '分类',imageX:-42,imageY:-40,redX:0,redY:-40},
                {name: '值得买',imageX:-40,imageY:-80,redX:0,redY:-83},
                {name: '购物车',imageX:-42,imageY:1,redX:0,redY:1},
                {name: '个人',imageX:-125,imageY:1,redX:-83,redY:-83}
                ]
        }
    },
    methods:{
        activNav(e){
             let isred = e.target
             let path = ['/home','/category','/worth','/shoppingTrolley','/personalInfo']
             let index
            if(isred.localName === 'i'|| isred.localName === 'span'){
               index = this.isRed = isred.parentElement.attributes.data_id.value - 0
            }
            if(isred.localName === 'div') {
               index = this.isRed = isred.attributes.data_id.value - 0
            }
            this.$router.push(path[index])
            
        }
    },
}
</script>
<style lang="stylus" rel='stylesheet/stylus' scoped>
.footer-fixed
    position fixed
    bottom 0
    left 0
    z-index 999
    width 100%
    background-color #fff
    .homeFooter
        display flex
        flex-flow row nowrap
        align-items center
        justify-content space-around
        width 100%
        height 98px
        border 1px solid #d9d9d9
        div
            width 120px
            height 80px
            display flex
            flex-direction column
            align-items center
            color #666
            i
                width 40px
                height 40px
                background-image url('../../assets/tubiao4.png')
                background-repeat no-repeat
                background-size 165px
                position relative
                top 0
                left 0
            span 
                font-size 20px
                margin 6px 0 0
.redDot
    &::before
        content ''
        width 14px
        height 14px
        border-radius 7px
        background-color #dd1a21
        position absolute
        top -5px
        right -15px
</style>


