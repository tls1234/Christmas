<template>
  <div id="top_layers">

    <!--信息框-->
    <message class="message" :messageList="message.list" :appear="message.appear" @fadeMessage="message.appear = false"></message>

    <div class="lace_top">
      <img src="./lace_top.png" class="pic_wrap">
    </div>

    <div class="lace_bottom">
      <img src="./lace_bottom.png" class="pic_wrap">
    </div>

    <div v-show="showMenu" class="menu">
      <div class="btn btn_rule" @click="showRule = true">规则</div>
      <div class="btn btn_code" @click="showCode">我的幸运码</div>
      <div class="btn btn_myaward" @click="showAward" v-show="show_award_btn">我的奖品</div>
    </div>

    <vertical-center v-show="showRule" class="content">
      <div class="rule_wrap">
        <img src="./rule_detail.png" class="rule_detail">
        <div class="btn_cancel" @click="cancel"></div>
      </div>
    </vertical-center>

    <slot></slot>

  </div>
</template>

<script>
  import VerticalCenter from '../vertical_center/VerticalCenter'
  import Message from '../../base/message/Message'

  export default {
    name: 'top_layers',
    components: {
      'message': Message,
      'vertical-center': VerticalCenter
    },
    props: {
      show_menu: {
        type: Boolean,
        default: false
      },
      show_rule: {
        type: Boolean,
        default: false
      },
//    options: ['disappear', 'forward'], disappear: 隐藏显示规则, forward: 关闭规则页并跳到主页面
      cancel_action: {
        type: String,
        default: 'disappear'
      },
      show_award_btn: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      cancel: function () {
        if (this.cancel_action === 'disappear') {
          this.showRule = false
        } else if (this.cancel_action === 'forward') {
          this.$router.push('P2')
        }
      },
      showCode: function () {
        let luckyNumListJSON = localStorage.luckyNumList
        if (luckyNumListJSON === undefined) {
          this.message.list = ['你还未许愿噢~', '赶紧去许愿吧', '提示：再次点击屏幕返回主页面']
          this.message.appear = true
          return
        }
        let luckyNumList = JSON.parse(luckyNumListJSON)
        if (luckyNumList.length === 0) {
          this.message.list = ['你还未许愿噢~', '赶紧去许愿吧', '提示：再次点击屏幕返回主页面']
        } else {
          this.message.list = luckyNumList.concat('提示：再次点击屏幕返回主页面')
        }
        this.message.appear = true
      },
      showAward: function () {
        let award = localStorage.award
        if (award === undefined || award === '') {
          this.message.list = ['你还未抽奖噢~', '赶紧去抽奖吧', '提示：再次点击屏幕返回主页面']
          this.message.appear = true
        } else {
          this.$router.replace({name: 'P6', params: { award }})
        }
      }
    },
    data() {
      return {
        showRule: this.show_rule,
        showMenu: this.show_menu,
        message: {
          list: ['我是消息'],
          appear: false
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../../common/style/common";
  #top_layers {
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
  }

  .message {
    pointer-events: auto;
  }

  .lace_bottom, .lace_top {
    width: 100%;
    background-size: cover;
    background-position-x: center;
    position: absolute;
    pointer-events: none;
  }

  .lace_top {
    background-image: url("./lace_top.png");
    top: 0;
    z-index: 8000;
  }

  .lace_bottom {
    background-image: url("./lace_bottom.png");
    bottom: 0;
    z-index: 8888;
  }

  .menu {
    position: fixed;
    bottom: 0;
    z-index: 9998;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0.03rem 0.02rem;
    width: 100%;
    .btn {
      display: inline-block;
      float: left;
      margin: auto 0.05rem;
      pointer-events: auto;
    }
  }

  @-webkit-keyframes bigger {
    0% {
      -webkit-transform: scale(0.8);
    }
    100% {
      -webkit-transform: scale(1);
    }
  }
  @keyframes bigger {
    0% {
      transform: scale(0.8);
    }
    100% {
      -webkit-transform: scale(1);
    }
  }
  .bigger {
    -moz-animation: bigger 0.3s ease-in-out infinite;
    -webkit-animation: bigger 0.3s ease-in-out infinite;
    animation: bigger 0.3s ease-in-out infinite;
  }

  .btn_cancel {
    width: 0.47rem;
    height: 0.47rem;
    position: absolute;
    background-image: url('./btn_cancle.png');
    background-size: cover;
    -moz-animation: bigger 0.3s ease-in-out infinite;
    -webkit-animation: bigger 0.3s ease-in-out infinite;
    animation: bigger 0.3s ease-in-out infinite;
    top: -0.2rem;
    right: -0.2rem;
    z-index: 9999;
    pointer-events: auto;
  }

  .rule_wrap {
    width: 2.605rem;
    height: 3.295rem;
    margin: 0 auto;
    padding: 0.385rem 0;
    border-radius: 0.1rem;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 8100;
    position: relative;
  }

  .rule_detail {
    width: 2.44rem;
    height: 3.295rem;
    pointer-events: none;
  }
</style>
