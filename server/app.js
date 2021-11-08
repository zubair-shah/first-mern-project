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


app.use('/', express.static(path.join(__dirname, 'frontend/build')))

const signup = mongoose.model("Signup User" ,{
    fullName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 0,
    },
    password: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
  });
  
  const post = mongoose.model("Users Post", {
    text: String,
    author: String,
  });

// app.use(cors(["localhost:4000", "localhost:5000"]))
// app.use(express.json())


app.get('/api/v1/add_user' , (req , res) =>{
    signup.find({}, (err , data) =>{
        res.send(data)
    })
})

app.post('/api/v1/add_user' , async (req , res) =>{
  const signupUser = await new signup({
      fullName : req.body.fullName,
      email : req.body.email,
      phone : req.body.phone,
      password : req.body.password
  });
  signupUser.save().then(() => {
      console.log('user created');
      res.send("user created")
  })
})

app.post('/api/v1/login', async(req, res) => {
  try{
    const user = await signup.findOne({email:req.body.email});
    result === true;
  
      // result === true
      if (!err) {
        if (result) {
          res.send(user);
        } else {
          res.send("error");
        }
      }
    }catch (error){

    res.send("user created")
  }
})

app.post('/api/v1/post' , async (req,res,) => {
  const newPost = await new post({
    text: req.body.text,
    author: req.body.author
  });
  newPost.save().then(() =>{
    console.log("post created")
    res.send("post created")
    
  })
})
app.get("/api/v1/post", (req, res) => {
    post.find({}, (err, data) => {
      res.send(data);
    });
  });
  

app.get('/**' , (req , res) =>{
  res.sendFile(path.join(__dirname,"/web/build/index.html"));
})

// app.use(Router)
app.listen(PORT, () =>{
    console.log(`your port is running on ${PORT}`)
} )