const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trailSchema = new Schema({
    // `title` is required and of type String
    name: String,
    // `link` is required and of type String
    link: String,
    image: String,
});

const Trail = mongoose.model("trail", trailSchema);

module.exports = Trail;
