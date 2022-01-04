document.onload;

let texa=document.getElementsByTagName("textarea")[0];
texa.onkeyup=()=>{
document.getElementsByTagName("div")[0].innerHTML=
document.getElementsByTagName("textarea")[0].value;}

let texb=document.getElementsByTagName("textarea")[1];
texb.onkeyup=()=>{
document.getElementsByTagName("style")[1].innerHTML=
document.getElementsByTagName("textarea")[1].value;}
