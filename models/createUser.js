var uuid = require("uuid");
var db = require("../app").bucket;
var config = require("../config");
var N1qlQuery = require('couchbase').N1qlQuery;
 
function RecordModel() { };

RecordModel.save = function(data, callback) {
    var jsonObject = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email
    }
    var documentId = data.document_id ? data.document_id : uuid.v4();
    db.upsert(documentId, jsonObject, function(error, result) {
        if(error) {
            callback(error, null);
            return;
        }
        callback(null, {message: "success", data: result});
    });
}
module.exports = RecordModel;