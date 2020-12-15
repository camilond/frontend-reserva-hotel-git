<template>
    <div id="Tipo_cuenta">
        <h2>{{nombre}}</h2>
        <h2>Tu tipo de cuenta es: <span> {{tipocuenta}}  </span> </h2>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'tipo_cuenta',
    data: function (){
        return {
            nombre: "N/A",
            tipocuenta: "N/A"
        }   
    },


    created: function(){
        this.nombre = this.$route.params.username
        let self = this
        axios.get("https://reserva-hotel.herokuapp.com/user/tipocuenta/" + this.nombre)
            .then((result) => {
                self.tipocuenta= result.data.tipo_cuenta_user
            })
            .catch((error) => {
                alert("ERROR Servidor");
            });
    }
}
</script>

<style>
    #Tipo_cuenta{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #Tipo_cuenta h2{
        font-size: 50px;
        color: #283747;
    }
    #Tipo_cuenta span{
        color: crimson;
        font-weight: bold;
    }
</style>
