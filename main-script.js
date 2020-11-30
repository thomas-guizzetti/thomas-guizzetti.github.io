var buttonOne = document.querySelector("#buttonOne");
var buttonTwo = document.querySelector("#buttonTwo");
var buttonThree = document.querySelector("#buttonThree");
var tabOne = document.querySelector("#tabOne");
var tabTwo = document.querySelector("#tabTwo");
var tabThree = document.querySelector("#tabThree");
var GitButton = document.querySelector("#GitButton");
var FreeCodeCampButton = document.querySelector("#FreeCodeCamp");
var CodeWarsButton = document.querySelector("#CodeWarsButton");
var GitCodeFreeButtons = document.querySelectorAll(".GitCodeFreeButtons");


buttonOne.addEventListener("click", function(){
    tabOne.style.visibility = "visible";
    tabTwo.style.visibility = "hidden";
    tabThree.style.visibility = "hidden";
});
buttonTwo.addEventListener("click", function(){
    tabOne.style.visibility = "hidden";
    tabTwo.style.visibility = "visible";
    tabThree.style.visibility = "hidden";
});
buttonThree.addEventListener("click", function(){
    tabOne.style.visibility = "hidden";
    tabTwo.style.visibility = "hidden";
    tabThree.style.visibility = "visible";
});

//GitHub Button - Onlick event
GitCodeFreeButtons[0].addEventListener("click", function(){
        GitCodeFreeButtons[0].style.borderColor = "black";
        GitCodeFreeButtons[1].style.borderColor = "#333A5E";
        GitCodeFreeButtons[2].style.borderColor = "#333A5E";
});

//CodeWars Button - onlick event
GitCodeFreeButtons[1].addEventListener("click", function(){
    GitCodeFreeButtons[1].style.borderColor = "white";
    GitCodeFreeButtons[0].style.borderColor = "#333A5E";
    GitCodeFreeButtons[2].style.borderColor = "#333A5E";
});

//FreeCodeCamp Button - onlick event
GitCodeFreeButtons[2].addEventListener("click", function(){
    GitCodeFreeButtons[2].style.borderColor = "white";
    GitCodeFreeButtons[1].style.borderColor = "#333A5E";
    GitCodeFreeButtons[0].style.borderColor = "#333A5E";
});


var artist = document.querySelectorAll("#artist");
var song = document.querySelectorAll("#song");
var musicForm = document.querySelectorAll("#musicForm");

musicForm.addEventListener("submit", (e) => {

    e.preventDefault();
    console.log("hello world!");
});






