//GalleryChoice
{
    const searchParams = new URLSearchParams(window.location.search);

    var parameter = searchParams.get("subject");

    console.log(parameter);
    switch (parameter) {
        case "sea":
            document.querySelector("#sea").style.display = "block";
            break;

        case "exotic":
            document.querySelector("#exotic").style.display = "block";
            break;

        case "mountains":
            document.querySelector("#mountains").style.display = "block";
            break;

        default:
            alert("Błędny link. Brak galerii do wyświetlenia");
    }
}

//Fullscreen
{
    function Fullfill() {

        let element = document.querySelector("body");

        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) { 
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
}

//Slideshow
{
    let SlideNum = 0;
    let elements = document.querySelectorAll("#" + parameter + " #slide");

    elements[SlideNum].style.display = "inline";

    function Slideshow(number) {
        elements[SlideNum].style.display = "none";

        SlideNum += number;
        if (SlideNum < 0) {
            SlideNum = elements.length - 1;
        }
        else if (SlideNum > elements.length - 1) {
            SlideNum = 0;
        }

        elements[SlideNum].style.display = "inline";
    }
}