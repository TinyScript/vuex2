import { TESTING } from '../mutation-types';

const state = {
	test: '233'
}

const mutations = {
	[TESTING] (state) {
		let inpt = document.getElementById('inpt').value;
		if (state.test === inpt) return;
		state.test = inpt;
	}
}

export default {
	state,
	mutations
}