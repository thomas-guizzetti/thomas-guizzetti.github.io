var buttonOne = document.querySelector("#buttonOne");
var buttonTwo = document.querySelector("#buttonTwo");
var buttonThree = document.querySelector("#buttonThree");
var tabOne = document.querySelector("#tabOne");
var tabTwo = document.querySelector("#tabTwo");
var tabThree = document.querySelector("#tabThree");

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

