<template>
    <div id="Reserva">
        <table class="tabla_reserva" width="75%" border="2" cellpadding="15" cellspacing="1" bordercolor="#283347" style="border-collapse:collapse;border-color:#283347;">

            <tr>

                <th>ID CLIENTE</th>
                <th>HABITACION</th>
                <th>FECHA</th>
                <th>COMIDA</th>
                <th>AEROPUERTO</th>
                <th>DATOS ADICIONALES</th>
                <th>SUGERENCIAS</th>

            </tr>

            <tr>

                <td>{{id_usuario1}}</td>
                <td>{{habitacion1}}</td>
                <td>{{fecha1}}</td>
                <td>{{comida1}}</td>
                <td>{{aeropuerto1}}</td>
                <td>{{datosmas1}}</td>
                <td>{{sugerencias1}}</td>

            </tr>

            </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'mostrar_reserva',
    data: function (){
        return {
            id_usuario1:  "N/A",
            habitacion1: "N/A",
            fecha1:      "N/A",
            comida1:     "N/A",
            aeropuerto1: "N/A",
            datosmas1:   "N/A",
            sugerencias1:"N/A"
        }   
    },


    created: function(){
        this.id_usuario1 = this.$route.params.username

        let self = this
        axios.get("https://reserva-hotel.herokuapp.com/user/reserva/" + this.id_usuario1)
            .then((result) => {

                self.habitacion1= result.data.habitacion
                self.fecha1= result.data.fecha
                self.comida1= result.data.comida
                self.aeropuerto1= result.data.aeropuerto
                self.datosmas1 = result.data.moredata
                self.sugerencias1= result.data.sugerencia
                
            })
            .catch((error) => {
                alert("No existe esa reserva");
            });
    }
}
</script>

<style scope>
    #Reserva{
        font-family: arial;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #Reserva th{
        font-size: 30px;
        color: #ffffff;
        text-align: center;
        background-color:#03122e;
    }
    
    #Reserva td{
        font-size: 25px;
        color: #283747;
        text-align: center;
    }
 

 
</style>
