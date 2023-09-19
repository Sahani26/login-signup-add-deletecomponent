<template>
    <Header/>
    <h1>{{name}},welcome to home page</h1>
    <table border="1px">
        <td>id</td>
            <td>name</td>
            <td>address</td>
            <td>contact</td> 
            <td>action</td> 
        <tr v-for="item in restaurant" :key="item">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.contact }}</td> 
            <td><router-link :to="'/update/+item.id'">update</router-link></td>
        </tr>
    </table>
</template>
<script>
import axios from 'axios';
import Header from './HeaderComp.vue'
export default{
    name:'HomeComp',

    data()
   {
    return {
        name:'',
        restaurant:[],
    }
   },
    components:{
        Header
    },
    async mounted()
    {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if(!user)
        {
            this.$router.push({name:'Signup'})
        }
        let result =await axios.get("http://localhost:3000/restaurant");
this.restaurant = result.data
    }
}
</script>
<style>
td{
    width: 160px;
    height: 40px;
}
</style>