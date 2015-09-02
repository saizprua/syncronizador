var mysql = require('mysql'),
    config = require('./config'),
    query = require('./query'),
    oracledb = require('oracledb');


exports.getLastParamMysql = function(callback) {

    var connection = mysql.createConnection(config.mysql);
    connection.connect();

    connection.query(query.lastParams,
        function(err, rows) {
            connection.end();

            if (err) {
                throw err;
            }

            callback(rows[0]);
        });

};

exports.getDataOracle = function(lastFields, callback) {

    var queryConfig = lastFields.lastNumEmployee ? {
            maxRows: 1000,
            outFormat: oracledb.OBJECT
        } : {
            maxRows: 1000
        },
        lastDateUpdate = lastFields.lastDateUpdateEmployee,
        where = '',
        params = {};


    if (lastDateUpdate) {
        where = 'WHERE FECHA_DEL_SISTEMAU > :lastDateUpdate';
        params = {
            lastDateUpdate: {
                val: lastDateUpdate,
                dir: oracledb.BIND_IN,
                type: oracledb.DATE
            }
        }
    }


    oracledb.getConnection(
        config.oracle,
        function(err, connection) {
            if (err) {
                throw err;
            }

            connection.execute(
                "SELECT " + config.columms + " FROM PLANDAC.EMPLEADOS " + where,
                params,
                queryConfig,
                function(err, result) {
                    if (err) {
                        throw err;
                    }

                    callback(result);
                });
        });

};

exports.insertRowsMysql = function(rows) {


    if (rows.length === 0) return;

    console.log('Inserting news employees mysql...');

    var connection = mysql.createConnection(config.mysql);

    connection.connect();


    connection.query("INSERT INTO erp_empleados(??) VALUES ?", [config.columms, rows], function(err, result) {
        if (err) throw err;
    });

    connection.end();


};

exports.insertOrUpdateRowMysql = function(rows) {

    var connection = mysql.createConnection(config.mysql);
    connection.connect();

    console.log('Init inserting or updating new employee in mysql...');

    if (rows.length === 0) return;

    rows.forEach(function(emp) {

        connection.query('INSERT INTO erp_empleados SET ? ON DUPLICATE KEY UPDATE ?', [emp, emp], function(err, results) {

        });

    });
    connection.end();

};