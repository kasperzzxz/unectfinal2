const menuExcluir = document.getElementById('menu__tarefa');
const tarefaDescricao = document.getElementById('botaoDescTarefa');

menuExcluir.addEventListener('click', () => {
    let botaoEscondido = document.getElementById('tarefa-menu--desativa');
    botaoEscondido.classList.toggle('tarefa-menu--ativa');
})

tarefaDescricao.addEventListener('click', () => {
    let descEscondida = document.getElementById('tarefa-descricao--desativa');
    descEscondida.classList.toggle('tarefa-descricao--ativa');
})