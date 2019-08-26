<template>
  <div id="p5">

    <!--信息框-->
    <message :messageList="message.list" :appear="message.appear" @fadeMessage="message.appear = false"></message>

    <top-layers :show_menu="true"></top-layers>

    <vertical-center class="content">

      <div class="btn disappear" slot="outer">查看获奖情况</div>
      <cartoon robot="ledi" class="robot1" slot="outer"></cartoon>
      <cartoon robot="huang" class="robot2" slot="outer"></cartoon>

      <div class="sub_content">
        <div :class="dialogClass">
          <lantern class="lantern1 part" line_length="0.68rem"></lantern>
          <lantern class="lantern2 part" line_length="0.38rem"></lantern>
        </div>
        <div v-if="wishConfirmed" @click="awardFunc">
          <div class="lucky_num">
            <p class="num">{{ luckyNum }}</p>
          </div>
          <div class="msg_warn"></div>
          <div class="btn_award" @click="awardFunc"></div>
        </div>
        <tree class="tree" :bling="true" v-else>
          <div class="btn_award" @click="awardFunc"></div>
        </tree>
      </div>
    </vertical-center>

  </div>
</template>

<script>
  import TopLayers from '../../base/top_layers/TopLayers'
  import VerticalCenter from '../../base/vertical_center/VerticalCenter'
  import Cartoon from '../../base/cartoon/Cartoon'
  import Lantern from '../../base/lantern/Lantern'
  import Tree from '../../base/tree/Tree'
  import Message from '../../base/message/Message'

  export default {
    name: 'p5',
    components: {
      'message': Message,
      'top-layers': TopLayers,
      'cartoon': Cartoon,
      'vertical-center': VerticalCenter,
      'lantern': Lantern,
      'tree': Tree
    },
    methods: {
      awardFunc: function () {
        if (this.award) {
          this.message.list = ['你已经抽过奖啦！', '每位小朋友只能参与一次抽奖噢！', '提示：再次点击屏幕返回主页面']
          this.message.appear = true
          return
        }
        let awardList = ['一等奖', '二等奖', '三等奖', '四等奖', '五等奖', '谢谢参与']
        let randomIndex = Math.floor(Math.random() * awardList.length)
        this.award = awardList[randomIndex]
        localStorage.award = this.award
        console.info(this.award)
        this.$router.replace({name: 'P6', params: { award: this.award }})
      }
    },
    data () {
      return {
        message: {
          list: ['我是消息'],
          appear: false
        },
        dialogClass: {
          msg_dialog: true,
          dialog1: !!this.$route.params.luckyNum,
          dialog2: !this.$route.params.luckyNum
        },
        wishConfirmed: !!this.$route.params.luckyNum,
        luckyNum: this.$route.params.luckyNum,
        award: localStorage.award
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "./style/p5";
</style>
