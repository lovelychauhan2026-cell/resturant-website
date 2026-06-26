const items=document.querySelectorAll(".food");


window.addEventListener("scroll",()=>{

items.forEach(item=>{

let top=item.getBoundingClientRect().top;


if(top < window.innerHeight-100){

item.style.animation="show .8s forwards";

}


});


});