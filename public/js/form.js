// const { generateKey } = require("crypto");
// const { application, response } = require("express");
// var { JsonWebTokenError } = require("jsonwebtoken");

const loader = document.querySelector('.loader');

// select inputs
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const notification = document.querySelector('#notification');

submitBtn.addEventListener('click', () => {    
    if(name.value.length < 3) {
        swal(" ", "name must be atleast 3 characters long", "warning");
    } else if(!email.value.length) {
        swal(" ", "enter you email", "warning");
    } else if(password.value.length < 8) {
        swal(" ", "password should be 8 character long", "warning");
    } else if(!number.value.length) {
        swal(" ", "enter you phone number", "warning");
    } else if(!Number(number.value) || number.value.length < 10) {
        swal(" ", "invalid number", "warning");
    } else if(!tac.checked) {
        swal(" ", "you must agree our terms and comditions", "warning");
    } else {
        // submit form
        loader.style.display = 'block';
        sendData('/signup', {
            name: name.value,
            email: email.value,
            password: password.value,
            number: number.value,
            tac: tac.value,
            notification: notification.checked,
            seller: false
        })
    }
})

// Send data function
const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response => {
        processData(response);
    })
}

const processData = (data) => {
    loader.style.display = null;
    if(data.alert) {
        alert(data.alert);
    } else if(data.name) {
        // Create authToken
        data.authToken = generateToken(data.email);
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    }
}

// Redirect to homepage if user logged in
window.onload = () => {
    if(sessionStorage.user) {
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            location.replace('/');
        }
    }
}