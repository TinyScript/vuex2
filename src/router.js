import Home from './view/Home1.vue'
import firstComponent from './components/firstComponent.vue';
import secondCompoent from './components/secondComponent.vue';

const routers = [
	{ path: '/home', name: 'Home', component: Home },
	{ path: '/vuex2/first/:id', component: firstComponent },
	{ path: '/second', component: secondCompoent }
]

export default routers;