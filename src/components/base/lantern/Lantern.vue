<template>
  <div class="lantern">
    <div class="line" :style="{ height: lineLength}"></div>
    <div class="ball"></div>
  </div>
</template>

<script>
export default {
  name: 'lantern',
  props: {
    line_length: {
      type: String,
      default: '0.88rem'
    }
  },
  data() {
    return {
      lineLength: this.line_length
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .lantern {
    z-index: 8000;
    .line {
      background-image: url("./lantern_line.png");
      background-size: contain;
      background-repeat: repeat-y;
      width: 0.01rem;
      margin-left: 0.215rem;
      margin-right: -0.215rem;
    }
    .ball {
      background-image: url("./lantern.png");
      background-size: 100% 100%;
      width: 0.415rem;
      height: 0.415rem;
    }
  }
</style>
