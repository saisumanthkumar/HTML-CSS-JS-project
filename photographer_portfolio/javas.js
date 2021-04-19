alert('GO TO ABOUT ME  \nNONE OF THE OTHER ARE NOT ADDED YET!')


var a = 1;

function replace() {
    if (a == 0) {
        document.getElementById('abtm').style.transform = 'translateY(-800px)'
        a = 1;
    } else {
        document.getElementById('abtm').style.transform = 'translateY(800px)'
        a = 0;

    }
}


var b = 1;

function svgfunc() {
    var image = document.getElementById('svgfun');
    if (b == 1) {
        image.src = './final.svg';
        b = 0;
    } else {
        image.src = '';
        b = 1;
    }


}