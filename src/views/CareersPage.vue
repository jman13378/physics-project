<template>
    <ion-page>
        <ion-content style="height: 100%; overflow-y: auto; text-align:center; padding-top: 56px;">
            <!-- Adjust padding-top to ensure content is not blocked by the header -->
            <ion-item style="text-align:center" lines="none">
                <ion-label class="blue" style="font-size: xx-large;"><b>Careers</b></ion-label>
            </ion-item>
            <ion-item style="text-align:center" lines="none">
                <ion-label style="font-size: large;"><b>Electrician Requirements:</b>
                </ion-label>
            </ion-item>
            <ion-item lines="none" class="center-container">
                <ion-label class="inner-text blue">
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
            <ion-item class="center-container">
                <ion-label class="inner-text blue">
                    - Able to work outdoors in all weather conditions.<br>
                    - Able to lift and carry up to 50 pounds without assistance.<br>
                    - Must be able to pass a background check.<br>
                    - Able to perform work on uneven surfaces; frequently climb ladders, on/off equipment and work from
                    various heights.<br>
                    - Able and willing to walk, stand, bend, and sit for long periods of time.<br>
                    - Able to use your hands to perform activities involving holding, grasping, turning and pulling.<br>
                    - Follow safety policies and procedures and wear the required personal protective equipment required
                    for the job in a safe manner..<br>
                    - Must be able to pass a background check.<br>
                    <br>
                    JLA Badge is a plus but not required.<br>
                    <br>
                    Pay is based on experience. If you are interested please email us at <a
                        href="mailto:Careers@aes-mlb.com?subject=Application for Electrical Position">Careers@aes-mlb.com</a>
                    with your full name, phone number, and email address.


                </ion-label>
            </ion-item>
            <ion-item>
                <ion-label style="text-align:center; font-size: x-large;">Application</ion-label>

            </ion-item>
            <ion-item>
                <form style="margin-left:35vw;width:100%; max-width: 600px">
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-input label="Full Name" labelPlacement="stacked" name="name" v-model="application.name.value"
                                    type="text" :spellcheck="false" autocapitalize="off" autocomplete="name"
                                    required></ion-input>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <ion-input label="Phone Number" labelPlacement="stacked" name="phone" v-model="application.phone.value"
                                    type="tel" :spellcheck="false" autocapitalize="off" autocomplete="tel-local"
                                    required></ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-input label="Email Address" labelPlacement="stacked" name="email" v-model="application.email.value"
                                    type="email" :spellcheck="false" autocapitalize="off" autocomplete="email"
                                    required></ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-select label="Preferred Contact Method" labelPlacement="stacked" name="contact"
                                    v-model="application.contactMethod" :spellcheck="false" autocapitalize="off" required>
                                    <ion-select-option value="disabled" selected disabled>Select
                                        Option</ion-select-option>
                                    <ion-select-option value="phone">Phone</ion-select-option>
                                    <ion-select-option value="email">Email</ion-select-option>
                                </ion-select>
                            </ion-col>
                        </ion-row>  
                        <ion-row>
                            <ion-col>
                                <ion-select label="Position" labelPlacement="stacked" name="position" v-model="application.position"
                                    :spellcheck="false" autocapitalize="off" required>
                                    <ion-select-option value="disabled" selected disabled>Select
                                        Option</ion-select-option>
                                    <ion-select-option value="lvt">Low Voltage Technician</ion-select-option>
                                    <ion-select-option value="hvt">High Voltage Electrician</ion-select-option>
                                    <ion-select-option value="st">Security Technician</ion-select-option>
                                </ion-select>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-button @click="console.log(application)">Submit</ion-button>

                        </ion-row>
                    </ion-grid>
                </form>
            </ion-item>
        </ion-content>


    </ion-page>
</template>
<script setup lang="ts">

import { computed, ref } from "vue";
import {
    IonPage,
    IonLabel,
    IonIcon,
    IonHeader,
    IonFooter,
    IonToolbar,
    IonButtons,
    IonSelectOption,
    IonGrid,
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
let application = {name: ref(""), phone: ref(""), email: ref(""), contactMethod: ref(""), position: ref("")}

</script>
<style>
--blue {
    color: #1C8AF7 !important;
}

.blue {
    color: #1C8AF7 !important;
}

.grey {
    color: #99aab5 !important;
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

<script lang="ts">
import * as outlines from 'ionicons/icons';


</script>