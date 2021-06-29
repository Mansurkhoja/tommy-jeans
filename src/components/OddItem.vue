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
    @mousemove="mouseMoveImg"
    :class="{'zoom' : zoom}"
    >
      <div class="item-image__container" :style="transfromRotate">
        <div class="item-image" >
          <div class="item-image__inner"
              :style="transfromOrigin">
            <img
              alt="Tommy Jeans logo"
              src="@/assets/img/man-1.jpg"
            />
          </div>
        </div>
      <div class="item-image">
        <div class="item-image__inner"
              :style="transfromOrigin">
            <img
              alt="Tommy Jeans logo"
              src="@/assets/img/man-2.jpg"
            />
          </div>
        </div>
      </div>
      <div class="item-images__text">
        МЕТРОПОЛИС
      </div>
    </div>
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
      transfromOrigin: '',
      transfromRotate: '',
      zoom: false,
      boxImages: 'box-images',
      // isVisible: false,
    };
  },
  components: {
    SalePopUp,
  },
  methods: {
    mouseMoveImg(e) {
      const box = document.querySelector('.item-images').getBoundingClientRect();
      const mouseX = e.clientX - box.left;
      const mouseY = e.clientY - box.top;
      this.xPercent = (mouseX / box.width) * 100;
      this.yPercent = (mouseY / box.height) * 100;
      this.transfromOrigin = `transform-origin:${this.xPercent}%${this.yPercent}%`;
      const x = mouseX - box.width / 2;
      const y = mouseY - box.height / 2;
      const xPourcent = (x * 100) / box.width / 10;
      const yPourcent = (y * 100) / box.height / 10;
      this.transfromRotate = `transform: rotateX(${-yPourcent}deg) rotateY(${xPourcent}deg)`;
    },
    scale() {
      this.zoom = true;
    },
    unscale() {
      this.zoom = false;
      this.transfromRotate = '';
      this.transfromOrigin = '';
    },
  },

};
</script>

<style lang="scss">
@import '@/assets/scss/_vars.scss';
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
    animation: opacity 2s 0s 1 linear forwards;
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
.item-images__text{
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 13.5vh;
  color: transparent;
  -webkit-text-stroke: $red-base;
  -webkit-text-stroke-width: 2px;
  transform: rotate(-90deg) translateY(60%);
  line-height: 1;
  transform-origin: bottom left;
  user-select: none;
}
.item-image__container{
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  // transition: transform .1s linear, box-shadow .1s linear;
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
