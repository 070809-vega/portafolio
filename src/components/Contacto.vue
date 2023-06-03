<template>
  <div>
    <v-card class="pt-5">
      <v-form action="https://formsubmit.co/vegdesing@gmail.com" method="POST">
        <h2 class="ml-5">Envianos tus comentarios</h2>
        <p class="ml-5">
          Estamos siempre pendiente de lo que dicen nuestros clientes
        </p>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="Nombre"
                name="nombre"
                v-model="nombre"
                :rules="nombreRules"
                required
                filled
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Correo"
                name="correo"
                v-model="correo"
                :rules="correoRules"
                required
                filled
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Telefono"
                name="telefono"
                v-model="telefono"
                :rules="telefonoRules"
                required
                filled
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Tipo de servicio que solicita"
                name="Tipo de servicio que solicita"
                v-model="tipo"
                :rules="tipoRules"
                required
                filled
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="Mensaje"
                name="mensaje"
                v-model="mensaje"
                :rules="mensajeRules"
                required
                filled
              ></v-textarea>
            </v-col>
          </v-row>
          <!-- <v-btn dark type="submit" >  </v-btn> -->
          <input type="submit" :disabled="bloquear" value="Enviar" dark>
          <input
            dark
            type="hidden"
            name="_next"
            value="https://luisvega.vercel.app/"
          />
          <input dark type="hidden" name="_captcha" value="false" />
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "PortafolioContacto",
  data() {
    return {
      nombre: "",
      correo: "",
      telefono: "",
      tipo: "",
      mensaje: "",
      nombreRules: [(v) => !!v || "El nombre es requerido"],
      correoRules: [(v) => !!v || "El correo es requerido"],
      telefonoRules: [(v) => !!v || "El telefono es requerido"],
      tipoRules: [(v) => !!v || "El tipo es requerido"],
      mensajeRules: [(v) => !!v || "El mensaje es requerido"],
    };
  },
  computed:{
    bloquear() {
      if (this.nombre.trim() === "") {
        return true;
      } else if (this.correo.trim() === "") {
        return true;
      } else if (this.telefono.trim() === "") {
        return true;
      } else if (this.tipo.trim() === "") {
        return true;
      } else if(this.mensaje.trim() === ""){
        return true
      }else {
        return false;
      }
      // return this.campos.nombre.trim() === "" ? true : false
    },
  },
  mounted() {},
  methods: {},
};
</script>
