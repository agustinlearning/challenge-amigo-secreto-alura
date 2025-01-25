// // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.querySelector("#amigo"); 
    const nombre = input.value.trim(); 

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; 
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    input.value = "";

    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    const lista = document.querySelector("#listaAmigos"); 

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el array de amigos y agregar elementos <li> : tube que estudari esto aparte :(
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
        return; 
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.querySelector("#resultado"); 
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSecreto}</strong>`;
}