<template>
    <img class="logo" src="../assets/download.png" />
    <h1>SignUp</h1>
    <div class="register">
        <input type="text"  placeholder="enter name">
        <input type="text" v-model="email" placeholder="enter email">
        <input type="text" v-model="password" placeholder="enter password">
        <button v-on:click="signup">SignUp</button>
    <p><RouterLink to="./">Login</RouterLink></p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'SignupComp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signup() {
            console.warn("signUp", this.name, this.email, this.password)
            let result = await axios.post("http://localhost:3000/user", {
                email: this.email,
                name: this.name,
                password: this.password

            });
            console.warn(result);
            if (result.status == 201) {
                // alert("signup done")
                localStorage.setItem("user-info", JSON.stringify(result.data))
       this.$router.push({name:'Login'})
            }
           
        }
    },
    mounted()
    {
        let user = localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'home'})
        }
    }
}
</script>
<style>

</style>