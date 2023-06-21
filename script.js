var fact=document.querySelector("#fact");
var h3=document.querySelector("#dog h3");
var flag=0;

h3.addEventListener("click",function(){
    if(flag===0){
        fact.style.opacity=`1`;
        flag=1; 
    }
    else{
        fact.style.opacity=`0`;
        flag=0;
    }
})


gsap.to("#hoppy",{
    scrollTrigger:{
        trigger:"#hoppy",
        scroller:"body",
        start:"top 20%",
        end:"top -520%",
        pin:true,
        scrub:1,
    },
    marginLeft:"38%",
    rotate:"-25deg",
    
}) 
gsap.to("#hoppy",{
    scrollTrigger:{
        trigger:"#page6",
        scroller:"body",
       
        scrub:1,
    },
    width:`10%`,
    height:`30%`,
    marginLeft:`50%`,
    opacity: 1,
})