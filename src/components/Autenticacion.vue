<template>
    <div id="auth">
        <form class ="formulario" v-on:submit.prevent>
        <p>Usuario</p>
        <input type="text" v-model="logusuario">
        <p>Contraseña</p>
        <input type="text" v-model="logcontrasenna"><br><br>
        <button class="buttonlogin" v-on:click="enviodatos">  Ingresar </button>
        </form>
        
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "autenticar",
        data:function(){
            return {
                logusuario: "",
                logcontrasenna: ""
            }
        }, 
        methods: {
            enviodatos:function(){
                var bodyJson = {
                    username: this.logusuario,
                    password: this.logcontrasenna
                }

                axios.post("https://reserva-hotel.herokuapp.com/user/auth", bodyJson)
                .then((resultado) => {
                if(resultado.data.Autenticado){
                    alert("Logeado Correctamente")
                }else{
                    alert("Contraseña incorrecta")
                }
                })
                .catch((error) => {
                    alert("Usuario no existe");
                });
                
            }
        },
        
        created:function(){
            
            
            
        }

    }
</script>

<style>
    #auth{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    #auth p{
        font-size: 50px;
        color: #283747;
    }

</style>
