<template>
  <div>
    <v-container>
      <v-card color="grey" dark>
        <v-card-title>Balanço do Ano</v-card-title>
      </v-card>
      <v-card class="mt-4 mx-auto" color="blue">
        <v-sparkline
          :labels="rotulos"
          :value="valores"
          color="white"
          line-width="1"
          padding="20"
          label-size="5"
        ></v-sparkline>
      </v-card>
      <v-card color="green" class="my-4" dark>
        <v-card-title>Total Receitas: {{totalReceitas}}</v-card-title>
      </v-card>
      <v-card color="red" class="my-4" dark>
        <v-card-title>Total Despesas: {{totalDespesas}}</v-card-title>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    totalDespesas: 0,
    totalReceitas: 0,
    rotulos: [],
    valores: [],
    contas: [],
    mesAbrev: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez"
    ]
  }),
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.contas = [
        {
          id: 0,
          descricao: "Conta 1",
          observacoes: "Teste 1",
          tipo: "Receita",
          data: "2020-09-16",
          valor: 10.0
        },
        {
          id: 1,
          descricao: "Conta 2",
          observacoes: "Teste 2",
          tipo: "Despesa",
          data: "2020-09-02",
          valor: 20.0
        },
        {
          id: 2,
          descricao: "Conta 3",
          observacoes: "Teste 3",
          tipo: "Receita",
          data: "2020-08-01",
          valor: 5.0
        },
        {
          id: 3,
          descricao: "Conta 3",
          observacoes: "Teste 3",
          tipo: "Receita",
          data: "2020-02-01",
          valor: 12.0
        },
        {
          id: 2,
          descricao: "Conta 3",
          observacoes: "Teste 3",
          tipo: "Despesa",
          data: "2020-05-01",
          valor: 40.0
        },
        {
          id: 5,
          descricao: "Conta 3",
          observacoes: "Teste 3",
          tipo: "Receita",
          data: "2020-05-01",
          valor: 60.0
        }
      ];

      let hoje = new Date().toISOString().slice(0, 10);

      let ano = hoje.slice(0, 4);
      let mes = hoje.slice(5, 7);

      this.rotulos = this.mesAbrev.slice(0, parseInt(mes));
      this.valores = new Array(parseInt(mes)).fill(0);

      this.contas.forEach(conta => {
        if (ano === conta.data.slice(0, 4)) {
          let mesConta = parseInt(conta.data.slice(5, 7));

          if (conta.tipo === "Receita") {
            this.valores[mesConta - 1] += conta.valor;
          } else {
            this.valores[mesConta - 1] += conta.valor * -1;
          }
        }

        if (conta.tipo === "Receita") {
          this.totalReceitas += conta.valor;
        } else {
          this.totalDespesas += conta.valor;
        }
      });
    }
  }
};
</script>

<style>
</style>