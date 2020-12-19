<template>
    <div id="auth">

        <form class ="formulario" v-on:submit.prevent > 
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
                    alert("Logeado correctamente")
                }else{
                    alert("Contraseña incorrecta")
                }
                })
                .catch((error) => {
                    alert("Usuario no ha sido creado");
                });
                
            }
        },
        
        created:function(){
            
            
            
        }

    }
</script>

<style scoped>

    #auth{
        
        font-family: arial;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #auth p{
        font-size: 35px;
        color: #283747;

    }

    #auth button {
        width: 97%;
        background-color: #080b38;
        border: none;
        color: white;
        padding: 16px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 20px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
}

</style>