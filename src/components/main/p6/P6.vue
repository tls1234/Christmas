<template>
  <div id="p6">

    <!--信息框-->
    <message :messageList="message.list" :appear="message.appear" @fadeMessage="message.appear = false"></message>

    <top-layers :show_menu="true" :show_award_btn="false">
      <cartoon robot="ledi" class="robot1"></cartoon>
      <cartoon robot="huang" class="robot2"></cartoon>
      <cartoon robot="mei" class="robot3"></cartoon>
    </top-layers>

    <div class="content">

      <div class="dialog" v-if="award === '一等奖'">
        <div class="msg"></div>
        <div class="award"></div>
        <div class="form">
          <div class="input_wrap">
            <input class="input" v-model.trim="info.address" placeholder="请输入您的地址" id="addr" type="text"/>
          </div>
          <div class="input_wrap">
            <input class="input" v-model.trim="info.tel" placeholder="请输入您的电话" id="tel" type="tel"/>
          </div>
          <div class="ci" @click="confirmInfo"></div>
        </div>
      </div>

      <div class="dialog" v-else-if="['二等奖', '三等奖', '四等奖', '五等奖'].includes(award)">
        <div class="msg"></div>
        <div class="msg2"></div>
        <div class="luckybag"></div>
        <div class="msg3"></div>
      </div>

      <div class="dialog" v-else>
        <div class="msg4"></div>
      </div>

      <div class="award_rule">
        <div class="word"></div>
        <div class="detail_wrap">
          <div class="btn_detail" @click="showGift = !showGift"></div>
          <div class="award_detail" v-show="showGift">
            <img src="./image/gift_detail.png"/>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import TopLayers from '../../base/top_layers/TopLayers'
  import Cartoon from '../../base/cartoon/Cartoon'
  import Message from '../../base/message/Message'

  export default {
    name: 'p6',
    components: {
      'top-layers': TopLayers,
      'cartoon': Cartoon,
      'message': Message
    },
    methods: {
      confirmInfo: function () {
        this.message.list = []
        if (this.info.address.length === 0) {
          this.message.list.push('地址不能为空')
        }
        if (this.info.tel.length === 0) {
          this.message.list.push('手机号码不能为空')
        } else if (!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(this.info.tel)) {
          this.message.list.push('为方便与您联系, 请输入正确的手机号码')
        }
//        本地模拟提交信息
        if (this.message.list.length === 0) {
          this.message.list = ['已经记下你的信息啦', '礼品敬请期待噢~']
          localStorage.address = this.info.address
          localStorage.tel = this.info.tel
        }
        this.message.list.push('提示：再次点击屏幕返回主页面')
        this.message.appear = true
      }
    },
    data () {
      return {
        award: this.$route.params.award || localStorage.award,
        showGift: false,
        message: {
          list: ['我是消息'],
          appear: false
        },
        info: {
          tel: localStorage.tel,
          address: localStorage.address
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "style/p6";
</style>
