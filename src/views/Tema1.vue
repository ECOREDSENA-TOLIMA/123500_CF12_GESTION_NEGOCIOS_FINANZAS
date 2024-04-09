<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Cultura del riesgo

    .cajon-b.color-acento-contenido.p-3.mb-5(data-aos="fade-left")
      p.mb-0 La cultura de riesgos describe e integra conocimientos, valores, actitudes y creencias que comparten y unifican un grupo de personas con un objetivo común, aplicarla en el interior de las empresas. Implementar la cultura de riesgos en las organizaciones implica tener en cuenta todos los niveles y departamentos de la organización con el fin de reconocer todos los riesgos que se puedan presentar y de esa forma poder gestionarlos y evaluarlos con eficacia y eficiencia, lo que va a permitir cumplir con el objetivo y las metas trazadas por la entidad.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
