function selecionarPrato(prato){
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