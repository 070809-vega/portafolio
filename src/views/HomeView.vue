<template>
  <div>
    <Principal/>
    <Servicios/>
    <Info/>
    <InfoEquipo/>
    <Contacto/>
    <Footer/>
  </div>
</template>

<script>
import Principal from '@/components/Principal'
import Servicios from '@/components/Servicios'
import Info from '@/components/Info'
import InfoEquipo from '@/components/InfoEquipo'
import Footer from '@/components/Footer'
import Contacto from '@/components/Contacto'
export default {
  name: "Home",

  components: {
    Principal,
    Servicios,
    Info,
    InfoEquipo,
    Footer,
    Contacto
  },
};
</script>
