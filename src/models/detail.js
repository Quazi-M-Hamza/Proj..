
//yha schema bnaya h 
const mongoose = require("mongoose")
const detail = mongoose.Schema({
    brandname: String,
    brandiconurl: String,
    links:[
        {
        label: String,
        url: String
        }
    ]
});
module.exports = mongoose.model("detail", detail);