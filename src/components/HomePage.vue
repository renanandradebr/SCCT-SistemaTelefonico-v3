<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12"  v-for="button in buttons" :key="button.id">
        <div class="d-flex flex-column flex-sm-row menu-button">
          <v-btn class="menu-button" :color="button.color" outlined large @click="goToRoute(button.route)">
            {{ button.label }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js">
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
  font-family: 'Sora', sans-serif;
}
</style>