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
        <ion-button href="contact">Contact</ion-button>
        <ion-button href="Projects">Projects</ion-button>
      </ion-buttons>
      <ion-title>Atlantis Electrical Systems</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import {
    IonPage,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonSelectOption,
    IonMenuButton,
    IonButton,
    IonContent,
    IonList,
    IonItem,
    IonTitle,
    IonRow,
    IonCol,
    IonInput,
    IonToast,
    IonSelect,
    IonRadioGroup,
    IonRadio
} from "@ionic/vue";
var isMobile = ref(false)
setInterval(() => {
    isMobile.value = window.outerWidth <= 1000
}, 100);
</script>

<script lang="ts">
import * as outlines from 'ionicons/icons';

export default {
    name: 'Navbar',
}
</script>