document.onload;

document.getElementsByTagName("textarea")[0].onchange=
function(){
document.getElementsByTagName("div")[0].innerHTML=
document.getElementsByTagName("textarea")[0].value;}
