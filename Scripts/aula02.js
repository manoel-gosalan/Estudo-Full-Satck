// Busca no HTML o botão que possui o id="btnSomar"
const btn = document.getElementById("btnSomar");

// Adiciona um "ouvinte de evento" ao botão
// Ou seja: quando o botão for clicado, a função será executada
btn.addEventListener("click", () => {

    // Busca o valor digitado no input com id=""
    // O.value SEMPRE retorna uma string, mesmo sendo um input do tipo number
    const n1 = Number(document.getElementById("n1").value);


    const n2 = Number(document.getElementById("n2").value);

    // Realiza a soma agora que os valores são números
    const soma = n1 + n2;

    // Busca o parágrafo onde o resultado será exibido
    const resultado = document.getElementById("resultado");

    // Insere o texto dentro do elemento HTML

    resultado.textContent = "A soma é: " + soma;
});
