<template>
  <div id="entry">
    <div class="notify btn" @click="jump('/notice')">轮播消息-横向</div>
    <div class="notify btn" @click="jump('/notice1')">轮播消息-纵向</div>
  </div>
</template>

<script>
export default {
  name: 'entry',
  data () {
    return {
      uiList: [
        { name: '模态弹窗', path: '/dialog' }
      ]
    }
  },
  methods: {
    jump (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
  .btn{
    width: 60px;height: 44px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #00f3eb;
  }
</style>
