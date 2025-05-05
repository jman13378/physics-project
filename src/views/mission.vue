<template>
    <ion-page style="overflow-y: scroll;">


        <ion-grid style="margin-top:60px">
            <ion-row>
                <ion-col>
                    <h1 style="text-align: center;">Our Mission At Manatee Power</h1>
                </ion-col>
            </ion-row>
            <ion-row style="margin-top:20px">At Manatee Power, our mission is to deliver reliable, affordable, and
                environmentally responsible energy to Florida’s Space Coast. We are committed to investing in
                high-efficiency power plant infrastructure that supports economic growth, ensures energy security, and
                reduces carbon emissions—without compromising the natural beauty and resilience of our communities.
                Through smart innovation and strategic funding, we aim to build a cleaner energy future using proven,
                scalable technologies tailored to our region's unique needs.
            </ion-row>
        </ion-grid>

        <img :src="background" style="max-width: 300px; align-self: center; border-radius: 50px;"></img>


    </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonImg } from '@ionic/vue';

import { Ref } from 'vue';
let background = new URL('../assets/missionbackground.png', import.meta.url).href

</script>

<style scoped>
center {
    text-align: center;
}

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