const express = require('express');
const auth = require('./route/auth')
const app = express()
app.use(express.json())
app.use('/auth',auth)
app.get('/',(req,res)=>{
    res.send("<h1> This is Express Server </h1>")
})

app.listen(5000, ()=>{
    console.log("<h1> Applicaton is running </h1>")
})