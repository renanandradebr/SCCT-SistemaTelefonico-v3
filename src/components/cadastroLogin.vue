<template>
    <div>
      <h2>Cadastro</h2>
      <v-form @submit.prevent="submitForm">
        <v-text-field v-model="nome" label="Nome"></v-text-field>
        <v-text-field v-model="email" label="E-mail"></v-text-field>
        <v-text-field v-model="senha" label="Senha" type="password"></v-text-field>
        <v-btn type="submit">Cadastrar</v-btn>
      </v-form>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        nome: '',
        email: '',
        senha: '',
      };
    },
    methods: {
      submitForm() {

        console.log('Dados de cadastro:', this.nome, this.email, this.senha);
      },
    },
  };
  </script>