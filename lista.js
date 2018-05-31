var botao = document.getElementById('botao-cadastrar');
var lista = document.getElementById('lista');

botao.addEventListener('click', () => {
    var lista = document.getElementById('lista');
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    
    var linha = document.createElement('tr');
    var nomeTd = document.createElement('td');
    var telefoneTd = document.createElement('td');
    
    nomeTd.textContent = nome;
    telefoneTd.textContent = telefone;
    linha.appendChild(nomeTd);
    linha.appendChild(telefoneTd);
    lista.appendChild(linha);
});

lista.addEventListener('click', (event) => {
    console.log(event.target.parentNode);
    var linha = confirm('Deseja excluir este contato?');
    if (linha)
        event.target.parentNode.remove();
});