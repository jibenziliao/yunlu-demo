<template>
  <div>
    <div class="search-bar">
      <a class="icon-box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiaoxi1"></use>
        </svg>
      </a>
      <div class="search-input">
        <a class="text">任你搜 任意搜</a>
        <a class="box">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo1"></use>
          </svg>
        </a>
      </div>
      <a class="button">登录|注册</a>
    </div>
    <div class="swiper-wrapper">
      <slide ref="slide" :autoPlay="isAutoPlay" :loop="isLoop" :showDot="isShowDot" :interval="interval" :threshold="threshold" :speed="speed">
        <div v-for="(item, index) in seeSwiperImgs" :key="index">
          <a :href="item.url">
            <img :src="item.url">
          </a>
        </div>
        <div class="dots">
          <span class="dot" :class="{active: swipeIndex === index }" v-for="(item, index) in seeSwiperImgs" :key="index"></span>
        </div>
      </slide>
    </div>
  </div>
</template>

<script>
import Slide from '../../components/slide/Slide'
export default {
  data () {
    return {
      seeSwiperImgs: [
        {
          id: 1,
          jumpDirectly: true,
          router: 'Download',
          url: 'http://oatl31bw3.bkt.clouddn.com/seeCarousel.png'
        }, {
          id: 2,
          jumpDirectly: true,
          router: 'Activity',
          url: 'http://oatl31bw3.bkt.clouddn.com/seeCarousel2.jpg'
        }, {
          id: 3,
          jumpDirectly: true,
          router: 'StoneWeb',
          url: 'http://oatl31bw3.bkt.clouddn.com/seeCarousel3.png'
        }
      ],
      swipeIndex: 0,
      turnToPrev: false,
      turnToNext: false,
      isAutoPlay: true,
      isLoop: true,
      isShowDot: true,
      speed: 400,
      threshold: 0.3,
      interval: 5000
    }
  },
  components: {
    Slide
  },
  methods: {
    bannerclick (item) {
      console.log(item)
    }
  },
  mounted () {
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables';
.search-bar {
  display: flex;
  align-items: center;
  height: 110px;
  line-height: 110px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: transparent;
  z-index: 2;
  .icon-box {
    width: 88px;
    height: inherit;
    display: block;
    text-align: center;
    svg {
      font-size: 40px;
      color: $white;
    }
  }
  .search-input {
    flex: 1;
    position: relative;
    margin-right: 26px;
    .text {
      font-size: 28px;
      color: #c2c2c2;
      height: 70px;
      line-height: 70px;
      padding-left: 102px;
      background-color: #FFF;
      border-radius: 40px;
      width: 100%;
      display: block;
      box-sizing: border-box;
    }
    .box {
      position: absolute;
      left: 10px;
      top: 0;
      height: 70px;
      line-height: 70px;
      width: 88px;
      text-align: center;
      color: #b4b4b4;
      svg {
        fill: #b4b4b4 !important;
        font-size: 40px;
        color: #b4b4b4;
        path {
          fill: #b4b4b4 !important;
        }
      }
    }
  }
  .button {
    margin-right: 20px;
    color: #FFF;
    font-size: 28px;
  }
}
.swiper-wrapper {
  height: 400px;
  position: relative;
  overflow: hidden;
  .slide {
    height: 100%;
    .dots {
      position: absolute;
      right: 0;
      left: 0;
      bottom: 12px;
      transform: translateZ(1px);
      text-align: center;
      font-size: 0;
      .dot {
        display: inline-block;
        margin: 0 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ccc;
        &.active {
          width: 20px;
          border-radius: 5px;
          background: #fff;
        }
      }
    }
  }
  .swipe-img {
    height: 400px;
    width: 100%;
    z-index: 1;
    background-position: center center !important;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #e8e8e8;
  }
}
</style>
