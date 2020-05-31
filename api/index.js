const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()

mongoose.connect("mongodb://localhost:27017/inicium", { useUnifiedTopology: true, useNewUrlParser: true });
console.log("Banco de dados conectado")

require('./src/models/ModelPost');

app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.json());
app.use("/posts", require('./src/routes'));

app.listen(3001);
