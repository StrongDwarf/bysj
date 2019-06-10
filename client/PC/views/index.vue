<template>
    
</template>
<script>
    export default {
        mounted(){
            if(this.$store.state.token){
                this.$router.push("main")
            }else{
                this.$router.push("login")
            }
        }
    }
</script>