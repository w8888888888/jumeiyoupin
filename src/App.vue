<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbaritem path="/shou" activecolor="red">
        <img src="./assets/img/tabbar/1.png" alt slot="itemicon" />
        <img src="./assets/img/tabbar/11.png" alt slot="itemiconActive" />
        <div slot="itemtitle">首页</div>
      </tabbaritem>
      <tabbaritem path="/pin">
        <img src="./assets/img/tabbar/2.png" alt slot="itemicon" />
        <img src="./assets/img/tabbar/22.png" alt slot="itemiconActive" />
        <div slot="itemtitle">拼团</div>
      </tabbaritem>
      <tabbaritem path="/gou">
        <img src="./assets/img/tabbar/3.png" alt slot="itemicon" />
        <img src="./assets/img/tabbar/33.png" alt slot="itemiconActive" />
        <div slot="itemtitle">购物车</div>
      </tabbaritem>
      <tabbaritem path="/wo">
        <img src="./assets/img/tabbar/4.png" alt slot="itemicon" />
        <img src="./assets/img/tabbar/44.png" alt slot="itemiconActive" />
        <div slot="itemtitle">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>
<script>
import basecss from "./assets/css/base.css"
import tabbar from "./components/tabbar/tabbar";
import tabbaritem from "./components/tabbar/tabbaritem";
import ding from "./components/dingbu/ding";

export default {
  components: {
    tabbar,
    tabbaritem,
    ding
  }
};
</script>
<style>

</style>
