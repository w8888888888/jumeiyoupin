<template>
  <div>
    <ding>
      <sou></sou>
    </ding>
    <div class="div">
      <h1>首页</h1>
    </div>
  </div>
</template>

<script>
import ding from "../../components/dingbu/ding";
import sou from "./shouzu/sou/sou";

export default {
  components: {
    ding,
    sou
  }
};
</script>

<style>
.div {
  margin-top: 60px;
}

</style>