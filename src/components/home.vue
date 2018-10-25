<template>
<div class="pageWapper">
    <div>
        姓名:<input type="text" v-model="name">
    </div>
    <div>
        密码:<input type="text" v-model="password">
    </div>
    <div>
        <button @click="handleReg">注册</button>
        <button @click="handleSub">登入</button>
        <button @click="handleStatus">状态</button>
    </div>
</div>
</template>

<script>
    import {authToken} from '../common/config.js';
    export default{
        data(){
            return {
                name:'123',
                password:'123'
            }   
        },
        methods:{
                handleReg(){
                    let params = {
                        userName:this.name,
                        password:this.password
                    };
                    this.$axios.post('/users/reg',params).then((res)=>{
                        console.log(res);
                    }).catch((err)=>{
                        console.log(err);
                    })
                },
               handleSub(){
                   let params = {
                        userName:this.name,
                        password:this.password
                    };
                   this.$axios.post('/users/login',params).then((res)=>{
                       window.sessionStorage.setItem('token',res.data.token)
                   }).catch((err)=>{
                       console.log(err);
                   });
               },
               handleStatus() {
                   console.log(authToken());
                   this.$axios.get('/users/status',authToken()).then(res=>{
                       console.log(res);
                   }).catch(err=>{
                       console.log(err);
                   })
               }
            }
    }
</script>
<style scoped>
    div{
        margin: 60px;
    }
</style>


