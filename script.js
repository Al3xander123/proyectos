document.onload;

document.getElementsByTagName("textarea")[0].onkeyup=
function(){
document.getElementsByTagName("div")[0].innerHTML=
document.getElementsByTagName("textarea")[0].innerHTML;}
