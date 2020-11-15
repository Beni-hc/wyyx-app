import ajax from "./ajax";

export const getHomeData = () =>
	ajax({
		url: "/home",
	});

export const getHomeSearch = () =>
	ajax({
		url: "/search",
	});
export const getHomeCategory = (categoryId) =>
	ajax({
		url: "/category",
		params: {
			ID: categoryId,
		},
	});
