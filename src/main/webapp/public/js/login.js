// Adicione um evento de clique ao botão "Entrar" para validação básica do formulário
const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const senhaInput = document.getElementById("senha");

emailInput.addEventListener("input", function () {
    const emailValue = emailInput.value;

    if (isValidEmail(emailValue)) {
        emailInput.classList.remove("error");
        emailError.textContent = ""; // Limpa a mensagem de erro
    } else {
        emailInput.classList.add("error");
        emailError.textContent = "Email inválido";
    }
});

// Função para verificar se o email é válido
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


// Adicione uma animação simples para o botão "Entrar" quando o mouse passar por cima
const btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("mouseover", function () {
    btnLogin.style.backgroundColor = "#FFA500";
});

btnLogin.addEventListener("mouseout", function () {
    btnLogin.style.backgroundColor = "orange";
});

function enviar(){
	document.forms["login-form"].submit()
}