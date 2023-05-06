<template>
  <div>
    <v-footer color="#263238" class="white--text">
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-card color="transparent" class="flex" elevation="0">
            <p class="small ml-10 mb-2 white--text">Enlaces</p>
            <v-divider dark></v-divider>
            <v-btn
              v-for="text in texto"
              :key="text.text"
              class="mx-2 white--text text-capitalize mt-2"
              text
              rounded
            >
              <router-link
                :to="text.to"
                style="text-decoration: none; color: inherit"
              >
                <p class="small">• {{ text.text }}</p>
              </router-link>
            </v-btn>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card color="transparent" class="flex" elevation="0">
            <p class="small ml-10 mb-2 white--text">Contacto</p>
            <v-divider dark></v-divider>
            <a
              style="text-decoration: none"
              v-for="cont in contacto"
              :key="cont.texto"
              :href="cont.to"
            >
              <v-btn class="mx-2 white--text text-capitalize mt-2" text rounded>
                <p class="small text-capitalize">
                  <v-icon>{{ cont.icono }}</v-icon>
                  {{ cont.texto }}
                </p>
              </v-btn>
            </a>
            <v-card color="transparent" elevation="0">
              <a
                style="text-decoration: none"
                v-for="icon in icons"
                :key="icon.icon"
                :href="icon.to"
              >
                <v-btn class="mx-4 white--text" icon target="_blank">
                  <v-icon size="24px">
                    {{ icon.icon }}
                  </v-icon>
                </v-btn>
              </a>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: "PortafolioFooter",
  data() {
    return {
      texto: [
        { text: "Sobre mi", to: "/about" },
        { text: "Proyectos", to: "/proyectos" },
        { text: "Servicios", to: "/servicios" },
        { text: "Precios", to: "/precios" },
      ],
      contacto: [
        { texto: "+52 55-11-10-56-30", icono: "mdi-phone", to:'tel:+525511105630' },
        { texto: "vegalu63@gmail.com", icono: "mdi-gmail", to:'mailto:vegalu63@gmail.com' },
      ],
      icons: [
        {
          icon: "mdi-facebook",
          to: "https://www.facebook.com/profile.php?id=100091822421744",
        },
        {
          icon: "mdi-linkedin",
          to: "https://www.linkedin.com/in/luis-antonio-vega-vargas-687b95199/",
        },
        { icon: "mdi-instagram", to: "https://www.instagram.com/luisvegadev/" },
        {
          icon: "mdi-whatsapp",
          to: "https://api.whatsapp.com/send?phone=525511105630",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
