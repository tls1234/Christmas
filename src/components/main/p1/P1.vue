<template>
  <div id="p1">
    <top-layers :show_menu="false" :show_rule="true" cancel_action="forward">
      <cartoon robot="ledi" class="robot1"></cartoon>
      <cartoon robot="huang" class="robot2"></cartoon>
    </top-layers>
  </div>
</template>

<script>
  import TopLayers from '../../base/top_layers/TopLayers'
  import Cartoon from '../../base/cartoon/Cartoon'

  export default {
    name: 'p1',
    components: {
      'top-layers': TopLayers,
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

  #p1 {
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
</style>
