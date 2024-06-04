const express = require('express');
const User = require('./modals/user');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('All users')
});

app.post('/register', async (req, res) => {
    try {
        //data from body
        const { username, email, password } = req.body
        if (!(username && email && password)) {
            res.status(400).send('Please enter all the feilds')
        }
        //check for user already there
        const existinguser = await User.findOne({ email })
        if (existinguser) {
            res.status(401).send('User already exists')
        }

        //encrypt
        const encryptedpassword = await bcrypt.hash(password, 10)
        //save user
        const userinfo = await User.create({
            username,
            email,
            password: encryptedpassword
        })
        //generate the token for user
        const token = jwt.sign(
            { id: userinfo._id, email }, //payload
            'shhh',
            {
                expiresIn: "2h"
            }
        );
        userinfo.token = token;
        userinfo.password = undefined;



        res.status(201).json(userinfo);





    } catch (error) {
        console.log(error)

    }
})

app.post('/login', async (req, res) => {
    try {
        //get all user
        const { username, password } = req.body
        if (!(username && password)) {
            res.status(400).send('Send all')

        }
        //find user in DB
        const user = await User.findOne({ username })
        //if user is not there

        //match password for login

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { id: user._id },
                'shhh',
                {
                    expiresIn: "2h"
                }
            );
            user.token = token
            user.password = undefined

            //send token in user cookie 
            //cookie
            const option = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            };
            res.status(200).cookie("token", token, option).json({
                success: true,
                token
            })
            console.log("Logged in Succesfully")
        }
        //send a token

    } catch (error) {
        console.log(error)

    }

})

mongoose.connect('mongodb+srv://vanshhathirsa:tQr9YskODI3NOL4o@cluster0.othizq2.mongodb.net/JWT?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('Connected')
    app.listen(3002, () => {
        console.log('Server Started ')
    })
})
