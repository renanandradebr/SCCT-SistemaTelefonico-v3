<template>
  <v-toolbar color="primary" prominent flat>
    <v-toolbar-title class="title">
      <v-img src="..\src\assets\logo-scct2.png" transition="scale-transition" width="400" />
    </v-toolbar-title>
    <v-divider class="mx-4" vertical></v-divider>
    <v-container class="py-0 fill-height">
      <v-spacer></v-spacer>
      <v-divider class="mx-4" vertical></v-divider>
      <v-user @click="goToRoute('/profile')">
        <Menuser />
      </v-user>
    </v-container>
  </v-toolbar>
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
      ] as { name: string; route: string }[],
    };
  },
  methods: {
    goToRoute(route: string): void {
      const selectedLink = this.links.find((item: { route: string }) => item.route === route);
      if (selectedLink) {
        (this.$router as any).push(selectedLink.route);
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
