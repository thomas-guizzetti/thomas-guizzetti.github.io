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

var artist = document.querySelector("#artist");
var song = document.querySelector("#song");
var musicForm = document.querySelector("#musicForm");
var musicBoard = document.querySelector("#musicBoard");

function musicSubmission(){
    if(artist.value != '' && song.value != ''){
    alert('Thanks for adding \'' + artist.value + ' - ' + song.value + '\' to the music whiteboard!');
    musicBoard.textContent = musicBoard.textContent + '\n' + artist.value + ' - ' + song.value;
    console.log(musicBoard.textContent);
}}


var lightswitchButtonNight = document.querySelector("#lightswitchButtonNight");
var lightswitchButtonDay = document.querySelector("#lightswitchButtonDay");
var h1Elements =  document.getElementsByTagName("h1");
var p1Elements =  document.getElementsByTagName("p1");
var tabsButtons = document.getElementsByClassName("tabsButtons");
var buttonContainer = document.getElementsByClassName("buttonContainer");
var gitCodeFreeContainer = document.getElementsByClassName("GitCodeFreeContainer");
var gitCodeFreeButtons = document.getElementsByClassName("GitCodeFreeButtons");


console.log();


//Transition from day to night
lightswitchButtonNight.addEventListener("click", function(){
    document.body.style.backgroundImage = "url(\"https:\/\/images.unsplash.com\/photo-1598668596133-5e7cd286e92a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2559&q=80\")";
    for (var elements of h1Elements){
    elements.style.color = "white";};
    for (var elements of p1Elements){
        elements.style.color = "white";};
    for (var elements of tabsButtons){
        elements.style.color = "white";};
    buttonContainer[0].style.borderColor = "white";
    for (var elements of gitCodeFreeButtons){
        elements.style.backgroundColor = "white";
        elements.style.color = "black";};
})

//Transition from night to day
lightswitchButtonDay.addEventListener("click", function(){
    document.body.style.backgroundImage = "url(\"https://images.unsplash.com/photo-1519120944692-1a8d8cfc107f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80\")";
    for (var elements of h1Elements){
        elements.style.color = "#333A5E";};
    for (var elements of p1Elements){
            elements.style.color = "#333A5E";};
    for (var elements of tabsButtons){
        elements.style.color = "black";};
    buttonContainer[0].style.borderColor = "#333A5E";
    gitCodeFreeContainer[0].style.borderColor = "#333A5E";
    for (var elements of gitCodeFreeButtons){
        elements.style.backgroundColor = "#333A5E";
        elements.style.color = "white";};


})

//To do: Complete the transition from night and day feature
//To fix: fix transition from night to day errors, such as the button container for the tabs not switching back to original "hover" color  
//To fix: fix the night background image so it doesn't repeat
