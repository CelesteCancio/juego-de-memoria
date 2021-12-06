const tablero = document.querySelector("#tablero");
const fichas = tablero.querySelectorAll(".ficha");

let fichasJugadorMano = [];
let fichasJugadorAcumuladas = [];


configurarJuego();

function configurarJuego (){
    console.log(`en conf juego`);
    const imagenesFichas = ["hogwarts","gryffindor","hufflepuff","ravenclaw","slytherin","sorting","snitch","anden"];
    imagenesFichasRepetidos = imagenesFichas.concat(imagenesFichas);
    configurarCuadros(fichas,imagenesFichasRepetidos);
    
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


// crono();

// tablero.onclick = mostrar;
// console.log(`en main ${fichasJugadorMano.length}`);

// jugar();






function jugar (){

    
        

    
        
    console.log(`en jugar`);
    console.log(fichasJugadorMano);
    // if (fichasJugadorMano[0].innerText != fichasJugadorMano[1].innerText){
    //     ocultar (fichasJugadorMano);
    // }
    // else{
    //     fichasJugadorAcumuladas = [...fichasJugadorMano];        
    //     if (fichasJugadorAcumuladas.length === fichasJugadorMano){
    //         ganar();
    //     }
    //     else{
    //         jugar();
    //     }        
    // }
    // console.log(fichasJugadorMano);
    
}

//mostrar();

function mostrar (e){
    console.log(`en function mostrar`);
    // for (let i=0; i<fichas.length; i++){        
        
    //         fichas[i].onclick = function (e){
    //             //console.log(fichas[i]);
                
                
    //                 console.log(`en function e`);
    //                 fichas[i].style.opacity = 1;   
    //                 console.log(fichas[i]);
    //                 console.log(e.target);                      
    //                 fichasJugadorMano.push(e.target);
    //                 console.log(`en function e`);
    //                 console.log(fichasJugadorMano);
                                
    //                 // console.log(`en el else`);
    //                 // fichas[i].style.cursor = "default";
    //                 // return;
                                
    //         }
    //     }        
    


        if(fichasJugadorMano.length<2){
            const fichaClickeada = e.target;
            fichaClickeada.style.opacity = 1;
            fichasJugadorMano.push(fichaClickeada);
            
            console.log(`en if mostrar ${fichasJugadorMano.length}`);
            console.log(fichasJugadorMano);
        }
                    
            console.log(`en else`);
            jugar();
        
        

        

           
        
        // fichas[i].onmouseover = function (){
        //     fichas[i].style.cursor = "pointer";
        // };        
    
    
}

function ocultar (fichasJugadorMano){
    setTimeout(function(){
        fichasJugadorMano[0].style.opacity = 0;
        fichasJugadorMano[1].style.opacity = 0;
    },2000);
}

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

