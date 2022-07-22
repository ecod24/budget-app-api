const express = require("express");
const app = express();
const cors = require("cors");
const transactionController = require("./controllers/tranactions.controller");

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
	response.send("Home");
});
app.use("/transactions", transactionController);
app.get("*", (request, response) => {
	response.status(404).send("Sorry, no page found!");
});

module.exports = app;
