document.onload;

document.getElementsByTagName("textarea")[0].onkeyup=()=>{
document.getElementsByTagName("div")[0].innerHTML=
document.getElementsByTagName("textarea")[0].value;}

document.getElementsByTagName("textarea")[1].onkeyup=()=>{
document.getElementsByTagName("style")[1].innerHTML=
document.getElementsByTagName("textarea")[1].value;}
