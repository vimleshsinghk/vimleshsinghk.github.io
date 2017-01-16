/* TO STORE THE USER BACKGROUND COLOR */
"use strict";
function changeBgColor(){
    if(sessionStorage.userBgColor){
        document.body.style.backgroundColor = sessionStorage.userBgColor;
        document.getElementById("bg-color").value = sessionStorage.userBgColor;
    }
};
function selectedColor(){
	var userColor = document.getElementById("bg-color").value;
    if(typeof(Storage) !== "undefined"){
        if(sessionStorage.userBgColor){
            sessionStorage.userBgColor = userColor;
        } else {
            sessionStorage.userBgColor = userColor;
        }
        document.body.style.backgroundColor = sessionStorage.userBgColor;
    } else {
        alert("Sorry, your browser does not support this...");
    }
};

