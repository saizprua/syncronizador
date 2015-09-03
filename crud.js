var config = require('./config'),
    query = require('./query'),
    oracledb = require('oracledb'),
    con = require('./connection'),
    winston = require('winston');


exports.getLastParamMysql = function(callback) {

    var connection = con.getConnectionMysql();

    connection.query(query.lastParams,
        function(err, rows) {
            connection.end();

            if (err) winston.error(err);

            var res = rows ? rows[0] : null;

            callback(res);
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

    con.getConnectionOracle(function(err,connection){

        if(err){

            winston.error( err.toString());
            return callback(null);
        }

        connection.execute(
            "SELECT " + config.columms + " FROM PLANDAC.EMPLEADOS " + where,
            params,
            queryConfig,
            function(err, result) {
                if (err) winston.error(err);

                callback(result);
            });
    });

};

exports.insertRowsMysql = function(rows) {


    if (rows.length === 0) return;

    var connection = con.getConnectionMysql();

    connection.query("INSERT INTO erp_empleados(??) VALUES ?", [config.columms, rows], function(err) {
        if (err)  winston.error(err);
        connection.end();
    });


};

exports.insertOrUpdateRowMysql = function(rows) {

    var connection = con.getConnectionMysql();


    if (rows.length === 0) return;

    rows.forEach(function(emp) {

        connection.query('INSERT INTO erp_empleados SET ? ON DUPLICATE KEY UPDATE ?', [emp, emp], function(err) {
            winston.error(err);
        });

    });
    connection.end();

};

