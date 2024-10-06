const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/users');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

// CORS configuration
app.use(cors({
    origin: ["https://gymbro-front-end.vercel.app",
            "https://gymbro-front-end.vercel.app/signup",
            "https://gymbro-front-end.vercel.app/login"],
    methods: ["POST", "GET", "OPTIONS"]
    // , credentials: true
}));

mongoose.connect("mongodb+srv://joquindo:B7hniC80BhFs04tC@gymbro.z6vfz.mongodb.net/users", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.get("/", (req, res) => {
    res.json("Hello");
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body; // Destructure email and password

    try {
        // Check if the user exists in the database
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Validate the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Respond with a success message and user information
        return res.status(200).json({ 
            message: "Login successful",
            user: { 
                userId: user._id, 
                email: user.email, 
                username: user.username
            } 
        });
    } catch (err) {
        console.error("Error during login:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
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
