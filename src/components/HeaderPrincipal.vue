<template color="gray">
    <v-container >
        <v-toolbar color="primary" prominent>
            <v-toolbar-title class="title"><v-img src="..\src\assets\logo-scct2.png" transition="scale-transition"
                    width="140" /></v-toolbar-title><v-divider class="mx-4" vertical></v-divider>
            <v-container class="py-0 fill-height">
                <v-spacer></v-spacer>
                <v-divider class="mx-4" vertical></v-divider>
                <v-user>
                    <Menuser />
                </v-user>
            </v-container>

        </v-toolbar>
        <v-toolbar>
            <v-row justify="center">
                <v-col cols="12">
                    <v-spacer></v-spacer>
                    <v-btn v-for="link in links" :key="link.name" text @click="goToRoute(link.route)">
                        {{ link.name }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-toolbar>
    </v-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Menuser from '../components/MenuUsuario.vue';

export default defineComponent({
    components: {
        Menuser,
    },
    name: 'HeaderScct',
    data() {
        return {
            links: [
                { name: 'Página Inicial', route: '/home' },
                { name: 'Ajuda', route: '/help' },
            ],
        };
    },
    methods: {
        goToRoute(route: string) {
            const selectedLink = this.links.find((item: any) => item.name === route);
            if (selectedLink) {
                (this as any).$router.push(selectedLink.route);
            }
        },
    },
});
</script>
<style scoped>
.title {
    font-family: 'Sora', sans-serif;
}

.menu-item {
    font-family: 'Sora', sans-serif;
}

.mp-10 {
    margin-top: 10px;
}
</style>
  