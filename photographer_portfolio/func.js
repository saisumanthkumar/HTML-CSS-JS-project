var b = 0

function menu() {
    if (b == 0) {
        document.getElementById('menu').style.display = 'block';
        document.getElementById('profileID').style.display = 'none';
        document.getElementById('how').style.display = 'none';
        document.getElementById('notattached').style.display = 'none';
        b = 1;
    } else {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('notattached').style.display = 'block';


        b = 0
    }
}

function home() {
    document.getElementById('profileID').style.display = 'none';
    document.getElementById('how').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('notattached').style.display = 'none';



}

function abtme() {
    document.getElementById('profileID').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('notattached').style.display = 'none';


}

function any() {
    document.getElementById('notattached').style.display = 'block';
    document.getElementById('profileID').style.display = 'none';
    document.getElementById('how').style.display = 'none';
    document.getElementById('menu').style.display = 'none';
}