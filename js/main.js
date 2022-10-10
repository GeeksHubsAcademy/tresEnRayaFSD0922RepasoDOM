
// let veces = parseInt(prompt("dime cuantas veces quieres saber que es lunes"));


// for(let i = 0; i < veces; i++){

//     document.write("<h1>hola lunes</h1>");
// }

//VERSION ANTIGUA

//Modalidad sin refactorizar, repitiendo varias veces
//el interruptor.

// const marcarCasilla = (posicion) => {

//     switch(posicion){
//         case '1':
//             if(caja1.innerHTML == ""){
//                 caja1.innerHTML = (interruptor) ? "X" : "O";
//                 interruptor = !interruptor;
//             };
//         break;

//         case '2':
//             if(caja2.innerHTML == ""){
//                 caja2.innerHTML = (interruptor) ? "X" : "O";
//                 interruptor = !interruptor;
//             };
//         break;

//         case '3':
//             if(caja3.innerHTML == ""){
//                 caja3.innerHTML = (interruptor) ? "X" : "O";
//                 interruptor = !interruptor;
//             };
//         break;

//         default:
//             console.log("error");
//     };
// };

// let caja1 = document.getElementById("1");
// let caja2 = document.getElementById("2");
// let caja3 = document.getElementById("3");


/////////////////////////////////////////////
/////////////////////////////////////////////


//Capturamos en un array todos los elementos.
let casillas = Array.from(document.getElementsByClassName("rectangulo"));

//Hemos usado map porque nos permite tratar a cada elemento 
//del array casillas como un objeto (propiedades + metodos);

let interruptor = true;

casillas.map((casilla, /*index*/)=> {
    casilla.addEventListener("click",()=>{
        if(casilla.innerHTML == ""){
            casilla.innerHTML = (interruptor) ? "X" : "O";
            interruptor = !interruptor;

            //Comprobamos en otra funcion si hay un ganador.......

            
        };
    });
});



