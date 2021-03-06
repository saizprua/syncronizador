/**
 * Created by Julio on 9/3/15.
 */
var mysql = require('mysql'),
    config = require('./../config'),
    oracledb = require('oracledb');

exports.getConnectionMysql = function() {
    var connection = mysql.createConnection(config.mysql);
    connection.connect();
    return connection;
}

exports.getConnectionOracle = function(callback) {
    oracledb.getConnection(
        config.oracle,
        function(err, connection) {

            if(err) console.log(err);

            callback(err, connection);
        });

}