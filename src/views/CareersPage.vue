<template>
  <ion-page>
    <ion-content style="height: 100%; overflow-y: auto; text-align:center; padding-top: 56px;">
        <ion-item style="text-align:center" lines="none">
            <ion-label class="blue" style="font-size: xx-large;"><b>Careers</b></ion-label>
        </ion-item>
        <ion-item style="text-align:center" lines="none">
            <ion-label style="font-size: large;"><b>Electrician Requirements:</b>
            </ion-label>
        </ion-item>
        <ion-item  lines="none" class="center-container">
            <ion-label class="inner-text blue" >
                - At least 3 years of experience on commercial jobs<br>
                - Must have experience installing panels, running/bending pipe, pulling wire etc.<br>
                - Must have all basic tools, including drills.<br>
                - Must have own PPE and a reliable means of transportation.<br>

            </ion-label>
        </ion-item>
        <ion-item style="text-align:center" lines="none">
            <ion-label style="font-size: large;"><b>General Requirements:</b>
            </ion-label>
        </ion-item>
        <ion-item  lines="none" class="center-container">
            <ion-label class="inner-text blue" >
                - Able to work outdoors in all weather conditions.<br>
                - Able to lift and carry up to 50 pounds without assistance.<br>
                - Must be able to pass a background check.<br>
                - Able to perform work on uneven surfaces; frequently climb ladders, on/off equipment and work from various heights.<br>
                - Able and willing to walk, stand, bend, and sit for long periods of time.<br>
                - Able to use your hands to perform activities involving holding, grasping, turning and pulling.<br>
                - Follow safety policies and procedures and wear the required personal protective equipment required for the job in a safe manner..<br>
                - Must be able to pass a background check.<br>
                <br>
                JLA Badge is a plus but not required.<br>
                <br>
                Pay is based on experience. If you are interested please email us at <a href="mailto:Careers@aes-mlb.com?subject=Application for Electrical Position">Careers@aes-mlb.com</a> with your full name, phone number, and email address.


            </ion-label>
        </ion-item>


    </ion-content>
  </ion-page>
</template>
<style>
.blue {
    color:#1C8AF7 !important;
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


</script>
<script lang="ts">
import * as outlines from 'ionicons/icons';


</script>
<style>
.center-container {
  display: flex;
  justify-content: center; /* Horizontally center */
}

.inner-text {
  text-align: left; /* Lines start at same point */
}
</style>