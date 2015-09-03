var process = require('./server/process'),
    winston = require('winston'),
    schedule = require('node-schedule');

winston.add(winston.transports.File, {
    filename: 'node.log'
});



schedule.scheduleJob('*/1 * * * *', function(){
    process.ecxecute(function(isSuccess){
        if(isSuccess){
            winston.info('Proccess successfully')
        }
        else{
            winston.warn('Proccess failed')
        }
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