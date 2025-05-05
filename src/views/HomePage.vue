<template>
  <ion-page style="overflow-y: scroll;">

    <ion-grid style="margin-top:100px">
      <p>
        <ion-row>
          <h1 style="text-align: center;">Powering Florida’s Future — Cleanly, Reliably, Sustainably.
          </h1>
        </ion-row>
        <ion-row style="max-width: 75%; margin-left:12.5%">At Manatee Power, we’re committed to building a resilient
          energy future for Brevard County and beyond. Through innovative investments in advanced power generation
          technology, we deliver low-emission, high-efficiency energy—without compromising the beauty and health of
          Florida’s coastal environment.
        </ion-row>
      </p>
      <p style="background-color: #1C8AF7;  margin-top: 100px;   padding-top: 20px; padding-bottom: 50px;">
        <ion-row>
          <h1 style="text-align: center;">Our Vision
          </h1>
        </ion-row>
        <ion-row style="max-width: 75%; margin-left:12.5%">To lead Florida’s energy evolution by providing dependable,
          environmentally responsible power that supports community growth, local industry, and everyday life.


        </ion-row>
      </p>

      <p style="background-color: rgb(5 75 145);
    margin-top: 0px;   padding-top: 20px; padding-bottom: 50px;">
        <ion-row>
          <h1 style="text-align: center;">🔋 What We Do

          </h1>
        </ion-row>
        <ion-row style="max-width: 75%; margin-left:12.5%">
          <h4>✅ Smart Power Infrastructure</h4>
        </ion-row>
        <ion-row style="max-width: 75%; margin-left:12.5%">We invest in next-generation power plants that reduce carbon
          output while meeting the region’s growing energy needs.

        </ion-row>



        <ion-row style="max-width: 75%; margin-left:12.5%">
          <h4>✅ Community-First Approach</h4>
        </ion-row>
        <ion-row style="max-width: 75%; margin-left:12.5%">Our projects prioritize local job creation, environmental
          stewardship, and transparent partnerships with residents and organizations.



        </ion-row>
        <ion-row style="max-width: 75%; margin-left:12.5%">
          <h4>✅ Low-Carbon Commitment</h4>
        </ion-row>
        <ion-row style="max-width: 75%; margin-left:12.5%">By choosing scalable and efficient technologies, we reduce
          our carbon footprint while maximizing energy output.



        </ion-row>
      </p>
      <p style="background-color: #1C8AF7;  margin-top: 0px;   padding-top: 20px; padding-bottom: 50px;">
        <ion-row>
          <h1 style="text-align: center;">🐋 Why “Manatee Power”?
          </h1>
        </ion-row>
        <ion-row style="max-width: 75%; margin-left:12.5%">Manatees represent harmony between nature and innovation—just
          like our energy approach. Our mascot reflects our respect for Florida’s ecosystems and our responsibility to
          future generations.



        </ion-row>
      </p>

      <p style="background-color: rgb(206 65 29);  margin-top: 0px;   padding-top: 20px; padding-bottom: 50px;">
        <ion-row>
          <h1 style="text-align: center;">📢 Get Involved
          </h1>
        </ion-row>
        <ion-row style="max-width: 75%; margin-left:12.5%"><h4>Want to learn more, tour a facility, or partner with us?</h4></ion-row>
        <ion-row style="max-width: 75%; margin-left:12.5%; ">{{"Contact Us At (321)-271-9197 or at "}}<u style="color:cornflowerblue; padding-left:7px;"> contact@manateepower.com</u></ion-row>
        <ion-row style="max-width: 75%; margin-left:12.5%; ">{{"Contact Us At (321)-271-9197 or at "}}<u style="color:cornflowerblue; padding-left:7px;"> contact@manateepower.com</u></ion-row>
      </p>
    </ion-grid>



    <audio autoplay id="backaudio">
      <source
        src="../assets/RAT_BOY_IBDY_-_Cyberpunk_Edgerunners_Soundtrack_-_Who_s_Ready_for_Tomorrow_(Hydr0.org).mp3">
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
