<template>
  <div class="sale">
    <div class="sale-text">
      УСПЕЙ ВОСПОЛЬЗОВАТЬСЯ СПЕЦИАЛЬНЫМ ПРЕДЛОЖЕНИЕМ
      <span>до 27 июня</span>
    </div>
    <div class="sale-items">
      <button class="btn" @click="showModal">Получить скидку</button>
      <a
        class="social-link"
        href="http://vk.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="@/assets/img/vk.svg" alt="vk" />
      </a>
      <a
        class="social-link"
        href="http://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="@/assets/img/inst.svg" alt="inst" />
      </a>
    </div>
    <transition name="pop-up-fade">
      <div class="pop-up" v-show="isModalVisible">
        <div class="pop-up__inner">
          <button class="btn pop-up__close" @click="closeModal">
            <svg
              class="pop-up__close-icon"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L17 17" stroke="#fff" stroke-width="2" />
              <path d="M1 17L17 1" stroke="#fff" stroke-width="2" />
            </svg>
          </button>
          <div class="pop-up__body">
            <div class="pop-up__header-title">ПОКАЖИ СКРИН <br> ПРОМОКОДА НА КАССЕ</div>
            <div class="pop-up__title">METROPOLIS15%</div>
            <div class="pop__up-sub-title">ПОЛУЧИ СКИДКУ НА НОВУЮ КОЛЛЕКЦИЮ</div>
            <div class="pop-up__line"></div>
            <div class="pop-up__text">
                Скидка предоставляется только на новую коллекцию Tommy Jeans и не
                суммируется с другими акциями и предложениями. Скидка действует только в
                магазине Tommy Jeans Метрополис в Москве <b>до 27 Июня 2021</b> года
                включительно. Подробности уточняйте у продавцов-консультантов Tommy Jeans.
            </div>
          </div>
        </div>
        <div class="pop-up__fade" @click="closeModal"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SalePopUp',
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },

  },
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_vars.scss';
.sale{
  margin-bottom: auto;
}
.sale-text{
  font-size: 2.5vh;
  line-height: 1.3;
  margin: 1% 0;
  padding: 10px 0;
  max-width: 70%;
span{
  font-weight: 700;
  color: $red-base;
}
}
.sale-items{
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.social-link{
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  transition: box-shadow .2s linear;
  min-width: 6.5vh;
  min-height: 6.5vh;
  margin-left: 30px;
  &:hover{
    box-shadow: 0px 0px 17px rgb(12 28 73 / 50%);
  }
img{
    max-width: 100%;
    width: 100%;
    height: auto;
}
}
 .pop-up-fade-enter-active{
   opacity: 0;
 }
 .pop-up-fade-enter-active.pop-up{
   transition-duration: 0s;
 }
  .pop-up-fade-leave-active{
opacity: 0;
transition: opacity .5s ease-out;
 }
.pop-up{
    position: fixed;
    transition: opacity .5s ease-out;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    width: 100%;
    height: 100%;
}
.pop-up__fade{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  z-index: -1;
}
.pop-up__inner{
    background: $color-base;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    color: #fff;
    width: 50%;
    max-height: 80vh;
    font-weight: 700;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    padding: 2% 0 4%;
}
.pop-up__close{
  width: 5vh;
  min-height: 5vh;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 2.5vh -1.5vh auto;
  z-index: 22;
  padding: 0 !important;
}
.pop-up__close-icon{
  width: 2.5vh;
  height: 2.5vh;
}
.pop-up__header-title{
  font-size: 3vh;
}
.pop__up-sub-title{
  font-size: 2.6vh;
}
.pop-up__title{
  color: $red-base;
  font-size: 7vh;
}
.pop-up__text{
    font-size: 1.8vh;
    line-height: 1.5;
    text-transform: none;
    font-weight: 400;
    padding: 0 2vw;
  b{
    font-weight: 700;
  }
}
.pop-up__line{
  width: 100%;
  height: 2vh;
  position: relative;
  margin: 2.5vh 0;
  &::after,&::before{
    content: "";
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
  }
  &::after{
    left: 0;
    background-color: #fff;
  }
  &::before{
    right: 0;
    background-color: $red-base;
  }
}
@media (max-width: 1200px){
  .sale{
    padding: 0 25px;
  }
  .sale-text{
    max-width: 100%;
    text-align: center;
    margin: 0;
    padding: 27px 0;
  }
  .sale-items{
    justify-content: center;
  }
  .pop-up__inner{
    width: 90%;
  }
}
@media (max-width: 767px){
  .sale-items{
    flex-wrap: wrap;
    .btn{
    margin: 0 25% 30px;
  }
  }
  .pop-up__header-title {
    font-size: 2.5vh;
}
.pop__up-sub-title{
  font-size: 2.2vh;
}
  .pop-up__title {
    font-size: 5vh;}
    .pop-up__line {
    height: 1.8vh;
    margin: 2vh 0;
}
.pop-up__text{
  font-size: 1.6vh;
}
}
</style>
