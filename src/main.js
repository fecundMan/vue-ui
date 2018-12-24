// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/lib/rem'
import './assets/style/base.css'
import FastClick from 'fastclick'

// import * as filters from './filters'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

// 日志开关
if (location.href.indexOf('debug') === -1) {
  console.log = _ => {}
}

// 注册全局所有 filter.
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
