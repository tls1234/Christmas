<template>
  <div class="title"></div>
</template>

<script>
export default {
  name: 'title',
  props: {
    showMenu: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../../common/style/common";
  .title {
    background-image: url("./title.png");
    background-size: 100% 100%;
    width: 1.835rem;
    height: 0.705rem;
    margin: 0 auto;
  }
</style>
