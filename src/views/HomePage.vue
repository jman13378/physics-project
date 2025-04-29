<template>
  <ion-page>




      <!-- Adjust padding-top to ensure content is not blocked by the header -->
<ion-item style="margin-top:50px">
  Power Plants are power planty
</ion-item>
<audio autoplay id="backaudio">
<source src="../assets/RAT_BOY_IBDY_-_Cyberpunk_Edgerunners_Soundtrack_-_Who_s_Ready_for_Tomorrow_(Hydr0.org).mp3">
  </audio></ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonImg } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { register } from 'swiper/element/bundle';
register();
import "swiper/css";
import 'swiper/swiper-bundle.css';
import { ref } from 'vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const bicsiLogo = new URL('../assets/homepage/bicsi.png', import.meta.url).href;

const images = ref<string[]>([]);
const excludeFileList: string[] = [];

// Dynamically import all images from the specified folder
const files = [
  new URL('../assets/homepage/swiper/image1.jpg', import.meta.url).href,
  new URL('../assets/homepage/swiper/image2.jpg', import.meta.url).href,
  new URL('../assets/homepage/swiper/image3.jpg', import.meta.url).href,
  new URL('../assets/homepage/swiper/image4.jpg', import.meta.url).href,
  new URL('../assets/homepage/swiper/image5.jpg', import.meta.url).href,
  new URL('../assets/homepage/swiper/image6.jpg', import.meta.url).href,
  new URL('../assets/homepage/swiper/image7.jpg', import.meta.url).href,
  new URL('../assets/homepage/swiper/image8.jpg', import.meta.url).href,
  ];
console.log(files)
for (const file in files) {
  if (!excludeFileList.includes(file)) {
    images.value.push(new URL(file, import.meta.url).href);
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

img {
  width: 100%;
  height: auto;
}
</style>
