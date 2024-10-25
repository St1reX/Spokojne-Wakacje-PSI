//mobileNavReveal
{
    let x = document.getElementById("mobile-nav-reveal");
    let y = document.querySelector(".navigation-buttons");

    x.addEventListener("click", function() {

        let computedHeight = window.getComputedStyle(y).getPropertyValue('height');

        if (computedHeight === "0px") {
            y.style.height = "225px";
        } else {
            y.style.height = "0px";
        }
    });

    window.addEventListener("resize", function(){
        if (window.matchMedia("(max-width: 1250px)").matches) {
            y.style.height = "0px";
        } else {
            y.style.height = "auto";
        }
    });
}


//SlideShow
{
    let Slides = document.getElementsByClassName("slide");
    let SlideNum = 0;

    Slides[SlideNum].style.display = "block";

    setInterval(function()
    {
        Slides[SlideNum].style.display = "none";

        SlideNum++;

        SlideNum = SlideNum%Slides.length;

        Slides[SlideNum].style.display = "block";

    }, 5000)

    
}

//ShakingPlaneIcon
{
    document.addEventListener("DOMContentLoaded", function () {
        let y = document.querySelectorAll(".offer");
    
        y.forEach(element => {

            element.addEventListener("mouseenter", function () {
                let planeIcons = this.querySelector("#plane-icon");
                planeIcons.className = "fa-regular fa-plane fa-xl fa-shake";
            });


            element.addEventListener("mouseleave", function () {
                let planeIcons = this.querySelector("#plane-icon");
                planeIcons.className = "fa-regular fa-plane fa-xl";
            });
            
        });
    });
}