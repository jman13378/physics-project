<template>

    <ion-footer>
        <ion-toolbar style="padding-top:20px; padding-bottom:20px">

            <ion-item lines="none">
                <ion-label>Home</ion-label>
                <ion-label>Careers</ion-label>
                <ion-label>Security Systems</ion-label>
                <ion-label>Contact</ion-label>
                <ion-label>Projects</ion-label>
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

    </ion-footer>
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
<script lang="ts">
import * as outlines from 'ionicons/icons';

export default {
    name: 'Footer',
}
</script>