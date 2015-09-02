var mysql = require('mysql'),
    fs = require('fs'),
    jwt = require('jsonwebtoken'),
    config = require('./config'),
    crud = require('./crud'),
    oracledb = require('oracledb'),
    fs = require('fs');










console.log(new Date());
//
crud.getLastParamMysql(function (lastFields) {

        //console.log(lastFields);

        //var lastDateUpdate = lastFields.lastDateUpdateEmployee;



        //
        crud.getDataOracle(lastFields,function(data){


            //var cols = ["NUM_EMPLEADO","APELLIDO","APELLIDO2","APELLIDO_C","NOMBRE","NOMBRE2","TOMO","SIGLAS","FOLIO","ASIENTO","NUMERO_SEGURO_SOCIAL","SEXO","ESTADO_CIVIL","TIPO_SANGRE","FECHA_NAC","LUGAR_NACIMIENTO","NACIONALIDAD","LICENCIA","TIPO_LICENCIA","PROVINCIA","DISTRITO","CORREGIMIENTO","BARRIADA","CALLE","CASA","ESTATURA","PESO","TELEFONO","EN_URGENCIA","APTO_POSTAL","NOMBRE_ESPOSO","APELLIDO_ESPOSO","PROFESION_ESPOSO","TELEFONO_ESPOSO","CLAVE_CODIGO","CLAVE_STATUS_ACTUAL","TPEM_CODIGO","CLAVE_IR","NUMERO_DEPENDIENTE","FECHA_INICIO","FECHA_TERMINO","NUMERO_POSICION","ANIO","NUMERO_PARTIDA","OBJETO_GASTO","NUMERO_VIEJO","UNIDAD_GESTORA","TURNO_CODIGO","CARGO_CODIGO","SALARIO_BASE","RATA_HORA","HORAS_TRABAJADAS","EMPLEADO_A_REEMPLAZAR","ANIO_RESUELTO","NUMERO_RESUELTO","FECHA_RESUELTO","FECHA_VACACION","VACACIONES_PENDIENTES","TIEMPO_X_TIEMPO","TIEMPO_X_TIEMPO_MIN","TIEMPO_X_VACACION","TIEMPO_X_VACACION_MIN","TIEMPO_ADEUDADO","TIEMPO_ADEUDADO_MIN","INCAPACIDAD","INCAPACIDAD_MIN","PAGA_IMPUESTO","TIPO_CUENTA","NUMERO_CUENTA","FECHA_DEL_SISTEMA","USUARIO","TERMINAL","DIAS_VACACION","FONDO_C","ARTICULO","DIRECCION_RESIDENCIAL","HIJOS","PAGA_ISR","ANIO_RESU_VACACION","NUM_RESU_VACACION","ANIO_POSICION","ELEGIR_APELLIDO","NUMERO_PLANILLA","ELEGIR_NOMBRE","DIA_LEGAL","MES_LEGAL","COD_ESTATUS_COLABORADOR","PARTICIPA_PROGESTION","TEL_CEL","EMAIL","FECHA_PARTICIPA_PROGESTION","JURADO_DE_CONCIENCIA","FID_CODIGO_IB","FUNCION_EVENTUAL","INICIO_ARI","FECHA_INICIO_REAL","CONDICION","INGRESO_FAMILIAR","INGRESO_FAMILIAR_PERSONAS","ZONA_POSTAL","FECHA_INICIO_PUESTO","FECHA_INICIO_SECTOR_PUBLICO","ESTADO_EMPLEADO_CARADM","CANTIDAD_HIJOS","FECHA_DEL_SISTEMAU","USUARIOU","TERMINALU","ESTATUS_EN_CA","ESTADO_CA","CALCULAR_VACACION","PAIS_NACIMIENTO","CORREO","TELEFONO_INTERNO","CODIGO_MARCACION","FECHA_INICIO_SIACAP","FECHA_TERMINO_SIACAP","CODIGO_CLASIFICACION","NUM_EMPLEADO_APROBAR","JEFE_INMEDIATO"];
            //
            //var sql = "INSERT INTO erp_empleados(??) VALUES ?";
            //var inserts = [cols, data.rows ];
            //sql = mysql.format(sql, inserts);
            //
            //
            //fs.writeFile("./test.sql", sql, function(err) {
            //    if(err) {
            //        return console.log(err);
            //    }
            //
            //    console.log("The file was saved!");
            //});


            //console.log(data.rows);
            crud.insertRowMysql(data.rows);
            //
            console.log(new Date());

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


