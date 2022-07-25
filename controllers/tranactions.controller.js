const express = require("express");
const transactions = express();
const transactionsData = require("../models/transaction.model");

transactions.use("/:id", (request, response, next) => {
	if (!transactionsData[request.params.id]) {
		response.status(404).redirect("/error-out-of-bounds");
	}
	next();
});
//READ
transactions.get("/", (request, response) => {
	console.log("GET REQUESTED");
	response.json(transactionsData);
});
//CREATE
transactions.post("/", (request, response) => {
	console.log("POST REQUESTED");
	transactionsData.push(request.body);
	response.json(transactionsData[transactionsData.length - 1]);
});
//READ/:INDEX
transactions.get("/:id", (request, response) => {
	console.log(`GET/${request.params.id} REQUESTED`);
	response.json(transactionsData[request.params.id]);
});

//UPDATE
transactions.put("/:id", (request, response) => {
	let { id } = request.params;
	id = Number(id);
	console.log(`PUT/${id} REQUESTED`);
	transactionsData[id] = request.body;
	response.json(transactionsData[id]);
});
//DELETE
transactions.delete("/:id", (request, response) => {
	console.log(`DELETE/${request.params.id} REQUESTED`);
	transactionsData.splice(Number(request.params.id), 1);
	response.json(transactionsData);
});

module.exports = transactions;
