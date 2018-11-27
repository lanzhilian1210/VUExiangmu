<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {authToken} from './common/config.js';
export default {
  name: 'App',
  mounted(){
  // this.handleStatus();
  },
  methods: {
    handleStatus() {
        this.$axios.get('/users/status',authToken()).then(res=>{
            // console.log(res);
            // alert('请登入');
        }).catch(err=>{
            console.log(err);
        })
    }
  }
}
</script>

<style>
</style>
