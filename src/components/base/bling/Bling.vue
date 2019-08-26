<template>
  <div :class="classObject"></div>
</template>

<script>
export default {
  name: 'bling',
  props: {
    action: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      classObject: {
        bling: true,
        bling_action: this.action
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../../common/style/common";

  @-webkit-keyframes bling {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes bling {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
  .bling_action {
    -moz-animation: bling 1s ease-in-out infinite;
    -webkit-animation: bling 1s ease-in-out infinite;
    animation: bling 1s ease-in-out infinite;
  }

  .bling {
    top: 0.31rem;
    left: 0.28rem;
    z-index: 7999;
    background-image: url("./bling.png");
    background-size: 100% 100%;
    width: 1.785rem;
    height: 2.45rem;
    position: absolute;
    pointer-events: none;
  }
</style>
