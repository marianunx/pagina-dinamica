let contador = 0;

const contadorElemento = document.getElementById("contador");
function atualizarContador(valor) {
    contador += valor;
    if (contador < 0) {
        contador = 0;
        alert("Contador zerado");
    }
    contadorElemento.innerText = contador;
}
const btnIncrementar = document.getElementById("btnIncrementar");
const btnDecrementar = document.getElementById("btnDecrementar");

const contadorCaracteres = document.getElementById("contadorCaracteres");
const campoTexto = document.getElementById("campoTexto");
function atualizarContadorCaracteres() {
    let textoSemEspacos = campoTexto.value.replace(/\s+/g, "");
    contadorCaracteres.innerText = textoSemEspacos.length;
}

const mensagens = document.getElementById("mensagens");
function adicionarTexto(event) {
    if (event.key === "Enter" && campoTexto.value.trim() !== "") {
        let novoParagrafo = document.createElement("p");
        novoParagrafo.innerText = campoTexto.value;
        mensagens.appendChild(novoParagrafo);
        campoTexto.value = "";
        contadorCaracteres.innerText = "0";
    }
}

const listas = document.getElementById("listas");
const campoLista = document.getElementById("campoLista");
const tipoLista = document.getElementById("tipoLista");
function adicionarItemLista() {
    let textoItem = campoLista.value.trim();
    let tipo = tipoLista.value; 

    if (textoItem !== "") {
        let listaExistente = listas.querySelector(tipo);
        
        if (!listaExistente) {
            listaExistente = document.createElement(tipo);
            listas.appendChild(listaExistente);
        }

        let novoItem = document.createElement("li");
        novoItem.innerText = textoItem;
        listaExistente.appendChild(novoItem);
        campoLista.value = "";
    } else {
        alert("Adcione um elemento a lista:");
    }
}
const btnAdicionarItem = document.getElementById("btnAdicionarItem");

function resetarTudo() {
    contador = 0;
    contadorElemento.innerText = contador;
    mensagens.innerHTML = "";
    listas.innerHTML = "";
    campoTexto.value = "";
    campoLista.value = "";
    contadorCaracteres.innerText = "0";
}
const btnResetar = document.getElementById("btnResetar");

btnIncrementar.addEventListener("click", () => atualizarContador(1));
btnDecrementar.addEventListener("click", () => atualizarContador(-1));
campoTexto.addEventListener("input", atualizarContadorCaracteres);
campoTexto.addEventListener("keypress", adicionarTexto);
btnAdicionarItem.addEventListener("click", adicionarItemLista);
btnResetar.addEventListener("click", resetarTudo);
