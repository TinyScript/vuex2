import Home from './view/Home.vue'
import firstComponent from './components/firstComponent.vue';
import secondCompoent from './components/secondComponent.vue';

const routers = [
<<<<<<< HEAD
	{ path: '/*', redirect: { name : 'Home' } },
=======
	{ path: '/*', redirect: { name : '/' } },
>>>>>>> origin/master
	{ path: '/', name: 'Home', component: Home },
	{ path: '/first/:id', component: firstComponent },
	{ path: '/second', component: secondCompoent }
]

export default routers;