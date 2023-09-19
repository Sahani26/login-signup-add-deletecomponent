<template>
    
    <img class="logo" src="../assets/download.png" />

<h1>login page</h1>
<div class="login">
        <input type="text" v-model="email" placeholder="enter email">
        <input type="text" v-model="password" placeholder="enter password">
        <button v-on:click="login" >Login</button>
    <p><RouterLink to="./sign">SignUp</RouterLink></p>
    </div>
</template>
<script>
import axios from 'axios'

export default
{
    name:'LoginComp',
    data()
    {
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async login()
        {
            let result = await axios.get(
             `http://localhost:3000/user?email=${this.email}&password=&{this.password}`   
            )
            if (result.status == 200 && result.data.length> 0) {
                // alert("signup done")
                localStorage.setItem("user-info", JSON.stringify(result.data))
       this.$router.push({name:'home'});
            }
        }
    }
};
</script>