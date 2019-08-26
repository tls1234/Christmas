// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

const INIT_WISH_LIST = [
  '我的愿望是可以天天看超级飞侠',
  '我想要一个大大的圣诞树',
  '和乐迪拍照一起过圣诞节',
  '收到乐迪亲自送的圣诞礼物就是我的愿望，希望能够实现，很期待喔~~~'
]
if (localStorage.wishList === undefined) {
  let wishJson = JSON.stringify(INIT_WISH_LIST)
  localStorage.wishList = wishJson
}
if (localStorage.address === undefined) localStorage.address = ''
if (localStorage.tel === undefined) localStorage.tel = ''

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
