<template>
  <div>
    <canvas id="myChart" width="400" height="200"></canvas>
  </div>
</template>

<script>
import axios from 'axios';
import 'chartjs-adapter-date-fns';
import { Chart } from 'chart.js';
import 'chart.js/auto';

export default {
  data() {
    return {
      apiUrl: 'https://eodhistoricaldata.com/api/eod/MCD.US',
      params: {
        from: '2017-01-05',
        to: '2017-02-07',
        period: 'd',
        fmt: 'json',
        api_token: 'OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX',
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(this.apiUrl, { params: this.params });
        const data = response.data;

        // Extracción de datos de fecha y valor de cierre
        const dates = data.map(entry => new Date(entry.date));
        const closingValues = data.map(entry => entry.close);

        // Llamando a la función que renderiza la gráfica
        this.renderChart(dates, closingValues);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },


    renderChart(dates, closingValues) {
      const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [
            {
              label: 'Closing Values',
              data: closingValues,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
                displayFormats: {
                  day: 'MMM d', // Cambiado de 'MMM D' a 'MMM d'
                },
              },
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },



  },
};
</script>

<style scoped>
#myChart {
  width: 80%;
  margin: 20px auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
