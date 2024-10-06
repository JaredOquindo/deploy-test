const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/users');

const app = express();
app.use(express.json());

// CORS configuration
app.use(cors({
    origin: ["https://gymbro-front-end.vercel.app",
            "https://gymbro-front-end.vercel.app/signup"],
    methods: ["POST", "GET", "OPTIONS"],
    credentials: true
}));

mongoose.connect("mongodb+srv://joquindo:B7hniC80BhFs04tC@gymbro.z6vfz.mongodb.net/users", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.get("/", (req, res) => {
    res.json("Hello");
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.status(401).json("The password is incorrect");
                }
            } else {
                res.status(404).json("No record existed");
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/signup', (req, res) => {
    UserModel.create(req.body)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Listen on the assigned port or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
