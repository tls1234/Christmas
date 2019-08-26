<template>
  <div :class="[robotClass, robotName]"></div>
</template>

<script>
export default {
  name: 'cartoon',
  props: ['robot'], // options: ['ledi', 'huang', 'mei']
  data() {
    return {
      robotClass: 'robot',
      robotName: this.robot
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .robot {
    background-size: 100% 100%;
    position: absolute;
    z-index: 8000;
  }

  .ledi {
    background-image: url("./robot_ledi.png");
    width: 0.875rem;
    height: 0.73rem;
  }

  .huang {
    background-image: url("./robot_huang.png");
    width: 0.685rem;
    height: 0.565rem;
  }

  .mei {
    background-image: url("./robot_mei.png");
    width: 0.41rem;
    height: 0.45rem;
  }
</style>
