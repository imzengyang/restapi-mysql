let express = require('express')
let app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let mysql = require('mysql');

// 数据库连接信息
var connection = mysql.createConnection({
    host: '118.31.19.120',
    port: '3308',
    user: 'root',
    password: '123456',
    database: 'signapp'
});

connection.connect();

/** 数据表设置
 * 创建一个表
 * 数据库表  signin
    字段 包含如下
    userid 用户id
    create_time	创建日期	
	ip 用户ip
 */




// sql 查询语句

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//     if (err) throw err;
//     console.log('The solution is: ', rows[0].solution);
// });


// sql 插入数据






app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/api/signin',(req,res,err)=>{
    console.log(req.body)
    let username = req.body.username
    ip = req.ip,
    create_time= Date.now();
    connection.query(`INSERT INTO sign (username,ip,create_time) VALUES ("${username}","${ip}","${create_time}")` , function (err, result, fields) {
        // if any error while executing above query, throw error
        if (err) throw err;
        // if there is no error, you have the result
        console.log(result);
        connection.end();
      });
    
      res.end("ok!")

})


// app.use('/static', express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log("app start....")
})