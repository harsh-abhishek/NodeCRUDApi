var RecordModel = require("../models/readUser");


var appRouter = function(app) {
  //
    app.post("/api/get", function(req, res) {
        if (!req.body.document_id) {
            return res.status(400).send({
                "status": "error",
                "message": "A document id is required"
            });
        }
        RecordModel.getByDocumentId(req.body.document_id, function(error, result) {
            if (error) {
                return res.status(400).send(error);
            }
            res.send(result);
        });
    });
};

module.exports = appRouter;