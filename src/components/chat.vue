<template>
    <transition name="transitions">
        <div v-if="chatOpen">
            <!-- Chat Window -->
            <div class="chat-window">
                <div class="chat-header">
                    <h3>Chat</h3>
                    <ion-button @click="toggleChat">X</ion-button>
                </div>
                <div class="chat-body">
                    <p class="system-message message">Welcome to the chat!</p>

                    <p v-if="isOfficeClosed" style="color: red;" class="system-message message">
                        Our Offices are currently closed. Hours: M-F 7:00 AM to 3:30 PM
                    </p>

                    <transition name="transitions" v-for="m in messages">
                        <div>
                            <p :class="'message ' + m.classes" v-html="parseMessage(m.content, m.preserve || false)">
                            </p>
                            <p> timestamp: {{ formatTimestamp(m.timestamp)}} </p>
                        </div>
                        <!-- Add chat messages here -->
                    </transition>
                    <transition name="transitions">
                        <p v-if="ShowMenuButtons">Choose an option:
                            <ion-buttons style="flex-wrap: wrap; gap: 2px;">
                                <ion-button id="inquire" :onclick="processInput"
                                    class="AutocompleteButton">Inquiry</ion-button>
                                <ion-button id="apply" :onclick="processInput"
                                    class="AutocompleteButton">Apply</ion-button>
                                <ion-button id="estimate" :onclick="processInput" class="AutocompleteButton">Request
                                    Estimate</ion-button>
                                <ion-button id="contact" :onclick="processInput"
                                    class="AutocompleteButton">Contact</ion-button>
                                <ion-button id="rep" :onclick="processInput" v-if="!isOfficeClosed"
                                    class="AutocompleteButton">Talk To Representative</ion-button>
                            </ion-buttons>
                        </p>
                    </transition>
                </div>
                <div class="chat-footer" style="gap:10px">
                    <ion-button slot="icon-only" @click="ShowMenuButtons = !ShowMenuButtons">
                        <ion-icon :icon="outlines.menu">
                        </ion-icon>
                    </ion-button>
                    <ion-textarea type="text" v-model="message" placeholder="Type a message..." />
                    <ion-button slot="icon-only" :onclick="sendMessage">
                        <ion-icon :icon="outlines.send">
                        </ion-icon>
                    </ion-button>
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
    IonTextarea,
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
import { isClosed, parseMessage } from "../chatHelper"
import router from "@/router";
var message = ref('');
var messages = ref<{ from: string; classes: string[]; content: string, timestamp: number, preserve?: boolean }[]>([]);
const chatOpen = ref(false);
const isOfficeClosed = ref(false);
var ShowMenuButtons = ref(true);
function formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
    return date.toLocaleTimeString(); // Formats to a readable date and time
}
function sendMessage() {
    if (message.value.trim() !== '') {
        messages.value.push({
            from: 'user',
            classes: ['user-message'],
            content: message.value,
            timestamp: Date.now()
        });
        message.value = '';
    }
}
function toggleChat() {
    isOfficeClosed.value = isClosed();

    chatOpen.value = !chatOpen.value;
}


function processInput(element: PointerEvent) {
    let input: string = (element.target as Element).id || "inquire"
    if (input == "inquire") {
        messages.value.push({
            from: 'admin',
            classes: ['admin-message'],
            content: "Apply",
            timestamp: Date.now()
        });
    } else if (input == "apply") {
        messages.value.push({
            from: 'user',
            classes: ['user-message'],
            content: "Apply",
            timestamp: Date.now()
        });
        setTimeout(() => {
            messages.value.push({
                from: 'system',
                classes: ['system-message'],
                content: "Now Redirecting you to the application page. Click <a href='/careers#applicationForm'>Here</a> if you aren't redirected.",
                preserve: true,
                timestamp: Date.now()
            });
            router.push('/careers#applicationForm')
        }, 1000);

    } else if (input == "estimate") {

    } else if (input == "contact") {

    } else if (input == "rep") {

    } else {

    }
    ShowMenuButtons.value = false;
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
    width: 400px;
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
    height: 400px;
    overflow-y: auto;
}

.message {
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 5px;

}

.chat-body .user-message,
.chat-body .admin-message {
    max-width: 200px;
    width: fit-content;
}

.chat-body .system-message {
    background-color: var(--ion-color-medium);
}

.chat-body .user-message {
    margin-left: auto;
    background-color: var(--ion-color-primary);
}

.chat-body .admin-message {
    background-color: var(--ion-color-light-tint);

}

.AutocompleteButton {

    background-color: var(--ion-color-primary);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 2px 2px;
    margin-top: 10px;
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

.transitions-enter-active,
.transitions-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.transitions-enter-from,
.transitions-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>