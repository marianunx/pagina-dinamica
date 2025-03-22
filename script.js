// Seleção dos elementos do HTML
let contador = 0;
const contadorElemento = document.getElementById("contador");
const btnIncrementar = document.getElementById("btnIncrementar");
const btnDecrementar = document.getElementById("btnDecrementar");
const campoTexto = document.getElementById("campoTexto");
const contadorCaracteres = document.getElementById("contadorCaracteres");
const mensagens = document.getElementById("mensagens");

// Função para incrementar o contador
btnIncrementar.addEventListener("click", function () {
    contador++;
    contadorElemento.innerText = contador;
});

// Função para decrementar o contador
btnDecrementar.addEventListener("click", function () {
    if (contador > 0) {
        contador--;
        contadorElemento.innerText = contador;
    } else {
        alert("O contador já está em zero!");
    }
});

// Atualiza o contador de caracteres em tempo real (sem contar espaços)
campoTexto.addEventListener("input", function () {
    let textoDigitado = campoTexto.value;
    let textoSemEspacos = textoDigitado.replace(/\s+/g, ""); // Remove TODOS os espaços (inclui múltiplos espaços seguidos)
    contadorCaracteres.innerText = textoSemEspacos.length; // Atualiza o contador de caracteres
});

// Adicionar texto ao pressionar "Enter"
campoTexto.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && campoTexto.value.trim() !== "") {
        let novoParagrafo = document.createElement("p");
        novoParagrafo.innerText = campoTexto.value;
        mensagens.appendChild(novoParagrafo);
        campoTexto.value = ""; // Limpa o campo de texto
        contadorCaracteres.innerText = "0"; // Zera o contador de caracteres
    }
});
