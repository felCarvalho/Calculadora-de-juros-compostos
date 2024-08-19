const limparMensagem = document.querySelector(".mensagem-error");
const apagarInputDados = document.querySelector(".reset");

apagarInputDados.addEventListener("click", function () {
  document.querySelector(".valor-inicial").value = "";
  document.querySelector(".juros").value = "";
  document.querySelector(".periodo-juros").value = "";
  document.querySelector(".tempo-total-investimento").value = "";
  document.querySelector(".mensagem-error").textContent = "";
});

document.querySelector(".enviar").addEventListener("click", function (e) {
  e.preventDefault();
  const valorInicial = document.querySelector(".valor-inicial").value;
  const juros = document.querySelector(".juros").value;
  const periodoJuros = document.querySelector(".periodo-juros").value;
  const tempoTotalInvestimento = document.querySelector(
    ".tempo-total-investimento"
  ).value;

  if (
    valorInicial <= 0 ||
    juros <= 0 ||
    periodoJuros <= 0 ||
    tempoTotalInvestimento <= 0
  ) {
    alert("Pfvr, prencha todos os campos!");
    return;
  } else {
    const taxaDecimal = juros / 100;

    const montante =
      valorInicial *
      Math.pow(
        1 + taxaDecimal.toFixed(18) / periodoJuros,
        periodoJuros * tempoTotalInvestimento
      );

    if (!isFinite(montante)) {
      alert("Calculo grande demais, verifique os valores inseridos!!");
      return;
    }

    alert(
      `Seu montante investido e com os juros aplicado está no valor de ${montante.toFixed(
        2
      )}`
    );
  }
});

const apagarOne = document.getElementById("apagar-um");
const apagarDois = document.getElementById("apagar-dois");
const apagarTres = document.getElementById("apagar-tres");
const apagarQuatro = document.getElementById("apagar-quatro");

apagarOne.addEventListener("click", function () {
  document.querySelector(".valor-inicial").value = "";
});
apagarDois.addEventListener("click", function () {
  document.querySelector(".juros").value = "";
});
apagarTres.addEventListener("click", function () {
  document.querySelector(".periodo-juros").value = "";
});
apagarQuatro.addEventListener("click", function () {
  document.querySelector(".tempo-total-investimento").value = "";
});
