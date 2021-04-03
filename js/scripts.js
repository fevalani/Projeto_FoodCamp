let prin;
let sec;
let ter;

let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;

let nomePrato;
let nomeBebida;
let nomeSobremesa;

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
    nomePrato = nome;
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
    nomeBebida = nome;
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
    nomeSobremesa = nome;
    fechar();
}

function fechar(){
    if (ter !== undefined && sec !== undefined && prin !== undefined){
        const botao = document.querySelector(".fechar");
        botao.classList.remove('desaparecer');
    }
}

function fecharPedido(){
    const pedido = document.querySelector(".confirmacao");
    pedido.classList.remove('desaparecer');

    const prato = document.querySelector(".escolha-comida:firstchild");
    prato.innerHTML = nomePrato;
    const precoP = document.querySelector(".escolha-comida:nthchild(2)");
    precoP.innerHTML = precoPrato;

    const bebida = document.querySelector(".escolha-bebida span:firstchild");
    bebida.innerHTML = nomeBebida;
    const precoB = document.querySelector(".escolha-bebida span:nthchild(2)");
    precoB.innerHTML = precoBebida;

    const sobremesa = document.querySelector(".escolha-sobremesa span:firstchild");
    sobremesa.innerHTML = nomeSobremesa;
    const precoS = document.querySelector(".escolha-sobremesa span:nthchild(2)");
    precoS.innerHTML = precoSobremesa;

}

function cancelarPedido(){
    const pedido = document.querySelector(".confirmacao");
    pedido.classList.add('desaparecer');
}