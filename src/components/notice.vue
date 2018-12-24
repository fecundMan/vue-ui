<template>
  <div class="notice" v-show="show">
    <div class="msg_container">
      <div class="msg">{{msg}}</div>
      <div class="msg">{{msg}}</div>
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
      msg: '票码使用规则：请在猫眼App端进行兑换，限《毒液：致命守护者》单部影片，使用时效2018年11月2日至12月9日；通兑价格90元。'
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const msgContainer = this.$el.getElementsByClassName('msg_container')[0]
      const msgW = msgContainer.getElementsByClassName('msg')[0].clientWidth
      this.animation(msgContainer, msgW)
    },
    animation (msgContainer, width) {
      const self = this
      requestAnimationFrame(function () {
        const marginLeft = parseInt(msgContainer.style && msgContainer.style.marginLeft ? msgContainer.style.marginLeft : 0)
        if (marginLeft - 1 + width <= 0) {
          msgContainer.style.marginLeft = 0 + 'px'
          self.animation(msgContainer, width)
        } else {
          msgContainer.style.marginLeft = marginLeft - 1 + 'px'
          self.animation(msgContainer, width)
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
    width: 99999999px;
    height: 100%;
    text-align: left;
  }
  .msg{
    display: inline-block;
    width: auto;height: 100%;
    white-space: nowrap;
    padding-right: 5rem;
  }
</style>
