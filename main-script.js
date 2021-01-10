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
var lightswitchButton = document.querySelector("#lightswitchButton");
var h1Elements =  document.getElementsByTagName("h1");
var p1Elements =  document.getElementsByTagName("p1");
var tabsButtons = document.getElementsByClassName("tabsButtons");
var gitCodeFreeContainer = document.getElementsByClassName("GitCodeFreeContainer");
var gitCodeFreeButtons = document.getElementsByClassName("GitCodeFreeButtons");
var aElements = document.getElementsByTagName("a");
var carouselButtons = document.getElementsByClassName("carouselButtons");
var whyAmIApplyingParagraphs = document.getElementsByClassName("whyAmIApplyingParagraphs");
var musicLink = document.querySelector("#musicLink");

// START OF THE SCRIPT FOR THE NIGHT TIME AND DAY TIME MODES

//Session storage saves the night time or day time settings of the page, in particular when switching tabs
//Session storage will last until the user's session is finished (eg closes the website)

//When the webpage loads, it assignes to nightTime the value of the keyname (in this case 'nightTime'). 
//When loading for the first time, value of nightTime is 'null' since the keyname's value is 'null'
let nightTime = sessionStorage.getItem('nightTime'); 

//The functions below instruct what should happen when we hover over the tab buttons. 
//In particular, nightTimeButtonsEvent instructs what happens when in night time mode and dayTimeButtonsEvent what happens when in day time mode
function nightTimeButtonsEvent(){
    buttonOne.addEventListener("mouseover", function(){
        buttonOne.style.backgroundColor = "white";
        buttonOne.style.color = "black";
        buttonOne.style.fontSize = "1.7vh";
    });
    buttonTwo.addEventListener("mouseover", function(){
        buttonTwo.style.backgroundColor = "white";
        buttonTwo.style.color = "black";
        buttonTwo.style.fontSize = "1.7vh";
    });
    buttonThree.addEventListener("mouseover", function(){
        buttonThree.style.backgroundColor = "white";
        buttonThree.style.color = "black";
        buttonThree.style.fontSize = "1.7vh";
    });
    buttonOne.addEventListener("mouseout", function(){
        buttonOne.style.backgroundColor = "transparent";
        buttonOne.style.color = "white";
        buttonOne.style.fontSize = "1.6vh";
    });
    buttonTwo.addEventListener("mouseout", function(){
        buttonTwo.style.backgroundColor = "transparent";
        buttonTwo.style.color = "white";
        buttonTwo.style.fontSize = "1.6vh";
    });
    buttonThree.addEventListener("mouseout", function(){
        buttonThree.style.backgroundColor = "transparent";
        buttonThree.style.color = "white";
        buttonThree.style.fontSize = "1.6vh";
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
        buttonOne.style.fontSize = "1.7vmin";
    });
    buttonTwo.addEventListener("mouseover", function(){
        buttonTwo.style.backgroundColor = "rgb(26, 9, 0)";
        buttonTwo.style.color = "white";
        buttonTwo.style.fontSize = "1.7vmin";
    });
    buttonThree.addEventListener("mouseover", function(){
        buttonThree.style.backgroundColor = "rgb(26, 9, 0)";
        buttonThree.style.color = "white";
        buttonThree.style.fontSize = "1.7vmin";
    });
    buttonOne.addEventListener("mouseout", function(){
        buttonOne.style.backgroundColor = "transparent";
        buttonOne.style.color = "black";
        buttonOne.style.fontSize = "1.6vmin";
    });
    buttonTwo.addEventListener("mouseout", function(){
        buttonTwo.style.backgroundColor = "transparent";
        buttonTwo.style.color = "black";
        buttonTwo.style.fontSize = "1.6vmin";
    });
    buttonThree.addEventListener("mouseout", function(){
        buttonThree.style.backgroundColor = "transparent";
        buttonThree.style.color = "black";
        buttonThree.style.fontSize = "1.6vmin";
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

//The functions below is responsible for changing the css and styles of the HTML when night time mode is enabled
//When nightTimeMode is called and hence night time mode is enabled, we also set the value of keyname 'nightTime' to 'enabled' using sessionStorage.setItem()
function nightTimeMode(){
    document.body.style.backgroundImage = "url(\"https://images.unsplash.com\/photo-1598668596133-5e7cd286e92a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2559&q=80\")";
        for (var elements of h1Elements){
        elements.style.color = "white";};
        for (var elements of p1Elements){
            elements.style.color = "white";};
        for (var elements of buttons){
            elements.style.color = "white";};
        buttonContainer.style.borderColor = "white";
        if(gitCodeFreeContainer[0] != undefined){
        gitCodeFreeContainer[0].style.color = "white";
        gitCodeFreeContainer[0].style.background = "transparent";
        gitCodeFreeContainer[0].style.borderColor = "white";};
        for (var elements of gitCodeFreeButtons){
            elements.style.backgroundColor = "white";}
        for (var elements of aElements){
                elements.style.color = "#333A5E";};
        lightswitchButton.style.backgroundImage = "url(\"https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather01-512.png\")";
        for(var elements of carouselButtons){
            elements.style.backgroundColor = "white";
        }
        for (var elements of whyAmIApplyingParagraphs){
            elements.style.background = "transparent";
        }
        if(musicLink != null){
        musicLink.style.color = "white";};

        nightTimeButtonsEvent();
        sessionStorage.setItem('nightTime','enabled');
        
};

//The functions below is responsible for changing the css and styles of the HTML when night time mode is disabled
//When dayTimeMode is called and hence night time mode is disabled, we also set the value of keyname 'nightTime' to 'disabled' using sessionStorage.setItem()

function dayTimeMode(){
    document.body.style.backgroundImage = "url(\"https://images.unsplash.com/photo-1490131784822-b4626a8ec96a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80\")";
    for (var elements of h1Elements){
        elements.style.color = "rgb(26, 9, 0)";};
    for (var elements of p1Elements){
            elements.style.color = "rgb(26, 9, 0)";};
    for (var elements of buttons){
        elements.style.color = "black";};
    buttonContainer.style.borderColor = "rgb(26, 9, 0)";
    if(gitCodeFreeContainer[0] != undefined){
    gitCodeFreeContainer[0].style.color = "black";
    gitCodeFreeContainer[0].style.background = " rgb(239,238,241)";
    gitCodeFreeContainer[0].style.background = "linear-gradient(90deg, rgba(239,238,241,1) 0%, rgba(227,217,211,1) 41%, rgba(238,238,238,1) 100%)";
    gitCodeFreeContainer[0].style.borderColor = "rgb(26, 9, 0)";};
    for (var elements of gitCodeFreeButtons){
        elements.style.backgroundColor = "rgb(26, 9, 0)";}
    for (var elements of aElements){
        elements.style.color = "white";}
    lightswitchButton.style.backgroundImage = "url(\"https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-10-512.png\")";
    for(var elements of carouselButtons){
        elements.style.backgroundColor = "transparent";
    }
    for (var elements of whyAmIApplyingParagraphs){
        elements.style.background = "linear-gradient(90deg, rgba(239,238,241,0) 0%, rgba(227,217,211,0.5) 41%, rgba(238,238,2380, 0) 100%)";
    }
    if(musicLink != null){
        musicLink.style.color = "black";};

    dayTimeButtonsEvent();
    sessionStorage.setItem('nightTime', 'disabled');
};


//The below conditional statement ensures that when we reload the page, if nightTime is 'enabled', nightTimeMode and nightTimeButtonsEvents are called
//And hence the CSS and style of the HTML changes to night time mode.
//In order for the carousel to work, everytime we reload the page we also want to reset the imageCount. This ensures that the carousel resets to the first image


if(nightTime === 'enabled'){
    nightTimeMode();
    nightTimeButtonsEvent();
    //Reset carousel image count to 0
    var imageCount = 0;
}
else{
    dayTimeMode();
    dayTimeButtonsEvent();
    //Reset carousel image count to 0
    var imageCount = 0;
}

//Below the instructions for what happens when the user clicks on the light switch:
//1. We update nightTime's value by calling it again
//2. If nightTime is disabled (and hence the page is in day time mode), call nightTimeMode 
//3. If else nightTime is enabled (and hence the page is in night time mode), call dayTimeMode
lightswitchButton.addEventListener("click", function(){
    //when we click on lightswitch, we need to update nightTime's value
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

// END OF THE SCRIPT FOR THE NIGHT TIME AND DAY TIME MODES


//START OF THE SCRIPT FOR THE CAROUSEL

var track = document.querySelector(".carouselTrack");
if(track != null){
var slides = Array.from(track.children);};
var rightButton = document.getElementsByClassName("carouselButtons")[1];
var leftButton = document.getElementsByClassName("carouselButtons")[0];
if(slides != undefined){
//getBoundingClientRect returns the size of the element slides[0]
var slideSize = slides[0].getBoundingClientRect();};
if(slideSize != undefined){
var slideWidth = slideSize.width; };
var carouselButtonLeft = document.querySelector("#carouselButtonLeft");
var carouselButtonLeft = document.querySelector("#carouselButtonLeft");

//The below ensures that the carousel is running only when we're on the About Me tab
if(track != null && slides != undefined && slideSize != undefined){

//This puts the slides one next to each other 
slides[0].style.left = '0px';
slides[1].style.left = slideWidth + 'px';
slides[2].style.left = slideWidth * 2 + 'px';

var imageCount = 0;

//The below instructs what happens to the carousel when the rightButton is clicked on
rightButton.addEventListener('click', function(){ 
    //The below moves the slides from right to left
    track.style.transform = 'translateX(-' + slideWidth * (imageCount + 1) + 'px)';
    //The below stops imageCount from increasing when we arrive at the last slide of the carousel
    if(imageCount == slides.length - 1){}
    //the below inscreases imageCount when we're at the start or the middle of the carousel
    else {imageCount ++;};
    //The below hides the left and right buttons if we are respectively on the first and last slide of the carousel
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

//The below instructs what happens to the carousel when the leftButton is clicked on
leftButton.addEventListener ('click', function(){
    //The below moves the slides from left to right
    track.style.transform = 'translateX(-' + slideWidth * (imageCount - 1) + 'px)';
    imageCount --;
    //The below hides the left and right buttons if we are respectively on the first and last slide of the carousel
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
    });}


//END OF THE SCRIPT FOR THE CAROUSEL

//START OF THE SCRIPT FOR POP-UP IMAGE CREDIT


var popUpButtonOne = document.querySelector(".credits");
var popUpButtonTwo = document.querySelector(".creditsPopUp");

if( popUpButtonOne != null && popUpButtonTwo != null){

popUpButtonOne.addEventListener('click', function(){
    popUpButtonOne.style.visibility = "hidden";
    popUpButtonTwo.style.visibility = "visible";
});

popUpButtonTwo.addEventListener('click', function(){
    popUpButtonOne.style.visibility = "visible";
    popUpButtonTwo.style.visibility = "hidden";
});}

//END OF THE SCRIPT FOR POP-UP IMAGE CREDIT


//add more comments in the JS file
//Open on different browsers
//add music link for all of my mistakes are made