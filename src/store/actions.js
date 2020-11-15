import {
	GET_HOME_LIST,
	GET_HOME_SEARCH,
	GET_HOME_CATEGORY,
} from "./mutations-type";
import { getHomeData, getHomeSearch, getHomeCategory } from "../api";

export default {
	[GET_HOME_LIST]({ commit }) {
		getHomeData()
			.then((response) => {
				const result = response.data;
				commit(GET_HOME_LIST, result);
			})
			.catch((error) => {
				console.log(error.message);
			});
	},
	[GET_HOME_SEARCH]({ commit }) {
		getHomeSearch()
			.then((response) => {
				const result = response.data;
				commit(GET_HOME_SEARCH, result);
			})
			.catch((error) => {
				console.log(error.message);
			});
	},
	[GET_HOME_CATEGORY]({ commit }, id = "") {
		getHomeCategory(id)
			.then((response) => {
				const result = response.data;
				commit(GET_HOME_CATEGORY, result);
			})
			.catch((error) => {
				console.log(error.message);
			});
	},
};
