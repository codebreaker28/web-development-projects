const navbar=document.getElementById("navbar");

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

navbar.classList.add("scrolled");

topBtn.style.display="block";

}

else{

navbar.classList.remove("scrolled");

topBtn.style.display="none";

}

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

const links=document.querySelectorAll("nav ul li a");

links.forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.color="#ffeb3b";

});

link.addEventListener("mouseleave",()=>{

link.style.color="white";

});

});
