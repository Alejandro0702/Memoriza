let accionesArray = {
    1:"ArrowUp",
    2:"ArrowLeft",
    3:"ArrowDown",
    4:"ArrowRight"
};
let temporal = [];
let c, a;

function Comenzar(){
    c = 0;
    a = 0;
    SimonDice();
}
function SimonDice(){
    document.removeEventListener('keydown', this, false);
    for (let i = 0; i < 5; i++) {
        let r = Random(1, 5);
        temporal.push(accionesArray[r]);
    }
    Acciones();
}
function Acciones(){
    console.log(temporal[c] + "");
    c++;
    if(c<4){
        setTimeout(Acciones, 1000);
    }
    else{
        Respuesta();
    }
}
function Random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function Respuesta(){
    document.addEventListener('keydown', (event) => {
        a++;
        const tecla = event.key;
        switch (tecla) {
            case 'ArrowUp':
                alert('keydown event\n\n' + 'key: ' + tecla + a);
                break;
            case 'ArrowRight':
                alert('keydown event\n\n' + 'key: ' + tecla);
                break;
            case 'ArrowDown':
                alert('keydown event\n\n' + 'key: ' + tecla);
                break;
            case 'ArrowLeft':
                alert('keydown event\n\n' + 'key: ' + tecla);
                break;       
            default:
                break;
        }
    });
}
