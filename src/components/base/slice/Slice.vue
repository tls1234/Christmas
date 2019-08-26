<template>
  <div :class="classObject" @click="sliceAction"></div>
</template>

<script>
export default {
  name: 'slice',
  props: {
    isBegin: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    sliceAction: function (event) {
      if (!this.isBegin || this.classObject.slice_clicked) return
      this.classObject.slice_clicked = true
      this.$emit('sliceActive')
    }
  },
  data() {
    return {
      classObject: {
        slice: true,
        slice_clicked: false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .slice {
    background-size: 2.59rem 2.74rem;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 9910;
  }
  .slice_clicked {
    background-image: url("./ledi_color.png");
  }
</style>
