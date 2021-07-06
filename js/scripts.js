let prin;
let sec;
let ter;

let precoPrato;
let precoBebida;
let precoSobremesa;

let nomePrato;
let nomeBebida;
let nomeSobremesa;

let nomeConfirmacao;
let endereco;

function selecionarPrato(prato, nome, valor) {
  const selecionado = document.querySelector(".pratos .selecionado");
  const icone = document.querySelector(".pratos .aparecer");

  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
    icone.classList.remove("aparecer");
  }

  const seletor = document.querySelector("." + prato);
  seletor.classList.add("selecionado");

  const tique = document.querySelector("." + prato + " ion-icon");
  tique.classList.add("aparecer");

  prin = 1;
  precoPrato = valor;
  nomePrato = nome;
  fechar();
}

function selecionarbebida(prato, nome, valor) {
  const selecionado = document.querySelector(".bebida .selecionado");
  const icone = document.querySelector(".bebida .aparecer");

  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
    icone.classList.remove("aparecer");
  }

  const seletor = document.querySelector("." + prato);
  seletor.classList.add("selecionado");

  const tique = document.querySelector("." + prato + " ion-icon");
  tique.classList.add("aparecer");

  sec = 1;
  precoBebida = valor;
  nomeBebida = nome;
  fechar();
}

function selecionarsobremesa(prato, nome, valor) {
  const selecionado = document.querySelector(".sobremesa .selecionado");
  const icone = document.querySelector(".sobremesa .aparecer");

  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
    icone.classList.remove("aparecer");
  }

  const seletor = document.querySelector("." + prato);
  seletor.classList.add("selecionado");

  const tique = document.querySelector("." + prato + " ion-icon");
  tique.classList.add("aparecer");

  ter = 1;
  precoSobremesa = valor;
  nomeSobremesa = nome;
  fechar();
}

function fechar() {
  if (ter !== undefined && sec !== undefined && prin !== undefined) {
    const botao = document.querySelector(".fechar");
    botao.classList.remove("desaparecer");
  }
}

function fecharPedido() {
  nomeConfirmacao = prompt("Insira seu nome: ");
  endereco = prompt("Insira seu endereço: ");

  const nome = document.querySelector(".nome");
  nome.innerHTML = "<strong>Nome: </strong>" + nomeConfirmacao;
  const enderecoConfirmacao = document.querySelector(".endereco");
  enderecoConfirmacao.innerHTML = "<strong>Endereço: </strong>" + endereco;

  const pedido = document.querySelector(".confirmacao");
  pedido.classList.remove("desaparecer");

  const prato = document.querySelector(".escolha-comida span:first-child");
  prato.innerHTML = nomePrato;
  const precoP = document.querySelector(".escolha-comida span:last-child");
  precoP.innerHTML = precoPrato;

  const bebida = document.querySelector(".escolha-bebida span:first-child");
  bebida.innerHTML = nomeBebida;
  const precoB = document.querySelector(".escolha-bebida span:last-child");
  precoB.innerHTML = precoBebida;

  const sobremesa = document.querySelector(
    ".escolha-sobremesa span:first-child"
  );
  sobremesa.innerHTML = nomeSobremesa;
  const precoS = document.querySelector(".escolha-sobremesa span:last-child");
  precoS.innerHTML = precoSobremesa;

  const total = document.querySelector(".escolha-total span:last-child");
  total.innerHTML =
    "R$ " +
    (
      parseFloat(precoPrato) +
      parseFloat(precoBebida) +
      parseFloat(precoSobremesa)
    ).toFixed(2);
}

function confirmarPedido() {
  const valor = (
    parseFloat(precoPrato) +
    parseFloat(precoBebida) +
    parseFloat(precoSobremesa)
  ).toFixed(2);
  let link =
    "Olá, gostaria de fazer o pedido:\n - Prato: " +
    nomePrato +
    "\n - Bebida: " +
    nomeBebida +
    "\n - Sobremesa: " +
    nomeSobremesa +
    "\n Total: R$ " +
    valor +
    "\n \n Nome: " +
    nomeConfirmacao +
    "\n Endereço: " +
    endereco;

  const whatsApp = encodeURIComponent(link);

  window.location = "https://wa.me/552199999999?text=" + whatsApp;
}

function cancelarPedido() {
  const pedido = document.querySelector(".confirmacao");
  pedido.classList.add("desaparecer");
}
