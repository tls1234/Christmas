<template>
  <div id="pre">
    <top-layers>
      <cartoon robot="ledi" class="robot1"></cartoon>
      <cartoon robot="huang" class="robot2"></cartoon>
    </top-layers>

    <vertical-center class="content">
      <p>活动19号才开始哦~</p>
      <p>请耐心等待~</p>
    </vertical-center>
  </div>
</template>

<script>
  import TopLayers from '../../base/top_layers/TopLayers'
  import VerticalCenter from '../../base/vertical_center/VerticalCenter'
  import Cartoon from '../../base/cartoon/Cartoon'

  export default {
    name: 'pre',
    components: {
      'top-layers': TopLayers,
      'vertical-center': VerticalCenter,
      'cartoon': Cartoon
    },
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../../common/style/common";
  #pre {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .robot1 {
    left: 0.6rem;
    top: 0.1rem;
  }

  .robot2 {
    right: 0.6rem;
    top: 0.55rem;
  }

  .content {
    p {
      font-size: 0.14rem;
      color: whitesmoke;
      padding: 0.03rem 0;
    }
  }
</style>
