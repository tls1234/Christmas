<template>
  <div class="share_page" v-show="appear"></div>
</template>

<script>
export default {
  name: 'sharePage',
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
  .share_page {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 9998;
    background-image: url(./sharehand.png);
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.7);
    background-position-y: 5%;
  }

</style>
