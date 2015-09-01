var mysql = require('mysql'),
    fs = require('fs'),
    jwt = require('jsonwebtoken'),
    config = require('./config'),
    oracledb = require('oracledb'),
    oracle = require('oracle');

var connectData = {
    hostname: "ORAERP",
    port: 1521,
    database: "PRUEBA", // System ID (SID)
    user: "syndb",
    password: "aig2k15"
}


oracle.connect(connectData, function(err, connection) {
    if (err) { console.log("Error connecting to db:", err); return; }

    connection.execute("SELECT systimestamp FROM dual", [], function(err, results) {
        if (err) { console.log("Error executing query:", err); return; }

        console.log(results);
        connection.close(); // call only when query is finished executing
    });
});

//var cert = fs.readFileSync('public.pem');  // get public key
//
//var decodeMysql = jwt.verify(config.mysql, cert,{ algorithms: ['RS256'] } );
//
//var connection = mysql.createConnection(decodeMysql);
//
//    connection.connect();
//
//    connection.query('SELECT * FROM test_conection', function(err, rows, fields) {
//        if (err) throw err;
//        console.log(rows);
//    });
//
//connection.end();

//oracledb.getConnection(
//    {
//        user          : "system",
//        password      : "prueba2015",
//        connectString : "PRUEBA"
//    },
//    function(err, connection) {
//
//        co
//
//        if (err) {
//            console.error(err.message);
//            return;
//        }
//
//    }


