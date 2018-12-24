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
                name:'小米',
                password:'123456',
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
                    this.$axios.post('/users/reg',params).then((res)=>{
                        if(res.data.code == '500') {
                            alert('已经被注册');
                        }
                        if(res.data.code == '200') {
                            alert('注册成功');
                        }
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
                   this.$axios.post('/users/login',params).then((res)=>{
                       this.consumer = this.name;
                       if(res.data.code == '500') {
                           alert('账户不存在,请注册')
                           return ;
                       }
                       if(res.data.message) {
                           sessionStorage.setItem('token',res.data.token);
                           sessionStorage.setItem('objId',res.data.objId);
                            this.$router.push('./newList');
                       }
                       if(res.data.code == '200'& !res.data.message){
                           alert('密码错误')
                       }
                         
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


