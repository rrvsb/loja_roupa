let nav = document.getElementById('nav_see');




nav.addEventListener("click", function () {
    let apli_info = document.getElementById('see_nav');


    if (see_nav.style.display == "none") {

        see_nav.style.display = "block"

    } else {
        see_nav.style.display = "none"

    }



});


document.getElementById('next_see1').addEventListener("click", function () {
    let grade1 = document.getElementById('grade1')
    let grade2 = document.getElementById('grade2')


    if (grade2.style.display === "none") {

        grade2.style.display = "grid"
        grade1.style.display = "none"

    } else {
        grade2.style.display = "none"
        grade1.style.display = "grid"




    }




});

document.getElementById('next_see2').addEventListener("click", function () {
    let grade1 = document.getElementById('grade1')
    let grade2 = document.getElementById('grade2')


    if (grade2.style.display === "none") {

        grade2.style.display = "grid"
        grade1.style.display = "none"

    } else {
        grade2.style.display = "none"
        grade1.style.display = "grid"




    }




});

let buttons = document.getElementsByTagName('button');


for (let tamanhos = 0; tamanhos < buttons.length; tamanhos++) {
    buttons[tamanhos].addEventListener('click', function () {
        if (this.style.backgroundColor === "rgba(27, 27, 27, 0)") {
            this.style.backgroundColor = "blue";
            this.style.borderRadius = "50%"
            window.alert("por favor selecionar so um tamanho")

        } else {
            this.style.backgroundColor = "rgba(27, 27, 27, 0)";
        }
    });
}



