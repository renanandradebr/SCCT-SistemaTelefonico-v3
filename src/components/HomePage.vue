<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6" lg="4" v-for="button in buttons" :key="button.id">
        <v-btn class="menu-button" :color="button.color" block outlined large @click="goToRoute(button.route)">
          {{ button.label }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { id: 1, label: 'Cadastro de Usuário', color: 'primary', route:'/cadastro' },
        { id: 2, label: 'Cadastro de Telefone Fixo', color: 'primary', route:'/cadastro'},
        { id: 3, label: 'Cadastro de Celular', color: 'primary', route:'/cadastro' },
        { id: 4, label: 'Agenda Telefônica', color: 'primary', route:'/cadastro'},
        { id: 5, label: 'Solicitar Backup', color: 'primary', route:'/cadastro'},
        { id: 6, label: 'Acessar Logs de Usuário', color: 'primary', route:'/cadastro'},
      ],
    };
    
  },
  methods: {
    goToRoute(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
.menu-button {
  margin-bottom: 16px;
  font-family: 'Sora', sans-serif;
}
</style>