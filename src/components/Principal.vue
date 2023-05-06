<template>
  <div>
    <v-card color="#8E24AA" dark class="text-center">
      <v-row>
        <v-col cols="12" md="6">
          <h1 class="pt-5 mr-2 ml-2">Diseños Y Desarrollo web</h1>
          <h4 class="mr-10 ml-10 mt-5">
            Mi nombre es Luis Antonio Vega Vargas. Soy Desarrollador de
            Aplicaciones Web y soy muy dedicado y apasionado a mi trabajo
          </h4>
          <v-btn color="white" class="sobreMi mr-10 mt-5 mb-10" to="/about">SOBRE MI</v-btn>
          <v-btn outlined class="mt-5 mb-10" to="/proyectos">PROYECTOS</v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="@/assets/baner1.png" class="mb-10"></v-img>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "PortafolioPrincipal",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.sobreMi {
  color: #0d47a1;
}
</style>
