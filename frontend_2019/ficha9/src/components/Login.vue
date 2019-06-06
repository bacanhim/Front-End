<template>
    <div>
        <h2>Login</h2>
        <form v-on:submit='login'>
            <input type="text" name="email" placeholder="email" class="input-control"/><br>
            <input type="password" name="password" placeholder="password" class="input-control"/><br>
            <input type="submit" value="Login" class="button--green"/><br>
        </form>
    </div>
</template>
<script>
import router from "../router"
import axios from "axios"
import func from '../../vue-temp/vue-editor-bridge';
export default {
    name: "Login",
    methods : {
        login: function(e){
            e.preventDefault();
            let email = e.targer.elements.email.value
            let password = e.targer.elements.password.value
            let login = function(){
                let data = {
                    email: email,
                    password: password
                }
                axios.post("/api/login",data)
                    .then(function(){
                        console.log("Logged in")
                        router.push("/dashboard")
                    })
                    .catch(function(errors){
                        console.log(errors)
                    })
            }
            login()
        }
    }
}
</script>
<style scoped>
.input-control{
    margin: 10px 0;
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
}
</style>

