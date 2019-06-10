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
        <el-form-item>
            <span @click="forgetpass">忘记密码</span>
            <span style="float:right;" @click="revg">注册新账号</span>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login">登陆</el-button>
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
            }
        }
    },
    methods: {
        forgetpass(){
            alert("你点击了忘记密码，然而我没有写这个功能");
        },
        cancel(){
            this.form.number = '';
            this.form.pass = ''
        },
        login(){
            console.log('点击了登陆按钮')
            if(this.form.number.length === 0){
                alert('用户账号不能为空')
                return
            }
            if(this.form.pass.length === 0){
                alert('用户密码不能为空')
                return
            }
            Ajax.post(apiUrl.login,{
                number:this.form.number,
                pass:this.form.pass
            },(data)=>{
                console.log(data)
                if(data.success){
                    alert('登陆成功')
                    this.$store.commit('setToken',data.data.token)
                    this.$router.push("main")
                }else{
                    alert(data.message)
                }
            })
        },
        revg(){
            this.$router.push("revg")
        }
    },
}
</script>
