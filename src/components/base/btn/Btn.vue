<template>
  <div :class="btn_name"></div>
</template>

<script>
  export default {
    name: 'btn',
    props: {
      btn_name: {
        type: String,
        default: 'ci'
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
  @-webkit-keyframes btn_ci {
    0% {
      background-image: url('./btn_ci.png');
    }
    15% {
      background-image: url('./btn_ci_up.png');
    }
    30% {
      background-image: url('./btn_ci.png');
    }
    45% {
      background-image: url('./btn_ci_up.png');
    }
    60% {
      background-image: url('./btn_ci.png');
    }
    100% {
      background-image: url('./btn_ci.png');
    }
  }
  @keyframes btn_ci {
    0% {
      background-image: url('./btn_ci.png');
    }
    15% {
      background-image: url('./btn_ci_up.png');
    }
    30% {
      background-image: url('./btn_ci.png');
    }
    45% {
      background-image: url('./btn_ci_up.png');
    }
    60% {
      background-image: url('./btn_ci.png');
    }
    100% {
      background-image: url('./btn_ci.png');
    }
  }
  .ci {
    width: 1.75rem;
    height: 0.32rem;
    background-size: cover;
    background-image: url("./btn_ci.png");
    margin: auto;
    -moz-animation: btn_ci 1.3s infinite step-start;
    -webkit-animation: btn_ci 1.3s infinite step-start;
    animation: btn_ci 1.3s infinite step-start;
  }

</style>
