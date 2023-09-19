<template>
    <Header />
    <h1>add</h1>
    <form class="add">
        <input type="text" placeholder="enter name" v-model="restaurant.name" name="name" />
        <input type="text" placeholder="enter address" v-model="restaurant.address" name="address" />
        <input type="text" placeholder="enter contact" v-model="restaurant.contact" name="contact" />
        <button type="button" v-on:click="addrestuarant">add restaurant</button>
    </form>
</template>
<script>

import Header from './HeaderComp.vue'
import axios from 'axios'
export default
    {
        name: 'AddComp',
        components: {
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
        methods: {
            async addrestuarant() {
                console.warn(this.restaurant)
                const result = await axios.post("http://localhost:3000/restaurant", {

                    name: this.restaurant.name,
                    address: this.restaurant.address,
                    contact: this.restaurant.contact

                });

                if (result.status == 201) {

                    this.$router.push({ name: 'home' });
                }

                console.warn("result", result)
            }
        },
        mounted() {
            let user = localStorage.getItem('user-info');
            if (!user) {
                this.$router.push({ name: 'sign' });
            }
        }
    }
</script>