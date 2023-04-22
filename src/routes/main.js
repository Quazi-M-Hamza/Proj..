const express = require("express")

//since the no. is pages will keep on inc we can save route in arrays 
const {route} = require("express/lib/application")


const routes = express.Router()


// single dot = ek baar piche and double goes on
//ab mongo db ka database ko navbar se connect krne k liye yha import kiya aur db data render hoke nav me jaega 
const detail = require("../models/detail")

//console.log(d)
//bina async await ke obj arrha tha aur with 
//async await get ke ander nhi chlta to i defined a differt function with async and await and loggin out value of it

/*async function make_global(){
    d = await detail.findOne({"_id": "643d93214cb1ff5cf5246eba"})
    console.log(d)
};


make_global();
*/

routes.get("/", async (req,res) => {
    d = await detail.findOne({"_id": "643d93214cb1ff5cf5246eba"})
    res.render("index.hbs",{
        d :d
    })

});







//these route have to go to main Project.js
module.exports = routes