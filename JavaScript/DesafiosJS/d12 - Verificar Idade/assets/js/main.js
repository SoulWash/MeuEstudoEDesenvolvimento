
function verificar() {
    let anoNasc = Number(document.querySelector('#ano').value);
    let sex = document.getElementsByName('sex');
    let res = document.querySelector('#idade-res');
    let photo = document.querySelector('#idade-img');
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNasc ;

    if (anoNasc == 0 || anoNasc > anoAtual) {
        window.alert('Verifique os dados e tente novamente!');
    } else {
        if (sex[0].checked) {
            if (idade >= 1 && idade < 12) {
                res.innerHTML = `<p>Detectamos um menino de ${idade} anos.</p>`
                photo.innerHTML = `<img src="./assets/imagem/menino.jpg" alt="Foto de um Garoto">`
                } else if (idade < 18) {
                    res.innerHTML = `<p>Detectamos um adolescente de ${idade} anos.</p>`
                    photo.innerHTML = `<img src="./assets/imagem/boy.jpg" alt="Foto de um adolescente">`
                } else if (idade < 60) {
                    res.innerHTML = `<p>Detectamos um adulto de ${idade} anos.</p>`
                    photo.innerHTML = `<img src="./assets/imagem/man.jpg" alt="Foto de um Homem adulto">`
                } else if (idade < 130){
                    res.innerHTML = `<p>Detectamos um idoso de ${idade} anos.</p>`
                    photo.innerHTML = `<img src="./assets/imagem/idoso.jpg" alt="Foto de um Idoso">`
                } else {
                    res.innerHTML = `<p>Detectamos um morto vivo de ${idade} anos.</p>`
                    photo.innerHTML = `<img src="./assets/imagem/morte.jpg" alt="Foto de um Morto vivo">`
                }
        } else if (sex[1].checked) {
            if (idade >= 1 && idade < 12) {
                res.innerHTML = `<p>Detectamos uma menina de ${idade} anos.</p>`
                photo.innerHTML = `<img src="./assets/imagem/menina.jpg" alt="Foto de uma Garota">`
                } else if (idade < 18) {
                    res.innerHTML = `<p>Detectamos uma adolescente de ${idade} anos.</p>`
                    photo.innerHTML = `<img src="./assets/imagem/girl.jpg" alt="Foto de uma adolescente">`
                } else if (idade < 60) {
                    res.innerHTML = `<p>Detectamos uma adulta de ${idade} anos.</p>`
                    photo.innerHTML = `<img src="./assets/imagem/woman.jpg" alt="Foto de uma Mulher adulto">`
                } else if (idade < 130) {
                    res.innerHTML = `<p>Detectamos uma idosa de ${idade} anos.</p>`
                    photo.innerHTML = `<img src="./assets/imagem/idosa.jpg" alt="Foto de uma Idosa">`
                } else {
                        res.innerHTML = `<p>Detectamos uma vampira de ${idade} anos.</p>`
                        photo.innerHTML = `<img src="./assets/imagem/vampira.jpg" alt="Foto de uma Vampira">`
                }
        }
    }
}

