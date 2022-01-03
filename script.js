document.onload;

let texto=document.getElementsByTagName("div")[0];
texto.innerHTML=
"Epale Gente. Como eajshahshahshstan";

document.getElementsByTagName("textarea")[0].onchange=
function(){
document.getElementsByTagName("div")[0].innerHTML=
document.getElementsByTagName("textarea")[0].innerHTML;}

