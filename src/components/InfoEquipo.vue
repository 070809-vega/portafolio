<template>
  <div>
    <v-card color="#FAFAFA" elevation="0" class="mt-2">
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="mr-4 ml-4 mt-5">
            Nuestro equipo es responsable de sus proyectos
          </h2>
          <p class="mr-4 ml-4">
            Somos un pequeño equipo de desarrallodadores dedicados en diseñar,
            prototipar y desarrollar tu pagina web
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            src="@/assets/img2.svg"
            class="mt-5 mr-5 ml-5"
            lazy-src="@/assets/img2.svg"
          ></v-img>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "PortafolioInfoEquipo",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
