const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express ();

app.use(express.json());
app.use(cors());

app.get('/' , (req, res)=>{
    res.send("hello")
})

const db = mysql.createConnection({
    // user: "root",
    // host:"localhost",
    // password: "password",
    // database: "loginsystem",
    host: "mishra116.mysql.polardb.ap-south-1.rds.aliyuncs.com",
    database: "mishrahdb1",
    user: "mishrahdb1",
    password: "mishra@123",
})
app.post("/register", (req, res)=>{  

    const username = req.body.username;
    const passwords = req.body.passwords;


// console.log(db.query("Select username from mishrahdb1.users"),1)
db.query("INSERT INTO `users` (username, passwords) VALUES (?,?)",
[username, passwords],
(err,result)=>{
    console.log(err);
})
})


app.post('/login', (req, res)=>{
    const username = req.body.username;
    const passwords = req.body.passwords;



db.query("SELECT * FROM users WHERE username = ? AND passwords = ?",
[username, passwords],
(err,result)=>{
    if(err) {
        res.send({ err: err})
    }
    console.log(result)
    if (result && result.length > 0){
        res.send(result);
    }else{
        res.send({message: "Wrong username/password combination "})
    }
})
})


app.listen(3001, () =>{
    console.log("running server");
})