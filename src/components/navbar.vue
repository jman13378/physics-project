<template>
    <ion-header :translucent="true">
        <navbar></navbar>
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


</script>
<script lang="ts">
import * as outlines from 'ionicons/icons';

export default {
    name: 'ToolBar',
}
</script>