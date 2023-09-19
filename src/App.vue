<template>
  <router-view/>
</template>

<script>
// import SignupComp from './components/SignupComp.vue'

export default {
  name: 'App',
  // components: {
  //   SignupComp
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}

.logo {
    width: 100px;

}

.register input, .login input , .add input{
    width: 300px;
    height: 40px;
    display: block;
    border: 1px solid skyblue;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    margin-bottom: 30px;


}
body{
  padding: 0;
  margin: 0;
}
.register button, .login button, .add button{
    width: 320px;
    height: 40px;
    background-color: skyblue;
    color: aliceblue;
    cursor: pointer;

}
</style>
