import { GET_HOME_LIST } from "./mutations-type";
import { getHomeData } from "../api";

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
};
