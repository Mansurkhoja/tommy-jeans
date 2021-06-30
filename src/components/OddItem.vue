<template>
  <div class="items item--odd">
    <div class="item-logo">
      <div class="logo">
        <img
          class="img-fluid"
          alt="Tommy Jeans logo"
          src="@/assets/img/logo.svg"
        />
      </div>
    </div>
    <div class="item">
      <div class="logo">
        <img
          class="img-fluid"
          alt="Tommy Jeans logo"
          src="@/assets/img/logo.svg"
        />
      </div>
      <div class="item-text">
        <p>&nbsp;&nbsp;&nbsp;Tommy Jeans –</p>
        <p class="thin-base">молодежный <br> стиль одежды, <br> который отражает</p>
        <p class="bold-red">&nbsp;&nbsp;&nbsp;дух свободы <br> и беспечности</p>
      </div>
      <SalePopUp />
    </div>
    <div class="item-images"
    @mouseenter="scale"
    @mouseleave="unscale"
    >
      <div class="item-image__container" @mousemove="mouseMoveImg" :style="transformImageContainer">
        <div class="item-image" >
          <div class="item-image__inner"
              >
            <img
              alt="Tommy Jeans logo"
              src="@/assets/img/man-1.jpg"
            />
          </div>
        </div>
      <div class="item-image">
        <div class="item-image__inner"
              >
            <img
              alt="Tommy Jeans logo"
              src="@/assets/img/man-2.jpg"
            />
          </div>
        </div>
      </div>
      <div class="item-images__text" :class="{'show-curs': cursoractive}"
       @mousemove="qw" data-text="МЕТРОПОЛИС">
        <span @mouseover="cursorShow" @mouseout="cursorHide">МЕТРОПОЛИС</span>
      </div>
    </div>
    <!-- <div class="cursor" :style="s">
    </div> -->
  </div>
</template>

<script>
import SalePopUp from './SalePopUp.vue';

export default {
  name: 'OddItem',
  data() {
    return {
      xPercent: '',
      yPercent: '',
      transformImageContainer: '',
      // zoom: false,
      boxImages: 'box-images',
      isTouchable: false,
      xpos: 0,
      ypos: 0,
      poscurs: '',
      cursoractive: false,
    };
  },
  components: {
    SalePopUp,
  },
  methods: {
    mouseMoveImg(e) {
      if (!this.isTouchable) {
        const box = document.querySelector('.item-images').getBoundingClientRect();
        const mouseX = e.clientX - box.left;
        const mouseY = e.clientY - box.top;
        const x = mouseX - box.width / 2;
        const y = mouseY - box.height / 2;
        const xPourcent = (x * 100) / box.width / 10;
        const yPourcent = (y * 100) / box.height / 10;
        this.transformImageContainer = `transform: translateX(${-yPourcent}%) translateY(${xPourcent}%)`;
      }
    },
    qw(w) {
      if (!this.isTouchable) {
        this.xpos = w.clientY;
        this.ypos = w.clientX;
        const h = document.querySelector('.item-images__text');
        const p = h.getBoundingClientRect();
        const d = p.width * 0.6;
        const rr = (Math.atan2(p.height, p.width * (180 / Math.PI)));
        console.log(rr);
        h.style.setProperty('--x', `${((w.clientY + p.top) - d)}px`);
        h.style.setProperty('--y', `${((w.clientX - p.left) + d) / 2}px`);
      }
    },
    cursorShow() {
      this.cursoractive = true;
    },
    cursorHide() {
      this.cursoractive = false;
    },
    unscale() {
      if (!this.isTouchable) {
        // this.zoom = false;
        this.transformImageContainer = '';
        // this.transfromOrigin = '';
      }
    },
  },
  created() {
    if ('ontouchstart' in document.documentElement) {
      this.isTouchable = true;
    } else {
      this.isTouchable = false;
    }
  },
  computed: {
    s: function () {
      return `transform: translate(calc(${this.ypos}px - 50%), calc(${this.xpos}px - 50%));`;
      // transform: translate(96px, 192px);
      // return `top:${this.xpos}px; left:${this.ypos}px;`;
      // this.poscurs = `top:${e.clientY}px; left:${e.clientX}px;`;
    },
    // textCursorOut: function () {
    //   return this.cursoractive === 'false';
    // },
    // textCursor: function () {
    //   return this.cursoractive === 'true';
    // },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/_vars.scss';
.cursor{
  position: fixed;
  //transform: translate(-50%, -50%);
  width: 26vh;
  height: 26vh;
  // margin-top: -10vh;
  // margin-left: -10vh;
  top: 0;
  left: 0;
  border-radius: 50%;
  pointer-events: none;
  background: rgba($color: $red-base, $alpha: .5);
  border: 2px dashed $color-base;
  // mix-blend-mode: difference;
  // mix-blend-mode: screen;
  opacity: 1;
  transition: opacity .15s linear, background-color .3s linear;
  &.show-curs{
      opacity: 1;
      transform: scale(1);
     // background-color: rgba($color: $red-base, $alpha: 1);
  }
}
.item-images__text{
  display: inline-flex;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 13.5vh;
  z-index: 98;
  color: transparent;
  -webkit-text-stroke: $red-base;
  -webkit-text-stroke-width: 2px;
  transform: rotate(-90deg) translateY(60%);
  line-height: 1;
  transform-origin: bottom left;
  user-select: none;
  cursor: none;
  &::after{
    content: attr(data-text);
    // content: none;
    position: absolute;
    top: 0;
    left: 0;
    color: $red-base;
    pointer-events: none;
    // clip-path: circle(20px at var(--x, -100%) var(--y, -100%));
    clip-path: circle(13vh at var(--x, -100%) var(--y, -100%));
    background-color: rgba($color: $color-base, $alpha: .5);
    box-shadow: 0 0 0vh 26vh rgba($color: $color-base, $alpha: .5);
    transition: opacity .2s linear;
    opacity: 0;
  }
  &.show-curs{
    &::after{
    //  content: attr(data-text);
    opacity: 1;
    }
  }
}
.logo {
    width: 10vw;
    margin-bottom: auto;
    margin-top: 12px;
}
.items{
  display: flex;
  align-items: stretch;
  height: 100vh;
  height: $fullHeight;
  min-height: $minHeight;
  overflow: hidden;
  background: #ffffff82;
}
.item{
  flex: 0 0 50%;
  max-width: 50%;
  padding-left: 5%;
  padding-right: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.item-text{
    font-size: $fs-big;
    line-height: 1;
    opacity: 0;
    animation: opacity 2.3s 0s 1 linear forwards;
}
.item-images{
  flex: 0 0 50%;
  max-width: 50%;
  height: 100%;
  padding: 30px 0;
  position: relative;
  perspective: 100vh;
  // margin-top: auto;
  // margin-bottom: auto;
  // display: flex;
  // align-items: center;
  // transition: transform .1s linear;
}

.item-image__container{
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
      box-shadow: 0 0 20px 5px transparent;
      backface-visibility: hidden;
  transition: transform .1s linear;
}
.item-image{
  width: 65%;
  height: 100%;
  overflow: hidden;
  position: relative;
  border: 3px solid #fff;
  &:nth-child(2){
    width: 35%;
    border-right-width: 0;
  }
}
.zoom{
  .item-image__container{
    box-shadow: 0px 2px 11px 2px rgb(72 72 72 / 20%);
  }
  .item-image__inner{
    transition: transform .2s linear;
    transform: scale(1.1);
  }
  // .item-image:nth-child(2){
  //   .item-image__inner{
  //      transform: scale(1.2);
  //   }
  // }
  // .item-image__inner{
  //   img{
  //     transform: scale(1.14);
  //   }
  // }
  // .item-image:nth-child(2){
  //   .item-image__inner{
  //     img{
  //      transform: scale(1.24);
  //     }
  //   }
  // }
}
.item-image__inner{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform .1s linear;
  img{
    pointer-events: none;
    object-fit: cover;
    object-position: top;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    transform-style: preserve-3d;
  }
}
.item-logo{
  display: none;
}
@media (max-width: 1200px) {
.items {
  flex-wrap: wrap;
  height: auto;
}
.logo{
  display: none;
  width: 121px;
  height: 43px;
}
.item-logo{
  display: block;
  flex: 0 0 100%;margin-top:25px;
  text-align: center;
  .logo{display: inline-block;margin: 0;}
}
.item{
  order: 2;
  padding: 0;
}
.item,.item-images{
  flex: 0 0 100%;
  max-width: 100%;
}
.item-images{
  margin-left: 13%;
  height: 100vh;
  height: calc((var(--vh, 1vh) * 100) - 43px);
  min-height: $minHeight;
}
.item-images__text {
    font-size: 11.5vh;
  }
.item-text {
    font-size: 6vh;
    padding-top: 20px;
}
.small-base,.small-thin{
  padding: 0 25px;
}
.item-image{
  border: 0;
}
}
@media (max-width: 767px) {
.item-image:nth-child(2){
  display: none;
}
// .item-image__inner img{

// }
.item-image{
  width: 100%;
}
.item-text {
    font-size: 5vh;
}
}
@keyframes opacity {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>
