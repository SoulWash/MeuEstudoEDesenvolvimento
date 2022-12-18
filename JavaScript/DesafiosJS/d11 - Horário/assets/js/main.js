
function carregar() {
    let res = document.querySelector('#hora-res');
    let photo = document.querySelector('#hora-img');
    
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    res.innerHTML = `<p>Agora são ${hour}:${min}:${sec}.</p>`;

    if (hour >= 0.01 && hour <= 11.59) {
        photo.innerHTML = `<img src="./assets/imagens/dia.jpg" alt="Foto do dia">`;
        document.body.style.backgroundColor = '#9AC8E0';
    } else if (hour >= 12 && hour <= 17.59) {
        photo.innerHTML = `<img src="./assets/imagens/tarde.jpg" alt="Foto da Tarde">`
        document.body.style.backgroundColor = '#D9B87F';
    } else {
        photo.innerHTML = `<img src="./assets/imagens/noite.jpg" alt="Foto da Noite">`
        document.body.style.backgroundColor = '#0C0B45';
    }

}




