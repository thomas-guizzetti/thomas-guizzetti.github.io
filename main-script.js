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
var gitCodeFreeContainer = document.getElementsByClassName("GitCodeFreeContainer");
var buttonContainer = document.querySelector(".buttonContainer");
var buttons = document.getElementsByClassName("tabsButtons");

console.log(buttonContainer);

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


function nightTimeButtonsEvent(){
    buttonOne.addEventListener("mouseover", function(){
        buttonOne.style.backgroundColor = "white";
        buttonOne.style.color = "black";
        buttonOne.style.fontSize = "15px";
    });
    buttonTwo.addEventListener("mouseover", function(){
        buttonTwo.style.backgroundColor = "white";
        buttonTwo.style.color = "black";
        buttonTwo.style.fontSize = "15px";
    });
    buttonThree.addEventListener("mouseover", function(){
        buttonThree.style.backgroundColor = "white";
        buttonThree.style.color = "black";
        buttonThree.style.fontSize = "15px";
    });
    buttonOne.addEventListener("mouseout", function(){
        buttonOne.style.backgroundColor = "transparent";
        buttonOne.style.color = "white";
        buttoneOne.style.fontSize = "14px";
    });
    buttonTwo.addEventListener("mouseout", function(){
        buttonTwo.style.backgroundColor = "transparent";
        buttonTwo.style.color = "white";
        buttoneTwo.style.fontSize = "14px";
    });
    buttonThree.addEventListener("mouseout", function(){
        buttonThree.style.backgroundColor = "transparent";
        buttonThree.style.color = "white";
        buttonThree.style.fontSize = "14px";
    });
    buttonOne.addEventListener("focus", function(){
        buttonOne.style.border = "1px solid white";
        buttonOne.style.outline = "0";
    });
    buttonTwo.addEventListener("focus", function(){
        buttonTwo.style.border = "1px solid white";
        buttonTwo.style.outline = "0";
    });
    buttonThree.addEventListener("focus", function(){
        buttonThree.style.border = "1px solid white";
        buttonThree.style.outline = "0";
    });
    buttonOne.addEventListener("blur", function(){
        buttonOne.style.border = "none";
        buttonOne.style.outline = "0";
    });
    buttonTwo.addEventListener("blur", function(){
        buttonTwo.style.border = "none";
        buttonTwo.style.outline = "0";
    });
    buttonThree.addEventListener("blur", function(){
        buttonThree.style.border = "none";
        buttonThree.style.outline = "0";
    });

};

function dayTimeButtonsEvent(){
    buttonOne.addEventListener("mouseover", function(){
        buttonOne.style.backgroundColor = "#333A5E";
        buttonOne.style.color = "white";
        buttonOne.style.fontSize = "15px";
    });
    buttonTwo.addEventListener("mouseover", function(){
        buttonTwo.style.backgroundColor = "#333A5E";
        buttonTwo.style.color = "white";
        buttonTwo.style.fontSize = "15px";
    });
    buttonThree.addEventListener("mouseover", function(){
        buttonThree.style.backgroundColor = "#333A5E";
        buttonThree.style.color = "white";
        buttonThree.style.fontSize = "15px";
    });
    buttonOne.addEventListener("mouseout", function(){
        buttonOne.style.backgroundColor = "transparent";
        buttonOne.style.color = "black";
        buttoneOne.style.fontSize = "14px";
    });
    buttonTwo.addEventListener("mouseout", function(){
        buttonTwo.style.backgroundColor = "transparent";
        buttonTwo.style.color = "black";
        buttoneTwo.style.fontSize = "14px";
    });
    buttonThree.addEventListener("mouseout", function(){
        buttonThree.style.backgroundColor = "transparent";
        buttonThree.style.color = "black";
        buttonThree.style.fontSize = "14px";
    });
    buttonOne.addEventListener("focus", function(){
        buttonOne.style.border = "1px solid #333A5E";
        buttonOne.style.outline = "0";
    });
    buttonTwo.addEventListener("focus", function(){
        buttonTwo.style.border = "1px solid #333A5E";
        buttonTwo.style.outline = "0";
    });
    buttonThree.addEventListener("focus", function(){
        buttonThree.style.border = "1px solid #333A5E";
        buttonThree.style.outline = "0";
    });
    buttonOne.addEventListener("blur", function(){
        buttonOne.style.border = "none";
        buttonOne.style.outline = "0";
    });
    buttonTwo.addEventListener("blur", function(){
        buttonTwo.style.border = "none";
        buttonTwo.style.outline = "0";
    });
    buttonThree.addEventListener("blur", function(){
        buttonThree.style.border = "none";
        buttonThree.style.outline = "0";
    });
};

dayTimeButtonsEvent();
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
var gitCodeFreeContainer = document.getElementsByClassName("GitCodeFreeContainer");
var gitCodeFreeButtons = document.getElementsByClassName("GitCodeFreeButtons");
var aElements = document.getElementsByTagName("a");



//Transition from day to night
lightswitchButtonNight.addEventListener("click", function(){
    document.body.style.backgroundImage = "url(\"https:\/\/images.unsplash.com\/photo-1598668596133-5e7cd286e92a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2559&q=80\")";
    for (var elements of h1Elements){
    elements.style.color = "white";};
    for (var elements of p1Elements){
        elements.style.color = "white";};
    for (var elements of tabsButtons){
        elements.style.color = "white";};
    buttonContainer.style.borderColor = "white";
    gitCodeFreeContainer[0].style.color = "white";
    gitCodeFreeContainer[0].style.borderColor = "white";
    for (var elements of gitCodeFreeButtons){
        elements.style.backgroundColor = "white";}
    for (var elements of aElements){
            elements.style.color = "#333A5E";};
    nightTimeButtonsEvent();
     });

//Transition from night to day
lightswitchButtonDay.addEventListener("click", function(){
    document.body.style.backgroundImage = "url(\"https://images.unsplash.com/photo-1519120944692-1a8d8cfc107f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80\")";
    for (var elements of h1Elements){
        elements.style.color = "#333A5E";};
    for (var elements of p1Elements){
            elements.style.color = "#333A5E";};
    for (var elements of tabsButtons){
        elements.style.color = "black";
        elements.style.color = "black";                       };
    buttonContainer.style.borderColor = "#333A5E";
    gitCodeFreeContainer[0].style.color = "black";
    gitCodeFreeContainer[0].style.borderColor = "#333A5E";    
    for (var elements of gitCodeFreeButtons){
        elements.style.backgroundColor = "#333A5E";}
    for (var elements of aElements){
        elements.style.color = "white";}
    dayTimeButtonsEvent();
})

//To do: Complete the transition from night and day feature
//To fix: fix transition from night to day errors, such as the button container for the tabs not switching back to original "hover" color  
//To fix: fix the night background image so it doesn't repeat
