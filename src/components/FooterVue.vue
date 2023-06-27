<template>
  <v-footer color="primary" padless >
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="6" class="text-center">
          <span class="footer-text">
            &copy; {{ new Date().getFullYear() }} — Companhia de Saneamento Ambiental do Maranhão - CAEMA
          </span>
        </v-col>
        <v-col cols="6">
          <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text></v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Sora&display=swap');

.footer-text {
  font-family: 'Sora', sans-serif;
  font-size: 12px;
}
</style>