let veloc = document.querySelector('#velocidade');
let res = document.querySelector('#res');




function permitida(v){
    if (Number(v) <= 80){
        return `<strong id="ok">Pode passar!</strong>`
    } else {
        return `<strong id="multado">Você foi multado!</strong> Diminua sua velociadade`;
    }
}


function clicou() {

    let velocidade = permitida(veloc.value);
    res.innerHTML += `<p>Sua velociade é de ${veloc.value}Km/h.</p>`
    res.innerHTML += `<p>${velocidade}</p>`;
    veloc.value = '';
    veloc.focus();
}


