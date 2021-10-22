const express = require('express')
const PORT = process.env.PORT || 7000;
const app = express()
const path = require('path')
const cors = require("cors");


app.use(cors(["localhost:4000", "localhost:5000"]))
app.use(express.json())

app.use('/', express.static(path.join(__dirname, 'frontend/build')))

app.get('/hello' , (req , res) =>{
    res.send("Hello world")
})

// app.get('/api/v1/login', (req, res) => {
//     res.send()
// })

app.get('/**' , (req , res) =>{
    res.redirect('/')
})


app.listen(PORT, () =>{
    console.log(`your port is running on http://localhost:${PORT}`)
} )