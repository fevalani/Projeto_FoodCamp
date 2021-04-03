let prin;
let sec;
let ter;

let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;

function selecionarPrato(prato, nome, valor){
    const selecionado = document.querySelector(".pratos .selecionado");
    const icone = document.querySelector(".pratos .aparecer");

    if (selecionado !== null){
        selecionado.classList.remove('selecionado');
        icone.classList.remove('aparecer');
    }

    const seletor = document.querySelector("." + prato);
    seletor.classList.add('selecionado');

    const tique = document.querySelector("."+ prato +" ion-icon");
    tique.classList.add('aparecer');

    prin = 1;
    precoPrato = valor;
    fechar();
}

function selecionarbebida(prato, nome, valor){
    const selecionado = document.querySelector(".bebida .selecionado");
    const icone = document.querySelector(".bebida .aparecer");

    if (selecionado !== null){
        selecionado.classList.remove('selecionado');
        icone.classList.remove('aparecer');
    }

    const seletor = document.querySelector("." + prato);
    seletor.classList.add('selecionado');

    const tique = document.querySelector("."+ prato +" ion-icon");
    tique.classList.add('aparecer');

    sec = 1;
    precoBebida = valor;
    fechar();
}

function selecionarsobremesa(prato, nome, valor){
    const selecionado = document.querySelector(".sobremesa .selecionado");
    const icone = document.querySelector(".sobremesa .aparecer");

    if (selecionado !== null){
        selecionado.classList.remove('selecionado');
        icone.classList.remove('aparecer');
    }

    const seletor = document.querySelector("." + prato);
    seletor.classList.add('selecionado');

    const tique = document.querySelector("."+ prato +" ion-icon");
    tique.classList.add('aparecer');

    ter = 1;
    precoSobremesa = valor;
    fechar();
}

function fechar(){
    if (ter !== undefined && sec !== undefined && prin !== undefined){
        const botao = document.querySelector(".fechar");
        botao.classList.remove('desaparecer');
    }
}