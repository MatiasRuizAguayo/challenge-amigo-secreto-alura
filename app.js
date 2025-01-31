// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// 1. Declaramos un array para almacenar los amigos.
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
    // Capturamos el valor del campo de texto
    let nombreAmigo = document.getElementById('amigo').value.trim();

    // Validamos que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;  // Si está vacío, no se agrega
    }

    // Añadimos el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Limpiamos el campo de entrada
    document.getElementById('amigo').value = '';

    // Actualizamos la lista de amigos visualmente
    mostrarListaAmigos();
}

// 3. Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
    // Obtenemos el elemento donde se mostrará la lista
    let listaAmigos = document.getElementById('listaAmigos');

    // Limpiamos la lista antes de agregar los nuevos amigos
    listaAmigos.innerHTML = '';

    // Iteramos sobre el array de amigos y agregamos cada uno como <li>
    amigos.forEach(amigo => {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

// 4. Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    // Verificamos que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert('Por favor, añade al menos un amigo antes de sortear.');
        return;
    }

    // Generamos un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Seleccionamos el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostramos el resultado en el HTML
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
}
