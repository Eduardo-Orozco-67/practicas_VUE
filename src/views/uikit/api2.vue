<template>
    <div class="grid p-fluid">
      <div class="col-12 xl:col-4">
        <div class="card" style="background-color: #f2f2f2;">
          <h5>Consultar API REST Empleado</h5>
          <div class="col-12 md:col-12">
            <div class="field">
              <label for="inputId">Id empleado:</label>
              <InputText id="inputId" type="number" v-model="idEmp" />
            </div>
  
            <div class="field">
              <label for="nombre">Nombre</label>
              <InputText id="nombre" v-model="nombre" field="name" readonly />
            </div>
  
            <div class="field">
              <label for="salario">Salario</label>
              <InputText id="salario" type="number" v-model="salario" readonly />
            </div>
            <div class="field">
              <label for="edad">Edad</label>
              <InputText id="edad" type="number" v-model="edad" readonly />
            </div>
            <Button label="Consultar API" icon="pi pi-search" @click="consultarAPI" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  import Button from 'primevue/button';
  import InputText from 'primevue/inputtext';
  
  export default {
    setup() {
      const idEmp = ref('');
      const nombre = ref('');
      const salario = ref('');
      const edad = ref('');
  
      const consultarAPI = async () => {
        const apiUrl = `https://dummy.restapiexample.com/api/v1/employee/${idEmp.value}`;
        try {
          const response = await axios.get(apiUrl);
          nombre.value = response.data.data.employee_name;
          salario.value = response.data.data.employee_salary;
          edad.value = response.data.data.employee_age;
        } catch (error) {
          console.error('Hubo un error al consultar la API:', error);
        }
      };
  
      return {
        idEmp,
        nombre,
        salario,
        edad,
        consultarAPI,
      };
    },
  };
  </script>
  