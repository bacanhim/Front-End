<template>
  <v-app>
    <v-toolbar fixed color="primary" dark>
      <v-toolbar-side-icon/>
      <v-toolbar-title>
        <router-link to='/' tag='span' style="cursor : pointer"/>
        VueShare
      </v-toolbar-title>
      <v-spacer/>
      <v-text-field flex prepend-icon='search' placeholder='Search posts' color=áccent single-line hide-details> </v-text-field>
      <v-toolbar-items>
        <v-btn flat v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <v-container class="mt-4">
      <router-view />
      </v-container>
    </main>
  </v-app>
</template>
<script>
  export default{
    name : 'App',
    computed:{
      horizontalNavItems(){
        return[
          {icon: 'chat', title: 'Posts', link: '/posts'},
          {icon: 'lock_open', title: 'Sign In', link: '/sighin'},
          {icon: 'create', title: 'Sign Up', link: '/signup'}
        ]
      }
    }
  }
</script>