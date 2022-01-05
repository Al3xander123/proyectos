document.onload;

let div_principal=document.getElementsByTagName("textarea")[0];
div_principal.onkeyup=()=>{
document.getElementsByClassName("div_princial")[0].innerHTML=
document.getElementsByTagName("textarea")[0].value;}

let estilo_principal=document.getElementsByTagName("textarea")[1];
estilo_principal.onkeyup=()=>{
document.getElementsByTagName("style")[1].innerHTML=
document.getElementsByTagName("textarea")[1].value;}
