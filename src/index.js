import Vue from 'vue'
import App from './components/App.vue'

Vue.config.devtools = true;
new Vue({
  el: '#app',
  render: h => h(App)
})