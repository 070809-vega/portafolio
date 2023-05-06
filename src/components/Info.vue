<template>
  <div>
    <v-card color="#FAFAFA">
      <v-row>
        <v-col cols="12" md="6">
          <v-card color="transparent" elevation="0" class="contenedor">
            <v-card class="contenedor-img" elevation="0" color="transparent">
              <v-img
                src="@/assets/img1.svg"
                class="mr-5 ml-5"
                lazy-src="@/assets/img1.svg"
              ></v-img>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <h2 class="mr-4 ml-4">
            Brindando a su empresa el mejor servicio y calidad
          </h2>
          <p class="mr-4 ml-4">
            Brindamos la mejor atencion a la hora de desarrollar y diseñar tu
            pagina web, somos el equipo perfecto para ayudarte a tener precencia
            en internet 
          </p>
          <v-row>
            <v-col cols="12" v-for="card in cards" :key="card.title">
              <v-card color="transparent" class="mr-4 ml-4" elevation="0">
                <h3>
                  {{ card.title }}
                  <v-progress-linear value="80" height="5"></v-progress-linear>
                </h3>
              </v-card>
            </v-col>
          </v-row>
          <v-btn class="ml-4 mt-5" dark to="/proyectos">Leer mas</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "PortafolioInfo",
  data() {
    return {
      cards: [
        {
          title: "Desarrollo Web",
        },
        {
          title: "Aprendizaje",
        },
        {
          title: "Planeacion",
        },
        {
          title: "Programación",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.contenedor {
  display: flex;
  justify-content: center;
}
h3 {
  font-weight: 500;
}
</style>
