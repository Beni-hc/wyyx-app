<template>
  <div class='scrollNavX' ref='scrollNavX' :style="{height:lineHeight/75+'rem'}">
    <ul class='scrollItem'>
      <li v-for="(nav,index) in listNav" :key='index' 
      :style="!!index ? {'margin-left': sbt/75 + 'rem'} : ''"
      >
        <span :style="[spanStyle]" 
        >{{nav}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'
export default {
  name:'scrollNavX',
  props:{
    //间距
    sbt:{
      type:Number,
      default: 20
    },
    //字体大小
    fontSize:{
      type:Number,
      default: 28
    },
    //字体两边的内边距
    padWith:{
      type:Number,
      default: 16
    },
    //行高
    lineHeight:{
      type:Number,
      default: 60
    },
    //点击字体颜色
    activText:{
      type:String,
      default:'#dd1a21'
    },
    //点击下边框宽度
    activWith:{
      type:Number,
      default:4
    },
    //点击下边框颜色
    activColor:{
      type:String,
      default:'#dd1a21'
    },
    //数据列表
    listNav:{
      type:Array,
      default:function(){
        return ['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','巨婴亲子','运动旅行','数码家电','严选全球']
      }
    }
  },
  data(){
    return {
           
    }
  },
  computed:{
    spanStyle(){
      return {
        'font-size': this.fontSize/75 + 'rem',
        'padding': 0 + 'rem' +' '+this.padWith/75 + 'rem',
        'line-height': this.lineHeight/75 + 'rem'
      }
    },
  },
  mounted(){
    this.$nextTick(function(){
      let style = document.createElement('style')
      style.innerHTML = `.text {
        color: ${this.activText}!important;
        }\n.text::after {
        content: '';
        width: 100%;
        height: ${this.activWith/75}rem;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: ${this.activColor};
      }`
      document.head.appendChild(style)
      this.scroll = new BScroll(this.$refs.scrollNavX,{
        startX:0,
        click:true,
        scrollX:true,
        scrollY:false,
        // eventPassthrough:'vertical'
      })
    })

  }
};
</script>

<style lang="stylus" scoped>
.scrollNavX
  width 100%
  display flex
  flex-flow row nowrap
  background-color #fff
.scrollItem 
  width auto
  display flex
  flex-flow row nowrap
  flex-shrink 0
  li 
    width auto
    flex-shrink 0
    span 
      display inline-block
      color #333
      position relative
      top 0
      left 0
</style>

