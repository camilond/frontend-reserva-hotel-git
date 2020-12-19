<template>
    <div id="User">
        <br><br><br><br><br><br><br><br><br><br><br>
        <h2>Hola <span> {{username}}, </span> ¡Bienvenido!</h2><br>
        <h3>Añadimos una nueva funcionalidad, ahora puedes revisar tus reservas, pruebala!!</h3>
    </div>
</template>

<script>
    export default {
        name: "User",
        data:function(){
            return {
                username: "none"
            }
    },
        created: function(){
            this.username = this.$route.params.username
        }
    }
</script>

<style>
    #User h2{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #User h2{
        font-size: 50px;
        color: #283747;
    }
    #User span{
        padding: 16px 15px;
        color: crimson;
        font-weight: bold;
    }
    #User h3{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        color: #283747;
    }
</style>
