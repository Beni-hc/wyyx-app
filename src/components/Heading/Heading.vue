<template>
  <div>
    <div class="pad" :style="showApp && { height: +253 / 75 + 'rem' }"></div>
    <div class="headPosition">
      <div class="topApp" v-show="showApp">
        <div>
          <div class="iconfont icon-label-lt">
            <i class="iconfont icon-svg--copy"></i>
          </div>
        </div>
        <div>
          <img src="../../assets/HeadPop/HeadPop.png" alt="" />
        </div>
      </div>
      <div>
        <xxxxxx />
        <div class="bottomNav">
          <div class="rightOnOff">
            <div></div>
            <div @touchstart.stop.prevent="show = !show">
              <transition>
                <div class="iconfont icon-arrow-down"></div>
              </transition>
            </div>
          </div>
        </div>
        <div v-show="show" class='scrollWidth'>
            <scrollNavX
            @router-path="routerpath"
            :showIndex="showIndex"
          />
        </div>     
        <HomeAvtivNav
          @activ-nav-index="activnavindex"
          v-show="!show"
          :showIndex="showIndex"
        />
      </div>
    </div>
  </div>
</template>
<script>
import xxxxxx from "./xxxxxx";
import scrollNavX from "./scrollNavX";
import HomeAvtivNav from "../../pages/Home/HomeActivNav/HomeActivNav";
export default {
  name: "Heading",
  data() {
    return {
      show: true,
      showApp: true,
      showIndex: 0,
    };
  },
  methods: {
    routerpath(index) {
      this.showIndex = index;
    },
    activnavindex(index) {
      this.show = !this.show;
      this.showIndex = index;
    },
    activApp(e) {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.showApp = !!!scrollTop;
    },
  },
  components: {
    xxxxxx,
    scrollNavX,
    HomeAvtivNav,
  },
  mounted() {
    document.addEventListener("scroll", this.activApp);
  },
};
</script>
<style lang="stylus" scoped>
.scrollWidth
  width 650px
  height 100%
.pad
  width 100%
  height 149px
.headPosition
  width 100%
  position fixed !important
  top 0
  left 0
  background-color #fff
  z-index 20
.topApp
  width 100%
  height 104px
  position relative
  top 0
  left 0
  div
    &:first-child
      height 100%
      position absolute
      top 0
      left 0
      div
        position absolute
        top -1px
        left -1px
        font-size 38px
        color #5b5b5b
        i
          position absolute
          top -1px
          left -3px
          font-size 30px
          color #adadad
    &:last-child
      width 100%
      height 100%
      img
        width 100%
        height 100%
.bottomNav
  position relative
  top 0
  left 0
.rightOnOff
  width 160px
  height 60px
  display flex
  position absolute
  top 0
  right 0
  z-index 2
  &>div:first-child
    width 60px
    height 60px
    background linear-gradient(to right, rgba(250, 255, 255, 0), rgba(250, 255, 255, 0.7), rgba(255, 255, 255, 1))
  &>div:last-child
    width 100px
    height 60px
    display flex
    justify-content center
    align-items center
    background-color #fff
    div
     font-size 30px
     color #666
</style>


