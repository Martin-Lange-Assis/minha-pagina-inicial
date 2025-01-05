function trocaCor() {
    const notas = [
        { id: 'nota1', valor: 9.2 },
        { id: 'nota2', valor: 9.5 },
        { id: 'nota3', valor: 6.2 },
        { id: 'nota4', valor: 6.6 },
        { id: 'nota5', valor: 9.4 },
        { id: 'nota6', valor: 8.2 },
        { id: 'nota7', valor: 6.8 }
    ];

    notas.forEach(nota => {
        let cor;
        if (nota.valor >= 0 && nota.valor <= 5.0) {
            cor = getComputedStyle(document.documentElement).getPropertyValue('--veryBadOvr');
        } else if (nota.valor >= 5.1 && nota.valor <= 6.0) {
            cor = getComputedStyle(document.documentElement).getPropertyValue('--badOvr');
        } else if (nota.valor >= 6.1 && nota.valor <= 7.0) {
            cor = getComputedStyle(document.documentElement).getPropertyValue('--mediumOvr');
        } else if (nota.valor >= 7.1 && nota.valor <= 8.0) {
            cor = getComputedStyle(document.documentElement).getPropertyValue('--goodOvr');
        } else {
            cor = getComputedStyle(document.documentElement).getPropertyValue('--veryGoodOvr');
        }
        document.getElementById(nota.id).style.color = cor;
    });
}

// Chame a função para aplicar as cores
trocaCor();
