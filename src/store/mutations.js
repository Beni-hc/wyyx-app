import {
	GET_HOME_LIST,
	GET_HOME_SEARCH,
	GET_CATEGORY_LIST,
	GET_WORTH_LIST_NAV,
	GET_WORTH_ITEM_LIST,
} from "./mutations-type";

export default {
	[GET_HOME_LIST](state, result) {
		state.homeDataList = result.data;
	},
	[GET_HOME_SEARCH](state, result) {
		state.search = result;
	},
	[GET_CATEGORY_LIST](state, result) {
		state.category = result;
	},
	[GET_WORTH_LIST_NAV](state, result) {
		state.worthNva = result;
	},
	[GET_WORTH_ITEM_LIST](state, result) {
		state.worthItemList = result;
	},
};
