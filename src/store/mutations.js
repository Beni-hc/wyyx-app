import { GET_HOME_LIST } from "./mutations-type";

export default {
	[GET_HOME_LIST](state, result) {
		state.homeDataLIst = result;
	},
};
