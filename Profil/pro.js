const headerclose=document.querySelector(".close")
const header=document.querySelector("header")
 
headerclose.addEventListener('click',()=>{
   
 
   header.classList.toggle("nav-close")
    
})
const body=document.querySelector("body")

window.addEventListener("resize", function(){
   
    if(this.window.innerWidth<690)
    {
      header.classList.add("nav-close")
    }
    else{
      header.classList.remove("nav-close")
    }
     
 });

const modename=document.querySelector(".modetoggele .modename")
const modediv=document.querySelector(".modetoggele")




modediv.addEventListener("click",()=>{
   if(modename.textContent=="Dark")
   {
      modename.textContent="Light"
   }
   else{
      modename.textContent="Dark"
   }
   modediv.classList.toggle("modesun")
   document.body.classList.toggle("dark-theme")
})


// const pbtn=document.querySelectorAll(".button a button")

// // var buttonsfunction=function(m){
// //    pbtn.forEach((btn)=>{
// //      btn.classList.remove("active-btn")
// //    })
// //    pbtn[m].classList.add("active-btn")
    
// //   }

// //   pbtn.forEach((btn,i)=>{
// //    btn.addEventListener("click",()=>
// //    {
// //      buttonsfunction(i);
// //    })
// //   })

// var showF=function(m){
//    pbtn.forEach((btn)=>{
//       btn.classList.remove("active-btn");


//    })
//    pbtn[m].classList.add("active-btn")
// }

// pbtn.forEach((btn,i)=>{
//    btn.addEventListener("click",()=>{
//       showF(i);
//    })
// })
// pbtn.addEventListener("click",()=>{
//    pbtn.classList.add("active-btn");
// })
 