<template>
  <div class="tr">
    <bling :action="true" v-if="bling"></bling>
    <slot></slot>
  </div>
</template>

<script>
  import Bling from '../../base/bling/Bling'

  export default {
    name: 'tree',
    props: {
      bling: {
        type: Boolean,
        default: false
      }
    },
    components: {
      'bling': Bling
    },
    data() {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .tree {
    background-image: url("./tree.png");
    background-size: 100% 100%;
    width: 2.7rem;
    height: 3.33rem;
    position: relative;
    margin: auto;
  }
</style>
