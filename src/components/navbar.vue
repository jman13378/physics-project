<template>
    <ion-header :translucent="true">
        <ion-toolbar>
            <ion-buttons v-if="isMobile" slot="start">
                <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <ion-buttons v-else slot="end" style="gap:40px">
                <ion-button href="/home">Home</ion-button>
                <ion-button href="/hiw">How it works</ion-button>
                <ion-button href="/pac">Pros and cons</ion-button>
                <ion-button href="/ms">mission statement</ion-button>

            </ion-buttons>
            <ion-item lines="none">
                <ion-title>Manatee Power</ion-title>
                <a style="width:70px; margin-right:15%; " href="/home"><img style="border-radius: 100px; top:40px;" :src="logo" alt="Manatee Power Logo"
                        ></img>
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