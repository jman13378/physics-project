<template>
  <ion-page>
    <ion-content style="height: 100%; overflow-y: auto; text-align:center; padding-top: 56px;">
      <!-- Adjust padding-top to ensure content is not blocked by the header -->
        <ion-item style="text-align:center" lines="none">
            <ion-label class="blue" style="font-size: xx-large;">
                <b>Whatever your project, we've got the experience</b>
            </ion-label>
        </ion-item>
        <ion-grid>
            <ion-row>
                <ion-col v-for="(project, index) in projects" :key="index">
                    <ion-img :src="project.image_location" style="width:270px;height:267px; margin-left:30%"></ion-img>
                    <div style="margin-top: 10px;">
                        {{ project.description }}
                    </div>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-content>
  </ion-page>
</template>
<style>
.blue {
    color: #1C8AF7 !important;
}
.center-container {
    display: flex;
    justify-content: center;
    /* Horizontally center */
}
.inner-text {
    text-align: left;
    /* Lines start at same point */
}
</style>
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

const projects = [
    { 
        image_location: new URL('../assets/projects/southwest.jpg', import.meta.url).href, 
        description: "South West Middle School Chiller Plant" 
    },
    { 
        image_location: new URL('../assets/projects/meadowlane.jpg', import.meta.url).href, 
        description: "Meadowlane Primary Elementary Infrastructure Renewal" 
    },
    { 
        image_location: new URL('../assets/projects/efsc.jpg', import.meta.url).href, 
        description: "Eastern Florida State College Student Union" 
    }
];
</script>
<script lang="ts">
import * as outlines from 'ionicons/icons';
</script>