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
        <button @click="getSession">getSession</button>
    </div>
    <div v-show="consumer">
        <p>{{consumer}}已登入</p>
    </div>
</div>
</template>

<script>
    import {authToken} from '../common/config.js';
    export default{
        data(){
            return {
                name:'123',
                password:'123',
                consumer:''
            }   
        },
        methods:{
            // 注册
                handleReg(){
                    let params = {
                        userName:this.name,
                        password:this.password
                    };
                    this.$axios.post('/newUser/signUp',params).then((res)=>{
                        console.log(res);
                    }).catch((err)=>{
                        console.log(err);
                    })
                },
                // 登入
               handleSub(){
                   let params = {
                        userName:this.name,
                        password:this.password
                    };
                   this.$axios.post('/newUser/signIn',params).then((res)=>{
                       this.consumer = this.name;
                       console.log(document.cookie);
                   }).catch((err)=>{
                       console.log(err);
                   });
               },
               getSession() {
                  this.$axios.get('/newUser/sess').then((res)=>{
                      console.log(res)
                   }).catch((err)=>{
                       console.log(err);
                   }); 
               }
            }
    }
</script>
<style scoped>
    div{
        margin: 60px;
    }
</style>


