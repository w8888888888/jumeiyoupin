<template>
  <div id="ding">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#ding {
  height: 60px;
  box-shadow: 0px 0px 5px #ccc;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  background: #FC5079;
  color:white;
  text-align: center;
  line-height: 60px;
}
</style>