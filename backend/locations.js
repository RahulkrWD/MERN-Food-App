const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rahulkr:rahulkr@cluster0.uu1odbb.mongodb.net/Assignment-7?retryWrites=true&w=majority");

const locationSchema = new mongoose.Schema({});

module.exports = mongoose.model("locations", locationSchema)