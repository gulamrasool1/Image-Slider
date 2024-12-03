let flag = 0;
let btnContainer = document.getElementById('btnContainer');

function controller(x) {
    flag += x;
    slideshow(flag);
}
slideshow(flag);

function slideshow(num) {
    let slides = document.getElementsByClassName('slide');
    switch (true) {
        case (num === slides.length):
            flag = 0;
            num = 0;
            break;

        case (num < 0):
            flag = slides.length - 1;
            num = slides.length - 1;
            break;
    }
    for (let y of slides) {
        y.style.display = "none";
    }
    slides[num].style.display = "block";
}

function handleBtns(event) {
    let targetValues = event.target.id;
    if (targetValues === 'prevArrow') {
        controller(-1);
    } else if (targetValues === 'nextArrow') {
        controller(1);
    }
}
btnContainer.addEventListener('click', handleBtns); // handle all arrowBtns