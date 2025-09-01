// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    const input = document.getElementById("amigo")
    const nombre = input.value.trim()

    if (nombre === "") {
        alert("Por favor, inserte un nombre.")
        return;
    }

    amigos.push(nombre);
    input.value = "";
}

function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigos() {
    const resultados = document.getElementById("resultados");
    resultados.innerHTML = "";

    if (amigos.length === 0) {
        resultados.innerHTML = "<li>No hay amigos para sortear.</li>";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];

    resultados.innerHTML = `<li>El amigo sorteado es: <strong>${nombreSorteado}</strong></li>`;
}