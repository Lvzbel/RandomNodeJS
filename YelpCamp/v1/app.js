var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Salmon Creek", image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/71/ff/2c/oloiden-camping-grounds.jpg"},
  {name: "Granite Hill", image: "http://www.greenehs.org/phGreentown/fullimg/White%20Beauty%20Camping%20Grounds.jpg"},
  {name: "Mountain Goat's Rest", image: "https://deslinger.nu/wp-content/uploads/2015/05/3566.jpg"}
]

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {

  res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image}
  campgrounds.push(newCampground);
  //redirect back to campgrounds page
  res.redirect("/campgrounds");
})

app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs")
})

app.listen(3000, function(){
    console.log('Server has started on http://localhost:3000');
});
