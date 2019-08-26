<template>
  <div class="loading-wrap" v-show="appear">
    <i class="loading hardWare eleCircle"></i>
    <span class="loading-text"></span>
  </div>
</template>

<script>
export default {
  name: 'bling',
  props: {
    appear: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @-webkit-keyframes eleCircle {
    0% {
      -webkit-transform: rotate(0deg)
    }

    20% {
      -webkit-transform: rotate(72deg)
    }

    40% {
      -webkit-transform: rotate(144deg)
    }

    60% {
      -webkit-transform: rotate(216deg)
    }

    80% {
      -webkit-transform: rotate(288deg)
    }

    100% {
      -webkit-transform: rotate(360deg)
    }
  }

  @keyframes eleCircle {
    0% {
      transform: rotate(0deg)
    }

    20% {
      transform: rotate(72deg)
    }

    40% {
      transform: rotate(144deg)
    }

    60% {
      transform: rotate(216deg)
    }

    80% {
      transform: rotate(288deg)
    }

    100% {
      transform: rotate(360deg)
    }
  }

  //旋转
  .eleCircle {
    -moz-animation: eleCircle 2s linear infinite;
    -webkit-animation: eleCircle 2s linear infinite;
    animation: eleCircle 2s linear infinite;
  }

  .loading-wrap {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 9999;
  }

  .loading {
    background-image: url(./loading.png);
    background-position: 0 0;
    width: 23px;
    height: 23px;
    top: 50%;
    left: 50%;
    margin: -12px 0 0 -12px;
    background-size: 122px;
    position: absolute;
  }

  .loading-text {
    background-image: url(./loading.png);
    background-position: -23px 0;
    width: 99px;
    height: 11px;
    top: 50%;
    left: 50%;
    margin: 25px 0 0 -50px;
    background-size: 122px;
    position: absolute;
  }

  .hardWare {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }
</style>
