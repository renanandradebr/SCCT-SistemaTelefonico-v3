<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
                <v-card class="cardcadastro px-27">
                    <v-card-title class="text-center">Cadastro de Usuário</v-card-title>
                    <v-card-text>
                        <v-form ref="form">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="nome" label="Usuário" required></v-text-field> </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="cargo" label="Cargo" type="email"
                                        required></v-text-field></v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field v-model="setor" label="Setor" type="name" required></v-text-field></v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="lotação" label="Lotação" required></v-text-field></v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="telefone" label="Telefone" required></v-text-field></v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field v-model="setor" label="Setor" required></v-text-field></v-col>
                            </v-row>

                            <v-checkbox v-model="termos" label="Li e concordo com os termos e condições"
                                required></v-checkbox>
                            <v-btn type="submit" color="primary" class="mr-4">Cadastrar</v-btn>
                            <v-btn color="error" to="./home">Voltar</v-btn>
                        </v-form>
                    </v-card-text></v-card>
            </v-col>

        </v-row>
    </v-container>
</template>
<script>
 export default {
    data() {
      return {
        nome: "",
        email: "",
        sexo: "",
        nascimento: "",
        cpf: "",
        telefone: "",
        setor: "",
        matricula: "",
        termos: false
      };
    },
    methods: {
      submit() {
        console.log("Formulário enviado!");
      }
    }
  };
</script>