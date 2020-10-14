<template>
    <div class='box'>
        <router-view></router-view>
        <FooterNav />
    </div>
</template>

<script>
import FooterNav from './components/FooterNav/FooterNav'
export default {
    name: 'app',
    components:{
        FooterNav
    }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'PingFangSC-Light,helvetica,Heiti SC';
  outline: none;
}
body {
     font-size: 12px;
}
a {
  text-decoration: none;
  color: black;
}
ul li {
  list-style: none;
}
.box {
  background-color: #eee;
}

</style>
