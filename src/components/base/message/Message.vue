<template>
  <div class="showmsg" v-show="appear" @click="fadeMessage">
    <vertical-center>
      <div class="content">
        <p v-for="message in messageList">
          {{ message }}
        </p>
      </div>
    </vertical-center>
  </div>
</template>

<script>
  import VerticalCenter from '../vertical_center/VerticalCenter.vue'

  export default {
    name: 'message',
    props: {
      appear: {
        type: Boolean,
        default: false
      },
      messageList: {
        type: Array
      }
    },
    components: {
      'vertical-center': VerticalCenter
    },
    methods: {
      fadeMessage: function () {
        this.$emit('fadeMessage')
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
  .showmsg {
    position: absolute;
    z-index: 9999;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    .content {
      color: white;
      margin: auto;
      text-align: center;
      font-size: 0.12rem;
    }
    p {
      font-size: 0.12rem;
      padding: 0.03rem 0;
    }
  }
</style>
