const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());


const MONGO_URI = "mongodb://localhost:27017/";

mongoose.connect(MONGO_URI)
    .then(() => console.log("MongoDB connected successfully!"))
    .catch(err => console.error("MongoDB connection error:", err));

app.get('/', (req, res) => {
    res.send("CRUD App Backend is running!");
});

const userRouter = require('./routes/users');
app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});