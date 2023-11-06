<template>
    <div class="grid">
      <div class="col-12">
        <div class="card" style="background-color: #f2f2f2; color: #333; text-align: center;">
          <h5 style="color: #333;">Generar el RFC de una persona</h5>
          <form id="rfc-form">
            <div class="p-fluid formgrid grid">
              <div class="field col-12" style="display: flex; justify-content: center;">
                <div style="width: 50%;">
                  <label for="nombre">Nombre(s):</label>
                  <InputText v-model="nombre" type="text" id="nombre" />
                </div>
              </div>
              <div class="field col-12" style="display: flex; justify-content: center;">
                <div style="width: 50%;">
                  <label for="appat">Apellido Paterno:</label>
                  <InputText v-model="appat" type="text" id="apellido-paterno" />
                </div>
              </div>
              <div class="field col-12" style="display: flex; justify-content: center;">
                <div style="width: 50%;">
                  <label for="apmat">Apellido Materno:</label>
                  <InputText v-model="apmat" type="text" id="apellido-materno" />
                </div>
              </div>
              <div class="field col-12" style="display: flex; justify-content: center;">
                <div style="width: 50%;">
                  <label>Fecha de Nacimiento:</label>
                  <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue" dateFormat="dd/mm/yy" placeholder="dd/mm/aaaa" style="width: 100%;" id="fecha-nacimiento" />
                </div>
              </div>
              <div class="field col-12" style="text-align: center;">
                <Button @click="generarRFC" label="GENERAR" style="background-color: #007BFF; width: 50%;" />
              </div>
              <div class="field col-12" style="text-align: center;">
                <Button @click="limpiar" label="Limpiar" severity="info" text style="width: 50%;" />
              </div>
              <div class="field col-12" style="display: flex; justify-content: center;">
                <div style="width: 50%;">
                  <label for="rfc"><strong>RFC:</strong></label>
                  <InputText v-model="rfc" type="text" id="rfc" readonly />
                </div>
              </div>
            </div>
          </form>
          <Toast />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    import Calendar from 'primevue/calendar';
    import Button from 'primevue/button';
    import Toast from 'primevue/toast';
    import { useToast } from 'primevue/usetoast';
  
    const toast = useToast();
    const nombre = ref('');
    const appat = ref('');
    const apmat = ref('');
    const rfc = ref('');
    const calendarValue = ref(null);
  
    const obtenerPrimeraVocalInterna = (palabra) => {
      const vocales = ['a', 'e', 'i', 'o', 'u'];
  
      for (let i = 1; i < palabra.length - 1; i++) {
        if (vocales.includes(palabra[i].toLowerCase())) {
          return palabra[i];
        }
      }
  
      return '';
    };
  
    const generarAleatorio = () => {
      const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numeros = '0123456789';
  
      let aleatorio = '';
  
      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * letras.length);
        aleatorio += letras[randomIndex];
      }
  
      const randomNumIndex = Math.floor(Math.random() * numeros.length);
      aleatorio += numeros[randomNumIndex];
  
      return aleatorio;
    };
  
    const generarRFC = () => {
      const apellidoPaterno = appat.value;
      const apellidoMaterno = apmat.value || 'X';
      const nombres = nombre.value.split(' ');
  
      let primerNombre = nombres[0][0];
  
      if (nombres.length > 1 && (nombres[0].toLowerCase() === 'maría' || nombres[0].toLowerCase() === 'maria' || nombres[0].toLowerCase() === 'josé' || nombres[0].toLowerCase() === 'jose')) {
        primerNombre = nombres[1][0];
      }
  
      const fechaNacimiento = new Date(calendarValue.value);
  
      fechaNacimiento.setDate(fechaNacimiento.getDate() + 1);
  
      const anio = fechaNacimiento.getFullYear().toString().substr(2, 2);
      const mes = (fechaNacimiento.getMonth() + 1).toString().padStart(2, '0');
      const dia = fechaNacimiento.getDate().toString().padStart(2, '0');
  
      rfc.value = (
        apellidoPaterno[0] +
        obtenerPrimeraVocalInterna(apellidoPaterno) +
        apellidoMaterno[0] +
        primerNombre +
        anio +
        mes +
        dia +
        generarAleatorio()
      ).toUpperCase();
    };
  
    const limpiar = () => {
      nombre.value = '';
      appat.value = '';
      apmat.value = '';
      rfc.value = '';
      calendarValue.value = null;
    };
  </script>
  