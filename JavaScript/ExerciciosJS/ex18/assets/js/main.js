
function contar(){
    let num = Number(document.querySelector('#fcN').value);
    let res = document.querySelector('#res');
    let fat = 1;
    res.innerHTML = `<h3>Calculando ${num}...</h3>`;
    for (let i = num; i > 1; i--) {
        res.innerHTML += ` ${i} x `;
        fat *= i;
    }
    res.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
}


