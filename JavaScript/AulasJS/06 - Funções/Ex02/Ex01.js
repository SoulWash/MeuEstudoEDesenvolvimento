

const plano = (dia) => {
    return dia
}

plano(
        Segunda = {
        Trabalhar: 'CallCenter',
        Estudar: ['JavaScript','Lógica de Programação'],
        Plataforma: ['RocketSeat', 'Curso Em video'],
        TempoMin: 2
        },
        Terça = {
            Trabalhar: 'CallCenter',
            Estudar: ['JavaScript','Lógica de Programação'],
            Plataforma: ['RocketSeat', 'Curso Em video'],
            TempoMin: 2
        }
    )

    console.log(`Nessa Segunda irei estudar ${Segunda.Estudar[0]}, pelo site do ${Segunda.Plataforma[0]}, no mínino de ${Segunda.TempoMin} horas de estudo.`)