const express = require("express");
const transactions = express();
const transactionsData = require("../models/transaction.model");

transactions.use("/:id", (request, response, next) => {
	if (!transactionsData[request.params.id]) {
		response.status(404).redirect("/error-out-of-bounds");
	}
	next();
});

transactions.get("/", (request, response) => {
	console.log("GET REQUESTED");
	response.json(transactionsData);
});

transactions.post("/", (request, response) => {
	console.log("POST REQUESTED");
	response.json(transactionsData);
});

transactions.get("/:id", (request, response) => {
	console.log(`GET/${request.params.id} REQUESTED`);
	response.json(transactionsData[request.params.id]);
});

transactions.put("/:id", (request, response) => {
	console.log(`PUT/${request.params.id} REQUESTED`);
	response.json(transactionsData[request.params.id]);
});
transactions.delete("/:id", (request, response) => {
	console.log(`DELETE/${request.params.id} REQUESTED`);
	response.json(transactionsData);
});

module.exports = transactions;
