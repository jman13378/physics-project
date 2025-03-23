<template>
  <ion-app>
    <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item v-for="(page, index) in appPages" :key="index" :router-link="page.url">
            <ion-icon :icon="page.iosIcon" slot="start"></ion-icon>
            <ion-label>{{ page.title }}</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <navbar />
    <ion-page style="display: flex; flex-direction: column; height: 100vh;">
      <ion-content style="flex: 1; overflow-y: auto; padding-top: 56px;">
        <ion-router-outlet id="main-content"></ion-router-outlet>
      </ion-content>
      <footerObject style="flex-shrink: 0;"></footerObject>
    </ion-page>
  </ion-app>
</template>

<script setup lang="ts">
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonPage
} from '@ionic/vue';
import { ref } from 'vue';
import * as outlines from 'ionicons/icons';
import navbar from "./components/navbar.vue";

const appPages = ref([
  {
    title: 'Home',
    url: '/home',
    iosIcon: outlines.homeOutline,
    mdIcon: outlines.homeOutline,
  },
  {
    title: 'Careers',
    url: '/careers',
    iosIcon: outlines.briefcaseOutline,
    mdIcon: outlines.briefcaseOutline,
  },
  {
    title: 'Security Systems',
    url: '/security',
    iosIcon: outlines.cameraOutline,
    mdIcon: outlines.cameraOutline,
  },
  {
    title: 'Contact Us',
    url: '/contact',
    iosIcon: outlines.peopleCircleOutline,
    mdIcon: outlines.peopleCircleOutline,
  },
  {
    title: 'Projects',
    url: '/projects',
    iosIcon: outlines.clipboardOutline,
    mdIcon: outlines.clipboardOutline,
  },
]);

const selectedIndex = ref(0);

const path = window.location.pathname.split('/')[1];
if (path !== undefined) {
  selectedIndex.value = appPages.value.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
}
</script>

<script lang="ts">
import { defineComponent } from 'vue';
import footerObject from "./components/footer.vue";

export default defineComponent({
  components: {
    footerObject,
    navbar
  },
  name: 'App',
  beforeCreate() {
    console.log('App component beforeCreate');
  },
  created() {
    console.log('App component created');
  },
  beforeMount() {
    console.log('App component beforeMount');
  },
  mounted() {
    console.log('App component mounted');
  },
  beforeUpdate() {
    console.log('App component beforeUpdate');
  },
  updated() {
    console.log('App component updated');
  },
  beforeUnmount() {
    console.log('App component beforeUnmount');
  },
  unmounted() {
    console.log('App component unmounted');
  }
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Add dark mode styles */
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
  color: var(--ion-text-color, #000);
}

ion-menu.dark ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #000));
  color: var(--ion-text-color, #fff);
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list,
ion-menu.md ion-list#user-list {
  border-bottom: 1px solid var(--ion-background-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header,
ion-menu.md ion-list#user-list ion-list-header {
  font-size: 22px;
  font-weight: 600;
  min-height: 20px;
}

ion-menu.md ion-list-header {
  font-size: 16px;
  margin-bottom: 18px;
  color: #757575;
  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;
  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>