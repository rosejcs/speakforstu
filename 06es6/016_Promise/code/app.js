const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')


const pool = mysql.createPool({
  host:'127.0.0.1',
  port:3306,
  user:'root',
  password:'',
  database:'xz',
  connectionLimit:20
})
const app = express()

app.listen(8080,()=>{
  console.log('listen 8080')
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended:false
}))
