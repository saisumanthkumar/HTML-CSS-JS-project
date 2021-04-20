let choices = ['', '', '', '', '', '', '', '', ''];
var b = 0;

function start(id) {
    if (choices[id - 1] == '') {
        if (b == 0) {
            document.getElementById(id).textContent = 'O';
            choices[id - 1] = 'o'
            b = 1;
        } else {

            document.getElementById(id).textContent = 'X';
            b = 0;
            choices[id - 1] = 'x'
        }
        var text = checkwinner(choices);
        document.getElementById('result').textContent = text
        stopper(text, choices)
    }

}

function checkwinner(a) {
    if ((a[0] == 'o' && a[1] == 'o' && a[2] == 'o') || (a[3] == 'o' && a[4] == 'o' && a[5] == 'o') || (a[6] == 'o' && a[7] == 'o' && a[8] == 'o') || (a[0] == 'o' && a[3] == 'o' && a[6] == 'o') || (a[1] == 'o' && a[4] == 'o' && a[7] == 'o') || (a[2] == 'o' && a[5] == 'o' && a[8] == 'o') || (a[0] == 'o' && a[4] == 'o' && a[8] == 'o') || (a[2] == 'o' && a[4] == 'o' && a[6] == 'o')) {
        return "player 'O' won"
    } else if ((a[0] == 'x' && a[1] == 'x' && a[2] == 'x') || (a[3] == 'x' && a[4] == 'x' && a[5] == 'x') || (a[6] == 'x' && a[7] == 'x' && a[8] == 'x') || (a[0] == 'x' && a[3] == 'x' && a[6] == 'x') || (a[1] == 'x' && a[4] == 'x' && a[7] == 'x') || (a[2] == 'x' && a[5] == 'x' && a[8] == 'x') || (a[0] == 'x' && a[4] == 'x' && a[8] == 'x') || (a[2] == 'x' && a[4] == 'x' && a[6] == 'x')) {
        return "player 'X' won"

    } else if ((a[0] != '') && (a[1] != '') && (a[2] != '') && (a[3] != '') && (a[4] != '') && (a[5] != '') && (a[6] != '') && (a[7] != '') && (a[8] != '')) {
        return "Draw!"
    }
}

function stopper(b, dlis) {
    if ((b == "player 'X' won") || (b == "player 'O' won") || (b == "Draw!")) {
        for (i = 0; i < dlis.length; i++) {
            dlis[i] = ' '
        }
        document.getElementById('retry').style.display = 'block';
    }


}


function reset() {
    window.location.reload(true);
}