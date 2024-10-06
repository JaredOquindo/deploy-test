const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/users')

const app = express()
app.use(express.json())

app.use(cors(
    {
        origin: ["https://gymbro-front-end.vercel.app", "https://gymbro-front-end.vercel.app/*"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

mongoose.connect("mongodb+srv://joquindo:B7hniC80BhFs04tC@gymbro.z6vfz.mongodb.net/users")

app.get("/", (req,res) => {
    res.json("Hello");
})

app.post("/login", (req,res) => {
    const {email,password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password) {
                res.json("Success")
            }
            else {
                res.json("the password is incorrect")
            }
        }
        else {
            res.json("No record existed")
        }
    })
})

app.post('/signup' , (req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3000, () => {
    console.log('server is running')
})
