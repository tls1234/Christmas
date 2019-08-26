<template>
  <div id="p3">

    <top-layers></top-layers>

    <vertical-center class="content">
      <div class="sub_content">
        <cartoon robot="ledi" class="robot1"></cartoon>
        <cartoon robot="huang" class="robot2"></cartoon>
        <title-word></title-word>
        <span v-show="isBegin" class="time_counter">{{ timeRemain }}</span>
        <bling class="bling1"></bling>
        <bling class="bling2"></bling>
        <div class="ledi_block">
          <div class="ledi_color">
            <!--line 1-->
            <div class="ledi_slice01">
              <slice class="slice01" :isBegin="isBegin" @sliceActive="counter"></slice>
              <slice class="slice02" :isBegin="isBegin" @sliceActive="counter"></slice>
              <slice class="slice03" :isBegin="isBegin" @sliceActive="counter"></slice>
            </div>
            <!--line 2-->
            <div class="ledi_slice04">
              <slice class="slice01" :isBegin="isBegin" @sliceActive="counter"></slice>
              <slice class="slice02" :isBegin="isBegin" @sliceActive="counter"></slice>
              <slice class="slice03" :isBegin="isBegin" @sliceActive="counter"></slice>
            </div>
            <!--line 3-->
            <div class="ledi_slice05">
              <slice class="slice01" :isBegin="isBegin" @sliceActive="counter"></slice>
              <slice class="slice02" :isBegin="isBegin" @sliceActive="counter"></slice>
              <slice class="slice03" :isBegin="isBegin" @sliceActive="counter"></slice>
            </div>
            <!--line 4-->
            <div class="ledi_slice06">
              <slice class="slice01" :isBegin="isBegin" @sliceActive="counter"></slice>
              <slice class="slice02" :isBegin="isBegin" @sliceActive="counter"></slice>
              <slice class="slice03" :isBegin="isBegin" @sliceActive="counter"></slice>
            </div>
            <!--line 5-->
            <div class="ledi_slice07">
              <slice class="slice01" :isBegin="isBegin" @sliceActive="counter"></slice>
              <slice class="slice02" :isBegin="isBegin" @sliceActive="counter"></slice>
              <slice class="slice03" :isBegin="isBegin" @sliceActive="counter"></slice>
              <slice class="slice04" :isBegin="isBegin" @sliceActive="counter"></slice>
            </div>
            <!--line 6-->
            <div class="ledi_slice08">
              <slice class="slice01" :isBegin="isBegin" @sliceActive="counter"></slice>
              <slice class="slice02" :isBegin="isBegin" @sliceActive="counter"></slice>
            </div>
            <!--line 7-->
            <div class="ledi_slice09">
              <slice class="slice01" :isBegin="isBegin" @sliceActive="counter"></slice>
              <slice class="slice02" :isBegin="isBegin" @sliceActive="counter"></slice>
            </div>
            <!--line 8-->
            <div class="ledi_slice10">
              <slice class="slice01" :isBegin="isBegin" @sliceActive="counter"></slice>
              <slice class="slice02" :isBegin="isBegin" @sliceActive="counter"></slice>
            </div>
          </div>
        </div>
      </div>
    </vertical-center>

    <div v-show="!isBegin" class="btn_start_wrap">
      <div class="btn_start_label">
        <div class="btn_start" @click.once="start"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopLayers from '../../base/top_layers/TopLayers'
  import VerticalCenter from '../../base/vertical_center/VerticalCenter'
  import Cartoon from '../../base/cartoon/Cartoon'
  import TitleWord from '../../base/title_word/TitleWord'
  import Bling from '../../base/bling/Bling'
  import Slice from '../../base/slice/Slice'

  const SLICELENGTH = 22
  const TOTALTIME = 15

  export default {
    name: 'p3',
    components: {
      'top-layers': TopLayers,
      'vertical-center': VerticalCenter,
      'cartoon': Cartoon,
      'title-word': TitleWord,
      'bling': Bling,
      'slice': Slice
    },
    methods: {
      start: function () {
        this.isBegin = true
        this.timeInterval = setInterval(() => {
          if (this.isFinished || this.$route.name !== 'P3') {
            clearInterval(this.timeInterval)
            return
          }
          this.timeRemain -= 1
          if (this.timeRemain === 0) {
            clearInterval(this.timeInterval)
            if (this.isFinished) this.$router.push('P4')
            else this.$router.push('P5')
          }
        }, 1000)
      },
      counter: function (event) {
        if (this.isFinished) return
        this.count += 1
        if (this.count === SLICELENGTH) {
          this.isFinished = true
          this.$router.push('P4')
        }
      }
    },
    data () {
      return {
        isBegin: false,
        isFinished: false,
        timeRemain: TOTALTIME,
        timeInterval: null,
        count: 0
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "./style/p3";
</style>
