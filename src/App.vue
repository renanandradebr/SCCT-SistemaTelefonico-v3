<template>
  <v-app >
    <v-row>
      <v-col >
        <v-main>
          <v-container >
            <v-row >
                  <router-view />       
            </v-row>
          </v-container>
        </v-main>
      </v-col>
    </v-row>
    <footerV/>
  </v-app>
</template>

<script lang="ts">
import footerV from './components/FooterVue.vue'

export default {
  components: {
    footerV,
   },
  name: 'App',

  data() {

    return {
      search: '',
      drawer: false,
      links: [
        'Página Inicial',
      ],
    }
  },
};
</script>
<style>
.navbar{
  font: bold 15pt Sora;
  
}
</style>