var RecordModel = require("../models/updateUser");


var appRouter = function(app) {
  //
   app.post("/api/update", function(req, res) {
	
	console.log(req.body);
	
	
    if (!req.body.document_id) {
        return res.status(400).send({
            "status": "error",
            "message": "A document id is required"
        });
	}
        RecordModel.update(req.body.document_id, req.body.newObj, function(error, result) {
            if (error) {
                return res.status(400).send(error);
            } else {

                res.send(result);

            }
        });
    
});
};

module.exports = appRouter;