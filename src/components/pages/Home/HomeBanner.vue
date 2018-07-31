<template>
  <div class="app-home-banner swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
              <img src="https://b-ssl.duitang.com/uploads/item/201807/25/20180725153503_XmLvt.thumb.750_0_c.jpeg" alt="">
          </div>
          <div class="swiper-slide">
              <img src="https://b-ssl.duitang.com/uploads/item/201807/25/20180725153503_XmLvt.thumb.750_0_c.jpeg" alt="">
          </div>
      </div>
      <div class="swiper-pagination"></div>
  </div>
</template>

<script>

import Swiper from 'swiper'

export default {
  name: 'AppHomeBanner',
  mounted() {
      new Swiper('.swipei')
  },
}
</script>
<style scoped lang = "scss">

</style>