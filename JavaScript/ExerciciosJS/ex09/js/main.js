
function clicou() {
    let veloc = Number(document.querySelector('#velocidade').value);
    let vel = document.querySelector('#vel');
    vel.innerHTML = `<p>Sua velociade é de ${veloc}Km/h.</p>`
        if (veloc <= 80) {
            vel.innerHTML += `<p><strong id="ok">Pede passar!</strong></p>`
        } else {
            vel.innerHTML += `<p><strong id="multado">Você foi multado!</strong> Diminua sua velociadade.</p>`
        }
}