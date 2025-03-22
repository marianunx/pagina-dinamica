// Variáveis globais
let contador = 0;

// Seleção de elementos do DOM
const contadorElemento = document.getElementById("contador");
const contadorCaracteres = document.getElementById("contadorCaracteres");
const mensagens = document.getElementById("mensagens");
const listas = document.getElementById("listas");
const campoTexto = document.getElementById("campoTexto");

// Função para atualizar o contador de cliques
function atualizarContador(valor) {
    contador += valor;
    if (contador < 0) {
        contador = 0;
        alert("O contador já está em zero!");
    }
    contadorElemento.innerText = contador;
}

// Função para atualizar o contador de caracteres (sem espaços)
function atualizarContadorCaracteres() {
    let textoSemEspacos = campoTexto.value.replace(/\s+/g, "");
    contadorCaracteres.innerText = textoSemEspacos.length;
}

// Função para adicionar um novo parágrafo com texto digitado
function adicionarTexto(event) {
    if (event.key === "Enter" && campoTexto.value.trim() !== "") {
        let novoParagrafo = document.createElement("p");
        novoParagrafo.innerText = campoTexto.value;
        mensagens.appendChild(novoParagrafo);
        campoTexto.value = "";
        contadorCaracteres.innerText = "0";
    }
}

// Função para adicionar um item a uma lista (ordenada ou não ordenada)
function adicionarItemLista() {
    let tipo = document.getElementById("tipoLista").value; // 'ul' ou 'ol'
    let textoItem = prompt("Digite o texto do item:");

    if (textoItem) {
        let listaExistente = listas.querySelector(tipo);
        
        if (!listaExistente) {
            listaExistente = document.createElement(tipo);
            listas.appendChild(listaExistente);
        }

        let novoItem = document.createElement("li");
        novoItem.innerText = textoItem;
        listaExistente.appendChild(novoItem);
    }
}

// Função para resetar tudo
function resetarTudo() {
    contador = 0;
    contadorElemento.innerText = contador;
    mensagens.innerHTML = "";
    listas.innerHTML = "";
    campoTexto.value = "";
    contadorCaracteres.innerText = "0";
}

// Eventos
document.getElementById("btnIncrementar").addEventListener("click", () => atualizarContador(1));
document.getElementById("btnDecrementar").addEventListener("click", () => atualizarContador(-1));
campoTexto.addEventListener("input", atualizarContadorCaracteres);
campoTexto.addEventListener("keypress", adicionarTexto);
document.getElementById("btnAdicionarItem").addEventListener("click", adicionarItemLista);
document.getElementById("btnResetar").addEventListener("click", resetarTudo);
