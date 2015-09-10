var config = require('./../config'),
    query = require('./../query'),
    oracledb = require('oracledb'),
    con = require('./connection'),
    winston = require('winston');


exports.getLastParamMysql = function(callback) {

    var connection = con.getConnectionMysql();

    connection.query('SELECT * FROM (SELECT  ifnull(MAX(NUM_EMPLEADO),"") lastNumEmployee FROM '+config.tablesName.mysql+') NumEmployee,(SELECT MAX(FECHA_DEL_SISTEMAU) lastDateUpdateEmployee FROM '+config.tablesName.mysql+') DateUpdateEmployee',
        function(err, rows) {
            connection.end();

            if(err) console.log(err);

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
      // where = 'WHERE FECHA_DEL_SISTEMAU > :lastDateUpdate';
        where = '';
        params = {
            lastDateUpdate: {
                val: lastDateUpdate,
                dir: oracledb.BIND_IN,
                type: oracledb.DATE
            }
        }
    }

    con.getConnectionOracle(function(err, connection) {

        if (err) {

            winston.error(err.toString());
            return callback(null);
        }

        connection.execute(
            "SELECT " + config.columms + " FROM " + config.tablesName.oracle + " " + where,
            params,
            queryConfig,
            function(err, result) {
                if (err) {
                  onRelease(connection);
                  console.log(err.message)
                  return;
                };

                onRelease(connection);
                callback(result);
            });
    });

    function onRelease(connection){
      console.log('close session oracle');
      connection.release(
        function(err) {
          if (err) {
            console.error(err.message);
          }
        });
    }

};

exports.insertRowsMysql = function(rows) {


    if (rows.length === 0) return;

    var connection = con.getConnectionMysql();

    connection.query("INSERT INTO "+config.tablesName.mysql+"(??) VALUES ?", [config.columms, rows], function(err) {
        if(err) console.log(err);

        connection.end();
    });


};

exports.insertOrUpdateRowMysql = function(rows) {

    var connection = con.getConnectionMysql();


    if (rows.length === 0) return;

    winston.info('Insert or update employees...');

    rows.forEach(function(emp) {

        connection.query('INSERT INTO '+config.tablesName.mysql+' SET ? ON DUPLICATE KEY UPDATE ?', [emp, emp], function(err) {
            if(err) console.log(err);
        });

    });
    connection.end();

};
