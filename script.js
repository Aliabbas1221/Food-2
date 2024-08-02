// colllaps
let navbar=document.querySelectorAll(".nav-link");
let collapes=document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click", ()=>{
        collapes.classList.remove("show")
    })
})

// scrolled fixed
let nav=document.querySelector(".scroll");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scrolled-on");
    }
    else{
        nav.classList.remove("scrolled-on")
    }
}









// counter design
document.addEventListener("DOMContentLoaded", ()=>{
    function counter(id,start ,end ,duration){
        let obj=document.getElementById(id),
        current=start,
        range=end-start,
        increment=end>start?1:-1,
        step=Math.abs(Math.floor(duration/range)),
        timer = setInterval(()=>{
            current+=increment;
            obj.textContent=current;
            if(current==end){
                clearInterval(timer);
            }
        })


    }
    counter("count1" , 0 ,1287,3000);
    counter("count2" , 0 ,1487,3500);
    counter("count3" , 0 ,1687,2500);
    counter("count4" , 0 ,1887,2000);
})



