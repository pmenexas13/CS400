const mongoClient = require('mongodb').MongoClient;
const mongoURL = "mongodb://localhost:27017";

let database;

module.exports = {

    connect: function(callback ) {
        mongoClient.connect( mongoURL,  { useNewUrlParser: true , useUnifiedTopology: true}, function( err, client ) {

            database = client.db('cs400')

            return callback( err )
        } );
    },
    getDB: () => { return database; }
};