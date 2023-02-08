<template>
  <div class="container">
    <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import axios from 'axios'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  mounted(){
    axios.get(`http://localhost:8080/chart`).then(response => {
            this.list = response.data;
      
        })
        .catch(error =>{
            this.errors.push(error);
            console.log(error);
        })
    
  },
  data() {

    return {
      chartData: {
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','Sep', 'Oct', 'Nov', 'Dec'  ],
        datasets: [ {
            label: 'Admins',
            backgroundColor: '#fff',            
            data:[32,3,34,43,4,56,6,76,54,67,87,89]
          } ],
          
      },
      chartOptions: {
        responsive: true
      }
    }
  }
  
}

</script>

<style>
#my-chart-id{
  color: #fff;
}
</style>