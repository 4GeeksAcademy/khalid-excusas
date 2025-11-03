import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let whos = ''
let actions = ''
let whatis = ''
let sincewhen = ''

function randomExcuse(lengthwhos){
  return Math.floor(Math.random() * lengthwhos)
}

whos = who[randomExcuse(who.length)]
actions = action[randomExcuse(action.length)]
whatis = what[randomExcuse(what.length)]
sincewhen = when[randomExcuse(when.length)]

let excuse = `${whos} ${actions} ${whatis} ${sincewhen}`

document.getElementById('excuse').innerText = excuse


};
