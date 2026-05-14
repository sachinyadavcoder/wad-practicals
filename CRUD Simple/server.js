const express = require('express');
const mongoose = require('mongoose');

const app = express();


// ==========================================
// MIDDLEWARE
// ==========================================

app.use(express.json());


// ==========================================
// DATABASE CONNECTION
// ==========================================

mongoose.connect('mongodb://127.0.0.1:27017/crudDB')

.then(() => {
    console.log("MongoDB Connected");
})

.catch((err) => {
    console.log(err);
});


// ==========================================
// SCHEMA
// ==========================================

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    }

});


// ==========================================
// MODEL
// ==========================================

const User = mongoose.model('User', userSchema);



// ==========================================
// HOME ROUTE
// ==========================================

app.get('/', (req, res) => {

    res.send("CRUD API is Running");

});



// ==========================================
// CREATE USER
// ==========================================

app.post('/users', async (req, res) => {

    try {

        const newUser = new User({

            name: req.body.name,
            email: req.body.email,
            age: req.body.age

        });

        await newUser.save();

        res.send({
            message: "User Created Successfully",
            data: newUser
        });

    } catch (error) {

        res.send({
            error: error.message
        });

    }

});



// ==========================================
// GET ALL USERS
// ==========================================

app.get('/users', async (req, res) => {

    try {

        const users = await User.find();

        res.send(users);

    } catch (error) {

        res.send({
            error: error.message
        });

    }

});



// ==========================================
// GET SINGLE USER
// ==========================================

app.get('/users/:id', async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {

            return res.send({
                message: "User Not Found"
            });

        }

        res.send(user);

    } catch (error) {

        res.send({
            error: error.message
        });

    }

});



// ==========================================
// UPDATE USER
// ==========================================

app.put('/users/:id', async (req, res) => {

    try {

        const updatedUser = await User.findByIdAndUpdate(

            req.params.id,

            {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age
            },

            {
                new: true
            }

        );

        if (!updatedUser) {

            return res.send({
                message: "User Not Found"
            });

        }

        res.send({
            message: "User Updated Successfully",
            data: updatedUser
        });

    } catch (error) {

        res.send({
            error: error.message
        });

    }

});



// ==========================================
// DELETE USER
// ==========================================

app.delete('/users/:id', async (req, res) => {

    try {

        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {

            return res.send({
                message: "User Not Found"
            });

        }

        res.send({
            message: "User Deleted Successfully",
            data: deletedUser
        });

    } catch (error) {

        res.send({
            error: error.message
        });

    }

});



// ==========================================
// SERVER
// ==========================================

app.listen(5000, () => {

    console.log("Server Running on Port 5000");

});