// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import {store} from "./store/store"

Vue.use(VueMaterial)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store: store,
	components: {App},
	template: '<App/>'
})


router.beforeEach((to, from, next) => {
	let title = to.meta.title;
	const keys = Object.keys(to.params);
	if (keys.length) {
		title = `${to.meta.title}: ${to.params[keys[0]]}`;
	}
	document.title = title;
	next();
});
