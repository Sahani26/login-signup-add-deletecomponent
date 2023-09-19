<template>
    <Header/>
<h1>update</h1>
<form class="add">
        <input type="text" placeholder="enter name" v-model="restaurant.name" name="name" />
        <input type="text" placeholder="enter address" v-model="restaurant.address" name="address" />
        <input type="text" placeholder="enter contact" v-model="restaurant.contact" name="contact" />
        <button type="button" v-on:click="updaterestuarant">update restaurant</button>
    </form>
</template>
<script>
import Header from './HeaderComp.vue'
import axios from 'axios';
export default
{
    name:'UpdateComp',
    components:{
        Header
    },
    data() {
            return {
                restaurant: {
                    name: '',
                    address: '',
                    contact: ''
                }
            }
        },
       async mounted()

        {
            let user =localStorage.getItem('user-info');
            if(!user)
            {
                this.$router.push({ name: 'sign' });
            }
            const result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id);
            // console.warn(this.$route.params.id)
            // console.warn(result.data)
            this.restaurant=result.data
        }
}
</script>