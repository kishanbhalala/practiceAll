function myPlayFunction() {
  document.getElementById("myDIV").style.animationPlayState = "running";
  document.getElementById("myDIV").style.background = "red"; 
}

function myPauseFunction() {
  document.getElementById("myDIV").style.animationPlayState = "paused"; 
  document.getElementById("myDIV").style.background = "yellow"; 
}