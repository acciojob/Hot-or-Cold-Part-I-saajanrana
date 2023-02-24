//your code here
var btn=document.getElementById("btn");
var numptag=document.getElementById("num");
function generateRandomNumber(){
	var no=Math.floor(Math.random()*40)-20;
	numPtag.textContent=no;
}
btn.addEventListener("Click", generateRandomNumber);
