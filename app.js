// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

let seleccionar = document.getElementById('amigo');

function agregarAmigo () {
   if(amigos == "") {
    alert("el campo está vacio, ingresa un valor valido")
   } else {
    agregandoAmigos = amigos.push('#amigo')
   }
}
agregarAmigo();

function limpiarCaja () {
    let valorCaja = document.querySelector('#amigo').value = '';
    return;
}
limpiarCaja();