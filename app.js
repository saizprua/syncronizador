var crud = require('./crud');

console.log('Init application...')
console.log('Find lastParams in mysql database...');
crud.getLastParamMysql(function(lastFields) {

    console.log('Find data in oracle database...');
    crud.getDataOracle(lastFields, function(data) {

        if (data.rows.length > 0) {

            console.log('The news data was found...');
            if (!lastFields.lastNumEmployee) {

                console.log('Init first insert data...');
                crud.insertRowsMysql(data.rows);
            } else {

                console.log('Init modify data...');
                crud.insertOrUpdateRowMysql(data.rows);

            }

        } else {
            console.log('Not found alter employees');
        }

    });

});


//
//









//oracle.connect(connectData, function(err, connection) {
//    if (err) { console.log("Error connecting to db:", err); return; }
//
//    connection.execute("SELECT * FROM PLANDAC.EMPLEADOS", [], function(err, results) {
//        if (err) { console.log("Error executing query:", err); return; }
//
//        console.log(results[0]);
//        connection.close(); // call only when query is finished executing
//    });
//});


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


