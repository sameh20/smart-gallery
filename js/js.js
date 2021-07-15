const panels = document.querySelectorAll(".panel");
panels.forEach((panel)=>{
    panel.addEventListener("click",()=>{
        removeClassaction()
        panel.classList.add('active')
    })
})
function removeClassaction () {
    panels.forEach((panel)=>{
   panel.classList.remove("active")
})}
