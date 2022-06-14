// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const createDiv = (data) => {
 const { joke } = data;
 const body = document.querySelector('body')
 const div = document.createElement('div');
 div.innerHTML = joke;
 body.appendChild(div);

};

const fetchJoke = () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };
    fetch(API_URL, myObject)
    .then((renponse) => renponse.json())
    .then((data) => createDiv(data));
};

window.onload = () => fetchJoke();