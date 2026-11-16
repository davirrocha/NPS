
let selectedScore = null;

const rating = document.getElementById("rating");
const form = document.getElementById("npsForm");
const header = document.getElementById("header");
const success = document.getElementById("success");
const btnStart = document.getElementById("btnStart");
const startButton = document.getElementById("startButton");

// GERA AS NOTAS DE 0 A 10

for (let i = 0; i <= 10; i++) {

    const button = document.createElement("button");

    button.type = "button";
    button.textContent = i;

    button.addEventListener("click", () => {

        selectedScore = i;

        document.querySelectorAll(".rating button")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

    });

    rating.appendChild(button);
}

// ENVIO DO FORMULÁRIO

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Verifica se uma nota foi selecionada

    if (selectedScore === null) {
        alert("Selecione uma nota de 0 a 10.");
        return;
    }

    const reason = document.getElementById("reason").value;
    const comment = document.getElementById("comment").value;

    // Verifica o motivo da avaliação

    if (!reason) {
        alert("Selecione o motivo da sua avaliação.");
        return;
    }

    // CLASSIFICAÇÃO NPS

    let classification;

    if (selectedScore <= 6) {
        classification = "Detrator";

    } else if (selectedScore <= 8) {
        classification = "Neutro";

    } else {
        classification = "Promotor";
    }

    // ARMAZENA A RESPOSTA

    const response = {

        nota: selectedScore,
        classificacao: classification,
        motivo: reason,
        comentario: comment,
        data: new Date().toISOString()

    };

    console.log("Resposta NPS:", response);

    // ALTERA A TELA APÓS O ENVIO

    form.style.display = "none";

    header.style.display = "none";

    success.style.display = "block";

    btnStart.style.display = "flex";

});

// BOTÃO VOLTAR AO INÍCIO

startButton.addEventListener("click", function () {

    window.location.href = "./index.html";

});
