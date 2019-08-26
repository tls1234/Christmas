<template>
  <div id="app">

    <!--路由显示想要组件-->
    <router-view></router-view>

    <!--预加载-->
    <loading class="loading_container" :appear="!loaded"></loading>

    <!--分享提示-->
    <sharepage></sharepage>

    <!--下雪特效-->
    <snow></snow>

    <audio id="audio" src="http://nilexsj.com/static/bgm.mp3" loop="loop" autoplay="true"></audio>
  </div>
</template>

<script>
  import SharePage from './components/base/share_page/SharePage'
  import Snow from './components/base/snow/Snow'
  import Loading from './components/base/loading/Loading'
  import SourceLoader from './common/scripts/SourceLoader'
  import FastClick from 'fastclick'

  export default {
    name: 'app',
    components: {
      'sharepage': SharePage,
      'snow': Snow,
      'loading': Loading
    },
    created() {
      document.documentElement.style.fontSize = window.innerWidth / 3.2 + 'px'
      FastClick.attach(document.body)
      document.body.addEventListener('touchstart', function() { document.getElementById('audio').play() }, true)
    },
    mounted() {
      let loader = new SourceLoader()
      let tasks = loader.getLoadingPromises()
      Promise.all(tasks).then(() => {
        console.log('loaded')
        this.loaded = true
      }, () => {
        console.log('load fail')
        setTimeout(() => {
          this.loaded = true
        }, 1000)
      })
    },
    data() {
      return {
        loaded: false
      }
    }
  }
</script>

<style lang="scss">
  #app {
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 5.04rem;
    text-align: center;
    font-size: 1.4rem;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    margin: 0;
    font-family:"SimHei","Microsoft Yahei","微软雅黑",Arial,Helvetica,sans-serif,"宋体";
    color: rgb(79, 79, 79);
    background-image: url(./common/image/bg_common.jpg);
    background-size: cover;
    background-position: center;

    .loading_container {
      background-color: #d1121a;
    }
  }
</style>
