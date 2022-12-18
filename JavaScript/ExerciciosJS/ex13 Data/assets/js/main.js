

function dataAgora() {
    let now = new Date();
    const res = document.querySelector('section#res');

    res.innerHTML = `<p>O que recebi do sistema foi <mark>${now}</mark></p>`
}


function analisar() {
    let monthYear = new Array('Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro');
    let weekDay = new Array('Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado');
    let now = new Date();

    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    let week = now.getDay();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    
    const res = document.querySelector('section#vaiAqui');

    res.innerHTML = `<p>Dia: <mark>${day}</mark></p>`;
    res.innerHTML += `<p>Mês: <mark>${monthYear[month]}</mark></p>`;
    res.innerHTML += `<p>Ano: <mark>${year}</mark></p>`;
    res.innerHTML += `<p>Dia da semana: <mark>${weekDay[week]}</mark></p>`;
    res.innerHTML += `<p>Hora: <mark>${hour}</mark></p>`;
    res.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`;
    res.innerHTML += `<p>Segundos: <mark>${sec}</mark></p>`;
}

function clicou() {
    let month = prompt('Digite o mês em extenso (ex: Setembro)');
    let result = document.querySelector('#result');
    let estacao = '';
    switch (month) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estacao = 'INVERNO';
            break
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = 'PRIMAVERA';
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = 'VERÃO';
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'OUTONO';
            break 
        default:
            estacao = 'INDEFINIDA';       
    }
    result.innerHTML = `<p>No mês de <mark>${month.toUpperCase()}</mark>, estamos na estação <mark><strong>${estacao}</strong></mark>.</p>`;

}