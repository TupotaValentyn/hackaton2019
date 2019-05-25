import Vue from 'vue'
import App from './App.vue'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA3RjKhvjDZUSWHeh6h4mnFhESFs9rPeBw',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },

});

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app');

