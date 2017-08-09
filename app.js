var express = require("express");
var bodyParser = require("body-parser");
var couchbase = require("couchbase");
var path = require("path");
var config = require("./config");
var app = express();
var router = express.Router();

var createUserRouter = require("./routes/createUserRouter.js");
var readUserRouter = require("./routes/readUserRouter.js");
var deleteUserRouter = require("./routes/deleteUserRouter.js");
var updateUserRouter = require("./routes/updateUserRouter.js");


 var routes = require("./routes/routes.js")(app);
app.use(bodyParser.json());

app.use('/user/create',createUserRouter);
app.use('/user/read',readUserRouter);
app.use('/user/delete',deleteUserRouter);
app.use('/user/update',updateUserRouter);

app.use(bodyParser.urlencoded({ extended: true }));
 
module.exports.bucket = (new couchbase.Cluster(config.couchbase.server)).openBucket(config.couchbase.bucket);
 
app.use(express.static(path.join(__dirname, "public")));
 
var routes = require("./routes/routes.js")(app);
 
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
	
});

module.exports=app;
