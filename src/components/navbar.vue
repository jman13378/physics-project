<template>
    <ion-header :translucent="true">
        <ion-toolbar>
            <ion-buttons v-if="isMobile" slot="start">
                <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <ion-buttons v-else slot="end" style="gap:40px">
                <ion-button href="/home">Home</ion-button>
                <ion-button href="/careers">Careers</ion-button>
                <ion-button href="/div26">Division 26 Electrical</ion-button>
                <ion-button href="/div27">Division 27 Communications</ion-button>
                <ion-button href="/div28">Division 28 Security</ion-button>
                <ion-button href="/contact">Contact</ion-button>
                <ion-button href="/projects">Projects</ion-button>
            </ion-buttons>
            <ion-item lines="none">
                <ion-title>Atlantis Electrical Systems</ion-title>
                <a style="width:70px; margin-right:15%;" href="/home"><ion-img :src="logo" alt="AES Logo"
                        ></ion-img>
                </a></ion-item>
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
    IonItem,
    IonTitle
} from "@ionic/vue";
const logo = new URL("../assets/logo.png", import.meta.url).href;
var isMobile = ref(false);
setInterval(() => {
    isMobile.value = window.outerWidth <= mobileBarWidth;
}, 100);
</script>

<script lang="ts">
import { mobileBarWidth } from "../helper";

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