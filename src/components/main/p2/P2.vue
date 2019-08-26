<template>
  <div id="p2">

    <top-layers></top-layers>

    <vertical-center class="content">
      <div class="sub_content">
        <cartoon robot="ledi" class="robot1"></cartoon>
        <cartoon robot="huang" class="robot2"></cartoon>
        <title-word></title-word>
        <tree class="tree" :bling="true">
          <cartoon robot="ledi" class="robot3"></cartoon>
          <cartoon robot="huang" class="robot4"></cartoon>
          <cartoon robot="mei" class="robot5"></cartoon>
        </tree>
        <lantern class="lantern1 part"></lantern>
        <lantern class="lantern2 part"></lantern>
      </div>
    </vertical-center>

    <div class="btn_start part" @click="start"></div>
   </div>
</template>

<script>
  import TopLayers from '../../base/top_layers/TopLayers'
  import VerticalCenter from '../../base/vertical_center/VerticalCenter'
  import Cartoon from '../../base/cartoon/Cartoon'
  import TitleWord from '../../base/title_word/TitleWord'
  import Lantern from '../../base/lantern/Lantern'
  import Tree from '../../base/tree/Tree'

  export default {
    name: 'p2',
    components: {
      'top-layers': TopLayers,
      'vertical-center': VerticalCenter,
      'cartoon': Cartoon,
      'title-word': TitleWord,
      'lantern': Lantern,
      'tree': Tree
    },
    methods: {
      start: function () {
        this.$router.push('P3')
      }
    },
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "./style/p2";
</style>
