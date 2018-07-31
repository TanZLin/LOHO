// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//swiper css
import 'swiper/dist/css/swiper.min.css'

// 全局通用样式
import './stylesheets/main.scss'

//rem
import computed_rem from './modules/rem'

computed_rem() //计算rem

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
