import {
	IS_SHOW_LOADING_AND_PAGE,
	GET_HOME_LIST,
	GET_HOME_SEARCH,
	GET_CATEGORY_LIST,
	GET_WORTH_LIST_NAV,
	GET_WORTH_ITEM_LIST,
	IS_SHOW_HOME_MASK_LAYER,
	IS_SHOW_HMOE_HEAD_APP,
} from "./mutations-type";

export default {
	[IS_SHOW_LOADING_AND_PAGE](state) {
		state.loading = true;
		state.isShowPage = false;
	},
	[GET_HOME_LIST](state, result) {
		state.loading = false;
		state.isShowPage = true;
		state.homeDataList = result.data;
	},
	[GET_HOME_SEARCH](state, result) {
		state.search = result;
	},
	[GET_CATEGORY_LIST](state, result) {
		state.loading = false;
		state.isShowPage = true;
		state.category = result;
	},
	[GET_WORTH_LIST_NAV](state, result) {
		state.worthNva = result;
	},
	[GET_WORTH_ITEM_LIST](state, result) {
		state.worthItemList = result;
	},
	[IS_SHOW_HOME_MASK_LAYER](state) {
		state.isShowHomeMaskLayer = false;
	},
	[IS_SHOW_HMOE_HEAD_APP](state) {
		state.isShowHmoeHeadAPP = false;
	},
};
