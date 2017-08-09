var RecordModel = require("../models/createUser");


var appRouter = function(app) {
  //
    app.post("/", function(req, res) {
        //	console.log(req.body);
        if (!req.body.firstname) {
            console.log(req.body);
            return res.status(400).send({
                "status": "error",
                "message": "A firstname is required"
            });
        } else if (!req.body.lastname) {
            return res.status(400).send({
                "status": "error",
                "message": "A lastname is required"
            });
        } else if (!req.body.email) {
            return res.status(400).send({
                "status": "error",
                "message": "A email is required"
            });
        }
        RecordModel.save(req.body, function(error, result) {
            if (error) {
                return res.status(400).send(error);
            }
            res.send(result);
        });
    });
};

module.exports = appRouter;