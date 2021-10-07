// importing packages

const express = require('express');         // To create a server
const admin = require('firebase-admin');    // To access firebase from backend
const bcrypt = require('bcrypt');           // To encrypt the user's password before storing it inside our databse
const path = require('path');           // Path allow to access the pathor do path related stuff

// firebase setup

let serviceAccount = require("./ecom-42f9b-firebase-adminsdk-rw8oj-2d26c4f928.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();


// Declare static path 
let staticPath = path.join(__dirname, "public");     // Makes public folder's path a static path   // Static pathis just a path which tells server where it has to look for the files.


// Initializing express.js
const app = express();

// Middlewares
app.use(express.static(staticPath));
app.use(express.json());

app.listen(3000, () => {
    console.log(' Listening to port 3000.....')
})

// Routes
// Home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

// Signup route 
app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})


app.post('/signup', (req, res) => {
    let { name, email, password, number, tac, notification } = req.body;

    if(name.length < 3) {
        return res.json({'alert': 'name must be 3 characters long'});
    } else if(!email.length) {
        return res.json({'alert': 'enter you eamil'});
    } else if(password.length < 8) {
        return res.json({'alert': 'password should be 8 characters long'});
    } else if(!number.length) {
        return res.json({'alert': 'enter you phone number'});
    } else if(!Number(number) || number.length < 10) {
        return res.json({'alert': 'invalid number'});
    } else if(!tac) {
        return res.json({'alert': 'you must agree to our terms & conditions'});
    }

    // Store user in db
    db.collection('users').doc(email).get()
    .then(user => {
        if(user.exists){
            return res.json({'alert': 'email already exists'});
        } else {
            // encrypt the passwor before storin it 
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    req.body.password = hash;
                    db.collection('users').doc(email).set(req.body)
                    .then(data => {
                        res.json({
                            name: req.body.name,
                            email: req.body.email,
                            seller: req.body.seller,
                        })
                    })
                })
            })
        }
    })
})

// Add product
app.get('/add-product', (req, res) => {
    res.sendFile(path.join(staticPath, "addProduct.html"));
})



// 404 route 
app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404');
})