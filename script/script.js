
"use strict";
if(navigator.userAgent.indexOf("MSIE") != -1 ){
    document.getElementById("background-control").style.display = none;
}
/* TO CHANGE THE USER BACKGROUND COLOR */
function changeBgColor(){
    if(sessionStorage.userBgColor!==undefined){
        document.body.style.backgroundColor = sessionStorage.userBgColor;
        document.getElementById("bg-color").value = sessionStorage.userBgColor;
    }
};
/* TO STORE THE USER BACKGROUND COLOR */
function selectedColor(){
	var userColor = document.getElementById("bg-color").value;
    document.body.style.backgroundColor = userColor;
    if(typeof(sessionStorage) !== undefined){
        if(sessionStorage.userBgColor){
            sessionStorage.userBgColor = userColor;
        } else {
            sessionStorage.userBgColor = userColor;
        }
    } else {
        alert("Sorry, your browser does not support this...");
    }
};

