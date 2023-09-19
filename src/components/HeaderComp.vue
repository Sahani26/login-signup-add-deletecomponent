<template>
   <div class="header">
    <router-link to="/HOME">Home</router-link>

    <router-link to="/add">Add restraurant</router-link>
    <router-link to="/update">Update restraurant</router-link>

    <a v-on:click="logout" href="home">Logout</a>
   </div>
</template>
<script>
export default{
    name:'headerComp',
    methods:{
        logout()
        {
           localStorage.clear();
           this.$router.push({name:'Login'})
        
        }
    }
}
</script>
<style>
.header {
    background-color: #333;
    overflow: hidden
   
}
.header a{
    float: left;
    color: #eab5b5;
    text-decoration: none;
    font-size: 16px;
    padding: 10px 14px;
    text-align: center;
    margin-right: 4px;
    
}
.header a:hover{
    background-color: aqua;
    color:#222;
}
</style>