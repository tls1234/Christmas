<template>
  <div id="p4">

    <!--信息框-->
    <message :messageList="message.list" :appear="message.appear" @fadeMessage="message.appear = false"></message>

    <top-layers :show_menu="true">
      <cartoon robot="ledi" class="robot1"></cartoon>
      <cartoon robot="huang" class="robot2"></cartoon>
    </top-layers>

    <div class="wishes_wall">
      <div class="wish" v-for="wish in showedList">
        <div class="wish_wrap">
          <div class="user_wrap">
            <div class="headimg"></div>
            <div class="name">乐迪</div>
          </div>
          <div class="wish_word">
            {{ wish }}
          </div>
        </div>
      </div>
    </div>
    <div class="text_form">
      <div class="form_title"></div>
      <textarea class="text_input" v-model.trim="wishContent" placeholder="输入您的愿望"></textarea>
      <div class="ci" @click="confirmWish"></div>
    </div>
  </div>
</template>

<script>
  import TopLayers from '../../base/top_layers/TopLayers'
  import Cartoon from '../../base/cartoon/Cartoon'
  import Message from '../../base/message/Message'

  export default {
    name: 'p4',
    components: {
      'message': Message,
      'top-layers': TopLayers,
      'cartoon': Cartoon
    },
    created() {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData: function () {
//        读取缓存内容
        let wishListJSON = localStorage.wishList
        if (wishListJSON) {
          this.wishList = JSON.parse(wishListJSON)
        }
//        轮询输出内容
        let idx = 1
        clearInterval(this.showInterval)
        if (this.wishList.length > 0) this.showedList.push(this.wishList[0])
        this.showInterval = setInterval(() => {
          if (idx < this.wishList.length) {
            this.showedList.push(this.wishList[idx])
            idx += 1
          } else {
            this.showedList.push(this.wishList[0])
            if (this.wishList.length > 1) idx = 1
          }
        }, 2200)
      },
      confirmWish: function () {
        if (this.wishContent.length === 0) {
          console.info('必须输入愿望')
          this.message.list = ['要填入愿望', '乐迪才能帮你实现噢~', '提示：再次点击屏幕返回主页面']
          this.message.appear = true
        } else if (this.wishContent.length > 30) {
          console.info('愿望仅限30字以内')
          this.message.list = ['愿望仅限30字以内哦~', '提示：再次点击屏幕返回主页面']
          this.message.appear = true
        } else {
//        本地缓存愿望，本地模拟提交效果
          this.wishList.push(this.wishContent)
          let wishJson = JSON.stringify(this.wishList)
          localStorage.wishList = wishJson
//        随机生成幸运码并跳转到下一页
          let luckyNum = Math.random() * 10000
          let luckyNumListJSON = localStorage.luckyNumList
          let luckyNumList = []
          if (luckyNumListJSON !== undefined) {
            luckyNumList = JSON.parse(luckyNumListJSON)
          }
          luckyNum = (Array(5).join(0) + luckyNum).slice(-5)
          luckyNumList.push(luckyNum)
          let listJson = JSON.stringify(luckyNumList)
          localStorage.luckyNumList = listJson
          this.$router.replace({name: 'P5', params: { luckyNum }})
        }
      }
    },
    data () {
      return {
        wishContent: '',
        wishList: [],
        showedList: [],
        showInterval: null,
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
  @import "./style/p4";
</style>
