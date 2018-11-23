<template>
    <div>
        <ul>
            <li v-for=" (item,index) in list" :key="index">
                <!-- {{item}} -->
            </li>
        </ul>
        <div>
            姓名：
            <input type="text" v-model="student"> 
            <button @click="tijiao">提交</button>
        </div>
        <div>
            班级：
            <input type="text" v-model="classes"> 
            <button @click="tijiao2">提交</button>
        </div>

    </div>
</template>
<script>
    export default{
        data() {
            return {
                list:[],
                student: '',
                classes: ''
            }
        },
        mounted() {
            this.getList()
        },
        methods:{
            tijiao() {
                let params = {
                    name: this.student
                }
                this.$axios.post('/student/getInfo',params).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
            },
            tijiao2() {
                let params = {
                    name: this.classes
                }
                this.$axios.post('/class/subInfo',params).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
            },
            getList() {
                this.$axios.get('/student/getListInfo').then(res=>{
                    this.list = res.data;
                    console.log(this.list)
                }).catch(err=>{
                    console.log(err)
                })
            }
        }
    }
</script>
<style lang="">
    ul{
        margin: 30px 0 0 30px;
        list-style-type: none;
    }
    li{
        margin-bottom: 10px;
        height: 24px;
        font: 14px/24px "微软雅黑";
        color: #333;
        text-align: left;
        padding-left: 10px;
    }
    li:nth-of-type(2n){
        background: #f3f3f3;
    }
    li:nth-of-type(2n+1){
        background: #f9f9f9;
    }
</style>