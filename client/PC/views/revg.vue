<template>
<div style="width:400px;margin:0 auto;margin-top:200px;border:1px solid black">
<div><p style="margin-bottom:10px;font-size:20px;text-align:center;">freeSell登陆</p></div>
    <el-form ref="form" v-model="form" label-width="80px">
        <el-form-item label="用户账号">
            <el-input v-model="form.number" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="用户密码">
            <el-input v-model="form.pass"  placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
            <el-input v-model="form.passA"  placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="revg">确认注册</el-button>
            <el-button @click="cancel">取消</el-button>
        </el-form-item>
    </el-form>
    </div>
</template>
<script>
import Ajax from '../store/ajax'
import apiUrl from '../store/apiUrl'
export default{
    data(){
        return{
            form:{
                number:'',
                pass:'',
                passA:'',
            }
        }
    },
    methods: {
        cancel(){
            this.form.number = '';
            this.form.pass = ''
        },
        revg(){
            if(this.form.number.length === 0){
                alert('用户账号不能为空')
                return
            }
            if(this.form.pass.length === 0){
                alert('用户密码不能为空')
                return
            }
            if(this.form.passA.length === 0){
                alert('请再次输入密码')
                return
            }
            if(this.form.pass != this.form.passA){
                alert('两次输入的密码不一样')
                return
            }
            Ajax.post(apiUrl.revg,{
                number:this.form.number,
                pass:this.form.pass
            },(data)=>{
                if(data.success){
                    alert('注册成功,将跳转到登陆页面登陆')
                    this.$router.go(-1)
                }else{
                    alert(data.message)
                }
            })
        },
    },
}
</script>
