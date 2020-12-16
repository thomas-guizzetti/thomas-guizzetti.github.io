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
var tabLinks = Array.from(document.querySelectorAll("a")).slice(0,3);

let nightTime = sessionStorage.getItem('nightTime');

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
        buttonOne.style.backgroundColor = "rgb(26, 9, 0)";
        buttonOne.style.color = "white";
        buttonOne.style.fontSize = "15px";
    });
    buttonTwo.addEventListener("mouseover", function(){
        buttonTwo.style.backgroundColor = "rgb(26, 9, 0)";
        buttonTwo.style.color = "white";
        buttonTwo.style.fontSize = "15px";
    });
    buttonThree.addEventListener("mouseover", function(){
        buttonThree.style.backgroundColor = "rgb(26, 9, 0)";
        buttonThree.style.color = "white";
        buttonThree.style.fontSize = "15px";
    });
    buttonOne.addEventListener("mouseout", function(){
        buttonOne.style.backgroundColor = "transparent";
        buttonOne.style.color = "black";
        buttonOne.style.fontSize = "14px";
    });
    buttonTwo.addEventListener("mouseout", function(){
        buttonTwo.style.backgroundColor = "transparent";
        buttonTwo.style.color = "black";
        buttonTwo.style.fontSize = "14px";
    });
    buttonThree.addEventListener("mouseout", function(){
        buttonThree.style.backgroundColor = "transparent";
        buttonThree.style.color = "black";
        buttonThree.style.fontSize = "14px";
    });
    buttonOne.addEventListener("focus", function(){
        buttonOne.style.border = "1px solid rgb(26, 9, 0)";
        buttonOne.style.outline = "0";
    });
    buttonTwo.addEventListener("focus", function(){
        buttonTwo.style.border = "1px solid rgb(26, 9, 0)";
        buttonTwo.style.outline = "0";
    });
    buttonThree.addEventListener("focus", function(){
        buttonThree.style.border = "1px solid rgb(26, 9, 0)";
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


// switch from day to night - script below: 

var lightswitchButton = document.querySelector("#lightswitchButton");
var h1Elements =  document.getElementsByTagName("h1");
var p1Elements =  document.getElementsByTagName("p1");
var tabsButtons = document.getElementsByClassName("tabsButtons");
var gitCodeFreeContainer = document.getElementsByClassName("GitCodeFreeContainer");
var gitCodeFreeButtons = document.getElementsByClassName("GitCodeFreeButtons");
var aElements = document.getElementsByTagName("a");
var carouselButtons = document.getElementsByClassName("carouselButtons");

function nightTimeMode(){
    document.body.style.backgroundImage = "url(\"https://images.unsplash.com\/photo-1598668596133-5e7cd286e92a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2559&q=80\")";
        for (var elements of h1Elements){
        elements.style.color = "white";};
        for (var elements of p1Elements){
            elements.style.color = "white";};
        for (var elements of tabsButtons){
            elements.style.color = "white";};
        buttonContainer.style.borderColor = "white";
        gitCodeFreeContainer[0].style.color = "white";
        gitCodeFreeContainer[0].style.background = "transparent";
        gitCodeFreeContainer[0].style.borderColor = "white";
        for (var elements of gitCodeFreeButtons){
            elements.style.backgroundColor = "white";}
        for (var elements of aElements){
                elements.style.color = "#333A5E";};
        lightswitchButton.style.backgroundImage = "url(\"https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather01-512.png\")";
        for(var elements of carouselButtons){
            elements.style.backgroundColor = "white";
        }
        nightTimeButtonsEvent();
        sessionStorage.setItem('nightTime','enabled');
};

function dayTimeMode(){
    document.body.style.backgroundImage = "url(\"https://images.unsplash.com/photo-1490131784822-b4626a8ec96a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80\")";
    for (var elements of h1Elements){
        elements.style.color = "rgb(26, 9, 0)";};
    for (var elements of p1Elements){
            elements.style.color = "rgb(26, 9, 0)";};
    for (var elements of tabsButtons){
        elements.style.color = "black";
        elements.style.color = "black";};
    buttonContainer.style.borderColor = "rgb(26, 9, 0)";
    gitCodeFreeContainer[0].style.color = "black";
    gitCodeFreeContainer[0].style.background = " rgb(239,238,241)";
    gitCodeFreeContainer[0].style.background = "linear-gradient(90deg, rgba(239,238,241,1) 0%, rgba(227,217,211,1) 41%, rgba(238,238,238,1) 100%)";
    gitCodeFreeContainer[0].style.borderColor = "rgb(26, 9, 0)";    
    for (var elements of gitCodeFreeButtons){
        elements.style.backgroundColor = "rgb(26, 9, 0)";}
    for (var elements of aElements){
        elements.style.color = "white";}
    lightswitchButton.style.backgroundImage = "url(\"https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-10-512.png\")";
    for(var elements of carouselButtons){
        elements.style.backgroundColor = "transparent";
    }
    dayTimeButtonsEvent();
    sessionStorage.setItem('nightTime', 'disabled');
};

if(nightTime === 'enabled'){
    nightTimeMode();
}
else{
    dayTimeMode();
};

lightswitchButton.addEventListener("click", function(){
    nightTime = sessionStorage.getItem('nightTime');
    if(nightTime !== 'enabled'){
        //night css settings
        nightTimeMode();
    }
    else {
        //day css settings
        dayTimeMode();
    };
});


// carousel script below

var track = document.querySelector(".carouselTrack");
var slides = Array.from(track.children);
var rightButton = document.getElementsByClassName("carouselButtons")[1];
var leftButton = document.getElementsByClassName("carouselButtons")[0];
var slideSize = slides[0].getBoundingClientRect();
var slideWidth = slideSize.width; 
var carouselButtonLeft = document.querySelector("#carouselButtonLeft");
var carouselButtonLeft = document.querySelector("#carouselButtonLeft");

slides[0].style.left = '0px';
slides[1].style.left = slideWidth + 'px';
slides[2].style.left = slideWidth * 2 + 'px';

console.log(slides.length);
var imageCount = 0;

//slides[imageCount + 1].style.left = slideWidth + 'px';
//slides[imageCount + 2].style.left = slideWidth * 2 + 'px';
rightButton.addEventListener('click', function(){ 
    track.style.transform = 'translateX(-' + slideWidth * (imageCount + 1) + 'px)';
    if(imageCount == slides.length - 1){}
    else {imageCount ++;};
    switch(imageCount){
        case 0: carouselButtonLeft.style.visibility = "hidden";
                carouselButtonRight.style.visibility = "visible";
        break;
        case 1: carouselButtonLeft.style.visibility = "visible";
                carouselButtonRight.style.visibility = "visible";
        break;
        case 2: carouselButtonLeft.style.visibility = "visible";
                carouselButtonRight.style.visibility = "hidden";
        break;

    }

});


leftButton.addEventListener ('click', function(){
    track.style.transform = 'translateX(-' + slideWidth * (imageCount - 1) + 'px)';
    imageCount --;
    switch(imageCount){
        case 0: carouselButtonLeft.style.visibility = "hidden";
                carouselButtonRight.style.visibility = "visible";
        break;
        case 1: carouselButtonLeft.style.visibility = "visible";
                carouselButtonRight.style.visibility = "visible";
        break;
        case 2: carouselButtonLeft.style.visibility = "visible";
                carouselButtonRight.style.visibility = "hidden";
        break;

    }
    });





//fix buttons visible from homepage 
//add tabs in different branches? 

//Fix tabs 
//make sure that all functions work well with the new tab system