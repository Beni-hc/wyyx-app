<template>
  <div>
    <banner></banner>
    <classify></classify>
    <promotion></promotion>
    <bodylist1></bodylist1>
    <bodylist2></bodylist2>
    <bodylist3></bodylist3>
    <bodylist4></bodylist4>
    <choiceness></choiceness>
    <tagend></tagend>
    <div class="dibian"></div>
  </div>
</template>
<script>
import banner from "./homebody/banner";
import classify from "./homebody/classify";
import choiceness from "./homebody/choiceness";
import bodylist1 from "./homebody/bodyList1";
import bodylist2 from "./homebody/bodyList2";
import bodylist3 from "./homebody/bodyList3";
import bodylist4 from "./homebody/bodyList4";
import promotion from "./homebody/promotion";
import tagend from "./homebody/tagend";
export default {
  components: {
    banner,
    classify,
    choiceness,
    bodylist1,
    bodylist2,
    bodylist3,
    bodylist4,
    promotion,
    tagend,
  },
};
</script>
<style scoped>
.dibian {
  width: 100%;
  height: 98px;
}
</style>