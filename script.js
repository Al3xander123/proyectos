document.onload;

let texta=document.getElementsByTagName("textarea")[0].value;
texta.addEventListener("keyup",miDiv);
let textb=document.getElementsByTagName("textarea")[1].value;
textb.addEventListener("keyup",miEstilo);
let divp=document.getElementsByClassName("div_principal")[0];
let estilo=document.getElementsByTagName("style")[1];


function miDiv(){
divp.innerHTML=texta;
}

function miEstilo(){
estilo.innerHTML=textb;
}
/*
div_principal.onkeyup=()=>{
document.getElementsByClassName("div_princial")[0].innerHTML=
document.getElementsByTagName("textarea")[0].value;}

let estilo_principal=document.getElementsByTagName("textarea")[1];
estilo_principal.onkeyup=()=>{
document.getElementsByTagName("style")[1].innerHTML=
document.getElementsByTagName("textarea")[1].value;}
*/
