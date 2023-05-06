<template>
  <v-app>
    <v-app-bar app color="white">
      <div class="d-flex align-center">
        <router-link to="/" style="text-decoration: none; color: inherit;">
          <h5 >VegaDev</h5>
        </router-link>
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>

      <!-- href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
       -->
      <v-btn text>
        <v-icon dark> mdi-menu </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
h1 {
  font-family: "Poppins", sans-serif;
  font-size: 47px;
  font-weight: 700;
}
h2 {
  font-family: "Poppins", sans-serif;
  font-size: 39px;
  font-weight: 700;
}
h3 {
  font-family: "Poppins", sans-serif;
  font-size: 33px;
  font-weight: 600;
}
h4 {
  font-family: "Poppins", sans-serif;
  font-size: 27px;
  font-weight: 400;
}
h5 {
  font-family: "Poppins", sans-serif;
  font-size: 23px;
}
h6 {
  font-family: "Poppins", sans-serif;
  font-size: 19px;
}
p {
  font-family: "Poppins", sans-serif;
}
.small {
  font-family: "Poppins", sans-serif;
  font-size: 13px;
}
@media screen and (max-width: 700px) {
  h1 {
    font-size: 23px !important;
  }
  h2 {
    font-size: 22px !important;
  }
  h3 {
    font-size: 20px !important;
  }
  h4 {
    font-size: 19px !important;
  }
  h5 {
    font-size: 18px !important;
  }
  h6 {
    font-size: 17px !important;
  }
  .small {
    font-size: 15px !important;
  }
}
@media screen and (max-width: 960px) and (min-width: 600px) {
  h1 {
    font-size: 32px !important;
  }
  h2 {
    font-size: 28px !important;
  }
  h3 {
    font-size: 25px !important;
  }
  h4 {
    font-size: 22px !important;
  }
  h5 {
    font-size: 20px !important;
  }
  h6 {
    font-size: 18px !important;
  }
  .small {
    font-size: 14px !important;
  }
}
/* @media screen and (min-width: 1904px) {
  h1 {
    font-size: 47px !important;
  }
  h2 {
    font-size: 39px !important;
  }
  h3 {
    font-size: 33px !important;
  }
  h4 {
    font-size: 27px !important;
  }
  h5 {
    font-size: 23px !important;
  }
  h6 {
    font-size: 19px !important;
  }
  .small {
    font-size: 13px !important;
  }
} */
</style>
