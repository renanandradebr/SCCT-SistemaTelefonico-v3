<template>
  <v-container>
    <v-card class="cardbotoes"> 
      <v-card-title class="titlecard">Menu inicial</v-card-title>
    <v-col cols="12">
    <v-row>
      
          <v-container>
            <v-row justify="center">
              <div class="botoesScct">
                <v-btn block color="primary" class="mb-2" to='./cadastro' elevation="1">
                  <v-icon>mdi-account-plus</v-icon> CADASTRO DE USUÁRIO</v-btn>

                <v-btn block color="primary" class="mb-2" to='./cadastroTelefone' elevation="1">
                  <v-icon>mdi-phone-plus</v-icon>CADASTRO DE TELEFONE FIXO</v-btn>

                <v-btn block color="primary" class="mb-2" elevation="1"> <v-icon>mdi-plus</v-icon>CADASTRO De
                  CELULAR</v-btn>

                <v-btn block color="primary" class="mb-2" elevation="1"> <v-icon>mdi-deskphone</v-icon>AGENDA
                  TELEFÔNICA</v-btn>

                <v-btn block color="primary" class="mb-2" to='./backups' elevation="1">
                  <v-icon>mdi-cloud-upload</v-icon>SOLICITAR BACKUPS</v-btn>

                <v-btn block color="primary" class="mb-2" elevation="1"> <v-icon>mdi-phone-log</v-icon>ACESSAR LOGS
                  DE USUÁRIO</v-btn>
              </div>

            </v-row>
       
        </v-container>
    
    </v-row>
  </v-col>
  </v-card>
  </v-container>
</template>



<script>

export default {
  data() {
    return {
    }
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Sora&display=swap');
.titlecard{
  font: bolder 20pt Sora;
  margin-left: 15%;
  
}

.cardbotoes{
  padding: 20px;
  
}
.carousel-container {
  margin-top: 1%;
  margin-left: 12%;
}

.botoesScct {
  font: bold 10px Sora;
  position: relative;
  overflow: hidden;
  padding: 5px;
}

.botoesScct v-btn {
  position: relative;
  margin-left: 25px;
  align-content: center;
  opacity: 100%;
}

.logo-scct {
  width: 100%;
  height: auto;
}
</style>