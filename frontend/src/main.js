import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false;


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA3RjKhvjDZUSWHeh6h4mnFhESFs9rPeBw',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
});

Vue.use(VueMaterial);


new Vue({
  render: h => h(App),
}).$mount('#app');

