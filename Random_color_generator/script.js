var list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', ''];

let history = [];
var color = '#';

for (var i = 0; i < 6; i++) {
    var code = Math.floor(Math.random() * 16);
    color += list[code];
}

document.getElementById('presentcolor').textContent = color;
document.body.style.backgroundColor = color;
var his = document.getElementById('his');
var p = document.createElement("p");
var text = document.createTextNode(color)
p.appendChild(text)
p.style.backgroundColor = color;
his.appendChild(p)

function colorget() {
    var color = '#';

    for (var i = 0; i < 6; i++) {
        var code = Math.floor(Math.random() * 16);
        color += list[code];
    }

    document.getElementById('presentcolor').textContent = color;
    document.body.style.backgroundColor = color;
    var his = document.getElementById('his');
    var p = document.createElement("p");
    var text = document.createTextNode(color)
    p.appendChild(text)
    p.style.backgroundColor = color;
    var firstchild = his.firstChild

    his.insertBefore(p, firstchild)

}
