<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app color="primary">
      <v-list>
        <v-list-item v-if ="user">
          <v-list-item-avatar>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-avatar>
          <v-list-item-content >
            <v-list-item-title >{{ user }}</v-list-item-title>
            <v-list-item-subtitle>{{ 'renan@email.com' }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.id" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="menu-item">{{ item.label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="navbar" app color="primary" dark flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="title"><v-img src="..\src\assets\logo-scct2.png" transition="scale-transition"
          width="100" /></v-toolbar-title><v-divider class="mx-4" vertical></v-divider>
      <v-container class="py-0 fill-height">

        <v-btn v-for="link in links" :key="link.name" text @click="goToRoute(link.route)">
          {{ link.name }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-divider class="mx-4" vertical></v-divider>
        <v-btn text color="white" @click="logout">
          <v-icon left>mdi-exit-to-app</v-icon>
          Sair
        </v-btn>
      </v-container>

    </v-app-bar>
    <v-col cols="12">
      <home-page />
    </v-col>

  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import HomePage from '../components/HomePage.vue'

export default Vue.extend({

  components: {
    HomePage,
  },
  name: 'home-view',

  data() {

    return {
      user: 'Renan Andrade',

      searchInput: '',
      links: [
        { name: 'Página Inicial', route: '/home' },
        { name: 'Ajuda', route: '/help' },
      ],
      drawer: false,
      menuItems: [
        { id: 2, label: 'Página Inicial', icon: 'mdi-home' },
        { id: 3, label: 'Página de Cadastros', icon: 'mdi-account-box' },
        { id: 4, label: 'Agendas Telefônicas', icon: 'mdi-phone' },
        { id: 5, label: 'Solicitar Documentos', icon: 'mdi-file-document' },
      ],
    }
  },
  methods: {

    logout() {
      // Lógica para efetuar o logout
      // Redirecionar para a rota de login
      this.$router.push('./');
    },
    goToRoute(route: string) {
      const selectedLink = this.links.find((item: any) => item.name === route);
      if (selectedLink) {
        this.$router.push(selectedLink.route);
      }
    }
  }




})
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
