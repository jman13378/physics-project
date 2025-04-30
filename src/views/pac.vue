<template>
    <ion-page>


        <ion-grid style="margin-top:60px">
            <ion-row>
                <ion-col>
                    <h1 style="text-align: center;">Pros and Cons</h1>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <h2 style="text-align: center;">Power Plants</h2>
                </ion-col>
            </ion-row>
            <ion-row style="gap:50px">
                <ion-col>
                    <h1 style="text-align: center;">Advantages</h1>
                </ion-col>
                <ion-col>
                    <h1 style="text-align: center;">Disadvantages
                    </h1>
                </ion-col>
            </ion-row>
            <ion-row style="gap:50px">
                <ion-col>
                    <p style="text-align: center; color:green">
                        low carbon production
                    </p>
                </ion-col>
                <ion-col>
                    <p style="text-align: center; color:red">
                        High Fuel Cost
                    </p>
                </ion-col>
            </ion-row> <ion-row style="gap:50px">
                <ion-col>
                    <p style="text-align: center; color:green">
                        Creates more jobs
                    </p>
                </ion-col>
                <ion-col>
                    <p style="text-align: center; color:red">
                        Must be near a constant water source
                    </p>
                </ion-col>
            </ion-row>
             <ion-row style="gap:50px">
                <ion-col>
                    <p style="text-align: center; color:green">
                        More cost effective
                    </p>
                </ion-col>
                <ion-col>
                    <p style="text-align: center; color:red">
                        Must be near a constant water source
                    </p>
                </ion-col>
            </ion-row>
        </ion-grid>



        <ion-item>
            <p>
            </p>
        </ion-item>

    </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonImg } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { register } from 'swiper/element/bundle';
register();
import { Ref } from 'vue';

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