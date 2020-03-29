import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL = 'https://randomuser.me/api/';
export const store = new Vuex.Store({
	state: {
		loader: true,
		users: [],
		lastID: 0, //id counter to write for users who have blank id value in response
		searchValue: ''
	},
	getters: {
		usersFiltered(state) {
			if (state.searchValue.trim().length === 0) {
				return state.users
			} else {
				return state.users.filter(user => {
					return user.name.first.toLowerCase().includes(state.searchValue.toLowerCase()) || user.name.last.toLowerCase().includes(state.searchValue.toLowerCase())
				})
			}
		}
	},
	mutations: {
		getUsers(state, users) {
			state.users = users
			state.users.forEach((user) => {
				if (!user.id.value) {
					user.id.value = 'u' + state.lastID
				}
				state.lastID++
			})
			state.loader = false;
		}
	},
	actions: {
		getUsers(context) {
			axios.get('?results=20').then(response => {
				context.commit('getUsers', response.data.results);
			}).catch(error => {
				console.log(error)
			})
		},
	}
})
