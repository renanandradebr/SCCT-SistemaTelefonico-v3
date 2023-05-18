<template>
  <v-app>
    <v-app-bar class="navbar" app color="primary" dark flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-container class="py-0 fill-height">
        <div>
          <v-img src="..\src\assets\logo-scct2.png" transition="scale-transition" width="100" />
        </div>

        <v-divider class="mx-4" vertical></v-divider>

        <v-btn v-for="link in links" :key="link" text>
          {{ link }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-responsive max-width="260">
          <v-text-field class="mp-10" dense flat hide-details rounded solo-inverted append-icon="mdi-magnify"
            label="Pesquisar"></v-text-field>
        </v-responsive>
        <v-divider class="mx-4" vertical></v-divider>


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
      search: '',
      drawer: false,
      links: [
        'Página Inicial',
        'Ajuda',
        'opção 3',
      ],
    }
  },


})
</script>
