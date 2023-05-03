<template>
  <div>
    <v-card class="text-center pb-5">
      <h2>Servicios</h2>
      <v-row>
        <v-col cols="12" md="4" v-for="card in cards" :key="card.title">
          <v-card class="mt-2 ml-5 mr-5">
            <v-card width="100%" class="contenedor1 pt-2 mr-10" elevation="0">
              <v-img :src="card.img" class="img1" :lazy-src="card.img"></v-img>
            </v-card>
            <h3 class="mt-2 mb-2">{{ card.title }}</h3>
            <p>{{ card.body }}</p>
            <p class="small">{{ card.small }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "PortafolioServicios",
  data() {
    return {
      cards: [
        {
          img: require("@/assets/desarrollo-web.svg"),
          title: "Desarrollo Web",
          body: `Dedicados en el desarrollo de tu web, con la mas alta experiencia en el area ...`,
          // body: `Dedicados en el desarrollo de tu web, con la mas alta experiencia en el area, 
          // somos tu mejor opcion para la creacion de tu web`,
          small: "Leer mas",
        },
        {
          img: require("@/assets/diseno-web.svg"),
          title: "Diseño Web",
          body: `Dedicados en cada detalle del diseño de tu pagina web, siempre estamos ...`,
          // body: `Dedicados en cada detalle del diseño de tu pagina web, siempre estamos 
          // renovando nuestros diseños para tu empresa, con la mas alta experiencia en el campo`,
          small: "Leer mas",
        },
        {
          img: require("@/assets/fotografia.svg"),
          title: "Fotografia",
          body: `Contamos con un equipo de fotografos dedicados que daran un impacto a tu web ...`,
          // body: `Contamos con un equipo de fotografos dedicados que daran un impacto a tu web 
          // ya se que encargaran de tomar la fotografias de tus productos en los mejores angulos 
          // posibles`,
          small: "Leer mas",
        },
      ],
    };
  },
  computed:{
    // shortText(cards){
    //   if(this.cards.length >= 130){
    //     return this.cards.substring(0,130) + '...'
    //   }else{
    //     return this.cards
    //   }
    //   // return this.cards.body.length > 130 ? this.cards.body.substring(0,130) + '...' : this.cards.body
    // }
  },
  mounted() {
    
  },
  methods: {
    
  },
};
</script>
<style scoped>
.img1 {
  max-width: 60px;
  max-height: 60px;
}
.contenedor1 {
  display: flex;
  justify-content: center;
}
.small {
  color: #0d47a1;
}
</style>
