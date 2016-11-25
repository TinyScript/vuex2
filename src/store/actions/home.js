import { TESTING } from '../mutation-types';

export const testing = ({commit}) => {
	commit('TESTING')
};

function makeAction(type) {
	return ({dispatch}, ...args) => {dispatch(type, ...args)}
}