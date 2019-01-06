var capacity=document.getElementById("capacity");
var capacity2=document.getElementById("capacity2");
function change(){
	capacity2.style="none";
	capacity2.removeChild(img);
	document.getElementById("chose").innerHTML="150ml";
}
function change2(){
	capacity.style="none";
	capacity.removeChild(img);
	document.getElementById("chose").innerHTML="200ml";
}