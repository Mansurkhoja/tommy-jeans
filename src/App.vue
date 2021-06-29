<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <OddItem/>
  <EvenItem/>
</template>

<script>
import OddItem from './components/OddItem.vue';
import EvenItem from './components/EvenItem.vue';
// import SalePopUp from './components/SalePopUp.vue';

export default {
  name: 'App',
  components: {
    OddItem,
    EvenItem,
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';

</style>
