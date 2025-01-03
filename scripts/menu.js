function mostrarMensagem(evt, item) {
    let index, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (index = 0; index < tabcontent.length; index++) {
        tabcontent[index].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablinks');
    for (index = 0; index < tablinks.length; index++) {
        tablinks[index].className = tablinks[index].className.replace(' active', '');
    }

    document.getElementById(item).style.display = 'block';
    evt.currentTarget.className += ' active';
}

// Função para ocultar todas as abas ao carregar a página
function ocultarTodasAsAbas() {
    let tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    document.getElementById('welcome').style.display = 'block';
}

// Chamar a função para ocultar todas as abas quando a página carregar
window.onload = ocultarTodasAsAbas;