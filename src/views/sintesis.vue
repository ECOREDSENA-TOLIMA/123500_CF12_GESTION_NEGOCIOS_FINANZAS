<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-2(data-aos="fade-right") Uno de los aspectos fundamentales, que garantiza, de cierta manera, el éxito de cualquier organización es la identificación, análisis y manejo de los riesgos a los que puede estar expuesta la empresa, pero ¿qué herramienta es la adecuada para llevar a cabo este proceso?
    p.mb-2(data-aos="fade-right") El objetivo de este espacio de formación es dar a conocer todos los elementos, características y variables que se deben tener en cuenta para la formulación y la implementación de una matriz de riesgo que dé respuesta a los requerimientos propios de cada tipo de negocio.
    p.mb-2(data-aos="fade-right") El desarrollo, de manera adecuada, de una matriz de riesgos va a permitir la toma de decisiones asertivas y la formulación de planes estratégicos coherentes en relación con los objetivos empresariales y las necesidades del mercado. 
    p.mb-5(data-aos="fade-right") Una breve revisión de los temas vistos, se encuentran en el siguiente esquema:


    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen que representa la síntesis de este material de formación, el cual menciona la temática abordada, la cual inicia con la identificación del riesgo y se va dividendo en la cultura del riesgo, la matriz de riesgos, hasta llegar a cumplir con un plan estratégico.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
