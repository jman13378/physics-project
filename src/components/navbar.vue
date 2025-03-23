<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons v-if="isMobile" slot="start">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
      <ion-buttons v-else slot="end" style="gap:40px">
        <ion-button href="/home">Home</ion-button>
        <ion-button href="/careers">Careers</ion-button>
        <ion-button href="/security">Security Systems</ion-button>
        <ion-button href="/contact">Contact</ion-button>
        <ion-button href="/projects">Projects</ion-button>
      </ion-buttons>
      <ion-title>Atlantis Electrical Systems</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonTitle
} from "@ionic/vue";

var isMobile = ref(false);
setInterval(() => {
  isMobile.value = window.outerWidth <= 1000;
}, 100);
</script>

<script lang="ts">
export default {
  name: 'Navbar',
}
</script>

<style scoped>
ion-header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}
</style>