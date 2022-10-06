import Vue from 'vue';

import './styles.scss';

import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faCalendarDays, faChevronRight, faCircleUser, faLocationDot, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

import store from './store'

/* add icons to the library */
library.add([faCalendarDays, faLocationDot, faScrewdriverWrench, faCircleUser, faChevronRight]);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
