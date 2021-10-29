const express = require('express')
const mongoose = require("mongoose")
// const Router = require("./routes")
const PORT = process.env.PORT || 4000;
const app = express()
const path = require('path')
const cors = require("cors");

const username = "mongouser";
const password = "mongoadmin";
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.mbwy5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(cors(["localhost:4000", "localhost:5000"]))
app.use(express.json())

app.use('/', express.static(path.join(__dirname, 'frontend/build')))

app.get('/hello' , (req , res) =>{
    res.send("Hello world")
})

app.post('/api/v1/login', (req, res) => {
    res.send("user created")
})

app.get('/**' , (req , res) =>{
    res.redirect('/')
})

// app.use(Router)
app.listen(PORT, () =>{
    console.log(`your port is running on ${PORT}`)
} )