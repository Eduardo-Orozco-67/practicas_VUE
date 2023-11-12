<template>
  <div class="grid p-fluid">
    <div class="col-12">
      <div class="card" style="background-color: #f2f2f2;">
        <h5>Lista de Empleados</h5>
        <div class="field">
          <DataTable :value="empleados" showGridlines tableStyle="min-width: 50rem">
            <Column field="nomemp" header="Nombre del empleado"></Column>
            <Column field="salario" header="Salario"></Column>
            <Column field="edad" header="Edad"></Column>
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
  setup() {
    const empleados = ref([]);

    const cargarEmpleados = async () => {
      try {
        const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
        const empleadosData = response.data.data;
        empleados.value = empleadosData.map((empleado) => ({
          nomemp: empleado.employee_name,
          salario: empleado.employee_salary,
          edad: empleado.employee_age,
        }));
      } catch (error) {
        console.error('Hubo un error al consultar la API:', error);
      }
    };

    onMounted(cargarEmpleados);

    return {
      empleados,
    };
  },
};
</script>
