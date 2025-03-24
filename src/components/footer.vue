<template>

        <ion-toolbar style="padding-top:20px; padding-bottom:20px; display: contents;">

            <ion-item lines="none">
                <ion-label><a href="/home">Home</a></ion-label>
                <ion-label><a href="/careers">Careers</a></ion-label>
                <ion-label><a href="/security">Security Systems</a></ion-label>
                <ion-label><a href="/contact">Contact</a></ion-label>
                <ion-label><a href="/projects">Projects</a></ion-label>
            </ion-item>
            <ion-item style="color:#99aab5" lines="none">
                <p ><a href="https://maps.app.goo.gl/bZntJAdrXxbZD12C9" style="color:#99aab5; text-decoration: none;">1270 Clearmont St NE STE 3, Palm Bay, FL
                        32905</a><br>(321)-271-9197</p>
            </ion-item>
            
            <div slot="end">
                <ion-title>Atlantis Electrical Systems</ion-title>
                <ion-item style="color:#99aab5">©️{{ new Date().getFullYear() }} All Rights Reserved.</ion-item>
            </div>
        </ion-toolbar>

</template>
<script setup lang="ts">

import { computed, ref } from "vue";
import {
    IonPage,
    IonIcon,
    IonHeader,
    IonFooter,
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


</script>
<style>
ion-label a {
    color: white;
    text-decoration: none;
    padding-right: 20px;
}
</style>
<script lang="ts">
import * as outlines from 'ionicons/icons';

export default {
    name: 'Footer',
}
</script>