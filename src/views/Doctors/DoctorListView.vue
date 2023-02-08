<template>
    <head>
        <link rel="stylesheet" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css">
       <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </head> 
   <home-view></home-view>
     <body id="app">
        <table class="table">
            <thead>
               <tr>
                <th>Name</th>
                
                <th>Phone</th>
                <th>Email</th>
                <th>Doctor Type</th>
                <th>Specialization</th>
                <th>State</th>
                <th>Status</th>
                <th>&nbsp;&nbsp;&nbsp; Action &nbsp;&nbsp;&nbsp;</th>
               </tr>
            </thead>
            <tbody>
                <tr v-for="doctorList in list" :key="doctorList">
                    <td > {{(doctorList.doctorName)}}</td>
                    <td>{{(doctorList.doctorPhone)}}</td>
                    <td>{{(doctorList.doctorSpecialization)}}</td>
                    <td>{{(doctorList.doctorEmail)}}</td>
                    <td>{{(doctorList.doctorType)}}</td>                   
                    <td>{{(doctorList.doctorState)}}</td>
                    <td>{{(doctorList.doctorStatus)}}</td>
                    <td>
                        <router-link class="router-link"  to="WebsocketView"><i class="fa-solid fa-comment"></i></router-link>
                        <router-link class="router-link"  to="GmailSenderView"> <i class="fa-solid fa-envelope"></i></router-link>
                        <router-link class="router-link"  to="PatientDetailsForm"><i class="fa-solid fa-pencil"></i></router-link>
                    </td>
                </tr>
            </tbody>
        </table>
       
    </body>
</template>
<script>
import axios from 'axios';
export default{
    name: "PatientListView",
    data(){
        return{
            list:[]
        }
    },
    async mounted(){
        // let result = await axios.get("http://localhost:8080/findAllD");
        // this.list = result.data

        axios.get('http://192.168.1.40:8080/findAllDoctor',{
    headers:{
      Authorization: `Bearer ` +localStorage.getItem('token')
 
  }
}).then(response => {
            this.list = response.data;
            console.log(response.data);
        })
        .catch(error =>{
            this.errors.push(error);
            console.log(error);
        })
    },

    
}

</script>

<style scoped>

#app{
    width: 100%;
}
.table{
    width: 100%;
    background: transparent;
}
.router-link{
    text-decoration: none;
    background-color: rgb(10, 116, 255);
    color: rgb(255, 255, 255);
    font-size: 10px;
    margin: 5px;
    padding: 5px;
    box-sizing: border-box;
}
.router-link:hover{
    position: relative;
    top: 2px;
    background-color: rgb(65, 147, 255);
}
table {
  font-family: arial, sans-serif;
  font-size: 12px;
  border-collapse: collapse;
  text-align: center;
}

td, th {
border: 1px rgba(255, 255, 255, 0.05) solid;
color: #fff;
  text-align: left;
  padding: 8px;
  text-align: center;
}

thead th{
    background-color: #11101d;
    color: white;
    border: 1px rgba(255, 255, 255, 0.05) solid;
}

</style>