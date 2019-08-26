<template>
  <div class="vertical_middle">
    <slot name="outer"></slot>
    <div class="vertical_sub">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vertical_center'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .vertical_middle {
    display: table;
    height: 100%;
    margin: auto;

    .vertical_sub {
      display: table-cell;
      vertical-align: middle;
    }
  }
</style>
