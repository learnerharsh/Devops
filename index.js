const express = require('express')
// use npm install express 
const app = express()
const port =3000
app.get('/',function(req,res){
    res.send('Hello World Change1')
})
app.listen(port)
// go to localhost:3000
//notes are in copy
