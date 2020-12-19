<template>
  <div id="app">
    <div class="header">
      <h1>Reservas de hotel</h1>
      <nav>
      <button v-on:click="init"> Inicio </button>
      <button v-on:click="getTipocuenta" v-if="is_auth" > Tipo de cuenta </button>
      <button v-if="is_auth" v-on:click="ventana_auth" > Autenticar </button>
      <button v-if="is_auth" v-on:click="outreserva" > Mostrar reserva (Nueva!)</button>
      
      </nav>
    </div> 

    <div class="main-component">
      <router-view></router-view>
    </div>

    <div class="footer">
    <h2>G3M4_6 Reservas de hotel</h2>
    </div>
    
  </div>
</template>

<script>



export default {
  name: 'App',
  components: {},
  data: function(){
    return {
      is_auth: localStorage.getItem('isAuth') || false
    }
  },

  methods: {
    init: function(){
      if(this.$route.name != "user"){
        let username   = localStorage.getItem("current_username")
        this.$router.push({name: "user", params:{username:username}})
    }

  },
   
  ventana_auth: function(){
    if(this.$router.name != "autenticacion"){
      this.$router.push('/user/auth')
      //this.$router.push({name:"autenticacion"})
    }
    
  },

  getTipocuenta: function(){
    if(this.$route.name != "tipo_cuenta"){
      let username = localStorage.getItem("current_username")
      this.$router.push({ name:"tipo_cuenta",
                          params:{username:username}
                        })
    }
  },

  outreserva: function(){
    if(this.$route.name != "mostrar_reserva"){
      let username = localStorage.getItem("current_username")
      this.$router.push({name:"mostrar_reserva", params:{username:username}})
    }
  },
 
},

  beforeCreate: function(){
    localStorage.setItem('current_username','cliente1')
    localStorage.setItem('isAuth', true)
    this.$router.push({name:"user",params:{username:'cliente1'}})
  }

}
</script>

<style>
  body{
    margin: 0%;
  }
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #c95d05 ;
    color:#E5E7E9 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header h1{
    width: 15%;
    text-align: center;
  }
  .header nav {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }

  .header nav button{
    color: #000000;
    background: #c95d05;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
  }

  .header nav button:hover{
    color: #c95d05;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
    cursor: pointer;
  }
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;
    background: #FDFEFE ;
  }

  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #c95d05;
    color: #E5E7E9;
  }

  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
