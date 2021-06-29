import { createApp } from 'vue';
import App from './App.vue';
// import '@/vh';
const vhOnLoad = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', ''.concat(vhOnLoad, 'px'));

window.addEventListener('resize', () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px'));
});
createApp(App).mount('#app');
