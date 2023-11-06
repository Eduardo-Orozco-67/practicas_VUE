<template>
    <div class="grid">
      <div class="col-12">
        <div class="card">
          <div class="flex align-items-center justify-content-center">
            <img class="rounded-image" src="/layout/images/dash.png" alt="Banner" />
          </div>
          <Divider />
            <p class="m-10">
            BIENVENIDO A ESTE SITIO DONDE ESTAMOS SUBIENDO NUESTRAS PRACTICAS REALIZADAS EN VUE PARA LA MATERIA DE DESARROLLLO WEB Y MOVIL. Usamos como plantilla:
            <a href="https://sakai.primevue.org/#/"><strong>SAKAI</strong></a>
            </p>
            <div class="flex align-items-center justify-content-center pt-2 gap-2">
            <a class="pi pi-github" style="font-size: 1.5rem" href="https://github.com/Eduardo-Orozco-67/practicas_VUE"></a>
            <p>LINK DEL REPO</p>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Divider from 'primevue/divider';
  
  export default {
    components: {
      Divider
    }
  };
  </script>
  
  <style>
  .rounded-image {
    max-width: 100%; /* Ajusta el ancho de la imagen al contenedor */
    height: auto; /* Mantiene la proporción original */
    border-radius: 10px; /* Borde redondeado */
  }
  
  /* Estilos adicionales según tus preferencias */
  </style>
  