import axios from "axios";

const instance = axios.create({
	baseURL: "/api",
});
//请求拦截器
instance.interceptors.request.use((config) => {
	return config;
});

//相应拦截器
instance.interceptors.response.use(
	(response) => response.data,
	(error) => {
		alert("请求失败");
		console.log(error);
		return new Promise(() => {});
	}
);

export default instance;
