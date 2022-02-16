<template>
    <ion-page>
        <ion-toolbar>
            <ion-grid>
                <ion-row>
                    <ion-col size = "2"></ion-col>
                    <ion-col size = "8">
                        <ion-title class="title">
                            Welcome to Investi!
                        </ion-title>
                    </ion-col>
                    <ion-col size = "2"></ion-col>
                </ion-row>
            </ion-grid>
        </ion-toolbar>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {IonPage, IonToolbar, IonTitle , IonGrid, IonRow, IonCol} from "@ionic/vue";

export default defineComponent({
    name: "CreateAccount",
    components: {
        IonPage, IonToolbar, IonTitle, IonGrid, IonRow, IonCol
    }
});
</script>