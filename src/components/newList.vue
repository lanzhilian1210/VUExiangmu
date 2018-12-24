<template>
    <div class="list">
        <h2>列表</h2>
        添加内容:
        <div>
            标题：
            <input type="text" v-model="title">
        </div>
        <div>
            内容：
            <input type="text" v-model="content">
        </div>
        <div><button @click="addList">添加list</button></div>
        <ul>
            <li></li>
        </ul>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                name: '',
                content:'',
                title:''
            }
        },
        methods:{
            addList() {
                console.log(sessionStorage.getItem('token'));
                let params = {
                    title:this.title,
                    content:this.content,
                    objId:sessionStorage.getItem('objId')
                }
                this.$axios.post('/class/subInfo',params).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
            }
        }
    }
</script>
<style lang="">
    *{
        margin: 20px;
    }
    .list{
        margin: 50px;
    }
</style>