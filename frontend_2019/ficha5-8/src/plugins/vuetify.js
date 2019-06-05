import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme:{
    primary: "#673ab7",
    secondary: "#9c27b0",
    accent: "#e91e63",
    error: "#f44336",
    warning: "#ffc107",
    info: "#00bcd4",
    success: "#4caf50"
  },
  iconfont: 'md',
})