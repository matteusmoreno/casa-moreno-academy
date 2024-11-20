function cadastrar() {

    const codigo = document.getElementById('codigo').value;
    const nome = document.getElementById('nome').value;
    const cargaHoraria = document.getElementById('carga-horaria').value;
    const nivel = document.getElementById('nivel').value;

    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
    <tr>
        <td class="text-center">${codigo}</td>
        <td class="text-center">${nome}</td>
        <td class="text-center">${cargaHoraria} Horas</td>
        <td class="text-center">${nivel}</td>
        <td class="text-center">
            <button class="btn btn-sm btn-warning">Editar</button>
            <button class="btn btn-sm btn-danger" onclick="excluirCurso(this)">Excluir</button>
        </td>
    </tr>
    `;

    const corpoTabela = document.getElementById("corpo-tabela");
    corpoTabela.appendChild(novaLinha);

    document.getElementById('codigo').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('carga-horaria').value = '';
    document.getElementById('nivel').value = '';
}   

function excluirCurso(botao) {
    const linha = botao.parentElement.parentElement;
    linha.remove();

}