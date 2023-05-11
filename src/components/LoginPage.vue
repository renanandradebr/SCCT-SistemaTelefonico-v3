<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col md="4" sm="8">
        <v-card class="elevation-12">
          <v-toolbar color="white" dark flat class="d-flex align-center">        
              <v-img src="../assets/logo-scct.png"  contain class="imglogo" width="130" />
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="Login">
              <v-text-field v-model="usernamee" label="Nome de Usuário" outlined clearable></v-text-field>
              <v-text-field v-model="senha" label="Senha" type="password" variant="outlined" outlined
                clearable></v-text-field>
              <v-checkbox v-model="Manterconectado" label="Manter-me Conectado" variant="outlined"></v-checkbox>
              <v-btn type="submit" color="blue" text-color="white" block variant="outlined">Acessar</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
export default {
  data() {
    return {
      email: '',
      senha: '',
      lembrarLogin: false
    }
  },
  methods: {
    Login() {

      if (this.Manterconectado) {
        localStorage.setItem('lembrarLogin', true);
      } else {
        localStorage.removeItem('lembrarLogin');
      }
      // Redireciona o usuário para a página principal após o login


      this.$router.push('/home');
    }
  },
  created() {
    // Carrega o valor da flag de lembrar login do localStorage
    if (localStorage.getItem('lembrarLogin') === 'true') {
      this.lembrarLogin = true;
    }
  }
}
</script>
  
<style scoped>
.toolbar {
  color: #fff;
}
.imglogo{
  margin-left: 50%;
}
</style>