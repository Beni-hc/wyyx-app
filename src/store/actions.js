import {
	GET_HOME_LIST,
	GET_HOME_SEARCH,
	GET_CATEGORY_LIST,
	GET_WORTH_LIST_NAV,
	GET_WORTH_ITEM_LIST,
} from "./mutations-type";
import {
	getHomeData,
	getHomeSearch,
	getCategoryData,
	getWorthlistnav,
	getworthitemlist,
} from "../api";

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
	[GET_CATEGORY_LIST]({ commit }, id = "") {
		getCategoryData(id)
			.then((response) => {
				const result = response.data;
				commit(GET_CATEGORY_LIST, result);
			})
			.catch((error) => {
				console.log(error.message);
			});
	},
	[GET_WORTH_LIST_NAV]({ commit }) {
		getWorthlistnav()
			.then((response) => {
				const result = response.data;
				commit(GET_WORTH_LIST_NAV, result);
			})
			.catch((error) => {
				console.log(error.message);
			});
	},
	[GET_WORTH_ITEM_LIST]({ commit }, page) {
		getworthitemlist(page.page)
			.then((response) => {
				const result = response.data;
				commit(GET_WORTH_ITEM_LIST, result);
				page._addWorthItemList();
			})
			.catch((error) => {
				console.log(error.message);
			});
	},
};
