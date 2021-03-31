function selecionarPrato1(){
    const selecionado = document.querySelector(".prato");
    const icone = document.querySelector(".preco ion-icon");
    selecionado.classList.toggle('selecionado');
    icone.classList.toggle('desaparecer');

}
function selecionarPrato2(){
    const selecionado = document.querySelector(".prato:nth-child(2)");
    const icone = document.querySelector(".preco ion-icon");
    selecionado.classList.toggle('selecionado');
    icone.classList.toggle('desaparecer');

}function selecionarPrato3(){
    const selecionado = document.querySelector(".prato:nth-child(3)");
    const icone = document.querySelector(".preco ion-icon");
    selecionado.classList.toggle('selecionado');
    icone.classList.toggle('desaparecer');

}function selecionarPrato4(){
    const selecionado = document.querySelector(".prato:last-child");
    const icone = document.querySelector(".preco ion-icon");
    selecionado.classList.toggle('selecionado');
    icone.classList.toggle('desaparecer');

}

function selecionarbebida(){
    var selectb = 20;
    alert(selectb);
}

function selecionarsobremesa(){
    var selects = 30;
    alert(selects);
}

function Total(){
    let total = valorsobremesa + valorbebida + valorprato;
    return(prato, valorprato, bebida, valorbebida, sobremesa, valorsobremesa, "Total", total);
}