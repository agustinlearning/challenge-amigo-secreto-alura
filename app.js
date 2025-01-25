// // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// let amigos = [];


// function limpiarCaja () {
//     let valorCaja = document.querySelector('#amigo').value = '';
//     return;
// }

// function agregarAmigo () {
//     if (nombre === "") {
//         alert("Por favor, inserte un nombre.");
//         return; // Detiene la ejecución si el campo está vacío
//     }

//     // Actualizar el array de amigos
//     amigos.push(nombre);
//     input.value = '';
// }
// agregarAmigo();


// function actualizarListaAmigo () {
//     let lista = document.getElementById('listaAmigos');
//     lista.innerHTML = "";

//     amigos.forEach((UnAmigo) => {
//         const li = document.createElement("li");
//         li.textContent = UnAmigo;
//         lista.appendChild(li);
//     });
// }

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.querySelector("#amigo"); // Cambia el selector si el ID es diferente
    const nombre = input.value.trim(); // .trim() elimina espacios innecesarios

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detiene la ejecución si el campo está vacío
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista en la interfaz
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.querySelector("#listaAmigos"); // Cambia el selector si el ID es diferente

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el array de amigos y agregar elementos <li>
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    // Validar que haya amigos en el array
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para realizar el sorteo.");
        return; // Detiene la ejecución si el array está vacío
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la interfaz
    const resultado = document.querySelector(".button-draw"); 
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSecreto}</strong>`;
}