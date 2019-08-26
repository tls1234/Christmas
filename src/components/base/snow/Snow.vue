<template>
  <canvas id="snow"></canvas>
</template>

<script>
  const MAX_SNOWFLAKES = 20

  export default {
    name: 'snow',
    methods: {
      snow: function () {
        this.snowTask.run()
      }
    },
    mounted() {
      this.snowTask = new Task('snow', MAX_SNOWFLAKES)
      this.snow()
    },
    data() {
      return {
        snowTask: null
      }
    }
  }

//  雪花
  class SnowFlake {
    constructor (contextWidth, contextHeight) {
      this.borderWidth = contextWidth
      this.borderHeight = contextHeight
      this.x = Math.round(Math.random() * contextWidth)
      this.y = -10
      this.speed = Math.round(3 * Math.random()) + 1
      this.width = Math.random() + 1
      this.drift = Math.random()
    }

//    激活雪花
    active() {
      if (this.y < this.borderHeight) {
        this.y += this.speed
        if (this.y > this.borderHeight) this.y = -5
        this.x += this.drift
        if (this.x > this.borderWidth) this.x = 0
      } else {
        throw new Error('waste flake')
      }
    }
  }

//  容器
  class Can {
    constructor (id) {
      this.width = screen.width
      this.height = screen.height
      this.target = document.getElementById(id)
      this.context = this.target.getContext('2d')
      this.context.canvas.width = this.width
      this.context.canvas.height = this.height
      this.copyCanvas = document.createElement('canvas')
      this.copyContext = this.copyCanvas.getContext('2d')
      this.copyContext.canvas.width = this.width
      this.copyContext.canvas.height = this.height
    }

    init() {
      this.context.save()
      this.context.clearRect(0, 0, this.width, this.height)
      this.copyContext.clearRect(0, 0, this.width, this.height)
    }

  }

//  触发下雪任务
  class Task {
    constructor (id, maxFlakes = 100) {
      this.id = id
      this.maxFlakes = maxFlakes
      this.can = new Can(id)
      this.snowFlakes = new Set()
    }

    _generateFlake() {
      let flake = new SnowFlake(this.can.width, this.can.height)
      if (this.snowFlakes.size === this.maxFlakes) {
        throw new Error('Limited maxFlakes!')
      } else {
        this.snowFlakes.add(flake)
      }
    }

    _drawFlake() {
      let drawListTask = []
      for (let flake of this.snowFlakes) {
        let can = this.can
        let task = new Promise(function() {
          can.copyContext.beginPath()
          can.copyContext.arc(flake.x, flake.y, flake.width, 0, 2 * Math.PI, !1)
          can.copyContext.fillStyle = '#ffffff'
          can.copyContext.fill()
          can.context.drawImage(can.copyCanvas, 0, 0, can.width, can.height)
          can.context.restore()
        })
        drawListTask.push(task)
      }
      Promise.all(drawListTask)
    }

    _activeFlake() {
      for (let flake of this.snowFlakes) {
        setTimeout(() => {
          try {
            flake.active()
          } catch (error) {
            this.snowFlakes.delete(flake)
            this._generateFlake()
          }
        })
      }
    }

    run() {
      let interval = setInterval(() => {
        try {
          this._generateFlake()
        } catch (error) {
          clearInterval(interval)
        }
      }, 200)
      this.can.init()
      this._drawFlake()
      setInterval(() => {
        this._activeFlake()
        this.can.init()
        this._drawFlake()
      }, 30)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #snow {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
    z-index: 9000;
  }
</style>
