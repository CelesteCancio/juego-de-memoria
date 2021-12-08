const tablero = document.querySelector("#tablero");
const fichas = tablero.querySelectorAll(".ficha");
const numeroRonda = document.querySelector(".numero-ronda");
const finDelJuego = document.querySelector(".finDelJuego");

let turnos = 0;
const sonidoClickFichaMostrar = new Audio ("./sonidos/button-click-sound-effect.mp3");
//const sonidoClickFichaOcultar = new Audio ("./sonidos/boing-sound-effect.mp3");
const sonidoFinDelJuego = new Audio (".sonidos/Ending-sound-effect.mp3");
const sonidoAcierto = new Audio ("./sonidos/success-sound-effect.mp3");
let primeraFicha = null;


configurarJuego();

function configurarJuego (){
    console.log(`en conf juego`);
    const imagenesFichas = ["hogwarts","gryffindor","hufflepuff","ravenclaw","slytherin","sorting","snitch","anden"];
    imagenesFichasRepetidos = imagenesFichas.concat(imagenesFichas);
    configurarCuadros(fichas,imagenesFichasRepetidos);
    manejarEventos();    
}

function configurarCuadros (fichas,imagenesFichasRepetidos){
    console.log(`en conf cuadros`);
    const imagenesFichasMezcladas = imagenesFichasRepetidos.sort(function(){
        return 0.5 - Math.random();
    });
    console.log(imagenesFichasMezcladas);

    imagenesFichasMezcladas.forEach(function(imagen,i){
        console.log(fichas[i]);
        fichas[i].classList.add(imagen);
    });
}

function manejarEventos(){
    tablero.onclick = function (e){
        const fichaClickeada = e.target;
        if (fichaClickeada.classList.contains("ficha")){
            manejarClickFicha(fichaClickeada);
        }
    };
}

function manejarClickFicha (fichaClickeada){
    mostrarFicha (fichaClickeada);

    if (primeraFicha === null){
        primeraFicha = fichaClickeada;
    }
    else {
        if (fichaClickeada === primeraFicha){
            return;
        }
        if (fichasSonIguales (fichaClickeada,primeraFicha)) {
            sonidoAcierto.play();
            eliminarFicha(fichaClickeada);
            eliminarFicha(primeraFicha);
        }
        else{
            ocultarFicha(fichaClickeada);
            ocultarFicha(primeraFicha);
        }

        turnos++;
        numeroRonda.textContent = turnos;
        primeraFicha = null;
    }
}


function mostrarFicha (fichaClickeada){    
    fichaClickeada.style.opacity = 1;    
    sonidoClickFichaMostrar.play();
}

function ocultarFicha (fichaAOcultar){
    setTimeout (function (){
        fichaAOcultar.style.opacity = 0;
        //sonidoClickFichaOcultar.play();
    },500);    
}

function fichasSonIguales (fichaClickeada,primeraFicha){
    return fichaClickeada.className === primeraFicha.className;    
}

function eliminarFicha (fichaAEliminar){
    setTimeout (function (){
        fichaAEliminar.parentElement.classList.add("adivinado");
        fichaAEliminar.remove();
        evaluarFinDeJuego();
    },500);
}

function evaluarFinDeJuego (){
    
    console.log(`en evaluarFinDeJuego, tablero.querySelectorAll(".ficha").length = ${tablero.querySelectorAll(".ficha").length}`);

    if (tablero.querySelectorAll(".ficha").length === 0){
        tablero.style.display = "none";
        finDelJuego.style.display = "block";
        sonidoFinDelJuego.play();
    }
}

// crono();


// function crono(){
//     console.log(`en crono`)
//     let contador_segundos = 0;
//     let contador_minutos = 0;
//     let contador_horas = 0;
//     const segundos = document.querySelector("#segundos");
//     const minutos = document.querySelector("#minutos");
//     const horas = document.querySelector("#horas");

//     // window.setInterval(function(){
//     //     console.log(`en window set interval`)
//     //     if(contador_segundos===60){
//     //         contador_segundos=0;
//     //         contador_minutos++;
//     //         if(contador_minutos===60){
//     //             contador_minutos=0;
//     //             contador_horas++;
//     //         }

//     //         segundos.innerHTML = contador_segundos;
//     //         minutos.innerHTML = contador_minutos;
//     //         horas.innerHTML = contador_horas;
//     //     }
//     // },1000);
// }

