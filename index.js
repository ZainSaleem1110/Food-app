var ul=document.querySelector("ul")
var li=document.querySelectorAll("li")

li.forEach(el=>{
    el.addEventListener("click",()=>{
        ul.querySelector('.active').classList.remove('active')
        el.classList.add('active')
    })
})


