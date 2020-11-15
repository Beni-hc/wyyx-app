import {
	GET_HOME_LIST,
	GET_HOME_SEARCH,
	GET_HOME_CATEGORY,
} from "./mutations-type";

export default {
	[GET_HOME_LIST](state, result) {
		state.homeDataList = result.data;
	},
	[GET_HOME_SEARCH](state, result) {
		state.search = result;
	},
	[GET_HOME_CATEGORY](state, result) {
		state.category = result;
	},
};
