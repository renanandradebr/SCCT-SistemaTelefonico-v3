<template>
    <v-container fluid class="fundo">
        <v-row justify="center">
            <v-col cols="12" sm="8" md="6" class="botoes3">
                 <v-card id="formulario1">
                    <v-card-title class="text-center">Cadastro de Usuário</v-card-title>
                    <v-card-text>
                        <v-form ref="form">
                            <v-row>
                                <v-col cols="6" md="6">
                                    <v-text-field v-model="nome" label="Usuário" required outlined clearable></v-text-field>
                                </v-col>
                                <v-col cols="6" md="6">
                                    <v-text-field v-model="cargo" label="Cargo" type="email" required outlined
                                        clearable></v-text-field></v-col>
                                <v-col cols="6" md="6">
                                    <v-text-field v-model="lotação" label="Lotação" required outlined
                                        clearable></v-text-field></v-col>
                                <v-col cols="6" md="6">
                                    <v-text-field vs-model="função" label="Função" type="name" required outlined
                                        clearable></v-text-field></v-col>
                                <v-col cols="6" md="6">
                                    <v-text-field v-model="setor" label="Setor" type="name" required outlined
                                        clearable></v-text-field></v-col>
                                <v-col cols="6" md="6">
                                    <v-text-field v-model="telefone" label="Telefone" required outlined
                                        clearable></v-text-field></v-col>

                            </v-row>

                            <v-checkbox v-model="termos" label="Li e concordo com os termos e condições"
                                required></v-checkbox>
                            <v-btn type="submit" color="primary" class="mr-4">Salvar</v-btn>
                            <v-btn color="error" to="./home">Voltar</v-btn>
                        </v-form>
                    </v-card-text></v-card>
            </v-col>

        </v-row>
    </v-container>
</template>
<script lang="ts" >

export default {
    data() {
        return {
            nome: "",
            email: "",
            sexo: "",
            nascimento: "",
            cargo: "",
            telefone: "",
            setor: "",
            lotação: "",
            função: "",
            matricula: "",
            termos: false
        };
    },
    methods: {
        submit() {
            console.log("Formulário enviado!");
        }
    },

};
</script>
<style>
#formulario1 {
    border: solid rgb(7, 88, 134) 2px;
    box-shadow: black 2px;

}
.botoes3 {
    font: bold 15pt Sora;
}
</style>