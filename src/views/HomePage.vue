<template>
  <ion-page>




    <ion-content style="height: 100%; overflow-y: auto; padding-top: 56px;">
      <!-- Adjust padding-top to ensure content is not blocked by the header -->


      <ion-item>
        <p>
          <b>
            <h1 style="left:10px">Professional, quality work</h1>
          </b>
        <p style="color:#1C8AF7">
          When you have commercial Low Voltage and Electrical work that needs to be done quickly and with an eye for
          quality, look no further than Atlantis Electrical Systems. We have the most highly trained, industry certified
          Master Electricians, Journeyman Electricians, Bicsi RCDD, and Bicsi Technicians with years of experience
          working for commercial, government, and all levels of Education.
        </p>
        </p>
        <swiper-container :slides-per-view="1" :navigation="true" :pagination="true" :autoplay="true" :speed="100"
          style="width: 649px; height: 500px; margin-right:10%; margin-top:3%; ">
          <swiper-slide v-for="(image, index) in images" :key="index">
            <img :src="image" :alt="'Image' + index" />
          </swiper-slide>
        </swiper-container>
      </ion-item>
      <ion-item>
        <p>
        <h1>Go with someone who's been there</h1>
        <p style="color:#1C8AF7; margin-right:20vw">All of our Electricians and Data-Comm Technicians possess years of
          on the job experience. Not only that, but they're also industry certified and committed to keeping up with the
          latest advances in the field. You can rest easy because your electrical job will be in the best and most
          skilled hands that it can be.</p>
        </p>
        <ion-img :src="bicsiLogo" alt="BICSI Logo" slot="end" />

      </ion-item>
    </ion-content>
  </ion-page>
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
