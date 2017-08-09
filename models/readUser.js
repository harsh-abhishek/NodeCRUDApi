var uuid = require("uuid");
var db = require("../app").bucket;
var config = require("../config");
var N1qlQuery = require('couchbase').N1qlQuery;
 
function RecordModel() { };

//READ USER
RecordModel.getByDocumentId = function(documentId, callback) {
    var statement = "SELECT firstname, lastname, email " +
                    "FROM `" + config.couchbase.bucket + "` AS users " +
                    "WHERE META(users).id = $1";
    var query = N1qlQuery.fromString(statement);
    db.query(query, [documentId], function(error, result) {
        if(error) {
            return callback(error, null);
        }
        callback(null, result);
    });
};


module.exports = RecordModel;