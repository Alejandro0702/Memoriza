let accionesArray = {
    1:'KeyW',
    2:'KeyA',
    3:'KeyS',
    4:'KeyD'
};
let temporal = [];
let a, c;
let inicio, limMin, limMax, incr;

function Comenzar(){
    a = 0;
    c = 0;
    incr = 2;
    limMin = incr;
    limMax = 6;
    SimonDice();
}
function SimonDice(){
    inicio = 0;
    console.log("Lim min: " + limMin);
    for (let i = 0; (i < incr); i++) {
        let r = Random(1, 5);
        temporal.push(accionesArray[r]);
    }
    c = 0;
    Acciones();
}
function Acciones(){
    console.log(temporal[c] + "");
    c++;
    if(c<temporal.length){
        setTimeout(Acciones, 1000);
    }
    else{
        document.addEventListener('keypress', Respuesta);
    }
}

function Respuesta(e){
    tecla = e.code;
    if(tecla == temporal[inicio]){
        alert("SI \n" + " tecla presionada: " + tecla + "\n\nSimon dijo esto: " + temporal[inicio]);
        inicio++;

    }else{
        alert("NO \n" + " tecla presionada: " + tecla + "\n\nSimon Dijo esto xd: " + temporal[inicio]);
        inicio++;
    }
    if(inicio == limMin){
        if(limMin < limMax){
            alert("SIGUIENTE FASE");
            console.clear();
            limMin+=2;
            document.removeEventListener('keypress', Respuesta);
            SimonDice();
        }
        else{
            alert("JUEGO TERMINADO");
            document.location.reload(true);
        }
    }
}
function Random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}