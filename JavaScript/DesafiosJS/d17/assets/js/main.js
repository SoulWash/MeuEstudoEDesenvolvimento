


function iniciar() {
    let num = Number(document.querySelector('#num').value);
    let res = document.querySelector('#res');

    if (num == 0) {
        alert('Digite um número!');
    } else {
        res.innerHTML = '';
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option');
            item.text = `${num} X ${i} = ${num * i}`;
            res.value = `res${i}`;
            res.appendChild(item);
        }
    }

}