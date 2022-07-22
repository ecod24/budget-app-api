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
	transactionsData.push(request.body);
	response.json(transactionsData[transactionsData.length - 1]);
});

transactions.get("/:id", (request, response) => {
	console.log(`GET/${request.params.id} REQUESTED`);
	response.json(transactionsData[request.params.id]);
});

transactions.put("/:id", (request, response) => {
	//TODO implement: do "insert" instead of replace if  entry exists at spot
	console.log(`PUT/${request.params.id} REQUESTED`);
	transactionsData[Number(request.params.id)] = request.body;
	response.json(transactionsData[Number(request.params.id)]);
});
transactions.delete("/:id", (request, response) => {
	console.log(`DELETE/${request.params.id} REQUESTED`);
	transactionsData.splice(Number(request.params.id), 1);
	response.json(transactionsData);
});

module.exports = transactions;
