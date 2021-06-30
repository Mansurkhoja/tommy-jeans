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
    >
      <!-- <div class="item-image"
          :style="{backgroundImage: 'url(' + require('@/assets/img/man-1.jpg') + ')'}">
      </div>
     <div class="item-image"
          :style="{backgroundImage: 'url(' + require('@/assets/img/man-2.jpg') + ')'}">
      </div> -->
      <div class="item-image__container" @mousemove="mouseMoveImg" :style="transformImageContainer">
        <div class="item-image" >
          <div class="item-image__inner">
            <img
              alt="Tommy Jeans logo"
              src="@/assets/img/girl-1.jpg"
            />
          </div>
        </div>
      <div class="item-image">
        <div class="item-image__inner">
            <img
              alt="Tommy Jeans logo"
              src="@/assets/img/girl-2.jpg"
            />
          </div>
        </div>
      </div>
      <div class="item-images__text item-images__text--even" :class="{'show-curs': cursoractive}"
       @mousemove="qw"  data-text="Tommy Jeans">
        <span @mouseover="cursorShow" @mouseout="cursorHide">Tommy Jeans</span>
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
      transformImageContainer: '',
      transfromRotate: '',
      zoom: false,
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
        this.transformImageContainer = `transform: translateX(${-yPourcent}%) translateY(${xPourcent}%)`;
      }
    },
    qw(w) {
      if (!this.isTouchable) {
        this.xpos = w.clientY;
        this.ypos = w.clientX;
        const h = document.querySelector('.item-images__text--even');
        const p = h.getBoundingClientRect();
        const d = p.width * 0.6;
        const rr = (Math.atan2(p.height, p.width * (180 / Math.PI)));
        console.log(rr);
        h.style.setProperty('--xx', `${((w.clientY + p.top) - d)}px`);
        h.style.setProperty('--yy', `${((w.clientX - p.left) + d) / 2}px`);
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
    &::after{
      clip-path: circle(13vh at var(--xx, -100%) var(--yy, -100%));
    }
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
    // padding-right: 13%;
        transform: translateX(-13%);}
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
