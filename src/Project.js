const express = require("express")
const bodyparser = require("body-parser")
const Project = express()
const hbs = require("hbs")
const mongoose = require("mongoose")
const path = require("path")
const detail = require("./models/detail")

//imported routes h
const routes = require("./routes/main") 
//empty "" pe bhi ye routes kaam krega
Project.use("", routes)

Project.set("view engine", "hbs")
//viewengine hbs format me saved h
//views views me 
//partial
hbs.registerPartials(path.join(__dirname, "../", "/views/partials"));
Project.use(express.static(path.join(__dirname , "../" , "/public")));

Project.set("views", "views")

//public ki files ko main game pe laana h
//if wanted to start url with static/css then /sattic mlb public folder ke ander anaa
Project.use("static", express.static("public"))
//otherwise
//Project .use(express.static("public"))


//connection
mongoose.connect("mongodb://127.0.0.1:27017/web", (err)=>{
  if(err) console.log('err') ;
  else
  console.log("Ok")
  mongoose.set('strictQuery', false) 
  //commenting out cause everytime we run it same object cr8s again dont want tht
  /*detail.create({
    brandname: "TecHub", 
    brandiconurl: "",
    links:[
      {label:"Home",
      url: "/"},

      {label: "Services",
      url: "/Services"},

      {label: "Gallery",
      url: "/Gallery"},

      {label: "about",
    url: "/about"},

    {label: "contact",
    url: "/contact"}
     ]
  });
*/

//mongoose.con

});



// env is for self picking of port available otherwise it would be 5556
Project.listen( process.env.PORT| 3000, () => {

 })