const SOURCES = [
  require('../image/bg_common.jpg'),
  require('../../components/base/top_layers/rule_detail.png'),
  require('../../components/base/top_layers/lace_bottom.png'),
  require('../../components/base/top_layers/lace_top.png'),
  require('../../components/base/tree/tree.png'),
  require('../../components/base/title_word/title.png'),
  require('../../components/main/p2/image/logo.png'),
  require('../../components/main/p3/image/ledi_color.png'),
  require('../../components/main/p3/image/ledi_white.png'),
  require('../../components/main/p3/image/btn_start.png'),
  require('../../components/main/p3/image/btn_start_up.png'),
  require('../../components/main/p5/image/btn_award.png'),
  require('../../components/main/p5/image/btn_award_up.png'),
  require('../../components/main/p6/image/gift_tv.png'),
  require('../../components/main/p6/image/msg_word03.png'),
  require('../../components/main/p6/image/gift_detail.png'),
  require('../../components/base/bling/bling.png')
]

class SourceLoader {
  constructor () {
    this.loaded = false
    this.sourceNum = 0
    this.loadedNum = 0
    this.loadTask = []
  }

  loadImageAsync(url) {
    let father = this
    return new Promise(function(resolve, reject) {
      var image = new Image()
      father.sourceNum++

      image.onload = function() {
        father.loadedNum++
        resolve(image.src)
      }

      image.onerror = function() {
        reject(new Error('Could not load image at ' + url))
      }

      image.src = url
    })
  }

  getLoadingPromises() {
    for (let url of SOURCES) {
      this.loadTask.push(this.loadImageAsync(url))
    }
    return this.loadTask
  }
}

export default SourceLoader
