import ajax from "./ajax";

export const getHomeData = () =>
	ajax({
		url: "/home",
	});

export const getHomeSearch = () =>
	ajax({
		url: "/search",
	});
export const getCategoryData = (categoryId) =>
	ajax({
		url: "/category",
		params: {
			ID: categoryId,
		},
	});
export const getWorthlistnav = () =>
	ajax({
		url: "/worth/nav",
	});

export const getworthitemlist = (page) =>
	ajax({
		url: "/worth/itemlist",
		params: {
			page: page,
		},
	});
