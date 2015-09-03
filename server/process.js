/**
 * Created by Julio on 9/3/15.
 */
var crud = require('./crud'),
    winston = require('winston');


exports.ecxecute = function(callback){

    winston.info('****************************************************');
    winston.info('Init process migrations oracle - mysql...');
    winston.info('Find lastParams in mysql database...');
    crud.getLastParamMysql(function(lastFields) {

        if (!lastFields) {
            winston.error('Error to connect mysql database');
            return callback(false);
        }

        winston.info('Find data in oracle database...');
        crud.getDataOracle(lastFields, function(data) {

            if (!data) {
                winston.error('Error to connecto oracle database');
                return callback(false);
            }

            if (data.rows.length > 0) {

                winston.info('The news data was found...');
                if (!lastFields.lastNumEmployee) {

                    winston.info('Init first insert data...');
                    crud.insertRowsMysql(data.rows);
                } else {

                    winston.info('Init modify data...');
                    crud.insertOrUpdateRowMysql(data.rows);

                }

            } else {
                winston.info('Not found alter employees');
            }


             callback(true);

        });

    });

}



