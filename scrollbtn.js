function scrollFunction() {
    let mybutton = document.querySelector(".back-to-top");
    mybutton.style.opacity = 0;

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop >600) {
        mybutton.style.opacity = 1;
        mybutton.style.visibility = "visible";
    } else {
        mybutton.style.opacity = 0;
        mybutton.style.visibility = "hidden";
    }
}

window.addEventListener("scroll", ()=>{
    scrollFunction()
})

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
