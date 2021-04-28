import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		products: [{
			id: 0,
			price: 548,
			cnt: 0,
		},{
			id: 1,
			price: 894,
			cnt: 0,
		},{
			id: 2,
			price: 712,
			cnt: 2,
		}],
		status: 'none'

	},
	getters: {
		cards: state => state.products,
		status: state => state.status,
		allCnt: state => {
			return state.products.reduce((previousValue, currentValue) => previousValue + currentValue.cnt, 0)
		},
		totalPrice: state => {
			return state.products.reduce((previousValue, currentValue) => previousValue + (currentValue.cnt * currentValue.price), 0)
		}
	},
	mutations: {
		setCnt(state, payload){
			let newCnt = parseInt(payload.newCnt);
			state.products[payload.id].cnt = (isNaN(newCnt) || newCnt < 0) ? 0 : newCnt;
		},
		setStatus(state, payload){
			state.status = payload.status;
		}
	},
	actions: {
		send(store){
			store.commit('setStatus', { status: 'pending' });

			setTimeout(() => {
				store.commit('setStatus', { status: 'done' });
			}, 1000);
		},
		decrease(store, id){
			store.commit('setCnt', {newCnt: store.state.products[id].cnt - 1 , id});
		},
		increase(store, id){
			store.commit('setCnt', {newCnt: store.state.products[id].cnt + 1 , id});
		},
		setCnt(store, {val, id}){
			store.commit('setCnt', {newCnt: val, id});
		},
	},
	strict: process.env.NODE_ENV !== 'production'
});