function envia() {
    let nome = document.getElementById('NomeUsuario')
    let idade = document.getElementById('IdadeUsuario')
    let pais = document.getElementById('PaisOrigem')
    let cidade = document.getElementById('CidadeOrigem')
    let telefone = document.getElementById('Telefone')
    let mail = document.getElementById('Email')
    let form = document.getElementById('formulario')
    let saida = document.getElementById('sel')

    if (idade.value < 18) {
        alert('Você não tem idade suficiente!')
    }

    if (nome.value == 0 || idade.value == 0 || pais.value == 0 || cidade.value == 0 || telefone.value == 0 || mail.value == 0) {
        alert('Preencha todos os dados!')
    } else {
        form.innerHTML = ``
        form.innerHTML = 'Dados enviados com sucesso!'
        form.innerHTML += ' Você pode vê-los abaixo'

        saida.innerHTML = ''
        saida.innerHTML += `<p>O nome informado foi: ${nome.value}</p>`
        saida.innerHTML += `<p>A idade informada foi: ${idade.value} anos</p>`
        saida.innerHTML += `<p>O país informado foi: ${pais.value}</p>`
        saida.innerHTML += `<p>A cidade informada foi: ${cidade.value}</p>`
        saida.innerHTML += `<p>O telefone/celular informado foi: ${telefone.value}</p>`
        saida.innerHTML += `<p>O E-mail informado foi: ${mail.value}</p>`
    }
}