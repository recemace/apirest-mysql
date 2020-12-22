const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'apirestnode'
});

mysqlConnection.connect(function (err) {
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Db connected!');
    }
});

module.exports = mysqlConnection;