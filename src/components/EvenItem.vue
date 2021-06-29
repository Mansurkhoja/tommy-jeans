<template>
  <div class="items item--even">
    <div class="item-logo">
      <div class="logo">
        <img
          class="img-fluid"
          alt="Tommy Jeans logo"
          src="@/assets/img/logo.svg"
        />
    </div>
    </div>
    <div class="item-images item-images--even"
    @mouseenter="scale"
    @mouseleave="unscale"
    @mousemove="mouseMoveImg"
    :class="{'zoom' : zoom}"
    >
      <!-- <div class="item-image"
          :style="{backgroundImage: 'url(' + require('@/assets/img/man-1.jpg') + ')'}">
      </div>
     <div class="item-image"
          :style="{backgroundImage: 'url(' + require('@/assets/img/man-2.jpg') + ')'}">
      </div> -->
      <div class="item-image__container" :style="transfromRotate">
        <div class="item-image" >
          <div class="item-image__inner"
              :style="transfromOrigin">
            <img
              alt="Tommy Jeans logo"
              src="@/assets/img/girl-1.jpg"
            />
          </div>
        </div>
      <div class="item-image">
        <div class="item-image__inner"
              :style="transfromOrigin">
            <img
              alt="Tommy Jeans logo"
              src="@/assets/img/girl-2.jpg"
            />
          </div>
        </div>
      </div>
      <div class="item-images__text">
        Tommy Jeans
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
        <p>Коллекция</p>
        <p class="bold-red">«Настроение</p>
        <p class="thin-red">Майами»</p>
        <p class="small-base">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;о
          настоящих уличных видах спорта, которыми
          наслаждаются на променаде и пляжах.</p>
        <p class="small-thin">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Игривые
          футболки с графикой на баскетбольную
          тематику вдохновлены стритболом Майами, а винтажные
          принты, аппликации с пайетками и новые 3D-эффекты украшают фирменный стиль TOMMY.</p>
      </div>
      <SalePopUp />
    </div>
  </div>
</template>

<script>
import SalePopUp from './SalePopUp.vue';

export default {
  name: 'EvenItem',
  data() {
    return {
      xPercent: '',
      yPercent: '',
      transfromOrigin: '',
      transfromRotate: '',
      zoom: false,
      boxImages: 'box-images',
      isTouchable: false,
    };
  },
  components: {
    SalePopUp,
  },
  methods: {
    mouseMoveImg(e) {
      if (!this.isTouchable) {
        const box = document.querySelector('.item-images--even').getBoundingClientRect();
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
      }
    },
    scale() {
      if (!this.isTouchable) {
        this.zoom = true;
      }
    },
    unscale() {
      if (!this.isTouchable) {
        this.zoom = false;
        this.transfromRotate = '';
        this.transfromOrigin = '';
      }
    },
    // wScroll() {
    //   const pos = document.querySelector('.item-text').getBoundingClientRect();
    //   if (pos.top >= 0 && pos.left >= 0
    //       && pos.right <= (window.innerWidth || document.documentElement.clientWidth)
    //       && pos.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
    //     this.isVisible = true;
    //     console.log(2);
    //   }
    // },
  },
  // computed: {
  //   visibleClass: function () {
  //     return this.isVisible;
  //   },
  // },
  // created() {
  //   window.addEventListener('scroll', this.wScroll);
  // },
  // unmounted() {
  //   window.removeEventListener('scroll', this.wScroll);
  // },
  created() {
    if ('ontouchstart' in document.documentElement) {
      this.isTouchable = true;
    } else {
      this.isTouchable = false;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/_vars.scss';
.item{
  // padding-left: 8%;
  // margin-left: auto;
  // max-width: 47%;
}
.item-image{
  width: 35%;
  &:nth-child(2){
    width: 65%;
  }
}
.item-images__text{
    font-size: 11.5vh;
    top: calc(50% - (11.5vh / 2));
    left: calc(100% + (11.5vh / 2));
    text-align: center;
    bottom: auto;
    transform: rotate(-90deg) translateX(calc(-50% + (11.5vh / 2)));
    white-space: nowrap;
}
.thin-red{
  margin-bottom: 8px;
}
.logo{
  margin-top: 40px;
  margin-left: auto;
}

@media (max-width: 1200px) {
.item-text{
  position: relative;
  padding-top: 60px;
  &::before,&::after{
    content: "";
    position: absolute;
    right: 0;
  }
  &::before{
    top: -4px;
  }
  &::after{
    width: 45%;
    background-color: $red-base;
    height: 14px;
    top: 0;
  }
  &::before{
    width: 100%;
    height: 22px;
    background-color: transparent;
    border: 4px solid $color-base;
    border-left-width: 0;
    border-right-width: 0;
  }
}
.thin-red{
  margin-bottom: 18px;
}
.item{
  padding-bottom: 30px;
}
.item-images {
    margin-left: 0;
    padding-right: 13%;}
}
@media (max-width: 767px) {
.item-image:nth-child(2){
  display: block;
  width: 100%;
}
.item-image:nth-child(1){
  display: none;
}
.item-images__text {
    font-size: 9.5vh;
        padding-bottom: 13%;
    }
}
</style>
