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
    tabFour.style.visibility = "hidden";
});
buttonTwo.addEventListener("click", function(){
    tabOne.style.visibility = "hidden";
    tabTwo.style.visibility = "visible";
    tabThree.style.visibility = "hidden";
    tabFour.style.visibility = "hidden";
});
buttonThree.addEventListener("click", function(){
    tabOne.style.visibility = "hidden";
    tabTwo.style.visibility = "hidden";
    tabThree.style.visibility = "visible";
    tabFour.style.visibility = "hidden";
});

//GitHub Button - Onlick event
GitCodeFreeButtons[0].addEventListener("click", function(){
        GitCodeFreeButtons[0].style.backgroundColor = "black";
        GitCodeFreeButtons[1].style.backgroundColor = "#333A5E";
        GitCodeFreeButtons[2].style.backgroundColor = "#333A5E";
});

//CodeWars Button - onlick event
GitCodeFreeButtons[1].addEventListener("click", function(){
    GitCodeFreeButtons[1].style.backgroundColor = "black";
    GitCodeFreeButtons[0].style.backgroundColor = "#333A5E";
    GitCodeFreeButtons[2].style.backgroundColor = "#333A5E";
});

//FreeCodeCamp Button - onlick event
GitCodeFreeButtons[2].addEventListener("click", function(){
    GitCodeFreeButtons[2].style.backgroundColor = "black";
    GitCodeFreeButtons[1].style.backgroundColor = "#333A5E";
    GitCodeFreeButtons[0].style.backgroundColor = "#333A5E";
});






