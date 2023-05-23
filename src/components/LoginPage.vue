<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="12" md="4" sm="8">
        <v-card class="cardlogin elevation-12">
          <v-toolbar color="white" dark flat >
            <v-col cols="12">
            <v-img src="../assets/logo-scct.png" contain width="145" />
          </v-col>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="Login">
              <v-text-field v-model="username" label="Nome de Usuário" outlined clearable></v-text-field>
              <v-text-field v-model="password" label="Senha" type="password" outlined clearable></v-text-field>
              <v-checkbox v-model="Manterconectado" label="Manter-me Conectado"></v-checkbox>
              <v-btn class="botaologin" type="submit" color="blue" text-color="white" block>Acessar</v-btn>


              <div class="text-center">
                <a href="/esqueceu-senha">Esqueci a senha</a>
              </div>
            </v-form>
            <div class="text-center">
              <v-btn class="cadastro" color="green" small @click="paginaCadastro">Cadastre-se aqui</v-btn>
            </div>

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
      username: '',
      password: '',
      lembrarLogin: false
    }
  },
  methods: {
    paginaCadastro() {
      this.$router.push('/cadastro-login');
    },
    Login(event) {
      event.preventDefault();

      // Verifique as credenciais aqui (por exemplo, com uma API)
      if (this.username === 'admin' && this.password === 'password') {
        // Armazene a autenticação como true no LocalStorage
        localStorage.setItem('autenticado', 'true');
        localStorage.setItem('lembrarLogin', true);
        // Redirecione para a página inicial
        this.$router.push('/home');
      } else {
        alert('Credenciais inválidas. Tente novamente.');
      }
    },
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
.cadastro {
  font: normal 10pt Sora;
  color: rgb(255, 255, 255);
  margin-top: 10px;


}

.botaologin {
  font: bold 15pt Sora;
  color: white;
}

.toolbar {
  color: #fff;
}

.cardlogin {
  border: solid rgb(54, 54, 216) 2px;
}

.img {
  border: solid red 2px;
}
</style>