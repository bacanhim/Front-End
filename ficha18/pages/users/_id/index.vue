<template>
    <h1>A single user, with ID: {{$route.params.id}}</h1>
</template>
<script>
export default {
    validade(data){
        return /^\d+$/.test(data.params.id)
    }
}
</script>
