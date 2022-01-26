let slidePosition = 0;

const block1 = document.getElementById('block1')
const block2 = document.getElementById('block2')
const block3 = document.getElementById('block3')
const block4 = document.getElementById('block4')
const block5 = document.getElementById('block5')


document.getElementById('carousel__button--next')
    .addEventListener("click", function () {


        updateSlidePositionNext()

    });
document.getElementById('carousel__button--prev')
    .addEventListener("click", function () {

        slidePosition--;
        updateSlidePositionPrev()

    });


function updateSlidePositionPrev() {

    switch (slidePosition) {
        case -1 :

            let block1Width = 220
            let block1Height = 350
            let block1Left = 922
            let block1Top = 660

            block1.style.width = block1Width + 'px'
            block1.style.height = block1Height + 'px'
            block1.style.marginTop = block1Top + 'px'
            block1.style.marginLeft = block1Left + 'px'
            block1.style.zIndex = "8";
            block1.style.backgroundColor = "gray";


            let block2Width = 220
            let block2Height = 350
            let block2Left = -920
            let block2Top = 660

            block2.style.width = block2Width + 'px'
            block2.style.height = block2Height + 'px'
            block2.style.marginLeft = block2Left + 'px'
            block2.style.marginTop = block2Top + 'px'
            block2.style.zIndex = "8";
            block2.style.backgroundColor = "lightgray";


            let block3Width = 220
            let block3Height = 450
            let block3Left = -500
            let block3Top = 650

            block3.style.width = block3Width + 'px'
            block3.style.height = block3Height + 'px'
            block3.style.marginLeft = block3Left + 'px'
            block3.style.zIndex = "9";
            block3.style.marginTop = block3Top + 'px'
            block3.style.backgroundColor = "red";

            let block4Width = 300
            let block4Height = 550
            let block4Top = 660
            let block4Left = 0

            block4.style.width = block4Width + 'px'
            block4.style.height = block4Height + 'px'
            block4.style.marginTop = block4Top + 'px'
            block4.style.marginLeft = block4Left + 'px'
            block4.style.zIndex = "10";
            block4.style.backgroundColor = "green";

            let block5Width = 220
            let block5Height = 450
            let block5Top = 650
            let block5Left = 501

            block5.style.width = block5Width + 'px'
            block5.style.height = block5Height + 'px'
            block5.style.marginTop = block5Top + 'px'
            block5.style.marginLeft = block5Left + 'px'
            block5.style.zIndex = "9";
            block5.style.backgroundColor = "yellow";

            slidePosition = 4;


            break;

        case 3:

            FirstChangePrev()
            break;

        case 2:
            SecondChangePrev()
            break;

        case 1:
            ThirdChangePrev()
            break;

        case 0:
            FourthChangePrev()
            break;
    }
}

function updateSlidePositionNext() {

    switch (slidePosition) {

        case 0:

            let block1Width = 220
            let block1Height = 450
            let block1Left = -500
            let block1Top = 650

            block1.style.width = block1Width + 'px'
            block1.style.height = block1Height + 'px'
            block1.style.marginTop = block1Top + 'px'
            block1.style.marginLeft = block1Left + 'px'
            block1.style.zIndex = "9";
            block1.style.backgroundColor = "gray";

            let block2Width = 300
            let block2Height = 550
            let block2Left = 0
            let block2Top = 660

            block2.style.width = block2Width + 'px'
            block2.style.height = block2Height + 'px'
            block2.style.marginLeft = block2Left + 'px'
            block2.style.marginTop = block2Top + 'px'
            block2.style.zIndex = "10";
            block2.style.backgroundColor = "lightgray";


            let block3Width = 220
            let block3Height = 450
            let block3Left = 501
            let block3Top = 650

            block3.style.width = block3Width + 'px'
            block3.style.height = block3Height + 'px'
            block3.style.marginLeft = block3Left + 'px'
            block3.style.zIndex = "9";
            block3.style.marginTop = block3Top + 'px'
            block3.style.backgroundColor = "red";


            let block4Width = 220
            let block4Height = 350
            let block4Top = 660
            let block4Left = 922

            block4.style.width = block4Width + 'px'
            block4.style.height = block4Height + 'px'
            block4.style.marginTop = block4Top + 'px'
            block4.style.marginLeft = block4Left + 'px'
            block4.style.zIndex = "8";
            block4.style.backgroundColor = "green";

            let block5Width = 220
            let block5Height = 350
            let block5Top = 660
            let block5Left = -920


            block5.style.width = block5Width + 'px'
            block5.style.height = block5Height + 'px'
            block5.style.marginTop = block5Top + 'px'
            block5.style.marginLeft = block5Left + 'px'
            block5.style.zIndex = "8";
            block5.style.backgroundColor = "yellow";

            slidePosition++;
            break;

        case 1:

            FirstChange()
            break;

        case 2:

            SecondChange()
            break;

        case  3:
            ThirdChange()
            break;

        case 4:

            FourthChange()
            break;

    }

}

function FirstChange() {

    let block1Width = 300
    let block1Height = 550
    let block1Left = 0
    let block1Top = 660

    block1.style.width = block1Width + 'px'
    block1.style.height = block1Height + 'px'
    block1.style.marginTop = block1Top + 'px'
    block1.style.marginLeft = block1Left + 'px'
    block1.style.zIndex = "10";
    block1.style.backgroundColor = "gray";


    let block2Width = 220
    let block2Height = 450
    let block2Left = 501
    let block2Top = 605

    block2.style.width = block2Width + 'px'
    block2.style.height = block2Height + 'px'
    block2.style.marginLeft = block2Left + 'px'
    block2.style.marginTop = block2Top + 'px'
    block2.style.zIndex = "9";
    block2.style.backgroundColor = "lightgray";


    let block3Width = 220
    let block3Height = 350
    let block3Left = 922
    let block3Top = 660

    block3.style.width = block3Width + 'px'
    block3.style.height = block3Height + 'px'
    block3.style.marginLeft = block3Left + 'px'
    block3.style.zIndex = "8";
    block3.style.marginTop = block3Top + 'px'
    block3.style.backgroundColor = "red";


    let block4Width = 220
    let block4Height = 350
    let block4Top = 660
    let block4Left = -920

    block4.style.width = block4Width + 'px'
    block4.style.height = block4Height + 'px'
    block4.style.marginTop = block4Top + 'px'
    block4.style.marginLeft = block4Left + 'px'
    block4.style.zIndex = "8";
    block4.style.backgroundColor = "green";


    let block5Width = 220
    let block5Height = 450
    let block5Top = 650
    let block5Left = -500

    block5.style.width = block5Width + 'px'
    block5.style.height = block5Height + 'px'
    block5.style.marginTop = block5Top + 'px'
    block5.style.marginLeft = block5Left + 'px'
    block5.style.zIndex = "9";
    block5.style.backgroundColor = "yellow";


    slidePosition++;

}

function SecondChange() {

    let block1Width = 220
    let block1Height = 450
    let block1Left = 501
    let block1Top = 650

    block1.style.width = block1Width + 'px'
    block1.style.height = block1Height + 'px'
    block1.style.marginTop = block1Top + 'px'
    block1.style.marginLeft = block1Left + 'px'
    block1.style.zIndex = "9";
    block1.style.backgroundColor = "gray";

    let block2Width = 220
    let block2Height = 350
    let block2Left = 922
    let block2Top = 660

    block2.style.width = block2Width + 'px'
    block2.style.height = block2Height + 'px'
    block2.style.marginLeft = block2Left + 'px'
    block2.style.marginTop = block2Top + 'px'
    block2.style.zIndex = "8";
    block2.style.backgroundColor = "lightgray";


    let block3Width = 220
    let block3Height = 350
    let block3Left = -920
    let block3Top = 660

    block3.style.width = block3Width + 'px'
    block3.style.height = block3Height + 'px'
    block3.style.marginLeft = block3Left + 'px'
    block3.style.zIndex = "8";
    block3.style.marginTop = block3Top + 'px'
    block3.style.backgroundColor = "red";


    let block4Width = 220
    let block4Height = 450
    let block4Top = 650
    let block4Left = -500

    block4.style.width = block4Width + 'px'
    block4.style.height = block4Height + 'px'
    block4.style.marginTop = block4Top + 'px'
    block4.style.marginLeft = block4Left + 'px'
    block4.style.zIndex = "9";
    block4.style.backgroundColor = "green";


    let block5Width = 300
    let block5Height = 550
    let block5Top = 660
    let block5Left = 0

    block5.style.width = block5Width + 'px'
    block5.style.height = block5Height + 'px'
    block5.style.marginTop = block5Top + 'px'
    block5.style.marginLeft = block5Left + 'px'
    block5.style.zIndex = "10";
    block5.style.backgroundColor = "yellow";

    slidePosition++;

}

function ThirdChange() {

    let block1Width = 220
    let block1Height = 350
    let block1Left = 922
    let block1Top = 660

    block1.style.width = block1Width + 'px'
    block1.style.height = block1Height + 'px'
    block1.style.marginTop = block1Top + 'px'
    block1.style.marginLeft = block1Left + 'px'
    block1.style.zIndex = "8";
    block1.style.backgroundColor = "gray";


    let block2Width = 220
    let block2Height = 350
    let block2Left = -920
    let block2Top = 660

    block2.style.width = block2Width + 'px'
    block2.style.height = block2Height + 'px'
    block2.style.marginLeft = block2Left + 'px'
    block2.style.marginTop = block2Top + 'px'
    block2.style.zIndex = "8";
    block2.style.backgroundColor = "lightgray";


    let block3Width = 220
    let block3Height = 450
    let block3Left = -500
    let block3Top = 650

    block3.style.width = block3Width + 'px'
    block3.style.height = block3Height + 'px'
    block3.style.marginLeft = block3Left + 'px'
    block3.style.zIndex = "9";
    block3.style.marginTop = block3Top + 'px'
    block3.style.backgroundColor = "red";

    let block4Width = 300
    let block4Height = 550
    let block4Top = 660
    let block4Left = 0

    block4.style.width = block4Width + 'px'
    block4.style.height = block4Height + 'px'
    block4.style.marginTop = block4Top + 'px'
    block4.style.marginLeft = block4Left + 'px'
    block4.style.zIndex = "10";
    block4.style.backgroundColor = "green";

    let block5Width = 220
    let block5Height = 450
    let block5Top = 650
    let block5Left = 501

    block5.style.width = block5Width + 'px'
    block5.style.height = block5Height + 'px'
    block5.style.marginTop = block5Top + 'px'
    block5.style.marginLeft = block5Left + 'px'
    block5.style.zIndex = "9";
    block5.style.backgroundColor = "yellow";

    slidePosition++;
}

function FourthChange() {

    let block1Width = 220
    let block1Height = 350
    let block1Left = -920
    let block1Top = 660

    block1.style.width = block1Width + 'px'
    block1.style.height = block1Height + 'px'
    block1.style.marginTop = block1Top + 'px'
    block1.style.marginLeft = block1Left + 'px'
    block1.style.zIndex = "8";
    block1.style.backgroundColor = "gray";

    let block2Width = 220
    let block2Height = 450
    let block2Left = -500
    let block2Top = 650

    block2.style.width = block2Width + 'px'
    block2.style.height = block2Height + 'px'
    block2.style.marginLeft = block2Left + 'px'
    block2.style.marginTop = block2Top + 'px'
    block2.style.zIndex = "9";
    block2.style.backgroundColor = "lightgray";

    let block3Width = 300
    let block3Height = 550
    let block3Left = 0
    let block3Top = 660

    block3.style.width = block3Width + 'px'
    block3.style.height = block3Height + 'px'
    block3.style.marginLeft = block3Left + 'px'
    block3.style.zIndex = "10";
    block3.style.marginTop = block3Top + 'px'
    block3.style.backgroundColor = "red";


    let block4Width = 220
    let block4Height = 450
    let block4Top = 650
    let block4Left = 501

    block4.style.width = block4Width + 'px'
    block4.style.height = block4Height + 'px'
    block4.style.marginTop = block4Top + 'px'
    block4.style.marginLeft = block4Left + 'px'
    block4.style.zIndex = "9";
    block4.style.backgroundColor = "green";


    let block5Width = 220
    let block5Height = 350
    let block5Top = 660
    let block5Left = 922

    block5.style.width = block5Width + 'px'
    block5.style.height = block5Height + 'px'
    block5.style.marginTop = block5Top + 'px'
    block5.style.marginLeft = block5Left + 'px'
    block5.style.zIndex = "8";
    block5.style.backgroundColor = "yellow";

    slidePosition = 0;

}

function FirstChangePrev () {
    let block1Width = 220
    let block1Height = 450
    let block1Left = 501
    let block1Top = 650

    block1.style.width = block1Width + 'px'
    block1.style.height = block1Height + 'px'
    block1.style.marginTop = block1Top + 'px'
    block1.style.marginLeft = block1Left + 'px'
    block1.style.zIndex = "9";
    block1.style.backgroundColor = "gray";

    let block2Width = 220
    let block2Height = 350
    let block2Left = 922
    let block2Top = 660

    block2.style.width = block2Width + 'px'
    block2.style.height = block2Height + 'px'
    block2.style.marginLeft = block2Left + 'px'
    block2.style.marginTop = block2Top + 'px'
    block2.style.zIndex = "8";
    block2.style.backgroundColor = "lightgray";


    let block3Width = 220
    let block3Height = 350
    let block3Left = -920
    let block3Top = 660

    block3.style.width = block3Width + 'px'
    block3.style.height = block3Height + 'px'
    block3.style.marginLeft = block3Left + 'px'
    block3.style.zIndex = "8";
    block3.style.marginTop = block3Top + 'px'
    block3.style.backgroundColor = "red";


    let block4Width = 220
    let block4Height = 450
    let block4Top = 650
    let block4Left = -500

    block4.style.width = block4Width + 'px'
    block4.style.height = block4Height + 'px'
    block4.style.marginTop = block4Top + 'px'
    block4.style.marginLeft = block4Left + 'px'
    block4.style.zIndex = "9";
    block4.style.backgroundColor = "green";


    let block5Width = 300
    let block5Height = 550
    let block5Top = 660
    let block5Left = 0

    block5.style.width = block5Width + 'px'
    block5.style.height = block5Height + 'px'
    block5.style.marginTop = block5Top + 'px'
    block5.style.marginLeft = block5Left + 'px'
    block5.style.zIndex = "10";
    block5.style.backgroundColor = "yellow";

    slidePosition = 3;

}

function SecondChangePrev() {

    let block1Width = 300
    let block1Height = 550
    let block1Left = 0
    let block1Top = 660

    block1.style.width = block1Width + 'px'
    block1.style.height = block1Height + 'px'
    block1.style.marginTop = block1Top + 'px'
    block1.style.marginLeft = block1Left + 'px'
    block1.style.zIndex = "10";
    block1.style.backgroundColor = "gray";


    let block2Width = 220
    let block2Height = 450
    let block2Left = 501
    let block2Top = 605

    block2.style.width = block2Width + 'px'
    block2.style.height = block2Height + 'px'
    block2.style.marginLeft = block2Left + 'px'
    block2.style.marginTop = block2Top + 'px'
    block2.style.zIndex = "9";
    block2.style.backgroundColor = "lightgray";


    let block3Width = 220
    let block3Height = 350
    let block3Left = 922
    let block3Top = 660

    block3.style.width = block3Width + 'px'
    block3.style.height = block3Height + 'px'
    block3.style.marginLeft = block3Left + 'px'
    block3.style.zIndex = "8";
    block3.style.marginTop = block3Top + 'px'
    block3.style.backgroundColor = "red";


    let block4Width = 220
    let block4Height = 350
    let block4Top = 660
    let block4Left = -920

    block4.style.width = block4Width + 'px'
    block4.style.height = block4Height + 'px'
    block4.style.marginTop = block4Top + 'px'
    block4.style.marginLeft = block4Left + 'px'
    block4.style.zIndex = "8";
    block4.style.backgroundColor = "green";


    let block5Width = 220
    let block5Height = 450
    let block5Top = 650
    let block5Left = -500

    block5.style.width = block5Width + 'px'
    block5.style.height = block5Height + 'px'
    block5.style.marginTop = block5Top + 'px'
    block5.style.marginLeft = block5Left + 'px'
    block5.style.zIndex = "9";
    block5.style.backgroundColor = "yellow";

    slidePosition = 2;
}

function ThirdChangePrev() {
    let block1Width = 220
    let block1Height = 450
    let block1Left = -500
    let block1Top = 650

    block1.style.width = block1Width + 'px'
    block1.style.height = block1Height + 'px'
    block1.style.marginTop = block1Top + 'px'
    block1.style.marginLeft = block1Left + 'px'
    block1.style.zIndex = "9";
    block1.style.backgroundColor = "gray";

    let block2Width = 300
    let block2Height = 550
    let block2Left = 0
    let block2Top = 660

    block2.style.width = block2Width + 'px'
    block2.style.height = block2Height + 'px'
    block2.style.marginLeft = block2Left + 'px'
    block2.style.marginTop = block2Top + 'px'
    block2.style.zIndex = "10";
    block2.style.backgroundColor = "lightgray";


    let block3Width = 220
    let block3Height = 450
    let block3Left = 501
    let block3Top = 650

    block3.style.width = block3Width + 'px'
    block3.style.height = block3Height + 'px'
    block3.style.marginLeft = block3Left + 'px'
    block3.style.zIndex = "9";
    block3.style.marginTop = block3Top + 'px'
    block3.style.backgroundColor = "red";


    let block4Width = 220
    let block4Height = 350
    let block4Top = 660
    let block4Left = 922

    block4.style.width = block4Width + 'px'
    block4.style.height = block4Height + 'px'
    block4.style.marginTop = block4Top + 'px'
    block4.style.marginLeft = block4Left + 'px'
    block4.style.zIndex = "8";
    block4.style.backgroundColor = "green";

    let block5Width = 220
    let block5Height = 350
    let block5Top = 660
    let block5Left = -920


    block5.style.width = block5Width + 'px'
    block5.style.height = block5Height + 'px'
    block5.style.marginTop = block5Top + 'px'
    block5.style.marginLeft = block5Left + 'px'
    block5.style.zIndex = "8";
    block5.style.backgroundColor = "yellow";

    slidePosition = 1;
}

function FourthChangePrev() {

    let block1Width = 220
    let block1Height = 350
    let block1Left = -920
    let block1Top = 660

    block1.style.width = block1Width + 'px'
    block1.style.height = block1Height + 'px'
    block1.style.marginTop = block1Top + 'px'
    block1.style.marginLeft = block1Left + 'px'
    block1.style.zIndex = "8";
    block1.style.backgroundColor = "gray";

    let block2Width = 220
    let block2Height = 450
    let block2Left = -500
    let block2Top = 650

    block2.style.width = block2Width + 'px'
    block2.style.height = block2Height + 'px'
    block2.style.marginLeft = block2Left + 'px'
    block2.style.marginTop = block2Top + 'px'
    block2.style.zIndex = "9";
    block2.style.backgroundColor = "lightgray";

    let block3Width = 300
    let block3Height = 550
    let block3Left = 0
    let block3Top = 660

    block3.style.width = block3Width + 'px'
    block3.style.height = block3Height + 'px'
    block3.style.marginLeft = block3Left + 'px'
    block3.style.zIndex = "10";
    block3.style.marginTop = block3Top + 'px'
    block3.style.backgroundColor = "red";


    let block4Width = 220
    let block4Height = 450
    let block4Top = 650
    let block4Left = 501

    block4.style.width = block4Width + 'px'
    block4.style.height = block4Height + 'px'
    block4.style.marginTop = block4Top + 'px'
    block4.style.marginLeft = block4Left + 'px'
    block4.style.zIndex = "9";
    block4.style.backgroundColor = "green";


    let block5Width = 220
    let block5Height = 350
    let block5Top = 660
    let block5Left = 922

    block5.style.width = block5Width + 'px'
    block5.style.height = block5Height + 'px'
    block5.style.marginTop = block5Top + 'px'
    block5.style.marginLeft = block5Left + 'px'
    block5.style.zIndex = "8";
    block5.style.backgroundColor = "yellow";

    slidePosition = 0;
}