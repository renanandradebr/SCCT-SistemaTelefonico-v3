<template>
  <v-app >
    <HeaderV/>
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
import HeaderV from './components/HeaderLogin.vue'
import footerV from './components/FooterVue.vue'

export default {
  components: {
    footerV,
    HeaderV,
   },
  name: 'App',

  data() {

    return {
      drawer: false,
    }
  },
};
</script>
