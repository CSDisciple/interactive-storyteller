// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MediumEditor from 'vuejs-medium-editor'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'medium-editor/dist/css/medium-editor.css'
import 'vuejs-medium-editor/src/themes/default.css'
// for the code highlighting
import 'highlight.js/styles/ocean.css';
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('medium-editor', MediumEditor)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

})
