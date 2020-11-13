import ajax from "./ajax";

export const getHomeData = () =>
	ajax({
		url: "/home",
	});
