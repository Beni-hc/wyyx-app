const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");

app.use(express.urlencoded());
app.use(express.json());

app.use(express.static("../../dist"));
// https://m.you.163.com/
//首页数据
app.get("/home", (req, res) => {
	const __timestamp = Date.now();
	axios
		.get("https://m.you.163.com/xhr/index.json", {
			params: { __timestamp },
		})
		.then((response) => {
			const result = response.data;
			res.send(JSON.stringify(result));
		})
		.catch((error) => {
			console.log(error.message);
		});
});
app.get("/search", (req, res) => {
	axios
		.get("https://m.you.163.com/xhr/search/getTotalNumbersOfProducts.json")
		.then((response) => {
			const result = response.data;
			res.send(JSON.stringify(result));
		})
		.catch((error) => {
			console.log(error.message);
		});
});
//分类数据
app.get("/category", (req, res) => {
	const __timestamp = Date.now();
	const categoryId = req.query.ID;
	axios
		.get("https://m.you.163.com/item/cateList.json", {
			params: { __timestamp, categoryId },
		})
		.then((response) => {
			const result = response.data;
			res.send(JSON.stringify(result));
		})
		.catch((error) => {
			console.log(error.message);
		});
});
//值得买
app.get("/worth/nav", (req, res) => {
	axios
		.get("https://m.you.163.com/topic/v1/know/navWap.json")
		.then((response) => {
			const result = response.data;
			res.send(JSON.stringify(result));
		})
		.catch((error) => {
			console.log(error.message);
		});
});
app.get("/worth/itemlist", (req, res) => {
	const page = req.query.page;
	const size = 2;
	const exceptIds = "";
	axios
		.get("https://m.you.163.com/topic/v1/find/recAuto.json", {
			params: { page, size, exceptIds },
		})
		.then((response) => {
			const result = response.data;
			res.send(JSON.stringify(result));
		})
		.catch((error) => {
			console.log(error.message);
		});
});

app.listen(port, () =>
	console.log(`server listen on http://localhost:${port}`)
);
