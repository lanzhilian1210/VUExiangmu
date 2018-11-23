<template>
    <div>
        <input type="text" v-model="text">
        <button @click="tijiao">提交</button>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                text: ''
            }
        },
        methods:{
            tijiao() {
                let params = {
                    text:this.text
                };
                this.$axios.post('/admin/subInfo',params).then(res=>{
                    this.$router.push('/list')
                }).catch(err=>{
                    console.log(err)
                })
            }
        }
    }
</script>
<style lang="">
    input{
        margin: 50px 0 0 50px;
        height: 30px;
        width: 300px;
        margin-right: 30px;
    }
</style>