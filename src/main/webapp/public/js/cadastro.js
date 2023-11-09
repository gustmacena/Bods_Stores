// Função para buscar o endereço com base no CEP
function buscarEndereco() {
    // Limpa mensagens de erro anteriores
    document.getElementById('mensagemErroCEP').textContent = '';

    // Captura o valor do campo CEP
    const cepInput = document.getElementById('cep');
    const cep = cepInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Verifica se o CEP possui 8 dígitos
    if (cep.length !== 8) {
        document.getElementById('mensagemErroCEP').textContent = 'CEP deve conter 8 dígitos';
        return;
    }

    // URL da API de consulta de CEP (substitua pela sua API se necessário)
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

    // Realiza a requisição GET à API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                document.getElementById('mensagemErroCEP').textContent = 'CEP não encontrado';
            } else {
                // Preenche os campos de rua, bairro e cidade com os dados retornados
                document.getElementById('rua').value = data.logradouro || data.logradouro_res || '';
                document.getElementById('bairro').value = data.bairro || '';
                document.getElementById('cidade').value = data.localidade || '';
                
                // Remove o evento onclick do botão "Buscar Endereço"
                const botaoBuscarEndereco = document.querySelector('button[type="button"]');
                botaoBuscarEndereco.removeAttribute('onclick');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
        });
}


// Manipular o envio do formulário usando JavaScript
const form = document.getElementById('cadastro-form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar o envio padrão do formulário

    // Implemente aqui a lógica para enviar os dados do formulário para o servidor usando uma solicitação AJAX ou fetch() em JavaScript.
    // Você pode usar bibliotecas como Axios ou o objeto fetch() nativo do JavaScript para fazer isso.
});

// Função de validação de CPF
function validarCPF(cpf) {
    // Remove caracteres não numéricos do CPF
    cpf = cpf.replace(/\D/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais, o que não é permitido
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;

    // Verifica o primeiro dígito verificador
    if (parseInt(cpf.charAt(9)) !== digitoVerificador1) {
        return false;
    }

    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;

    // Verifica o segundo dígito verificador
    if (parseInt(cpf.charAt(10)) !== digitoVerificador2) {
        return false;
    }

    // Se passou por todas as verificações, o CPF é válido
    return true;
}


// Captura o formulário e o campo de mensagem de erro
const formCadastro = document.getElementById('cadastro-form');
const mensagemErroCPF = document.getElementById('mensagemErroCPF');

// Adiciona um ouvinte de evento ao formulário para lidar com o envio
formCadastro.addEventListener('submit', function (e) {
    // Captura o valor do campo de CPF
    const cpfInput = document.getElementById('cpf');
    const cpf = cpfInput.value;

    // Chama a função de validação
    if (!validarCPF(cpf)) {
        // Exibe a mensagem de erro se o CPF for inválido
        mensagemErroCPF.textContent = 'CPF inválido';
        e.preventDefault(); // Impede o envio do formulário se o CPF for inválido
    } else {
        // Limpa a mensagem de erro se o CPF for válido
        mensagemErroCPF.textContent = '';
    }
});
function enviar(){
	document.forms["cadastro-form"].submit()
}
