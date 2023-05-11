/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuses").innerHTML = GenerateExcuse();
  });
};

function GenerateExcuse() {
  let subject = [
    "The dog",
    "The superhero",
    "The ninja",
    "The cat",
    "The baby",
    "The Pink Elephant"
  ];
  var action = [
    "kicked",
    "ate",
    "kicked",
    "snapped",
    "minced",
    "burned",
    "escaped with",
    "bite",
    "stole"
  ];
  var object = [
    " my homework",
    " my project",
    " my car",
    " my shoe",
    " my report",
    " my alarm clock",
    " my sister"
  ];
  var place = [
    " in my house",
    " on the street",
    " in my way to here",
    " in the store",
    " in my basement"
  ];

  var who = subject[Math.round(Math.random() * (subject.length - 1))];
  var did = action[Math.round(Math.random() * (action.length - 1))];
  var what = object[Math.round(Math.random() * (object.length - 1))];
  var where = place[Math.round(Math.random() * (place.length - 1))];

  return who + " " + did + "" + what + "" + where;
}
