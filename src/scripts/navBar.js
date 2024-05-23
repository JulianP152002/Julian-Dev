document.addEventListener("DOMContentLoaded", ()=>{
    let navbar = document.querySelector(".grid_nav")

    window.addEventListener("scroll", () =>{
        let scrool = window.scrollY

        if (scrool > 120){
            navbar.classList.add("grid_nav--fixer")
        }
        else {
            navbar.classList.remove("grid_nav--fixer")
        }
    })
})