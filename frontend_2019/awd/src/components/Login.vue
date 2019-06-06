<template>
    <div>
        <h2>LOGIN</h2>
        <form v-on:submit="login">
            <input type="text" name="email" placeholder="email" class="input-control"/><br>
            <input type="password" name="password" placeholder="password" class="input-control"/><br>
            <input type="submit" value="login" class="button--green"/><br>
        </form>
    </div>
</template>

<script>
import router from "../router"
import axios from "axios"
export default {
    name: "Login",
    methods: {
        login: (e) => {
            e.preventDefault()
            let email = e.target.elements.email.value
            let password = e.target.elements.password.value
            let login = () => {
                let data = {
                    email: email,
                    password: password
                }
                axios.post("/api/login", data)
                .then((response) => {
                    console.log("Logado!")
                    router.push("/dashboard")
                })
                .catch((errors) => {
                    console.log(errors)
                })
            }
            login()
        }
    }
}
</script>

<style scoped>
.input-control {
    margin: 10px 0;
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  margin: 5px;
}

.button--green:hover {
  color: #fff;;
  background-color: #3b8070
}
</style>

