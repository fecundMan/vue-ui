<template>
  <div class="notice" v-show="show">
    <div class="msg_container">
      <div class="list" v-for="(val, key) in list" :key="key">
        {{val}}
      </div>
    </div>
    <div class="close" @click="show = false"></div>
  </div>
</template>

<script>
export default {
  name: 'notice',
  data () {
    return {
      show: true,
      // 需要轮播的信息，需要把首个元素在尾部也存一个
      list: [
        '恭喜用户XXXXXXX获得一部iPhone手机',
        '恭喜用户XXXXXXX获得一部小米笔记本电脑',
        '恭喜用户XXXXXXX获得一部空气净化器',
        '恭喜用户XXXXXXX获得一部M20扫地机器人',
        '恭喜用户XXXXXXX获得咖啡机',
        '恭喜用户XXXXXXX获得一部iPhone手机'
      ],
      num: 0,
      // 控制滚动的步伐
      step: 120
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const msgContainer = this.$el.getElementsByClassName('msg_container')[0]
      this.animation(msgContainer)
    },
    animation (msgContainer) {
      const self = this
      requestAnimationFrame(function () {
        self.num++
        const marginTop = parseInt(msgContainer.style && msgContainer.style.marginTop ? msgContainer.style.marginTop : 0)
        const h = msgContainer.clientHeight
        if (self.num % self.step === 0 && Math.abs(marginTop / h) < self.list.length - 2) {
          msgContainer.classList.add('active')
          msgContainer.style.marginTop = marginTop - h + 'px'
          self.animation(msgContainer)
        } else if (self.num % self.step === 0 && Math.abs(marginTop / h) >= self.list.length - 2) {
          msgContainer.style.marginTop = marginTop - h + 'px'
          setTimeout(() => {
            msgContainer.classList.remove('active')
            setTimeout(() => {
              msgContainer.style.marginTop = 0 + 'px'
              self.animation(msgContainer)
            }, 0)
            self.num += 10
          }, self.step / 2 * 10)
        } else {
          self.animation(msgContainer)
        }
      })
    }
  }
}
</script>

<style scoped>
  .notice{
    width: 100%;height: 1.5rem;
    position: fixed;
    left:0;top:0;
    border-bottom: 1px solid #eee;
    background: #f30096;
    color: #fff;
    padding-left: 2rem;
    overflow: hidden;
  }
  .notice:before{
    content: '';
    position: absolute;
    left:0;top:0;
    width: 1.2rem;height: 100%;
    background: inherit;
    background-image: url("../assets/images/tips.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .close{
    content: '';
    color: #fff;
    position: absolute;
    right:0;top:0;
    background: inherit;
    background-image: url("../assets/images/close.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width:1.2rem;
    height:100%;
  }
  .msg_container{
    width: 100%;
    height: 100%;
    text-align: left;
  }
  .msg_container.active{
    transition: margin-top .5s linear;
  }
</style>
