<template>
  <v-app>


    <v-navigation-drawer app temporary fixed v-model="sideNav">
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <router-link to="/" tag="span" style="cursor: pointer">
          <h1 class="title">VueShare</h1>
        </router-link>
      </v-toolbar>


<v-divider></v-divider>

      <!-- SIDE NAV BAR -->
      <v-list>
        <v-list-tile v-for="item in sideNavItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon v-if="item.icon">{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed color="primary" dark>
     <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to='/' tag='span' style="cursor : pointer"/>
        VueShare
      </v-toolbar-title>
      
      <v-spacer></v-spacer>

      <v-text-field flex prepend-icon="search" placeholder="Search posts" color="accent" single-line hide-details>
      </v-text-field>

      <v-spacer></v-spacer>
       <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
          <v-icon class="hidden-sm-only" left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <v-container class="mt-4">
      <transition name='fade'>
        <router-view />
      </transition>
      </v-container>
    </main>
  </v-app>
</template>
<style>
.fade-enter-active,
.fade-leave-active{
  transition-property: all;
  transition-duration: .25s;
}
.fade-enter,
.face-leave-active{
  opacity: 0;
  transform: translateX(-25px);
}
</style>


<script>
  export default{
    name : 'App',
    data(){
      return{
        sideNav:false
      }
    },
    computed:{
      horizontalNavItems(){
        return[
          {icon: 'chat', title: 'Posts', link: '/posts'},
          {icon: 'lock_open', title: 'Sign In', link: '/signin'},
          {icon: 'create', title: 'Sign Up', link: '/signup'}
        ]
      },
      sideNavItems(){
        return[
          {icon: 'chat', title: 'Posts', link: '/posts'},
          {icon: 'lock_open', title: 'Sign In', link: '/signin'},
          {icon: 'create', title: 'Sign Up', link: '/signup'}
        ]
      }
    },
    methods: {
      toggleSideNav(){
        this.sideNav=!this.sideNav;
      }
    },
  }
</script>