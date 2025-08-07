// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    let nombre = input.value.trim();

    // Validador que no sea vacio
    if (nombre === "") {
        alert("Por favor, ingresa un nombre valido.");
        return;
    }

    // Validador de que no tenga numeros
    if (/\d/.test(nombre)) {
        alert("El nombre no puede tener numeros.");
        return;
    }

    // Validador que tenga minimo 4 letras el nombre
    if (nombre.replace(/\s+/g, "").length < 4) {
        alert("El nombre debe tener al menos 4 letras.");
        return;
    }
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    listaAmigos.push(nombre);
    mostrarLista();
    input.value = "";
}

function mostrarLista() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = "";

    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indice];

    const li = document.createElement('li');
    li.textContent = `Ganador: ${amigoSorteado}`;
    resultado.appendChild(li);
}
