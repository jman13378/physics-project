<template>
    <transition name="chatbox">
        <div v-if="chatOpen">
            <!-- Chat Window -->
            <div class="chat-window">
                <div class="chat-header">
                    <h3>Chat</h3>
                    <ion-button @click="toggleChat">X</ion-button>
                </div>
                <div class="chat-body">
                    <p v-if="isOfficeClosed" style="color: red;">
                        Sorry, Our Offices are closed. Hours: M-F 7:00 AM to 3:30 PM
                    </p>
                    <p v-else>Welcome to the chat!</p>
                    <!-- Add chat messages here -->
                </div>
                <div class="chat-footer" v-if="!isOfficeClosed">
                    <ion-input type="text"  v-model="message" placeholder="Type a message..." />
                    <ion-button slot="icon-only" click="sendMessage"><ion-icon :icon="outlines.send"></ion-icon></ion-button>
                </div>
            </div>
        </div>
    </transition>
    <ion-fab-button @click="toggleChat">
        <ion-icon :icon="outlines.chatbox"></ion-icon>
    </ion-fab-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
    IonPage,
    IonFabButton,
    IonFab,
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

import * as outlines from 'ionicons/icons';
var message = ref('');
const chatOpen = ref(false);
const isOfficeClosed = ref(false);
function sendMessage() {
    if (message.value.trim()) {
        console.log('Message sent:', message.value);
        message.value = '';
    }
}
function toggleChat() {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Time in minutes since midnight
    const closingTime = 15 * 60 + 30; // 3:30 PM in minutes since midnight
    isOfficeClosed.value = currentTime > closingTime;

    chatOpen.value = !chatOpen.value;
}
</script>
<script lang="ts">
export default {

    name: 'Chat',

};
</script>

<style scoped>
.chat-toggle-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.chat-window {
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 300px;
    background-color: var(--ion-color-light);
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border-bottom: 1px solid #ccc;
}

.chat-body {
    padding: 10px;
    height: 200px;
    overflow-y: auto;
}

.chat-footer {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ccc;
}

.chat-footer input {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.chat-footer button {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.chatbox-enter-active,
.chatbox-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.chatbox-enter-from,
.chatbox-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>